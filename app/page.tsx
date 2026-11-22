const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const asset = (path: string) => `${basePath}${path}`;

const services = [
  {
    title: "Formwork Design",
    image: asset("/hero-formwork.jpg"),
    description: "Practical formwork layouts and details developed around the way the structure will be built.",
    items: ["Slabs and decks", "Walls and cores", "Columns and stairs", "Interface details"],
  },
  {
    title: "Drafting",
    image: asset("/formwork-detail.jpg"),
    description: "Clear, coordinated drawing packages that give construction teams the information they need.",
    items: ["General arrangements", "Detail drawings", "Mark-ups and revisions", "Drawing packages"],
  },
  {
    title: "Design Support",
    image: asset("/formwork-site.jpg"),
    description: "Responsive drawing and coordination support as project information develops and changes.",
    items: ["Design coordination", "Drawing reviews", "Revision management", "Project support"],
  },
];

const steps = [
  ["01", "Project brief", "We review the scope, programme, structural information and preferred formwork system."],
  ["02", "Design", "We develop a practical formwork approach around build sequence and site requirements."],
  ["03", "Draft & coordinate", "The design is documented clearly and comments are resolved with the project team."],
  ["04", "Issue", "A controlled drawing package is delivered for the next stage of construction."],
];

export default function Home() {
  return (
    <main>
      <div className="topbar">
        <span>Drafting &amp; Formwork Design</span>
        <a href="mailto:hello@formworkdesigns.com.au">hello@formworkdesigns.com.au</a>
      </div>

      <header className="site-header">
        <a className="brand" href="#top" aria-label="Formwork Designs home">
          <img src={asset("/formwork-designs-logo.png")} alt="" />
          <span>FORMWORK <b>DESIGNS</b></span>
        </a>
        <nav aria-label="Main navigation">
          <a href="#top">Home</a>
          <a href="#services">What We Do</a>
          <a href="#about">Who We Are</a>
          <a href="#process">Our Process</a>
          <a href="#contact">Contact Us</a>
        </nav>
      </header>

      <section className="hero" id="top" style={{ backgroundImage: `url(${asset("/hero-formwork.jpg")})` }}>
        <div className="hero-overlay" />
        <div className="hero-content">
          <p>FORMWORK DESIGNS</p>
          <h1>Practical design.<br />Clear documentation.</h1>
          <span>Drafting and formwork design for the construction industry</span>
          <div className="hero-buttons">
            <a href="#services">What We Do</a>
            <a href="#contact">Contact Us</a>
          </div>
        </div>
        <a className="scroll-cue" href="#services" aria-label="Scroll to services">⌄</a>
      </section>

      <section className="services section" id="services">
        <div className="section-intro centered">
          <span className="kicker">OUR SERVICES</span>
          <h2>What We Do</h2>
          <p>Focused design and drafting support for clear, buildable formwork outcomes.</p>
        </div>
        <div className="service-grid">
          {services.map((service) => (
            <article className="service-card" key={service.title}>
              <img src={service.image} alt="Concrete construction and formwork" />
              <div className="service-body">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <ul>{service.items.map((item) => <li key={item}>{item}</li>)}</ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="about section" id="about">
        <div className="about-image">
          <img src={asset("/formwork-detail.jpg")} alt="Formwork and concrete construction detail" />
          <div className="about-badge"><strong>Design</strong><span>that works on site</span></div>
        </div>
        <div className="about-copy">
          <span className="kicker">WHO WE ARE</span>
          <h2>Good drawings make difficult work simpler.</h2>
          <p>
            Formwork Designs brings practical design thinking and careful drafting together.
            We focus on drawings that are easy to read, details that can be built and
            information that supports the construction team.
          </p>
          <p>
            From early layouts through to coordinated drawing packages, our work is
            guided by buildability, accuracy and straightforward communication.
          </p>
          <a className="solid-button" href="#contact">Talk to us</a>
        </div>
      </section>

      <section className="capabilities">
        <div><strong>Buildable solutions</strong><span>Designed with sequence, access and site use in mind.</span></div>
        <div><strong>Clear drawings</strong><span>Well-organised information with practical, readable details.</span></div>
        <div><strong>Responsive support</strong><span>Coordinated revisions as the project information develops.</span></div>
      </section>

      <section className="process section" id="process">
        <div className="section-intro centered">
          <span className="kicker">HOW WE WORK</span>
          <h2>A clear path from brief to issue</h2>
        </div>
        <div className="process-grid">
          {steps.map(([number, title, description]) => (
            <article key={number}>
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="contact" id="contact">
        <div className="contact-heading">
          <span className="kicker">GET IN TOUCH</span>
          <h2>Let&apos;s discuss your project.</h2>
          <p>Send us your project details, drawings and programme requirements. We&apos;ll help define the right next step.</p>
          <a href="mailto:hello@formworkdesigns.com.au">hello@formworkdesigns.com.au</a>
        </div>
        <form className="contact-form" action="mailto:hello@formworkdesigns.com.au" method="post" encType="text/plain">
          <div className="field-row">
            <label>Name<input type="text" name="name" required /></label>
            <label>Company<input type="text" name="company" /></label>
          </div>
          <div className="field-row">
            <label>Email<input type="email" name="email" required /></label>
            <label>Phone<input type="tel" name="phone" /></label>
          </div>
          <label>Project address<input type="text" name="project-address" /></label>
          <label>Message<textarea name="message" rows={5} required /></label>
          <button type="submit">Send enquiry</button>
        </form>
      </section>

      <footer>
        <a className="brand footer-brand" href="#top">
          <img src={asset("/formwork-designs-logo.png")} alt="" />
          <span>FORMWORK <b>DESIGNS</b></span>
        </a>
        <span>Drafting &amp; formwork design</span>
        <small>© {new Date().getFullYear()} Formwork Designs</small>
      </footer>
    </main>
  );
}
