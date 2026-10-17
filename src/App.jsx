import { Routes, Route } from "react-router-dom";

import "./styles/tokens.css";
import "./styles/base.css";
import "./styles/utilities.css";

import Navbar from "./components/layout/Navbar";
import { ScrollProgressBar, BackToTop } from "./components/layout/ScrollWidgets";
import ScrollToTop from "./components/layout/ScrollToTop";
import Seo from "./components/layout/Seo";
import Footer from "./components/layout/Footer";
import ContactSection from "./components/shared/ContactSection";

import Home from "./pages/Home";
import RolePage from "./pages/RolePage";
import Projects from "./pages/Projects";
import CaseStudy from "./pages/CaseStudy";
import About from "./pages/About";
import Books from "./pages/Books";
import BookDetail from "./pages/BookDetail";
import Dedline from "./pages/Dedline";
import Ideas from "./pages/Ideas";
import NotFound from "./pages/NotFound";
import { ROLES } from "./data/roles";

export default function App() {
  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <span id="top" />
      <Seo />
      <ScrollProgressBar />
      <ScrollToTop />
      <Navbar />

      <main id="main" tabIndex={-1}>
        <Routes>
          <Route path="/" element={<Home />} />
          {ROLES.map((r) => (
            <Route key={r.id} path={r.path} element={<RolePage roleId={r.id} />} />
          ))}
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:slug" element={<CaseStudy />} />
          <Route path="/about" element={<About />} />

          {/* Writing & product pages from the previous site — kept, out of the main nav */}
          <Route path="/books" element={<Books />} />
          <Route path="/books/:slug" element={<BookDetail />} />
          <Route path="/dedline" element={<Dedline />} />
          <Route path="/ideas" element={<Ideas />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <ContactSection />
      <Footer />
      <BackToTop />
    </>
  );
}
