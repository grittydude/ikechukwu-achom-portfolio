import "./styles/tokens.css";
import "./styles/base.css";
import "./styles/utilities.css";

import Loader from "./components/sections/Loader";
import Navbar from "./components/layout/Navbar";
import { ScrollProgressBar, BackToTop } from "./components/layout/ScrollWidgets";
import Hero from "./components/sections/Hero";
import StatsBar from "./components/sections/StatsBar";
import About from "./components/sections/About";
import TechStack from "./components/sections/TechStack";
import Projects from "./components/sections/Projects";
import Experience from "./components/sections/Experience";
import Testimonials from "./components/sections/Testimonials";
import Contact from "./components/sections/Contact";
import Footer from "./components/layout/Footer";

export default function App() {
  return (
    <>
      <Loader />
      <ScrollProgressBar />
      <Navbar />

      <main>
        <Hero />
        <StatsBar />
        <About />
        <TechStack />
        <Projects />
        <Experience />
        {/* <Testimonials /> */}
        <Contact />
      </main>

      <Footer />
      <BackToTop />
    </>
  );
}
