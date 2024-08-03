// App.js
import React, { useState, useEffect } from 'react';
import './App.css';
import logo from './VennSocial Logo-02.png'; // Make sure this image is in your project directory

function App() {
  const [email, setEmail] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    "https://camo.envatousercontent.com/76a9231bd3dde0310bf0199c5c578fe99d7a543c/68747470733a2f2f646f63756d656e746174696f6e2e636f6465706561726c2e696e2f636f64655f63616e796f6e5f6173736574732f73617968692f342e706e67",
    "https://camo.envatousercontent.com/d4235e10c82fca4cd1dccb66bba3c4ee8ee2e250/68747470733a2f2f646f63756d656e746174696f6e2e636f6465706561726c2e696e2f636f64655f63616e796f6e5f6173736574732f73617968692f392e706e67",
    "https://camo.envatousercontent.com/a215f67f90e2fcada3765771e9b2bc6f81a22950/68747470733a2f2f646f63756d656e746174696f6e2e636f6465706561726c2e696e2f636f64655f63616e796f6e5f6173736574732f73617968692f352e706e67",
    "https://camo.envatousercontent.com/6067428484e3e8f92bb58fe1b180a69708bf4f05/68747470733a2f2f646f63756d656e746174696f6e2e636f6465706561726c2e696e2f636f64655f63616e796f6e5f6173736574732f73617968692f332e706e67"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
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
            <h1>Revolutionize Your Social Experience with Vennverse</h1>
            <p>Immerse yourself in a cutting-edge AI-powered social and professional network that seamlessly blends reality with the metaverse.</p>
            <button className="cta-button">Join the Future Now</button>
          </div>
          <div className="hero-image">
            <img src={images[currentImageIndex]} alt="Vennverse Features" className="fade-in" />
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
          </div>
        </section>

        <section id="ai-tools" className="parallax">
          <div className="overlay">
            <h2>AI-Powered Tools</h2>
            <p>Unlock your potential with our suite of AI tools</p>
            <ul>
              <li>Personalized product recommendations</li>
              <li>Intelligent job matching</li>
              <li>Automatic resume generation</li>
              <li>Interview preparation with GPT-4 AI</li>
            </ul>
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