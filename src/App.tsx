import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Home } from "./pages/Home";
import { Courses } from "./pages/Courses";
import { Profile } from "./pages/Profile";
import { Playground } from "./pages/Playground";
import { Community } from "./pages/Community";
import { Register } from "./pages/Register";
import { Resources } from "./pages/Resources";

// Import global styles
import "./styles/global.css";

function App() {  
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/playground" element={<Playground />} />
            <Route path="/community" element={<Community />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/register" element={<Register/>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
