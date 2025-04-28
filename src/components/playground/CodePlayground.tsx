import { useState, useRef } from 'react';
import { Play, Download, Copy, Save, Layout, Code, Monitor, RefreshCw, Bug, Zap, Terminal } from 'lucide-react';
import Editor from '@monaco-editor/react';

// Replace with your actual Gemini API key
const GEMINI_API_KEY = 'AIzaSyB6Wm7XS8PZ6JDy7tPhS9p_9CV-6dAo7qA';

export default function CodePlayground() {
  const [pythonCode, setPythonCode] = useState('# Python code\nprint("Hello World!")');
  const [cCode, setCCode] = useState('// C code\n#include <stdio.h>\n\nint main() {\n    printf("Hello World!\\n");\n    return 0;\n}');
  const [javaCode, setJavaCode] = useState('// Java code\npublic class Main {\n    public static void main(String[] args) {\n        System.out.println("Hello World!");\n    }\n}');
  
  const [activeTab, setActiveTab] = useState('python');
  const [output, setOutput] = useState('');
  const [layout, setLayout] = useState('split');
  const [theme, setTheme] = useState('vs-dark');
  const [autoRun, setAutoRun] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  
  // New state for handling user input
  const [userInput, setUserInput] = useState('');
  const [showInputPanel, setShowInputPanel] = useState(false);
  
  const editorRef = useRef(null);
  
  const handleEditorDidMount = (editor: any) => {
    editorRef.current = editor;
  };

  const getEditorLanguage = () => {
    switch (activeTab) {
      case 'python': return 'python';
      case 'c': return 'c';
      case 'java': return 'java';
      default: return 'python';
    }
  };

  const getEditorValue = () => {
    switch (activeTab) {
      case 'python': return pythonCode;
      case 'c': return cCode;
      case 'java': return javaCode;
      default: return pythonCode;
    }
  };

  const handleEditorChange = (value: string | undefined) => {
    if (value === undefined) return;
    
    switch (activeTab) {
      case 'python':
        setPythonCode(value);
        break;
      case 'c':
        setCCode(value);
        break;
      case 'java':
        setJavaCode(value);
        break;
    }
    
    if (autoRun) {
      runCode();
    }
  };

  const callGeminiAPI = async (prompt: string, outputMode: 'run' | 'debug' | 'optimize' | 'analyze') => {
    if (!GEMINI_API_KEY) {
      setOutput('Error: Gemini API key is missing. Please set the GEMINI_API_KEY in the code.');
      return null;
    }

    setIsLoading(true);
    try {
      const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${GEMINI_API_KEY}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contents: [{
            role: "user",
            parts: [{
              text: prompt
            }]
          }]
        })
      });

      const data = await response.json();
      
      if (!response.ok) {
        if (data.error) {
          throw new Error(`Gemini API error: ${data.error.message}`);
        }
        throw new Error(`API request failed with status ${response.status}`);
      }

      if (!data.candidates || !data.candidates[0].content.parts[0].text) {
        throw new Error('Unexpected response format from Gemini API');
      }
      
      // Process the response based on output mode
      const fullResponse = data.candidates[0].content.parts[0].text;
      let processedResponse = '';
      
      if (outputMode === 'run') {
        // Extract only the output section
        const outputSection = extractSection(fullResponse, 'EXPECTED OUTPUT');
        processedResponse = outputSection || "No output was generated.";
        
        // If user input was provided, add the input handling section
        if (userInput) {
          const inputSection = extractSection(fullResponse, 'INPUT HANDLING');
          if (inputSection) {
            processedResponse = `=== INPUT ===\n${userInput}\n\n=== OUTPUT ===\n${processedResponse}`;
          }
        }
      } else if (outputMode === 'debug') {
        // Extract debugging report and fixed code
        const debuggingReport = extractSection(fullResponse, 'DEBUGGING REPORT');
        const fixedCode = extractSection(fullResponse, 'FIXED CODE');
        processedResponse = `${debuggingReport || ''}\n\n${fixedCode || ''}`;
      } else if (outputMode === 'optimize') {
        // Extract optimization analysis and optimized code
        const optimizationAnalysis = extractSection(fullResponse, 'OPTIMIZATION ANALYSIS');
        const optimizedCode = extractSection(fullResponse, 'OPTIMIZED CODE');
        processedResponse = `${optimizationAnalysis || ''}\n\n${optimizedCode || ''}`;
      } else if (outputMode === 'analyze') {
        // For full analysis, keep only the analysis parts
        processedResponse = fullResponse;
      }
      
      return processedResponse || fullResponse; // Fallback to full response if extraction failed
      
    } catch (error) {
      let errorMessage = 'An unknown error occurred';
      if (error instanceof Error) {
        errorMessage = error.message;
        
        if (errorMessage.includes('API key not valid')) {
          errorMessage = 'Invalid Gemini API key. Please check your API key.';
        } else if (errorMessage.includes('content policy')) {
          errorMessage = 'Content violation: The request was blocked for safety reasons.';
        }
      }
      
      setOutput(`Error: ${errorMessage}\n\nPlease try again with different code or check your API key.`);
      return null;
    } finally {
      setIsLoading(false);
    }
  };
  
  // Helper function to extract sections from API response
  const extractSection = (text: string, sectionName: string): string | null => {
    const regex = new RegExp(`===\\s*${sectionName}\\s*===\\s*([\\s\\S]*?)(?:===\\s*|$)`, 'i');
    const match = text.match(regex);
    return match ? match[1].trim() : null;
  };

  const runCode = async () => {
    const code = getEditorValue();
    const language = getEditorLanguage();
    
    // Check if code appears to require input
    const requiresInput = detectInputRequirement(code, language);
    
    if (requiresInput && !userInput && !showInputPanel) {
      setShowInputPanel(true);
      setOutput("This code appears to require user input. Please provide input in the input panel below, then run the code again.");
      return;
    }
    
    const prompt = `You are a ${language} code analyzer and executor. Please:
1. Check if this code is syntactically correct
2. If correct, run this code ${userInput ? `with the following input: "${userInput}"` : 'without any input'}
3. Show the expected output
4. If incorrect, explain the errors and how to fix them
5. Provide a corrected version if there are errors

Code:
\`\`\`${language}
${code}
\`\`\`

Format your response like this:
=== CODE ANALYSIS ===
[Brief assessment of code correctness]

=== EXPECTED OUTPUT ===
[Output if correct or error messages if incorrect]

=== INPUT HANDLING ===
[If the code requires input, explain how the input was processed]

=== SUGGESTED FIXES ===
[If errors exist, provide specific fixes]`;
    
    const result = await callGeminiAPI(prompt, 'run');
    if (result) {
      setOutput(result);
    }
  };

  // Function to detect if code likely requires input
  const detectInputRequirement = (code: string, language: string): boolean => {
    if (language === 'python') {
      return code.includes('input(') || code.includes('raw_input(');
    } else if (language === 'c') {
      return code.includes('scanf') || code.includes('gets') || code.includes('fgets');
    } else if (language === 'java') {
      return code.includes('Scanner') || code.includes('readLine') || code.includes('System.in');
    }
    return false;
  };

  const debugCode = async () => {
    const code = getEditorValue();
    const language = getEditorLanguage();
    
    const prompt = `Debug the following ${language} code. Perform these tasks:
1. Identify all syntax errors, runtime errors, and logical errors
2. Explain each error in detail
3. Provide fixed code with explanations
4. Suggest best practices to avoid similar errors
${userInput ? `5. Consider how the code handles this input: "${userInput}"` : ''}

Code:
\`\`\`${language}
${code}
\`\`\`

Format your response like this:
=== DEBUGGING REPORT ===
[Detailed error analysis]

=== FIXED CODE ===
\`\`\`${language}
[Corrected code]
\`\`\`

=== EXPLANATION ===
[Explanation of fixes]

=== BEST PRACTICES ===
[Suggestions for better coding practices]`;
    
    const result = await callGeminiAPI(prompt, 'debug');
    if (result) {
      setOutput(result);
    }
  };

  const optimizeCode = async () => {
    const code = getEditorValue();
    const language = getEditorLanguage();
    
    const prompt = `Optimize the following ${language} code. Provide:
1. An optimized version of the code
2. Detailed explanation of optimizations made
3. Performance comparison (time/space complexity)
4. Alternative approaches if applicable
${userInput ? `5. Ensure the optimized code works correctly with this input: "${userInput}"` : ''}

Code:
\`\`\`${language}
${code}
\`\`\`

Format your response like this:
=== OPTIMIZATION ANALYSIS ===
[Explanation of current code's inefficiencies]

=== OPTIMIZED CODE ===
\`\`\`${language}
[Improved version of the code]
\`\`\`

=== PERFORMANCE GAINS ===
[Comparison of before/after performance]

=== ALTERNATIVE APPROACHES ===
[Other possible optimization strategies]`;
    
    const result = await callGeminiAPI(prompt, 'optimize');
    if (result) {
      setOutput(result);
    }
  };

  const fullAnalysis = async () => {
    const code = getEditorValue();
    const language = getEditorLanguage();
    
    const prompt = `Comprehensively analyze the following ${language} code. Provide:
1. Code correctness assessment
2. Detailed execution flow
3. Potential edge cases
4. Security vulnerabilities
5. Optimization opportunities
6. Best practices review
${userInput ? `7. Analysis of how the code handles this input: "${userInput}"` : ''}

Code:
\`\`\`${language}
${code}
\`\`\`

Format your response like this:
=== CODE CORRECTNESS ===
[Assessment of code correctness]

=== EXECUTION FLOW ===
[Step-by-step execution analysis]

=== EDGE CASES ===
[Potential edge cases and handling]

=== SECURITY ===
[Security vulnerabilities and fixes]

=== OPTIMIZATIONS ===
[Performance optimization suggestions]

=== BEST PRACTICES ===
[Recommended coding best practices]`;
    
    const result = await callGeminiAPI(prompt, 'analyze');
    if (result) {
      setOutput(result);
    }
  };

  const copyCode = () => {
    let codeToCopy;
    switch (activeTab) {
      case 'python': codeToCopy = pythonCode; break;
      case 'c': codeToCopy = cCode; break;
      case 'java': codeToCopy = javaCode; break;
      default: codeToCopy = pythonCode;
    }
    navigator.clipboard.writeText(codeToCopy);
  };

  const downloadCode = () => {
    let codeToCopy;
    let extension;
    
    switch (activeTab) {
      case 'python': 
        codeToCopy = pythonCode; 
        extension = 'py';
        break;
      case 'c': 
        codeToCopy = cCode; 
        extension = 'c';
        break;
      case 'java': 
        codeToCopy = javaCode; 
        extension = 'java';
        break;
      default: 
        codeToCopy = pythonCode;
        extension = 'py';
    }
    
    const element = document.createElement('a');
    const file = new Blob([codeToCopy], {type: 'text/plain'});
    element.href = URL.createObjectURL(file);
    element.download = `code.${extension}`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  const downloadFullProject = () => {
    alert('Download project functionality would create a ZIP with Python, C, and Java files');
  };

  // Toggle input panel visibility
  const toggleInputPanel = () => {
    setShowInputPanel(!showInputPanel);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Header */}
        <div className="bg-gray-100 px-4 py-3 flex justify-between items-center border-b">
          <div className="flex items-center space-x-4">
            <h2 className="text-lg font-semibold text-gray-800">AI Code Playground (Gemini Powered)</h2>
            <select
              value={theme}
              onChange={(e) => setTheme(e.target.value)}
              className="bg-white text-black text-sm border rounded px-2 py-1"
            >
              <option value="vs-dark">Dark</option>
              <option value="light">Light</option>
            </select>
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="autoRun"
                checked={autoRun}
                onChange={() => setAutoRun(!autoRun)}
                className="mr-1"
              />
              <label htmlFor="autoRun" className="text-sm text-gray-700">Auto-run</label>
              <button 
                onClick={downloadFullProject}
                className="bg-gray-600 hover:bg-gray-700 text-white px-2 py-1 rounded text-sm"
                title="Download Full Project"
              >
                <Save size={14} />
              </button>
            </div>
          </div>
          
          <div className="flex items-center space-x-2">
            <button 
              onClick={() => setLayout('split')}
              className={`p-1 rounded ${layout === 'split' ? 'bg-indigo-100 text-indigo-600' : 'text-gray-600 hover:bg-gray-200'}`}
              title="Split View"
            >
              <Layout size={18} />
            </button>
            <button 
              onClick={() => setLayout('editor')}
              className={`p-1 rounded ${layout === 'editor' ? 'bg-indigo-100 text-indigo-600' : 'text-gray-600 hover:bg-gray-200'}`}
              title="Editor Only"
            >
              <Code size={18} />
            </button>
            <button 
              onClick={() => setLayout('preview')}
              className={`p-1 rounded ${layout === 'preview' ? 'bg-indigo-100 text-indigo-600' : 'text-gray-600 hover:bg-gray-200'}`}
              title="Output Only"
            >
              <Monitor size={18} />
            </button>
            <button 
              onClick={toggleInputPanel}
              className={`p-1 rounded ${showInputPanel ? 'bg-indigo-100 text-indigo-600' : 'text-gray-600 hover:bg-gray-200'}`}
              title="Toggle Input Panel"
            >
              <Terminal size={18} />
            </button>
          </div>
        </div>

        {/* Main content */}
        <div className={`flex ${layout === 'split' ? 'flex-col md:flex-row' : 'flex-col'}`}>
          {/* Editor */}
          {(layout === 'editor' || layout === 'split') && (
            <div className={`${layout === 'split' ? 'md:w-1/2' : 'w-full'} border-r flex flex-col`}>
              {/* Editor tabs */}
              <div className="bg-gray-200 text-sm font-medium text-center text-gray-500 border-b border-gray-200">
                <ul className="flex flex-wrap -mb-px">
                  <li className="mr-2">
                    <button
                      className={`inline-block p-4 border-b-2 rounded-t-lg ${
                        activeTab === 'python' 
                          ? 'text-indigo-600 border-indigo-600 active' 
                          : 'border-transparent hover:text-gray-600 hover:border-gray-300'
                      }`}
                      onClick={() => setActiveTab('python')}
                    >
                      Python
                    </button>
                  </li>
                  <li className="mr-2">
                    <button
                      className={`inline-block p-4 border-b-2 rounded-t-lg ${
                        activeTab === 'c' 
                          ? 'text-indigo-600 border-indigo-600 active' 
                          : 'border-transparent hover:text-gray-600 hover:border-gray-300'
                      }`}
                      onClick={() => setActiveTab('c')}
                    >
                      C
                    </button>
                  </li>
                  <li className="mr-2">
                    <button
                      className={`inline-block p-4 border-b-2 rounded-t-lg ${
                        activeTab === 'java' 
                          ? 'text-indigo-600 border-indigo-600 active' 
                          : 'border-transparent hover:text-gray-600 hover:border-gray-300'
                      }`}
                      onClick={() => setActiveTab('java')}
                    >
                      Java
                    </button>
                  </li>
                </ul>
              </div>
              
              {/* Editor toolbar */}
              <div className="bg-gray-800 text-white p-2 flex justify-between items-center">
                <span className="font-mono text-sm">{activeTab.toUpperCase()} Editor</span>
                <div className="flex space-x-2">
                  <button 
                    onClick={runCode}
                    disabled={isLoading}
                    className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded text-sm flex items-center space-x-1 disabled:opacity-50"
                  >
                    <Play size={14} />
                    <span>Run</span>
                  </button>
                  <button 
                    onClick={debugCode}
                    disabled={isLoading}
                    className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded text-sm flex items-center space-x-1 disabled:opacity-50"
                  >
                    <Bug size={14} />
                    <span>Debug</span>
                  </button>
                  <button 
                    onClick={optimizeCode}
                    disabled={isLoading}
                    className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded text-sm flex items-center space-x-1 disabled:opacity-50"
                  >
                    <Zap size={14} />
                    <span>Optimize</span>
                  </button>
                  <button 
                    onClick={fullAnalysis}
                    disabled={isLoading}
                    className="bg-purple-500 hover:bg-purple-600 text-white px-3 py-1 rounded text-sm flex items-center space-x-1 disabled:opacity-50"
                  >
                    <span>Full Analysis</span>
                  </button>
                  <button 
                    onClick={copyCode}
                    className="bg-gray-600 hover:bg-gray-700 text-white px-2 py-1 rounded text-sm"
                    title="Copy Code"
                  >
                    <Copy size={14} />
                  </button>
                  <button 
                    onClick={downloadCode}
                    className="bg-gray-600 hover:bg-gray-700 text-white px-2 py-1 rounded text-sm"
                    title="Download File"
                  >
                    <Download size={14} />
                  </button>
                </div>
              </div>
              
              {/* Code editor */}
              <div className="h-96 flex-grow">
                <Editor
                  height="100%"
                  width="100%"
                  language={getEditorLanguage()}
                  theme={theme}
                  value={getEditorValue()}
                  onChange={handleEditorChange}
                  onMount={handleEditorDidMount}
                  options={{
                    minimap: { enabled: false },
                    fontSize: 14,
                    wordWrap: 'on',
                    automaticLayout: true,
                  }}
                />
              </div>
            </div>
          )}

          {/* Output */}
          {(layout === 'preview' || layout === 'split') && (
            <div className={`${layout === 'split' ? 'md:w-1/2' : 'w-full'} flex flex-col`}>
              {/* Output header */}
              <div className="bg-gray-100 p-2 flex justify-between items-center">
                <span className="font-mono text-sm text-gray-700">
                  {isLoading ? 'Analyzing your code...' : 'Output'}
                </span>
                <div className="flex space-x-2">
                  <button 
                    onClick={runCode}
                    disabled={isLoading}
                    className="bg-gray-200 hover:bg-gray-300 text-gray-700 p-1 rounded text-sm disabled:opacity-50"
                    title="Run Code"
                  >
                    <RefreshCw size={14} />
                  </button>
                </div>
              </div>
              
              {/* Output content */}
              <div className="flex-grow p-4 overflow-auto bg-gray-900 text-gray-100 font-mono text-sm whitespace-pre-wrap">
                {isLoading ? (
                  <div className="flex items-center justify-center h-full">
                    <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-indigo-500"></div>
                    <span className="ml-2">Analyzing The Code</span>
                  </div>
                ) : (
                  output || '// The AI analysis output will appear here\n// Use the buttons above to run, debug, optimize, or fully analyze your code'
                )}
              </div>
              
              {/* Input panel */}
              {showInputPanel && (
                <div className="border-t border-gray-600 bg-gray-800 p-2">
                  <div className="mb-2">
                    <label htmlFor="userInput" className="block text-gray-300 text-sm font-bold mb-1">
                      Program Input:
                    </label>
                    <textarea
                      id="userInput"
                      value={userInput}
                      onChange={(e) => setUserInput(e.target.value)}
                      placeholder="Enter input values (one per line for multiple inputs)"
                      className="w-full bg-gray-700 text-white p-2 rounded font-mono text-sm"
                      rows={3}
                    />
                  </div>
                  <div className="flex justify-end">
                    <button
                      onClick={runCode}
                      disabled={isLoading}
                      className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded text-sm flex items-center space-x-1 disabled:opacity-50"
                    >
                      <Play size={14} />
                      <span>Run with Input</span>
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}