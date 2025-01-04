import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Tools from "./components/Tools/Tools";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Project from "./components/Project/Project";

function App() {
  return (
    <>
      <div>
        <Header />
        <Hero />
        <Project />
        <About />
        <Tools />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
