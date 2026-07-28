import React, { useEffect, useRef, useState } from "react";
import { dialogOrbImage, heroImage, logoImage } from "./assets.js";
import { demoData } from "./demoData.js";

const strategyCallUrl = "https://calendly.com/ltrain-litfitness/15min?month=2026-07";

function resetPagePosition(hash = "") {
  if (hash) {
    history.replaceState(null, "", hash);
  }

  requestAnimationFrame(() => window.scrollTo({ top: 0, left: 0, behavior: "instant" }));
}

function Stars({ rating = 5 }) {
  const rounded = Math.round(rating);

  return (
    <>
      {Array.from({ length: 5 }, (_, index) => (
        <span aria-hidden="true" key={index}>{index < rounded ? "★" : "☆"}</span>
      ))}
    </>
  );
}

function SocialProof() {
  const proof = demoData.socialProof;

  return (
    <div className="social-proof">
      <div className="star-row" aria-label={`${proof.rating} out of 5 stars`}><Stars rating={proof.stars} /></div>
      <div>
        <strong>Rated {proof.rating} by {proof.reviewCount}+ clients</strong>
        <p>{proof.trustStatement} <span>{proof.result}</span></p>
      </div>
    </div>
  );
}

function SectionHeading({ id, title, label }) {
  return (
    <div className="section-heading reveal">
      <h2 id={id}>{title}</h2>
      <span>{label}</span>
    </div>
  );
}

function Header({ view, onShowPublic, onShowMember, onLogout }) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const updateHeader = () => setIsScrolled(window.scrollY > 8);

    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });
    return () => window.removeEventListener("scroll", updateHeader);
  }, []);

  return (
    <header className={`site-header${isScrolled ? " is-scrolled" : ""}`}>
      <button className="logo nav-home" type="button" aria-label="No Limits Fitness home" onClick={onShowPublic}>
        <img src={logoImage} alt="No Limits Fitness" />
      </button>
      <nav className="desktop-nav public-nav" aria-label="Public navigation">
        <a href="#services">Programs</a>
        <a href="#results">Results</a>
        <a href="#reviews">Reviews</a>
        <a href="#trainer">Trainer</a>
        <a href="#faq">FAQ</a>
      </nav>
      <nav className="desktop-nav member-nav" aria-label="Member navigation">
        <a href="#dashboard">Dashboard</a>
        <a href="#booking">Book Sessions</a>
        <a href="#field-intel">Field Intel</a>
        <a href="https://a.co/d/0iSRl1Gx" target="_blank" rel="noopener noreferrer">Store</a>
      </nav>
      <div className="header-actions">
        <a className="contact-link" href="#contact">Book a Free Consultation</a>
        <button className="join-link login-toggle" type="button" onClick={onShowMember}>Member Login</button>
        <button className="join-link logout-toggle" type="button" onClick={onLogout}>Log Out</button>
      </div>
    </header>
  );
}

function PublicSite({ onShowMember }) {
  return (
    <div className="public-site" id="top">
      <section className="hero-shell" aria-label="No Limits Fitness public introduction">
        <div className="hero-frame">
          <img src={heroImage} alt="Black personal trainer coaching a client through a dumbbell lunge at No Limits Fitness" fetchPriority="high" />
          <div className="hero-noise"></div>
          <div className="hero-copy-block reveal">
            <p>Private coaching. Real accountability.</p>
            <h1>No Limits Fitness</h1>
            <p className="hero-summary">Personal training for people ready to build strength, improve nutrition, and stay consistent without guessing what to do next.</p>
            <div className="hero-actions">
              <a className="red-button primary-cta" href="#contact">Book a Free Consultation</a>
              <a href="#services">Explore programs</a>
            </div>
            <SocialProof />
          </div>
          <strong className="hero-tagline">Break your limits.</strong>
        </div>
      </section>

      <section className="mobile-command" aria-label="Mobile mission briefing">
        <div className="phone-topbar">
          <button className="menu-button" type="button" aria-label="Open menu"><span></span><span></span><span></span></button>
          <button className="logo compact nav-home" type="button" aria-label="No Limits Fitness home">
            <img src={logoImage} alt="No Limits Fitness" />
          </button>
          <button className="avatar login-toggle" type="button" onClick={onShowMember}>NL</button>
        </div>
        <div className="briefing-card reveal">
          <h1>No Limits<br />Fitness</h1>
          <p>Strength coaching, nutrition strategy, and session booking for clients who are done winging it.</p>
          <a className="red-button primary-cta" href="#contact">Book a Free Consultation</a>
          <button className="login-toggle secondary-login" type="button" onClick={onShowMember}>Member login</button>
        </div>
        <div className="mobile-proof"><SocialProof /></div>
      </section>

      <Services />
      <Programs />
      <Transformations />
      <Reviews />
      <InstagramSection />
      <Trainer />
      <Contact />
      <Faq />
      <FinalCta />
    </div>
  );
}

function Services() {
  return (
    <section className="services" id="services" aria-labelledby="services-title">
      <SectionHeading id="services-title" title="What No Limits Does" label="Public Brief" />
      <div className="service-grid">
        <article className="service-card reveal">
          <span>01</span>
          <h3>Personal Training</h3>
          <p>One-on-one coaching built around strength, movement quality, conditioning, and sustainable progress.</p>
        </article>
        <article className="service-card reveal">
          <span>02</span>
          <h3>Nutrition Guidance</h3>
          <p>Simple targets, compliance habits, meal swaps, and accountability that fit real schedules.</p>
        </article>
        <article className="service-card reveal">
          <span>03</span>
          <h3>Group Energy</h3>
          <p>Semi-private sessions and group workouts for clients who train harder with a focused squad.</p>
        </article>
      </div>
    </section>
  );
}

function Programs() {
  return (
    <section className="programs" id="programs" aria-labelledby="programs-title">
      <SectionHeading id="programs-title" title="Program Options" label="Demo Pricing" />
      <div className="pricing-grid">
        {demoData.pricing.map((plan, index) => (
          <article className={`pricing-card reveal${index === 1 ? " featured" : ""}`} key={plan.name}>
            <span className="card-kicker">{plan.name}</span>
            <strong>{plan.price}</strong>
            <p>{plan.clientType}</p>
            <em>{plan.frequency}</em>
            <ul>
              {plan.features.map((feature) => <li key={feature}>{feature}</li>)}
            </ul>
            <small>{plan.note}</small>
          </article>
        ))}
      </div>
      <p className="demo-note">Example packages shown for demonstration. Final pricing may vary based on training frequency and goals.</p>
    </section>
  );
}

function Transformations() {
  return (
    <section className="transformations" id="results" aria-labelledby="results-title">
      <SectionHeading id="results-title" title="Client Transformations" label="Real Results" />
      <div className="transformation-grid">
        {demoData.transformations.map((client) => (
          <article className="transformation-card reveal" key={client.name}>
            {client.progressImage ? (
              <figure className="progress-photo">
                <img src={client.progressImage} alt={client.progressAlt} loading="lazy" />
                <figcaption><span>Before</span><span>After</span></figcaption>
              </figure>
            ) : (
              <div className="before-after">
                <figure>
                  <img src={client.beforeImage} alt={client.beforeAlt} loading="lazy" />
                  <figcaption>Before</figcaption>
                </figure>
                <figure>
                  <img src={client.afterImage} alt={client.afterAlt} loading="lazy" />
                  <figcaption>After</figcaption>
                </figure>
              </div>
            )}
            <div className="transformation-copy">
              <span className="card-kicker">{client.programType} · {client.duration}</span>
              <h3>{client.name}</h3>
              <strong>{client.headline}</strong>
              <p>{client.story}</p>
              <ul>
                {client.results.map((result) => <li key={result}>{result}</li>)}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Reviews() {
  const summary = demoData.reviewSummary;

  return (
    <section className="reviews" id="reviews" aria-labelledby="reviews-title">
      <SectionHeading id="reviews-title" title="Reviews From the Squad" label="Social Proof" />
      <div className="review-summary">
        <div className="review-score reveal">
          <span>{summary.rating}</span>
          <div className="star-row" aria-label={`${summary.rating} out of 5 stars`}><Stars rating={summary.rating} /></div>
          <p>{summary.count} demo reviews</p>
        </div>
        <div className="rating-bars reveal">
          {summary.distribution.map((row) => (
            <div className="rating-bar" key={row.stars}>
              <span>{row.stars} star</span>
              <i><b style={{ "--bar-width": `${Number(row.percent) || 0}%` }}></b></i>
              <em>{row.percent}%</em>
            </div>
          ))}
        </div>
        <div className="theme-list reveal">
          <strong>Common themes</strong>
          <ul>
            {summary.themes.map((theme) => <li key={theme}>{theme}</li>)}
          </ul>
        </div>
      </div>
      <div className="testimonial-grid">
        {demoData.testimonials.map((testimonial) => (
          <article className="testimonial-card reveal" key={testimonial.name}>
            <div className="testimonial-meta">
              <span className="avatar-badge" aria-hidden="true">{testimonial.avatar}</span>
              <div>
                <h3>{testimonial.name}</h3>
                <p>{testimonial.descriptor}</p>
              </div>
            </div>
            <div className="star-row" aria-label={`${testimonial.rating} out of 5 stars`}><Stars rating={testimonial.rating} /></div>
            <blockquote>{testimonial.quote}</blockquote>
            <strong>{testimonial.result}</strong>
          </article>
        ))}
      </div>
    </section>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <rect x="3" y="3" width="18" height="18" rx="5" ry="5"></rect>
      <circle cx="12" cy="12" r="4"></circle>
      <circle cx="17.5" cy="6.5" r="1.1"></circle>
    </svg>
  );
}

function InstagramSection() {
  useEffect(() => {
    const existingScript = document.querySelector('script[src="//www.instagram.com/embed.js"]');

    if (window.instgrm?.Embeds) {
      window.instgrm.Embeds.process();
      return;
    }

    if (!existingScript) {
      const script = document.createElement("script");
      script.src = "//www.instagram.com/embed.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <section className="instagram-section reveal" aria-labelledby="instagram-title">
      <div className="instagram-intro">
        <div>
          <p className="chip">Recent Posts</p>
          <h2 id="instagram-title">Follow The Work</h2>
          <p>Training clips, client wins, gym updates, and behind-the-scenes coaching from No Limits ATX.</p>
        </div>
        <a className="instagram-card" href="https://www.instagram.com/nolimits_atx/" target="_blank" rel="noopener noreferrer" aria-label="Follow No Limits Fitness on Instagram">
          <InstagramIcon />
          <span>Follow @nolimits_atx</span>
        </a>
      </div>
      <div className="instagram-post-grid" aria-label="Recent Instagram posts">
        {demoData.instagramPosts.map((postUrl) => (
          <article className="instagram-post-card" key={postUrl}>
            <blockquote
              className="instagram-media"
              data-instgrm-permalink={postUrl}
              data-instgrm-version="14"
            >
              <a href={postUrl} target="_blank" rel="noopener noreferrer">View this post on Instagram</a>
            </blockquote>
          </article>
        ))}
      </div>
    </section>
  );
}

function Trainer() {
  return (
    <section className="trainer" id="trainer" aria-labelledby="trainer-title">
      <div className="trainer-image" role="img" aria-label="Diverse group of No Limits Fitness clients with their trainer in a gym"></div>
      <div className="trainer-copy reveal">
        <p className="chip">Trainer Bio</p>
        <h2 id="trainer-title">Built for people who want direction, not noise.</h2>
        <p>No Limits Fitness exists for people who are tired of guessing. The coaching style is direct, practical, and personal: understand the client, build the plan around real life, then use accountability to keep the next step clear.</p>
        <p>The experience is designed for beginners, returners, busy professionals, and driven athletes who want to build strength without burning out. Training focuses on quality movement, sustainable nutrition habits, measurable progress, and confidence that carries beyond the gym floor.</p>
        <dl>
          <div><dt>Philosophy</dt><dd>Personalized training, clear standards, sustainable progress</dd></div>
          <div><dt>Coaching Style</dt><dd>Hands-on instruction, practical planning, direct accountability</dd></div>
          <div><dt>Best For</dt><dd>Beginners, returners, busy professionals, and driven athletes</dd></div>
        </dl>
        <div className="credential-grid">
          {demoData.credentials.map((credential) => (
            <article className="credential-card reveal" key={credential.label}>
              <span>{credential.label}</span>
              <strong>{credential.value}</strong>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const formRef = useRef(null);
  const dialogRef = useRef(null);
  const [note, setNote] = useState("");

  const handlePhoneInput = (event) => {
    event.target.value = formatPhoneNumber(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = formRef.current;
    const phoneInput = form?.elements.phone;

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    const phoneDigits = phoneInput?.value.replace(/\D/g, "") ?? "";

    if (phoneDigits && phoneDigits.length !== 10) {
      setNote("Phone number must be exactly 10 digits.");
      phoneInput.focus();
      return;
    }

    setNote("");
    dialogRef.current?.showModal();
    form.reset();
  };

  return (
    <section className="contact" id="contact" aria-label="Book a free consultation with No Limits Fitness">
      <div className="reveal">
        <p className="chip">Start Here</p>
        <h2>Book a Free Consultation</h2>
        <p>Reach out about coaching, training options, or the best starting path for your goals.</p>
      </div>
      <form className="contact-form reveal" ref={formRef} onSubmit={handleSubmit}>
        <label><span className="label-row"><strong>Name</strong><em>(required)</em></span><input name="name" autoComplete="name" placeholder="Your name" required /></label>
        <label><span className="label-row"><strong>Email</strong><em>(required)</em></span><input name="email" type="email" autoComplete="email" placeholder="you@example.com" required /></label>
        <label><span className="label-row"><strong>Phone</strong><em>(optional)</em></span><input name="phone" type="tel" autoComplete="tel" inputMode="numeric" pattern="\([0-9]{3}\)-[0-9]{3}-[0-9]{4}" maxLength="20" placeholder="(555) 555-5555" title="Enter a 10-digit phone number" onInput={handlePhoneInput} /></label>
        <label>Goal<textarea name="mission" placeholder="What goal are we chasing?"></textarea></label>
        <button type="submit">Book a Free Consultation</button>
        <p className="form-note" role="status">{note}</p>
      </form>
      <dialog className="confirmation-dialog" aria-labelledby="confirmation-title" ref={dialogRef}>
        <div className="dialog-panel">
          <img className="dialog-orb" src={dialogOrbImage} alt="" aria-hidden="true" />
          <h2 id="confirmation-title">Consultation request received.</h2>
          <p>Thanks for reaching out. No Limits Fitness will follow up with the next step.</p>
          <button className="red-button close-dialog" type="button" onClick={() => dialogRef.current?.close()}>Close</button>
        </div>
      </dialog>
    </section>
  );
}

function formatPhoneNumber(value) {
  const digits = value.replace(/\D/g, "").slice(0, 10);
  const area = digits.slice(0, 3);
  const prefix = digits.slice(3, 6);
  const line = digits.slice(6, 10);

  if (digits.length > 6) {
    return `(${area})-${prefix}-${line}`;
  }

  if (digits.length > 3) {
    return `(${area})-${prefix}`;
  }

  if (digits.length > 0) {
    return `(${area}`;
  }

  return "";
}

function Faq() {
  const [openItems, setOpenItems] = useState({});

  return (
    <section className="faq" id="faq" aria-labelledby="faq-title">
      <SectionHeading id="faq-title" title="Questions Before You Start" label="FAQ" />
      <div className="faq-list">
        {demoData.faqs.map((faq, index) => {
          const answerId = `faq-answer-${index + 1}`;
          const isOpen = Boolean(openItems[index]);

          return (
            <article className="faq-item reveal" key={faq.question}>
              <h3>
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={answerId}
                  onClick={() => setOpenItems((items) => ({ ...items, [index]: !items[index] }))}
                >
                  <span>{faq.question}</span>
                  <b aria-hidden="true">{isOpen ? "−" : "+"}</b>
                </button>
              </h3>
              <div id={answerId} className="faq-answer" hidden={!isOpen}>
                <p>{faq.answer}</p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section className="final-cta reveal" aria-labelledby="final-cta-title">
      <div>
        <p className="chip">Next Move</p>
        <h2 id="final-cta-title">Ready for a plan that fits your life?</h2>
        <p>Start with a free consultation. No pressure, no guesswork, just a clear path for your goals.</p>
      </div>
      <a className="red-button primary-cta" href="#contact">Book a Free Consultation</a>
    </section>
  );
}

function MemberSite({ portalUnlocked, onUnlockPortal }) {
  const loginFormRef = useRef(null);
  const [loginNote, setLoginNote] = useState("");

  const handleLogin = (event) => {
    event.preventDefault();
    const form = loginFormRef.current;
    const username = form.elements.username.value.trim();
    const password = form.elements.password.value;

    if (username === "nolimits" && password === "nolimits") {
      setLoginNote("");
      onUnlockPortal();
      return;
    }

    setLoginNote("Incorrect username or password.");
    form.elements.password.value = "";
    form.elements.password.focus();
  };

  return (
    <div className={`member-site${portalUnlocked ? " portal-unlocked" : ""}`} id="dashboard" aria-live="polite">
      <section className="login-panel" aria-label="Member login">
        <div>
          <p className="chip">Client Access</p>
          <h1>Member Portal</h1>
          <p>Log in to view client resources, booking links, and training tools.</p>
        </div>
        <form className="login-form" ref={loginFormRef} onSubmit={handleLogin}>
          <label><span className="label-row"><strong>Username</strong><em>(required)</em></span><input name="username" autoComplete="username" required /></label>
          <label><span className="label-row"><strong>Password</strong><em>(required)</em></span><input name="password" type="password" autoComplete="current-password" required /></label>
          <button className="red-button" type="submit">Log in</button>
          <p className="login-note" role="status">{loginNote}</p>
        </form>
      </section>
      <Dashboard />
    </div>
  );
}

function Dashboard() {
  return (
    <section className="dashboard-panel" aria-label="Client dashboard">
      <div className="dashboard-hero">
        <div>
          <p className="chip">Logged In</p>
          <h1>Mission Control</h1>
          <p>Book training sessions, grab nutrition guides, and keep the next step in front of you.</p>
        </div>
        <div className="rank-box"><small>Status</small><strong>Active</strong></div>
      </div>

      <section className="booking" id="booking" aria-labelledby="booking-title">
        <div className="section-heading split">
          <h2 id="booking-title">Book Sessions</h2>
          <span>Calendly Links</span>
        </div>
        <div className="booking-grid">
          <a className="booking-card" href="https://calendly.com/ltrain-litfitness/lit-fitness-pocketlifts?month=2026-07" target="_blank" rel="noopener noreferrer">
            <span>Semi-Private</span>
            <strong>Book Gym Session</strong>
            <p>Reserve a coached semi-private training slot.</p>
          </a>
          <a className="booking-card" href={strategyCallUrl} target="_blank" rel="noopener noreferrer">
            <span>Strategy</span>
            <strong>Client Check-In Call</strong>
            <p>Use this for client plan adjustments, accountability reviews, questions, and next-step coaching.</p>
          </a>
          <a className="booking-card" href="https://calendly.com/ltrain-litfitness/lit-fitness-group-workout?month=2026-08" target="_blank" rel="noopener noreferrer">
            <span>Group</span>
            <strong>Group Workout</strong>
            <p>Sign up for the next high-energy group session.</p>
          </a>
        </div>
      </section>

      <section className="member-store" id="store" aria-labelledby="store-title">
        <div className="section-heading split">
          <h2 id="store-title">Gear Arsenal</h2>
          <span>Storefront</span>
        </div>
        <a className="booking-card store-card" href="https://a.co/d/0iSRl1Gx" target="_blank" rel="noopener noreferrer">
          <span>Amazon Store</span>
          <strong>No Limits Recommended Gear</strong>
          <p>Supplements, recovery tools, apparel, and equipment selected for clients.</p>
        </a>
      </section>

      <section className="resources" id="field-intel" aria-labelledby="resources-title">
        <div className="section-heading split">
          <h2 id="resources-title">Field Intel</h2>
          <span>Client Guides</span>
        </div>
        <div className="resource-grid">
          <a className="resource-link" href="https://firebasestorage.googleapis.com/v0/b/coach-266016.appspot.com/o/coaches%2FnQymGQ2UZ4hSiX3gWMPNavoRmB22%2Fcontent%2Ffiles%2FbrONVoRLiJaFiX4Tp8hQ%2FbrONVoRLiJaFiX4Tp8hQ.pdf?alt=media&token=91bbd200-7199-4db2-8f3d-a86e82baf8e7" target="_blank" rel="noopener noreferrer">
            <span>Guide</span>
            <strong>Holiday Eating & Supplement Guide</strong>
          </a>
          <a className="resource-link" href="https://firebasestorage.googleapis.com/v0/b/coach-266016.appspot.com/o/coaches%2FnQymGQ2UZ4hSiX3gWMPNavoRmB22%2Fcontent%2Ffiles%2FYaMy8QqlLK5XH2ALymJb%2FYaMy8QqlLK5XH2ALymJb.pdf?alt=media&token=69fbe98c-4c9d-4089-8096-051901727261" target="_blank" rel="noopener noreferrer">
            <span>Cheat Sheet</span>
            <strong>Meal Plan Swaps</strong>
          </a>
          <a className="resource-link" href="https://firebasestorage.googleapis.com/v0/b/coach-266016.appspot.com/o/coaches%2FnQymGQ2UZ4hSiX3gWMPNavoRmB22%2Fcontent%2Ffiles%2FCvUYsm4BtdRg5bGsVbk7%2FCvUYsm4BtdRg5bGsVbk7.pdf?alt=media&token=7d272fa1-6f2e-400b-9ed7-1a324eea937b" target="_blank" rel="noopener noreferrer">
            <span>Nutrition</span>
            <strong>Compliance Tips</strong>
          </a>
          <a className="resource-link" href="https://firebasestorage.googleapis.com/v0/b/coach-266016.appspot.com/o/coaches%2FnQymGQ2UZ4hSiX3gWMPNavoRmB22%2Fcontent%2Ffiles%2F0XxGMt0KXyeEUugL29dL%2F0XxGMt0KXyeEUugL29dL.png?alt=media&token=abc3eeea-bc66-47d4-adbf-94a0c81e3d83" target="_blank" rel="noopener noreferrer">
            <span>Meals</span>
            <strong>Recipes & Meals</strong>
          </a>
          <a className="resource-link" href="https://firebasestorage.googleapis.com/v0/b/coach-266016.appspot.com/o/coaches%2FnQymGQ2UZ4hSiX3gWMPNavoRmB22%2Fcontent%2Ffiles%2FHI9WhrbTqTVEXSW6t6KH%2FHI9WhrbTqTVEXSW6t6KH.png?alt=media&token=e28eb9d6-bb31-4ee9-a843-ccbdf4ae7a97" target="_blank" rel="noopener noreferrer">
            <span>Success</span>
            <strong>Success Cheat Sheet</strong>
          </a>
        </div>
      </section>
    </section>
  );
}

function MobileTabs({ view, onShowPublic, onShowMember, onLogout }) {
  return (
    <>
      <nav className="mobile-tabs public-tabs" aria-label="Public mobile navigation">
        <a href="#top">Home</a>
        <a href="#services">Programs</a>
        <a href="#results">Results</a>
        <a href="#contact">Book</a>
        <button className="login-toggle" type="button" onClick={onShowMember}>Login</button>
      </nav>
      <nav className="mobile-tabs member-tabs" aria-label="Member mobile navigation">
        <button className="nav-home" type="button" onClick={onShowPublic}>Public</button>
        <a href="#dashboard">Dash</a>
        <a href="#booking">Book</a>
        <a href="#field-intel">Intel</a>
        <button className="logout-toggle" type="button" onClick={onLogout}>Logout</button>
      </nav>
    </>
  );
}

function Footer() {
  return (
    <footer className="footer-wrap">
      <div className="site-footer">
        <strong>No Limits Fitness</strong>
        <a href="#contact">Contact</a>
        <a className="footer-social-link" href="https://www.instagram.com/nolimits_atx/" target="_blank" rel="noopener noreferrer" aria-label="No Limits Fitness on Instagram">
          <InstagramIcon />
        </a>
        <span>&copy;2026 No Limits Fitness. Break your limits.</span>
      </div>
    </footer>
  );
}

function useRevealAnimations(dependencies) {
  useEffect(() => {
    const revealItems = document.querySelectorAll(".reveal");

    if (!revealItems.length || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      revealItems.forEach((item) => item.classList.add("is-visible"));
      return undefined;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    revealItems.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, dependencies);
}

export function App() {
  const [view, setView] = useState("public");
  const [portalUnlocked, setPortalUnlocked] = useState(false);

  useRevealAnimations([view, portalUnlocked]);

  useEffect(() => {
    document.body.classList.toggle("public-active", view === "public");
    document.body.classList.toggle("member-active", view === "member");
  }, [view]);

  const showPublic = () => {
    setView("public");
    setPortalUnlocked(false);
    resetPagePosition();
  };

  const showMember = () => {
    setView("member");
    setPortalUnlocked(false);
    resetPagePosition("#dashboard");
  };

  const unlockPortal = () => {
    setPortalUnlocked(true);
    resetPagePosition("#dashboard");
  };

  return (
    <>
      <Header view={view} onShowPublic={showPublic} onShowMember={showMember} onLogout={showPublic} />
      <main>
        <PublicSite onShowMember={showMember} />
        <MemberSite portalUnlocked={portalUnlocked} onUnlockPortal={unlockPortal} />
      </main>
      <MobileTabs view={view} onShowPublic={showPublic} onShowMember={showMember} onLogout={showPublic} />
      <Footer />
    </>
  );
}
