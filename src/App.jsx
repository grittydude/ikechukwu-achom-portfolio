import { Routes, Route } from "react-router-dom";

import "./styles/tokens.css";
import "./styles/base.css";
import "./styles/utilities.css";

import Loader from "./components/sections/Loader";
import Navbar from "./components/layout/Navbar";
import { ScrollProgressBar, BackToTop } from "./components/layout/ScrollWidgets";
import ScrollToTop from "./components/layout/ScrollToTop";
import Footer from "./components/layout/Footer";

import Home from "./pages/Home";
import Books from "./pages/Books";
import BookDetail from "./pages/BookDetail";
import Dedline from "./pages/Dedline";
import Ideas from "./pages/Ideas";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <>
      <Loader />
      <ScrollProgressBar />
      <ScrollToTop />
      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/books" element={<Books />} />
          <Route path="/books/:slug" element={<BookDetail />} />
          <Route path="/dedline" element={<Dedline />} />
          <Route path="/ideas" element={<Ideas />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <Footer />
      <BackToTop />
    </>
  );
}
