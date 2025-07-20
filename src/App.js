import './App.css';

function App() {
  return (
    <div className="App">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="logo">Portable Survey 1.0</div>
          <div className="nav-links">
            <a href="#features">Features</a>
            <a href="#pricing">Pricing</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="hero">
        <div className="hero-content">
          <h1 className="hero-title">
            Create beautiful surveys.
            <br />
            <span className="gradient-text">Get meaningful insights.</span>
          </h1>
          <p className="hero-subtitle">
            The most intuitive survey platform that helps you collect, analyze, and act on feedback with unprecedented ease.
          </p>
          <div className="cta-buttons">
            <button className="btn-primary">Start Creating</button>
            <button className="btn-secondary">Watch Demo</button>
          </div>
        </div>
        
        {/* Feature Cards */}
        <div className="feature-grid">
          <div className="feature-card">
            <div className="feature-icon">📊</div>
            <h3>Smart Analytics</h3>
            <p>Real-time insights with beautiful visualizations</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🎨</div>
            <h3>Beautiful Design</h3>
            <p>Stunning templates that engage your audience</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">⚡</div>
            <h3>Lightning Fast</h3>
            <p>Create and deploy surveys in minutes, not hours</p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2024 Portable Survey. Designed with care.</p>
      </footer>
    </div>
  );
}

export default App;
