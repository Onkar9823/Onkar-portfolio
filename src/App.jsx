import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Skills from './components/Skills.jsx';
import Experience from './components/Experience.jsx';
import Projects from './components/Projects.jsx';
import ResumeSection from './components/ResumeSection.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import { ResumeDownloadProvider } from './context/ResumeDownloadContext.jsx';

export default function App() {
  return (
    <ResumeDownloadProvider>
      <a
        href="#main"
        className="sr-only z-[60] rounded-lg bg-accent px-4 py-2 font-semibold text-onaccent focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        Skip to content
      </a>
      <Navbar />
      <main id="main">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <ResumeSection />
        <Contact />
      </main>
      <Footer />
    </ResumeDownloadProvider>
  );
}
