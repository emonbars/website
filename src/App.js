import Intro from "./components/Intro/intro";
import Works from "./components/Works/works";
import Navbar from "./components/NavBar/navbar";
import Skills from "./components/Skills/skills";
import Footer from "./components/Footer/footer";
import Contact from "./components/Contact/contact";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Skills />
      <Works />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
