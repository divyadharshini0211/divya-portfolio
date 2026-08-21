import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Certificates from "./components/Certificates";
import Contact from "./components/Contact";

function App() {
  return (
    <div>
      {/* Navigation Bar */}
      <Navbar />

      {/* Portfolio Sections */}
      <main>
        <Home />
        <About />
        <Education />
        <Skills />
        <Projects />
        <Certificates />
        <Contact />
      </main>
    </div>
  );
}

export default App;