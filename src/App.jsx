import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Stats from './components/Stats';
import Footer from './components/Footer';
import TimerPage from './components/TimerPage';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  if (currentPage === 'timer') {
    return (
      <div className="app-shell">
        <TimerPage onBack={() => setCurrentPage('home')} />
      </div>
    );
  }

  return (
    <div className="app-shell">
      <Navbar onNavigate={() => setCurrentPage('timer')} />
      <Hero onNavigate={() => setCurrentPage('timer')} />
      <Features />
      <HowItWorks />
      <Stats />
      <Footer />
    </div>
  );
}

export default App;
