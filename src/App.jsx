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

function App() {

  // useref for gsap observer
  // const mainObserver = useRef(null);
  const [isFormOpen, setIsFormOpen] = useState(false);

  const mainObserver = useRef(null);
  
  useEffect(() => {
    // if (!isFormOpen) {
    //   mainObserver.current = gsapInit(isFormOpen);
    // } else if (isFormOpen) mainObserver.current.kill();
    // console.log("isFormOpen : ", isFormOpen);

    mainObserver.current = gsapInit(isFormOpen);
  }, []);
  
  // useEffect(() => {
  //   const mainObserver = Observer.getById("mainObserver");
  //   if (mainObserver === null) return;

  //   if (isFormOpen){
  //     mainObserver.disable()
  //   } else if (!isFormOpen){
  //     mainObserver.enable()
  //   }

  //   console.log("observer : ", mainObserver);
  // }, [isFormOpen]);

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
