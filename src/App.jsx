import "./App.css";

import { useEffect } from "react";

import Navbar from "./components/Navbar";
import Home from "./sections/Home";
import About from "./sections/About";
import Perks from "./sections/Perks";
// import Testimonials from "./sections/Testimonials";
import Responsibility from "./sections/Responsibility";
import Contact from "./sections/Contact";

import gsapInit from "./helpers/gsapTransitions";

function App() {

  useEffect(() => {
    gsapInit();
  }, []);

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
