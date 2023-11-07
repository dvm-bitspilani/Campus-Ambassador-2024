import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./sections/Home";
import About from "./sections/About";
import Perks from "./sections/Perks";
import Testimonials from "./sections/Testimonials";
import Responsibility from "./sections/Responsibility";
import Contact from "./sections/Contact";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Perks />
      {/* <Testimonials /> */}
      <Responsibility />
      <Contact />
    </>
  );
}

export default App;
