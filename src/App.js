import "./App.css";
import About from "./components/About";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Reasons from "./components/Reasons";
import Services from "./components/Services";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Reasons />
      <About />
      <Services />
    </>
  );
}

export default App;
