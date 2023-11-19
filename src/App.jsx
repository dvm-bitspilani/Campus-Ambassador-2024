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

import { motion } from "framer-motion";
import FAQs from "./sections/FAQs";
import MobilePerks from "./sections/MobilePerks";

import ReactGa from "react-ga4";

function App() {
  ReactGa.initialize("G-4J7ZQFX5E8");
  // useref for gsap observer
  const mainObserver = useRef(null);
  const [isFormOpen, setIsFormOpen] = useState(false);

  useEffect(() => {
    mainObserver.current = gsapInit(isFormOpen);

    return () => {
      if (mainObserver.current !== null) {
        mainObserver.current.kill();
      }
    };
  }, [isFormOpen]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -100 }}
      transition={{ duration: 1, ease: "easeInOut", delay: 0 }}
    >
      <Navbar />
      <Home isFormOpen={isFormOpen} setIsFormOpen={setIsFormOpen} />
      <About />
      {typeof window !== "undefined" ? (
        window.innerWidth > 1100 ? (
          <Perks />
        ) : (
          <MobilePerks section="perks" />
        )
      ) : null}
      {typeof window !== "undefined" ? (
        window.innerWidth > 1100 ? (
          <Responsibility />
        ) : (
          <MobilePerks section="responsibility" />
        )
      ) : null}
      <Testimonials />
      <FAQs />
      <Contact />
    </motion.div>
  );
}

export default App;
