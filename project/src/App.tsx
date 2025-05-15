import React from 'react';
import Layout from './components/Layout';
import Hero from './components/Hero';
import Gallery from './components/Gallery';
import AboutMe from './components/AboutMe';
import InstagramFeed from './components/InstagramFeed';
import Footer from './components/Footer';

function App() {
  React.useEffect(() => {
    // Update document title
    document.title = "Fashion Lookbook";
    
    // Handle smooth scrolling for anchor links
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const id = target.getAttribute('href')?.substring(1);
        const element = document.getElementById(id || '');
        
        if (element) {
          window.scrollTo({
            top: element.offsetTop - 64, // Account for fixed header
            behavior: 'smooth'
          });
        }
      }
    };
    
    document.addEventListener('click', handleAnchorClick);
    
    return () => {
      document.removeEventListener('click', handleAnchorClick);
    };
  }, []);
  
  return (
    <Layout>
      <Hero />
      <Gallery />
      <AboutMe />
      <InstagramFeed />
      <Footer />
    </Layout>
  );
}

export default App;