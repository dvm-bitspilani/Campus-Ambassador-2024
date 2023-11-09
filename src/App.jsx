import "./App.css";

import { useEffect, useState } from "react";

import Navbar from "./components/Navbar";
import Home from "./sections/Home";
import About from "./sections/About";
import Perks from "./sections/Perks";
import Testimonials from "./sections/Testimonials";
import Responsibility from "./sections/Responsibility";
import Contact from "./sections/Contact";

import gsapInit from "./helpers/gsapTransitions";

function App() {

  // useref for gsap observer
  // const mainObserver = useRef(null);
  const [isFormOpen, setIsFormOpen] = useState(false);
  
  useEffect(() => {
    gsapInit();
  }, []);

  return (
    <>
      <Navbar />
      <Home isFormOpen={isFormOpen} setIsFormOpen={setIsFormOpen}/>
      <About />
      <Perks />
      <Responsibility />
      {/* <Testimonials /> */}
      <Contact />
    </>
  );
}

export default App;
