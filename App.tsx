import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import WorkGallery from "./components/WorkGallery";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="relative min-h-screen bg-canvas text-navy">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-mint focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to content
      </a>
      <Navbar />
      <main id="main">
        <Hero />
        <About />
        <WorkGallery />
      </main>
      <Footer />
    </div>
  );
}
