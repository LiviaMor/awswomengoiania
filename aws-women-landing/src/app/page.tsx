import Particles from "./components/Particles";
import Hero from "./components/Hero";
import About from "./components/About";
import CommunityLinks from "./components/CommunityLinks";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="relative">
      <Particles />
      <Hero />
      <About />
      <CommunityLinks />
      <Footer />
    </main>
  );
}
