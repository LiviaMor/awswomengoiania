import Navbar from "./components/Navbar";
import Particles from "./components/Particles";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import About from "./components/About";
import CommunityLinks from "./components/CommunityLinks";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Particles />
      <Hero />
      <Stats />
      <About />
      <CommunityLinks />
      <Footer />
    </main>
  );
}
