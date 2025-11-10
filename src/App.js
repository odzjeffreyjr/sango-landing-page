import './App.css';

function App() {
  return (
    <div className="App">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">
            <img 
              src="/Lateral Original.png" 
              alt="Sango" 
              className="logo-image"
            />
          </div>
          <div className="nav-links">
            <a href="#about" className="nav-link">About</a>
            <a href="#founders" className="nav-link">Team</a>
            <a href="#product" className="nav-link">Product</a>
            <a href="#contact" className="nav-link">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">Tokenized African Forests for Carbon & Yield</h1>
            <p className="hero-subtitle">
              Invest in African forests with transparent & green returns
            </p>
            <p className="hero-description">
              Sango turns African forests into yield-bearing digital assets. Invest in "Tree Tokens" 
              backed by real, geo-tagged trees monitored via satellite, AI vision, and on-ground audits. 
              Fund reforestation, track impact in real time, and receive payouts from timber and verified carbon credits.
            </p>
            <div className="hero-stats">
              <div className="stat-card">
                <h3 className="stat-number">500</h3>
                <p className="stat-label">Verified Hectares</p>
              </div>
              <div className="stat-card">
                <h3 className="stat-number">Q2 2026</h3>
                <p className="stat-label">MVP Launch</p>
              </div>
              <div className="stat-card">
                <h3 className="stat-number">$160M+</h3>
                <p className="stat-label">Market Opportunity</p>
              </div>
            </div>
          </div>
          <div className="hero-visual">
            <div className="forest-showcase">
              <div className="aerial-view">
                <img 
                  src="/aerial.jpg" 
                  alt="Aerial view of African forest"
                  className="aerial-image"
                />
                <div className="live-indicator">
                  <div className="live-dot"></div>
                  Live Monitoring
                </div>
              </div>
              <div className="ground-views">
                <img 
                  src="/frame 1.jpg" 
                  alt="Ground view 1"
                  className="ground-image"
                />
                <img 
                  src="/frame 2.jpg" 
                  alt="Ground view 2"
                  className="ground-image"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem & Solution */}
      <section id="about" className="section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">The Opportunity</h2>
            <p className="section-subtitle">Africa's forests are undervalued assets in the global carbon market</p>
          </div>
          <div className="opportunity-grid">
            <div className="opportunity-card problem-card">
              <div className="card-header">
                <h3 className="card-title">The Problem</h3>
              </div>
              <ul className="feature-list">
                <li className="feature-item">Less than 5% of global carbon funding reaches Sub-Saharan Africa</li>
                <li className="feature-item">Fragmented regulation and limited transparency</li>
                <li className="feature-item">Slow fund movement and poor verification infrastructure</li>
                <li className="feature-item">Investors lack measurable climate impact with financial returns</li>
              </ul>
            </div>
            <div className="opportunity-card solution-card">
              <div className="card-header">
                <h3 className="card-title">Our Solution</h3>
              </div>
              <ul className="feature-list">
                <li className="feature-item">Tokenized trees as verifiable digital assets</li>
                <li className="feature-item">Real-time monitoring via satellite, AI, and ground audits</li>
                <li className="feature-item">Direct connection between global capital and land stewards</li>
                <li className="feature-item">Transparent yields from both timber and carbon credits</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Founders Section */}
      <section id="founders" className="section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Meet the Founders</h2>
            <p className="section-subtitle">A team combining sustainability expertise, financial architecture, and technical depth</p>
          </div>
          <div className="founders-grid">
            <div className="founder-card">
              <div className="founder-avatar">
                <img 
                  src="/Yaseen.JPG" 
                  alt="Yaseen - CEO" 
                  className="founder-photo"
                />
              </div>
              <h3 className="founder-name">Yaseen</h3>
              <h4 className="founder-title">CEO & Co-Founder (50%)</h4>
              <p className="founder-bio">
                Led supply chain and sustainability projects at Kearney. Secured formal partnerships 
                with the Forestry Commission of Zimbabwe and MetBank. Expertise in procurement, 
                logistics, and climate strategy with proven track record of delivering measurable 
                cost and efficiency gains for multinational clients.
              </p>
            </div>
            <div className="founder-card">
              <div className="founder-avatar">
                <img 
                  src="/My Preferred Headshot Jeffrey Oduman.png" 
                  alt="Jeffrey - CTO" 
                  className="founder-photo"
                />
              </div>
              <h3 className="founder-name">Jeffrey</h3>
              <h4 className="founder-title">CTO & Co-Founder (25%)</h4>
              <p className="founder-bio">
                Full-stack developer with expertise in robotics and computer vision. Builds all 
                production code using Python (FastAPI), JavaScript/React, AWS, and C++. Handles 
                data ingestion pipelines, AI model deployment, and scalable web systems for 
                Sango's MRV layer.
              </p>
            </div>
            <div className="founder-card">
              <div className="founder-avatar">
                <img 
                  src="/Alex.jpeg" 
                  alt="Alex - COO" 
                  className="founder-photo"
                />
              </div>
              <h3 className="founder-name">Alex</h3>
              <h4 className="founder-title">COO & Co-Founder (25%)</h4>
              <p className="founder-bio">
                Financial services and operations expert. Designed compliant fund-flow frameworks 
                and digital banking operations. Handles operations, regulatory compliance, and 
                financial modeling. Transitioning from Amazon to join full-time by early 2026.
              </p>
            </div>
          </div>
          <div className="founder-story">
            <div className="story-card">
              <h3 className="story-title">How We Met</h3>
              <p className="story-text">
                Yaseen and Alex met in 2024 while working at Kearney on supply chain and sustainability 
                projects. They stayed in touch after leaving consulting. Alex, Yaseen and Jeffrey were 
                introduced through mutual connections and worked well together on a case competition at 
                Columbia University. The team has been working on Sango since October 2024, with Yaseen 
                and Jeffrey full-time while pursuing their master's degrees, and Alex contributing 
                part-time during his transition from Amazon.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Section */}
      <section id="product" className="section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">How Sango Works</h2>
            <p className="section-subtitle">From payment to planting within days</p>
          </div>
          <div className="product-flow">
            <div className="flow-step">
              <div className="step-number">1</div>
              <h3 className="step-title">Invest</h3>
              <p className="step-description">Purchase Tree Tokens representing real, geo-tagged trees in African forests</p>
            </div>
            <div className="flow-step">
              <div className="step-number">2</div>
              <h3 className="step-title">Monitor</h3>
              <p className="step-description">Track your trees in real-time via satellite imagery, AI analysis, and ground audits</p>
            </div>
            <div className="flow-step">
              <div className="step-number">3</div>
              <h3 className="step-title">Earn</h3>
              <p className="step-description">Receive returns from timber yields and verified carbon credits</p>
            </div>
          </div>
          <div className="tech-showcase">
            <h3 className="tech-title">Technology Stack</h3>
            <div className="tech-grid">
              <div className="tech-item">Python & FastAPI</div>
              <div className="tech-item">React & TypeScript</div>
              <div className="tech-item">AWS & PostgreSQL</div>
              <div className="tech-item">YOLOv8 & SAM</div>
              <div className="tech-item">Google Earth Engine</div>
              <div className="tech-item">Blockchain Integration</div>
            </div>
            <div className="monitoring-preview">
              <h4 className="preview-title">Real-time Forest Monitoring</h4>
              <div className="monitoring-grid">
                <div className="monitor-feed">
                  <img src="/frame 1.jpg" alt="Forest monitoring view 1" />
                  <span className="feed-label">Canopy Analysis</span>
                </div>
                <div className="monitor-feed">
                  <img src="/frame 2.jpg" alt="Forest monitoring view 2" />
                  <span className="feed-label">Growth Tracking</span>
                </div>
                <div className="monitor-feed">
                  <img src="/aerial.jpg" alt="Aerial monitoring" />
                  <span className="feed-label">Satellite View</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Traction Section */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Proven Traction</h2>
            <p className="section-subtitle">Building with institutional support and strategic partnerships</p>
          </div>
          <div className="traction-grid">
            <div className="traction-card">
              <div className="traction-icon">
                <div className="icon-circle">G</div>
              </div>
              <h3 className="traction-title">Government Partnership</h3>
              <p className="traction-description">Formal letter of support from the Forestry Commission of Zimbabwe, providing direct access to state-affiliated land portfolios and permits</p>
            </div>
            <div className="traction-card">
              <div className="traction-icon">
                <div className="icon-circle">B</div>
              </div>
              <h3 className="traction-title">Banking Infrastructure</h3>
              <p className="traction-description">MetBank committed to provide compliant rails for collections, escrow, and milestone-based disbursements with full AML screening</p>
            </div>
            <div className="traction-card">
              <div className="traction-icon">
                <div className="icon-circle">O</div>
              </div>
              <h3 className="traction-title">Operational Readiness</h3>
              <p className="traction-description">Secured partnerships with local nurseries and landholders, built MRV architecture foundation</p>
            </div>
            <div className="traction-card">
              <div className="traction-icon">
                <div className="icon-circle">M</div>
              </div>
              <h3 className="traction-title">Market Validation</h3>
              <p className="traction-description">Africa's voluntary carbon and timber sectors valued at $160M+ annually, growing 15-20% per year</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Get In Touch</h2>
            <p className="section-subtitle">Ready to invest in the future of African forests?</p>
          </div>
          <div className="contact-content">
            <div className="contact-info">
              <h3 className="contact-title">Current Fundraising</h3>
              <p className="contact-subtitle">Targeting $2M pre-seed round for 24-month runway</p>
              <div className="contact-details">
                <div className="detail-item">
                  <span className="detail-label">Company:</span>
                  <span className="detail-value">Sango (Delaware C-Corp planned)</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Stage:</span>
                  <span className="detail-value">Pre-seed</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Location:</span>
                  <span className="detail-value">New York (post-YC) / Southern Africa Operations</span>
                </div>
              </div>
            </div>
            <div className="cta">
              <h3 className="cta-title">Join Our Mission</h3>
              <p className="cta-subtitle">Help us connect global capital to African reforestation</p>
              <button className="cta-button">Contact Us</button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-logo">
              <img 
                src="/Name Original.png" 
                alt="Sango" 
                className="footer-logo-image"
              />
              <p className="footer-tagline">Tokenized African forests for carbon & yield</p>
            </div>
            <div className="footer-links">
              <a href="#about" className="footer-link">About</a>
              <a href="#founders" className="footer-link">Team</a>
              <a href="#product" className="footer-link">Product</a>
              <a href="#contact" className="footer-link">Contact</a>
            </div>
          </div>
          <div className="footer-bottom">
            <p className="footer-copyright">&copy; 2025 Sango. Building the future of forestry investment.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
