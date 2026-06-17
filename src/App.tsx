import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import NutriSection from './components/NutriSection';
import Pricing from './components/Pricing';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <NutriSection />
        <Pricing />
      </main>
      <Footer />
    </div>
  );
}

export default App;
