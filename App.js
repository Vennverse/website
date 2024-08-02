// App.js
import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <nav>
          <div className="logo">Vennverse</div>
          <ul>
            <li><a href="#features">Features</a></li>
            <li><a href="#privacy">Privacy</a></li>
            <li><a href="#jobs">Jobs</a></li>
            <li><a href="#signup">Sign Up</a></li>
          </ul>
        </nav>
      </header>

      <main>
        <section className="hero">
          <h1>Welcome to Vennverse</h1>
          <p>The private social network for professionals</p>
          <button>Join Now</button>
        </section>

        <section id="features">
          <h2>Features</h2>
          <div className="feature-grid">
            <div className="feature">
              <h3>Social Networking</h3>
              <p>Connect with friends and colleagues like Instagram</p>
            </div>
            <div className="feature">
              <h3>Professional Networking</h3>
              <p>Build your career network like LinkedIn</p>
            </div>
            <div className="feature">
              <h3>Enhanced Privacy</h3>
              <p>Your data is protected and under your control</p>
            </div>
          </div>
        </section>

        <section id="privacy">
          <h2>Privacy First</h2>
          <p>At Vennverse, we prioritize your data privacy and security</p>
        </section>

        <section id="jobs">
          <h2>Find Your Dream Job</h2>
          <p>Access to over 100 million jobs with salaries from $10,000 to $1,000,000</p>
        </section>

        <section id="signup">
          <h2>Join Vennverse Today</h2>
          <form>
            <input type="email" placeholder="Enter your email" />
            <button type="submit">Sign Up</button>
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
