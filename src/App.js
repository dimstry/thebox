import "./App.css";
import About from "./components/About";
import Ads from "./components/Ads";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Reasons from "./components/Reasons";
import Services from "./components/Services";
import Stat from "./components/Stat";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Reasons />
      <About />
      <Services />
      <Stat />
      <Ads />
      <Contact />
    </>
  );
}

export default App;
