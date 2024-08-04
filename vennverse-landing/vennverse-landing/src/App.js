import React, { useState, useEffect } from 'react';
import './App.css';
import logo from './VennSocial Logo-05.png';
import heroImage2 from './2.webp';
import heroImage3 from './3.webp';
import heroImage4 from './4.webp';

function App() {
  const [email, setEmail] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentHeroImageIndex, setCurrentHeroImageIndex] = useState(0);

  const images = [
    "https://camo.envatousercontent.com/76a9231bd3dde0310bf0199c5c578fe99d7a543c/68747470733a2f2f646f63756d656e746174696f6e2e636f6465706561726c2e696e2f636f64655f63616e796f6e5f6173736574732f73617968692f342e706e67",
    "https://camo.envatousercontent.com/d4235e10c82fca4cd1dccb66bba3c4ee8ee2e250/68747470733a2f2f646f63756d656e746174696f6e2e636f6465706561726c2e696e2f636f64655f63616e796f6e5f6173736574732f73617968692f392e706e67",
    "https://camo.envatousercontent.com/a215f67f90e2fcada3765771e9b2bc6f81a22950/68747470733a2f2f646f63756d656e746174696f6e2e636f6465706561726c2e696e2f636f64655f63616e796f6e5f6173736574732f73617968692f352e706e67",
    "https://camo.envatousercontent.com/6067428484e3e8f92bb58fe1b180a69708bf4f05/68747470733a2f2f646f63756d656e746174696f6e2e636f6465706561726c2e696e2f636f64655f63616e796f6e5f6173736574732f73617968692f332e706e67"
  ];

  const heroImages = [
    "https://vennverse.com/img/front-removebg.png",
    heroImage2,
    heroImage3,
    heroImage4
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      setCurrentHeroImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you for signing up with email: ${email}`);
    setEmail('');
  };

  return (
    <div className="App">
      <header>
        <nav>
          <div className="logo">
            <img src={logo} alt="Vennverse Logo" />
          </div>
          <div className="app-links">
            <a href="#" className="app-button google-play">Google Play</a>
            <a href="#" className="app-button app-store">App Store</a>
          </div>
          <div className={`menu-icon ${isMenuOpen ? 'open' : ''}`} onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <ul className={isMenuOpen ? 'open' : ''}>
            <li><a href="#features">Features</a></li>
            <li><a href="#ai-tools">AI Tools</a></li>
            <li><a href="#metaverse">Metaverse</a></li>
            <li><a href="#signup">Sign Up</a></li>
          </ul>
        </nav>
      </header>

      <main>
      
    
      <section className="hero">
  <div className="hero-content">
    <h1>Elevate Your Social and Professional Network with Vennverse</h1>
    <p>Immerse yourself in a cutting-edge AI-powered social and professional network that seamlessly blends reality with the metaverse.</p>
    <button className="cta-button">Join the Future Now</button>
    </div>
   <div className="hero-image-container">
    <img 
      src={heroImages[currentHeroImageIndex]} 
      alt="Vennverse Features" 
      className="hero-image fade-in"
    />
      </div>
     </section>
     <section className="about">
          <div className="about-content">
            <h2>About Vennverse</h2>
            <p>Vennverse is a revolutionary AI-powered platform that seamlessly integrates social connections and professional networking. Connecting you to a world of opportunities, Vennverse bridges the gap between reality and the metaverse, offering both career opportunities and social fun.</p>
          </div>
        </section>
        <section id="features">
          <h2>Revolutionary Features</h2>
          <div className="feature-grid">
            <div className="feature">
              <img src={images[0]} alt="AI-Powered Shopping" />
              <h3>AI-Powered Shopping</h3>
              <p>Discover products tailored to your preferences with our advanced AI recommendations</p>
            </div>
            <div className="feature">
              <img src={images[1]} alt="AI Job Matching" />
              <h3>AI Job Matching</h3>
              <p>Find your dream job with our AI-powered job matching and automatic resume generation</p>
            </div>
            <div className="feature">
              <img src={images[2]} alt="Interview AI Bot" />
              <h3>Interview AI Bot</h3>
              <p>Prepare for interviews with our GPT-4 powered AI bot, free for all users</p>
            </div>
            <div className="feature">
              <img src={images[3]} alt="Privacy AI" />
              <h3>Privacy AI</h3>
              <p>Protect your data with our advanced AI-driven privacy features</p>
            </div>
          </div>
        </section>

        <section id="ai-tools" className="parallax">
          <div className="overlay">
            <h2>AI-Powered Tools</h2>
            <p>Unlock your potential with our suite of AI tools</p>
            <div className="ai-tools-grid">
              <div className="ai-tool">
                <i className="fas fa-shopping-cart"></i>
                <h3>Personalized product recommendations</h3>
              </div>
              <div className="ai-tool">
                <i className="fas fa-briefcase"></i>
                <h3>Intelligent job matching</h3>
              </div>
              <div className="ai-tool">
                <i className="fas fa-file-alt"></i>
                <h3>Automatic resume generation</h3>
              </div>
              <div className="ai-tool">
                <i className="fas fa-user-tie"></i>
                <h3>Interview preparation with GPT-4 AI</h3>
              </div>
              <div className="ai-tool">
                <i className="fas fa-shield-alt"></i>
                <h3>AI-driven privacy protection</h3>
              </div>
              <div className="ai-tool">
                <i className="fas fa-network-wired"></i>
                <h3>Millions of job opportunities</h3>
              </div>
            </div>
          </div>
        </section>

        <section id="metaverse">
          <h2>Enter the Vennverse Metaverse</h2>
          <div className="metaverse-features">
            <div className="metaverse-feature">
              <h3>Immersive Shopping</h3>
              <p>Experience AR/VR shopping for a truly immersive product selection</p>
            </div>
            <div className="metaverse-feature">
              <h3>Virtual Real Estate</h3>
              <p>Buy and trade land in our Metaverse using our native token or various cryptocurrencies</p>
            </div>
            <div className="metaverse-feature">
              <h3>Virtual Networking</h3>
              <p>Connect with professionals and friends in our virtual world</p>
            </div>
          </div>
        </section>

        <section id="signup">
          <h2>Join the Future of Social Networking</h2>
          <form onSubmit={handleSubmit}>
            <input 
              type="email" 
              placeholder="Enter your email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit">Get Early Access</button>
          </form>
        </section>
      </main>

      <footer>
        <p>&copy; 2024 Vennverse. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;