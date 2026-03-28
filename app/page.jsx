"use client";

import { useEffect } from "react";

const marqueeItems = [
  "Perception",
  "Desire",
  "Positioning",
  "High-Value Clientele",
  "Premium Identity",
  "Brand Elevation"
];

const clientTypes = [
  "Designer boutiques",
  "Emerging couture brands",
  "Premium ethnic wear labels",
  "Bespoke tailoring houses",
  "Emerging luxury designers"
];

const fitCriteria = [
  "Offer high-ticket or premium products",
  "Are investing seriously in brand-building",
  "Are ready to build a strong brand identity",
  "Need consistent, high-quality leads — not just traffic"
];

const systems = [
  {
    num: "01",
    title: "Luxury Client Acquisition System™",
    description:
      "As a performance-focused boutique marketing agency, we attract buyers who are actively searching for premium products like yours.",
    features: [
      "Meta Ads designed for aspiration and discovery",
      "Audience segmentation to reach the right people",
      "Continuous optimisation to improve ROI"
    ],
    note: "This means you get quality leads — not just volume."
  },
  {
    num: "02",
    title: "Brand Direction & Positioning",
    description:
      "As a strategic boutique branding agency, we refine how your brand is perceived in the market.",
    features: [
      "Clear and premium messaging",
      "Strong visual identity alignment",
      "Elite high-value perception",
      "Offer positioning and premium positioning"
    ],
    note:
      "The goal is simple: make your brand feel like it was built by the best brand agency in the industry."
  },
  {
    num: "03",
    title: "Editorial Content Engine",
    description: "Content is not just about posting — it's about positioning.",
    features: [
      "High-end reels and creatives",
      "Story-driven compositions",
      "Consistent brand aesthetics"
    ],
    note:
      "We help your audience not just see your brand but want to be part of it."
  },
  {
    num: "04",
    title: "High-Ticket Conversion Funnels",
    description:
      "As a results-driven luxury boutique marketing company, we optimise landing pages for premium audiences.",
    features: [
      "User journey from first click to final conversion",
      "CRM and follow-up automation"
    ],
    note: "Every step is designed to turn interested visitors into revenue."
  }
];

const results = [
  {
    title: "Attract High-Value Clients",
    description:
      "Consistently bring in buyers who value quality, not price-hunters looking for discounts."
  },
  {
    title: "Increase Qualified Inquiries & Bookings",
    description:
      "More conversations with serious, ready-to-buy customers who understand your positioning."
  },
  {
    title: "Build a Strong Mid-to-Long-Term Premium Presence",
    description:
      "Establish a brand authority that compounds — so your brand commands attention and premium prices."
  },
  {
    title: "Long-Term Brand Equity",
    description:
      "We won't just be a boutique marketing agency. We become the creators of your long-term growth system."
  }
];

function useScrollAnimation() {
  useEffect(() => {
    const fadeEls = document.querySelectorAll(".fade-up");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            window.setTimeout(
              () => entry.target.classList.add("visible"),
              index * 80
            );
          }
        });
      },
      { threshold: 0.12 }
    );

    fadeEls.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
}

function Navbar() {
  return (
    <nav>
      <a href="#" className="nav-logo">
        Luxora
      </a>
      <ul className="nav-links">
        <li>
          <a href="#why">Why Luxora</a>
        </li>
        <li>
          <a href="#systems">Our Systems</a>
        </li>
        <li>
          <a href="#results">Results</a>
        </li>
        <li>
          <a href="#exclusivity">Exclusivity</a>
        </li>
      </ul>
      <button className="nav-cta">Apply Now</button>
    </nav>
  );
}

function Hero() {
  return (
    <section className="hero">
      <p className="hero-eyebrow">Luxury Fashion Brand Marketing</p>
      <h1>
        We Turn <em>Luxury</em> Clothing Brands Into High-Demand Labels
      </h1>
      <p className="hero-sub">
        A results-driven boutique marketing agency built exclusively for luxury
        fashion brands — helping you attract high-value clients, elevate brand
        perception, and scale sustainably without discounting your identity.
      </p>
      <div className="hero-buttons">
        <button className="btn-primary">Request A Private Strategy Call</button>
        <button className="btn-secondary">View Our Work</button>
      </div>
    </section>
  );
}

function MarqueeBand() {
  return (
    <div className="marquee-band">
      <div className="marquee-inner">
        {[...marqueeItems, ...marqueeItems].map((item, index) => (
          <span key={`${item}-${index}`}>{item} ·</span>
        ))}
      </div>
    </div>
  );
}

function QuoteBand() {
  return (
    <div className="quote-band">
      <p className="fade-up">
        Not every brand is meant to be premium — and not every agency
        understands premium brands.
      </p>
    </div>
  );
}

function WhySection() {
  return (
    <section className="why-section" id="why">
      <div className="why-left">
        <img
          src="https://images.unsplash.com/photo-1617817544900-5f62f2c56b12?w=900&q=85"
          alt="Classical baroque painting for luxury aesthetic"
        />
        <div className="why-left-overlay">
          <p className="why-label">The Difference</p>
          <p className="why-heading">
            Why
            <br />
            Luxora
          </p>
        </div>
      </div>
      <div className="why-right fade-up">
        <div className="contrast-text">
          <strong>
            Most boutique advertising agencies focus on visibility —
          </strong>
          getting you more clicks, impressions, and traffic.
        </div>
        <p className="contrast-text">
          But luxury brands don&apos;t grow through visibility alone.
        </p>
        <p className="contrast-text contrast-emphasis">
          They grow through perception, desire, and positioning.
        </p>
        <div className="why-divider" />
        <p className="why-deeper">As a boutique marketing agency, we go deeper:</p>
        <ul className="why-points">
          <li>We understand how luxury buyers think and make decisions</li>
          <li>
            We design systems that attract high-intent, high-value clients
          </li>
          <li>
            We position your brand to feel premium at every touchpoint
          </li>
        </ul>
      </div>
    </section>
  );
}

function WhoSection() {
  return (
    <section className="who-section" id="who">
      <div className="who-left fade-up">
        <p className="section-label">Clientele</p>
        <h2 className="who-heading">
          Who We <em>Work</em>
          <br />
          <em>With</em>
        </h2>
        <p className="who-text">
          We are a niche boutique marketing company focused on fashion brands
          that want to scale while maintaining exclusivity.
        </p>
        <p className="who-text who-gap">We work with:</p>
        <ul className="who-list">
          {clientTypes.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <p className="who-text who-fit-copy">
          We are the right fit for brands that:
        </p>
        <ul className="who-list who-fit-list">
          {fitCriteria.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
      <div className="who-right">
        <img
          src="https://images.unsplash.com/photo-1578632767115-351597cf2477?w=900&q=85"
          alt="Classical painting luxury aesthetic"
        />
        <div className="who-right-overlay">
          <p>
            Because in the luxury market, <em>how</em> your brand is perceived
            matters more than how often it is seen.
          </p>
        </div>
      </div>
    </section>
  );
}

function GrowthSection() {
  return (
    <section className="growth-section" id="systems">
      <div className="growth-header fade-up">
        <p className="section-label">What We Build</p>
        <h2 className="growth-title">
          Our <em>Growth</em> Systems
        </h2>
        <p className="growth-subtitle">
          We don&apos;t offer random services. We build structured growth systems
          designed specifically for luxury brands.
        </p>
      </div>
      <div className="growth-grid">
        {systems.map((system) => (
          <div className="growth-item fade-up" key={system.num}>
            <p className="growth-num">{system.num}</p>
            <h3 className="growth-item-title">{system.title}</h3>
            <p>{system.description}</p>
            <ul>
              {system.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
            <p className="growth-note">{system.note}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function ResultsSection() {
  return (
    <section className="results-section" id="results">
      <div className="results-left fade-up">
        <p className="section-label">Our Approach</p>
        <h2 className="results-title">
          Focused on
          <br />
          <em>Measurable</em>
          <br />
          Results
        </h2>
        <p className="results-desc">
          Our approach is focused on delivering measurable and meaningful
          results. We don&apos;t just set and forget — we become a long-term growth
          partner.
        </p>
      </div>
      <div className="results-right fade-up">
        <ul className="results-list">
          {results.map((result) => (
            <li key={result.title}>
              <strong>{result.title}</strong>
              {result.description}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function ExclusivitySection() {
  return (
    <section className="exclusivity-section" id="exclusivity">
      <h2 className="excl-heading fade-up">Exclusivity</h2>
      <div className="excl-divider" />
      <p className="excl-text fade-up">
        We are not a volume-based boutique marketing company. We intentionally
        work with a limited number of brands to ensure high-quality dedication,
        strategic focus, and true partnership.
      </p>
      <p className="excl-note fade-up">
        If you are looking for mass marketing or quick sales, we may not be the
        right fit.
        <br />
        But if you want to build a premium, long-term brand — we are.
      </p>
    </section>
  );
}

function FooterCTA() {
  return (
    <section className="footer-cta">
      <p className="section-label">Let&apos;s Begin</p>
      <h2 className="fade-up">
        Ready to work with a boutique marketing agency that truly understands
        luxury?
      </h2>
      <p className="fade-up">Apply for a Private Strategy Session →</p>
      <button className="btn-gold fade-up">
        Apply for a Private Strategy Session
      </button>
      <span className="footer-logo">Luxora</span>
      <div className="footer-bottom">
        © 2025 Luxora. All rights reserved. · A luxury brand marketing agency.
      </div>
    </section>
  );
}

export default function Page() {
  useScrollAnimation();

  return (
    <main>
      <Navbar />
      <Hero />
      <MarqueeBand />
      <QuoteBand />
      <WhySection />
      <WhoSection />
      <GrowthSection />
      <ResultsSection />
      <ExclusivitySection />
      <FooterCTA />
    </main>
  );
}
