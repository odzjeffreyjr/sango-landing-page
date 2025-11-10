import React, { useEffect, useState, useCallback } from "react";
import "./App.css";
import {
  HiOfficeBuilding,
  HiCreditCard,
  HiChartBar,
  HiChatAlt2,
} from "react-icons/hi";
import { GiPlantSeed } from "react-icons/gi";

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Google Form link for investment inquiries
  const formLink = "https://docs.google.com/forms/d/e/1FAIpQLSf4WE4I3uSkxLO8qaedP5ZgcpN5JBTVKe8bhqWiLx2I1KWnmA/viewform?usp=dialog";

  useEffect(() => {
    // Throttle function to limit scroll event frequency
    const throttle = (func, limit) => {
      let inThrottle;
      return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
          func.apply(context, args);
          inThrottle = true;
          setTimeout(() => inThrottle = false, limit);
        }
      };
    };

    // Scroll effect for navbar
    const handleScroll = throttle(() => {
      setScrolled(window.scrollY > 50);
    }, 100);

    // Intersection Observer for scroll animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -100px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.animationDelay = `${Math.random() * 0.5}s`;
          entry.target.classList.add("animate-in");
        }
      });
    }, observerOptions);

    // Observe all sections
    document.querySelectorAll(".section").forEach((section) => {
      observer.observe(section);
    });

    // Optimized scroll-based animations with throttling
    const handleScrollAnimation = throttle(() => {
      const scrollTop = window.scrollY;
      const elements = document.querySelectorAll(
        ".hero-title, .stat-card, .aerial-view",
      );

      elements.forEach((element, index) => {
        const speed = (index + 1) * 0.5;
        const yPos = -((scrollTop * speed) / 100);
        element.style.transform = `translateY(${yPos}px)`;
      });
    }, 50);

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("scroll", handleScrollAnimation, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("scroll", handleScrollAnimation);
      observer.disconnect();
    };
  }, []);

  const handleCTAClick = useCallback((e) => {
    // Add visual feedback without preventing default form behavior
    const button = e.currentTarget;
    button.style.transform = "scale(0.95)";
    
    setTimeout(() => {
      button.style.transform = "";
    }, 150);
  }, []);

  const toggleMobileMenu = useCallback(() => {
    setMobileMenuOpen(!mobileMenuOpen);
  }, [mobileMenuOpen]);

  const closeMobileMenu = useCallback(() => {
    setMobileMenuOpen(false);
  }, []);

  return (
    <div className="App">
      {/* Navigation */}
      <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
        <div className="nav-container">
          <div className="nav-logo">
            <img
              src="/Lateral Original.png"
              alt="Sango"
              className="logo-image"
            />
          </div>
          <div className="nav-links">
            <a href="#about" className="nav-link">
              About
            </a>
            <a href="#founders" className="nav-link">
              Team
            </a>
            <a href="#product" className="nav-link">
              Product
            </a>
            <a href="#contact" className="nav-link">
              Contact
            </a>
          </div>
          <div
            className={`mobile-menu-toggle ${mobileMenuOpen ? "active" : ""}`}
            onClick={toggleMobileMenu}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div className={`mobile-menu ${mobileMenuOpen ? "active" : ""}`}>
          <div className="mobile-nav-links">
            <a
              href="#about"
              className="mobile-nav-link"
              onClick={closeMobileMenu}
            >
              About
            </a>
            <a
              href="#founders"
              className="mobile-nav-link"
              onClick={closeMobileMenu}
            >
              Team
            </a>
            <a
              href="#product"
              className="mobile-nav-link"
              onClick={closeMobileMenu}
            >
              Product
            </a>
            <a
              href="#contact"
              className="mobile-nav-link"
              onClick={closeMobileMenu}
            >
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Invest in Real Trees, Earn Real Returns
            </h1>
            <p className="hero-subtitle">
              The first platform to tokenize African forests with verified
              impact and financial yields
            </p>
            <p className="hero-description">
              Invest in African forests through digital tree tokens backed by
              real, GPS-tracked assets. Our platform combines satellite
              monitoring, drone footage, live sensors, and real-time telemetry
              with AI verification to provide complete transparency. Generate
              returns through dual revenue streams: certified carbon credits and
              sustainable timber harvesting. Government partnerships and
              regulated banking infrastructure ensure secure, compliant
              transactions from investment to implementation.
            </p>
            <div className="hero-stats">
              <div className="stat-card">
                <h3 className="stat-number">500</h3>
                <p className="stat-label">Verified Hectares</p>
              </div>
              <div className="stat-card">
                <h3 className="stat-number">Q4 2025</h3>
                <p className="stat-label">MVP Launch</p>
              </div>
              <div className="stat-card">
                <h3 className="stat-number">$160M+</h3>
                <p className="stat-label">Annual Market Size</p>
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
                  loading="eager"
                  decoding="async"
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
                  loading="lazy"
                  decoding="async"
                />
                <img
                  src="/frame 2.jpg"
                  alt="Ground view 2"
                  className="ground-image"
                  loading="lazy"
                  decoding="async"
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
            <h2 className="section-title">
              Why African Forests Are the Next Big Investment
            </h2>
            <p className="section-subtitle">
              A $160M+ market with massive untapped potential and institutional
              backing
            </p>
          </div>
          <div className="opportunity-grid">
            <div className="opportunity-card problem-card">
              <div className="card-header">
                <h3 className="card-title">Market Challenges</h3>
              </div>
              <ul className="feature-list">
                <li className="feature-item">
                  Sub-Saharan Africa receives less than 5% of global climate
                  funding despite containing 60% of suitable reforestation land
                </li>
                <li className="feature-item">
                  $160M+ annual market growing 15-20% yearly, yet institutional
                  access remains limited
                </li>
                <li className="feature-item">
                  Existing platforms lack verification standards and
                  comprehensive real-time monitoring capabilities
                </li>
                <li className="feature-item">
                  Limited opportunities for verified climate investments with
                  measurable financial returns
                </li>
              </ul>
            </div>
            <div className="opportunity-card solution-card">
              <div className="card-header">
                <h3 className="card-title">Sango's Platform</h3>
              </div>
              <ul className="feature-list">
                <li className="feature-item">
                  Tokenized forest assets with comprehensive GPS mapping,
                  satellite verification, drone surveillance, and live sensor
                  networks
                </li>
                <li className="feature-item">
                  Strategic partnerships with government entities and regulated
                  financial institutions
                </li>
                <li className="feature-item">
                  Diversified revenue model combining carbon credit
                  certification and timber harvesting
                </li>
                <li className="feature-item">
                  Streamlined investment process with complete audit trail and
                  regulatory compliance
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Founders Section */}
      <section id="founders" className="section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">The Team Making It Happen</h2>
            <p className="section-subtitle">
              Proven expertise in sustainability, technology, and African
              markets
            </p>
          </div>
          <div className="founders-grid">
            <div className="founder-card">
              <div className="founder-avatar">
                <img
                  src="/Yaseen.JPG"
                  alt="Yaseen - CEO"
                  className="founder-photo"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <h3 className="founder-name">Yaseen</h3>
              <h4 className="founder-title">CEO & Co-Founder</h4>
              <p className="founder-bio">
                Led supply chain and sustainability projects at Kearney,
                delivering measurable cost and efficiency gains for
                multinational clients. Secured formal partnerships with the
                Forestry Commission of Zimbabwe and MetBank. Expert in
                procurement, logistics, and climate strategy with proven track
                record in African markets.
              </p>
            </div>
            <div className="founder-card">
              <div className="founder-avatar">
                <img
                  src="/My Preferred Headshot Jeffrey Oduman.png"
                  alt="Jeffrey - CTO"
                  className="founder-photo"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <h3 className="founder-name">Jeffrey</h3>
              <h4 className="founder-title">CTO & Co-Founder</h4>
              <p className="founder-bio">
                Full-stack developer with expertise in robotics and computer
                vision. Builds all production code and handles data ingestion
                pipelines, AI model deployment, and scalable web systems.
                Responsible for Sango's core MRV (monitoring, reporting,
                verification) infrastructure.
              </p>
            </div>
            <div className="founder-card">
              <div className="founder-avatar">
                <img
                  src="/Alex.jpeg"
                  alt="Alex - COO"
                  className="founder-photo"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <h3 className="founder-name">Alex</h3>
              <h4 className="founder-title">COO & Co-Founder</h4>
              <p className="founder-bio">
                Financial services and operations expert with experience
                designing compliant fund-flow frameworks and digital banking
                operations. Handles regulatory compliance, financial modeling,
                and cross-border payment systems. Transitioning from Amazon to
                join full-time by early 2026.
              </p>
            </div>
          </div>
          <div className="founder-story">
            <div className="story-card">
              <h3 className="story-title">Our Partnership</h3>
              <p className="story-text">
                Yaseen and Alex met in 2024 while working at Kearney on supply
                chain and sustainability projects. Alex, Yaseen and Jeffrey were
                introduced through mutual connections and collaborated
                successfully on a case competition at Columbia University. The
                team has been working on Sango since October 2024, with Yaseen
                and Jeffrey full-time while pursuing their master's degrees, and
                Alex contributing part-time during his transition from Amazon.
                Together, they bring complementary expertise in African markets,
                technology, and financial operations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Section */}
      <section id="product" className="section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Your Money at Work</h2>
            <p className="section-subtitle">
              From investment to impact in days, not years
            </p>
          </div>
          <div className="product-flow">
            <div className="flow-step">
              <div className="step-number">1</div>
              <h3 className="step-title">Acquire Tree Tokens</h3>
              <p className="step-description">
                Purchase digital tokens representing verified, geo-located trees
                in managed African forests
              </p>
            </div>
            <div className="flow-step">
              <div className="step-number">2</div>
              <h3 className="step-title">Monitor Progress</h3>
              <p className="step-description">
                Access real-time data on forest health, growth metrics, and
                carbon sequestration via integrated monitoring systems including
                GPS tracking, satellite imagery, drone surveillance, and live
                sensor networks
              </p>
            </div>
            <div className="flow-step">
              <div className="step-number">3</div>
              <h3 className="step-title">Generate Returns</h3>
              <p className="step-description">
                Receive distributions from verified carbon credit sales and
                sustainable timber harvesting operations
              </p>
            </div>
          </div>
          <div className="monitoring-preview">
            <h3 className="preview-title">
              Comprehensive Monitoring & Verification
            </h3>
            <p className="monitoring-subtitle">
              Advanced satellite imaging, drone footage, live sensors, GPS
              tracking, and real-time telemetry with AI analysis ensure complete
              transparency and accountability
            </p>
            <div className="monitoring-grid">
              <div className="monitor-feed">
                <img src="/frame 1.jpg" alt="Forest monitoring view 1" loading="lazy" decoding="async" />
                <span className="feed-label">Canopy Health Analysis</span>
              </div>
              <div className="monitor-feed">
                <img src="/frame 2.jpg" alt="Forest monitoring view 2" loading="lazy" decoding="async" />
                <span className="feed-label">Growth Progress Tracking</span>
              </div>
              <div className="monitor-feed">
                <img src="/aerial.jpg" alt="Aerial monitoring" loading="lazy" decoding="async" />
                <span className="feed-label">Multi-Platform Verification</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Traction Section */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Built to Scale</h2>
            <p className="section-subtitle">
              Government partnerships, banking infrastructure, and operational
              readiness from day one
            </p>
          </div>
          <div className="traction-grid">
            <div className="traction-card">
              <div className="traction-icon">
                <div className="icon-circle">
                  <HiOfficeBuilding />
                </div>
              </div>
              <h3 className="traction-title">Government Partnership</h3>
              <p className="traction-description">
                Formal letter of support from the Forestry Commission of
                Zimbabwe provides direct access to state-affiliated land
                portfolios, permits, and national reforestation programs,
                significantly de-risking operations and regulatory compliance.
              </p>
            </div>
            <div className="traction-card">
              <div className="traction-icon">
                <div className="icon-circle">
                  <HiCreditCard />
                </div>
              </div>
              <h3 className="traction-title">
                Regulated Banking Infrastructure
              </h3>
              <p className="traction-description">
                MetBank partnership delivers compliant financial rails for
                investor collections, escrow services, and milestone-based
                disbursements with full AML screening and sanctions compliance,
                ensuring transparent cross-border fund flows.
              </p>
            </div>
            <div className="traction-card">
              <div className="traction-icon">
                <div className="icon-circle">
                  <GiPlantSeed />
                </div>
              </div>
              <h3 className="traction-title">Operational Foundation</h3>
              <p className="traction-description">
                Established partnerships with local nurseries, landholders, and
                ground operations teams. Comprehensive MRV (monitoring,
                reporting, verification) architecture built and tested with GPS
                tracking, satellite imagery, drone surveillance, and live sensor
                networks, with 500 verified hectares ready for pilot deployment.
              </p>
            </div>
            <div className="traction-card">
              <div className="traction-icon">
                <div className="icon-circle">
                  <HiChartBar />
                </div>
              </div>
              <h3 className="traction-title">Market Momentum</h3>
              <p className="traction-description">
                African voluntary carbon and timber sectors valued at $160M+
                annually with 15-20% yearly growth. Growing institutional demand
                for verified climate assets with measurable impact and financial
                returns.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Investment Partnership</h2>
            <p className="section-subtitle">
              Join institutional investors in advancing sustainable forestry
              through verified digital assets
            </p>
          </div>
          <div className="contact-content">
            <div className="contact-info">
              <h3 className="contact-title">Current Fundraising</h3>
              <p className="contact-subtitle">
                Targeting $2M pre-seed round for 24-month runway
              </p>
              <div className="contact-details">
                <div className="detail-item">
                  <span className="detail-label">Company:</span>
                  <span className="detail-value">
                    Sango (Delaware C-Corp planned)
                  </span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Stage:</span>
                  <span className="detail-value">Pre-seed</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Use of Funds:</span>
                  <span className="detail-value">
                    Product development, MRV infrastructure, pilot operations
                  </span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Location:</span>
                  <span className="detail-value">
                    San Francisco HQ / Southern Africa Operations
                  </span>
                </div>
              </div>
            </div>
            <div className="cta">
              <h3 className="cta-title">Strategic Partnership</h3>
              <p className="cta-subtitle">
                Partner with Africa's leading verified forestry investment
                platform
              </p>
              <a
                href={formLink}
                className="cta-button"
                style={{
                  textDecoration: "none",
                  display: "inline-block",
                  textAlign: "center",
                }}
                onClick={handleCTAClick}
                aria-label="Schedule a discussion"
                rel="noopener noreferrer"
                target="_blank"
              >
                Schedule Discussion
              </a>
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
                loading="lazy"
                decoding="async"
              />
              <p className="footer-tagline">
                Tokenized African forests for carbon & yield
              </p>
            </div>
            <div className="footer-links">
              <a href="#about" className="footer-link">
                About
              </a>
              <a href="#founders" className="footer-link">
                Team
              </a>
              <a href="#product" className="footer-link">
                Product
              </a>
              <a href="#contact" className="footer-link">
                Contact
              </a>
            </div>
          </div>
          <div className="footer-bottom">
            <p className="footer-copyright">
              &copy; 2025 Sango. Building the future of forestry investment.
            </p>
          </div>
        </div>
      </footer>

      {/* Floating Contact Button */}
      <a
        href={formLink}
        className="floating-contact-btn"
        style={{
          textDecoration: "none",
          display: "flex",
          alignItems: "center",
        }}
        onClick={handleCTAClick}
        aria-label="Contact Sango"
        rel="noopener noreferrer"
        target="_blank"
      >
        <span className="btn-text">Contact</span>
        <span className="btn-icon">
          <HiChatAlt2 />
        </span>
      </a>
    </div>
  );
}

export default App;
