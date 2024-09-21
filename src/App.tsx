import "./App.css";
import Features from "./components/Features";
import Hero from "./components/Hero";
import { FloatingNavDemo } from "./components/Navbar";
import { BrowserRouter as Router } from "react-router-dom"; // Import BrowserRouter

function App() {
  return (
    <Router> {/* Wrap your application in Router */}
      <div>
        <FloatingNavDemo />
        <Hero />
        <Features />
      </div>
    </Router>
  );
}

export default App;
