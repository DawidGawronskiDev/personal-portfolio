import "./styles/App.css";
import MoonIcon from "/images/dark-mode-icon.svg";

function App() {
  return (
    <>
      <header id="header" className="header">
        <div className="header-container">
          <div className="header-contianer-inner">
            <nav className="header-navigation">
              <ul className="nav-links">
                <li className="nav-link">Main Page</li>
                <li className="nav-link">About</li>
                <li className="nav-link">My Work</li>
                <li className="nav-link">Contact</li>
              </ul>
            </nav>
            <ContactMeButton />
          </div>
        </div>
        <img src={MoonIcon} alt="" />
      </header>
      <main id="hero" className="hero">
        <div className="hero-container">
          <div className="hero-text-container">
            <span className="sub-text">wannabe</span>
            <h1 className="text-xl">Web Developer</h1>
          </div>
          <span className="text-l">Dawid Gawronski</span>
        </div>
      </main>
      <section id="about" className="about">
        <div className="about-container">
          <ul>
            <li>
              <h2 className="text-l">About</h2>
              <p className="body">
                Hello! I&apos;m David, a self-taught web developer with a
                passion for creating dynamic and user-friendly websites.
                I&apos;m proud to bring a unique blend of formal education and
                diverse creative experiences to the world of web development.
              </p>
            </li>
            <li>
              <h2 className="text-l">Educational Background</h2>
              <p className="body">
                I hold a degree in IT from Technical Collage in Poland. This
                educational journey provided me with a strong foundation in
                computer science and technology, laying the groundwork for my
                career in web development.
              </p>
            </li>
            <li>
              <h2 className="text-l">Certifications</h2>
              <p className="body">
                I&apos;ve also earned the prestigious EE08 and EE09
                certifications, further affirming my expertise in IT and
                showcasing my commitment to staying at the forefront of industry
                standards and best practices.
              </p>
            </li>
          </ul>
        </div>
      </section>
      <section className="section work" id="work">
        <div className="work-container">
          <span className="text-l">My Work</span>
          <h1 className="text-xl">COMING SOON...</h1>
        </div>
      </section>
      <section id="contact" className="contact">
        <div className="contact-container">
          <h2 className="text-l">Let&apos;s Collaborate</h2>
          <p className="body">
            I&apos;m excited to collaborate with individuals and businesses
            looking to harness the power of technology and creativity in their
            web projects. If you&apos;re seeking a web developer who combines a
            strong educational background with a passion for artistic
            expression, I&apos;m here to bring your digital dreams to life.
          </p>
          <ContactMeButton />
        </div>
      </section>
      <footer id="footer" className="footer">
        <p>© 2023 Dawid Gawronski</p>
      </footer>
    </>
  );
}

function ContactMeButton() {
  return <button className="button contact-me-button">Contact Me</button>;
}

export default App;
