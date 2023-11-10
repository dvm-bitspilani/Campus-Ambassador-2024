import "./App.css";

import { useEffect, useState, useRef } from "react";

import Navbar from "./components/Navbar";
import Home from "./sections/Home";
import About from "./sections/About";
import Perks from "./sections/Perks";
import Testimonials from "./sections/Testimonials";
import Responsibility from "./sections/Responsibility";
import Contact from "./sections/Contact";

import gsapInit from "./helpers/gsapTransitions";

import {motion} from "framer-motion";

function App() {

  // useref for gsap observer
  const mainObserver = useRef(null);
  const [isFormOpen, setIsFormOpen] = useState(false);

  useEffect(() => {
    mainObserver.current = gsapInit();

    return () => {
      mainObserver.current.kill();
    };
  }, []);

  return (
    <motion.div 
      initial={{opacity: 0, y: 100}}
      animate={{opacity: 1, y: 0}}
      exit={{opacity: 0, y: -100}}
      transition={{duration: 1, ease: "easeInOut", delay: 0}}
    >
      <Navbar />
      <Home isFormOpen={isFormOpen} setIsFormOpen={setIsFormOpen}/>
      <About />
      <Perks />
      <Responsibility />
      <Testimonials />
      <Contact />
    </motion.div>
  );
}

export default App;
