import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./sections/Home";
import About from "./sections/About";
import Perks from "./sections/Perks";
import Testimonials from "./sections/Testimonials";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Perks />
      {/* <Testimonials /> */}
    </>
  );
}

export default App;
