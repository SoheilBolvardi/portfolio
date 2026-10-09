import './style.css'

document.querySelector('#app').innerHTML = `
  <header class="site-header">
    <nav class="nav container">
      <a class="nav-logo" href="#home">Soheil Bolvardi</a>

      <div class="nav-links">
        <a href="#education">Education</a>
        <a href="#teaching">Teaching</a>
        <a href="#projects">Projects</a>
        <a href="#skills">Skills</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  </header>

  <main>
    <!-- Hero -->
    <section id="home" class="hero">
      <div class="container hero-content">
        <p class="eyebrow">Electrical Engineering & Mathematics</p>

        <h1>Soheil Bolvardi</h1>

        <p class="hero-description">
          I am pursuing B.Sc. degrees in Electrical Engineering and
          Mathematics at Sharif University of Technology, with interests in
          communications, signal processing and mathematical methods.
        </p>

        <div class="hero-actions">
          <a class="button button-primary" href="#projects">
            View Projects
          </a>

          <a
            class="button button-secondary"
            href="https://github.com/SoheilBolvardi"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>

    <!-- Education -->
    <section id="education" class="section">
      <div class="container">
        <div class="section-heading">
          <p class="eyebrow">Background</p>
          <h2>Education</h2>
        </div>

        <div class="education-grid">
          <article class="education-item">
            <div>
              <p class="item-label">2024–2028</p>
              <h3>B.Sc. Electrical Engineering</h3>
              <p class="item-place">
                Sharif University of Technology
              </p>
            </div>

            <div class="education-details">
              <div>
                <strong>18.93 / 20</strong>
                <span>GPA</span>
              </div>

              <div>
                <strong>Top 6.7%</strong>
                <span>Departmental Rank</span>
              </div>
            </div>
          </article>

          <article class="education-item">
            <div>
              <p class="item-label">2026–2029</p>
              <h3>B.Sc. Mathematics</h3>
              <p class="item-place">
                Sharif University of Technology
              </p>
            </div>
          </article>

          <article class="education-item">
            <div>
              <p class="item-label">
                National University Entrance Examination
              </p>

              <h3>Iranian University Entrance Examination</h3>
            </div>

            <div class="education-details">
              <div>
                <strong>42 / 137,195</strong>
                <span>National Rank</span>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- Teaching Experience -->
    <section id="teaching" class="section">
      <div class="container">
        <div class="section-heading">
          <p class="eyebrow">Academic Experience</p>
          <h2>Teaching Experience</h2>
        </div>

        <div class="teaching">
          <div class="teaching-header">
            <p class="item-label">2025–Present</p>

            <h3>Teaching Assistant</h3>

            <p class="item-place">
              Sharif University of Technology
            </p>
          </div>

          <div class="course-list">
            <div class="course-item">
              <span>Electrical Circuits I</span>
              <span class="course-count">Feb 2026 – Jul 2026</span>
            </div>

            <div class="course-item">
              <span>Electrical Circuits II</span>
              <span class="course-count">Feb 2026 – Present</span>
            </div>

            <div class="course-item">
              <span>Electrical Circuits Laboratory</span>
              <span class="course-count">Feb 2026 – Jul 2026</span>
            </div>

            <div class="course-item">
              <span>Object-Oriented Programming</span>
              <span class="course-count">Feb 2026 – Jul 2026</span>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- Projects -->
    <section id="projects" class="section projects-section">
      <div class="container">
        <div class="section-heading">
          <p class="eyebrow">Selected Work</p>
          <h2>Projects</h2>
        </div>

        <div class="projects-grid">
          <!-- Project 1 -->
          <article class="project-card featured-project">
            <div class="project-number">01</div>

            <div class="project-content">
              <p class="project-category">
                C++ · Circuit Simulation
              </p>

              <p class="project-meta">Summer 2025</p>

              <h3>Electrical Circuit Simulator</h3>

              <p>
                An object-oriented C++ circuit simulator using Modified
                Nodal Analysis (MNA), supporting DC, transient, DC sweep,
                AC frequency sweep, and phase sweep analyses through CLI
                and SDL-based graphical interfaces.
              </p>

              <div class="project-tags">
                <span>C++</span>
                <span>OOP</span>
                <span>MNA</span>
                <span>SDL</span>
              </div>

              <a
                class="project-link"
                href="https://github.com/SoheilBolvardi/Electrical-Circuit-Simulator"
                target="_blank"
                rel="noopener noreferrer"
              >
                View on GitHub →
              </a>
            </div>
          </article>

          <!-- Project 2 -->
          <article class="project-card">
            <div class="project-number">02</div>

            <div class="project-content">
              <p class="project-category">
                LTspice · Analog Electronics
              </p>

              <p class="project-meta">Summer 2026</p>

              <h3>Audio Power Amplifier</h3>

              <p>
                Design and simulation of a low-distortion Class AB audio
                power amplifier in LTspice, featuring a MOSFET differential
                input stage, a voltage gain stage, a push-pull output stage,
                and global negative feedback. Performance was evaluated
                through gain, output power, efficiency, and distortion analyses.
              </p>

              <div class="project-tags">
                <span>LTspice</span>
                <span>Class AB</span>
                <span>Feedback</span>
                <span>THD</span>
              </div>

              <a
                class="project-link"
                href="https://github.com/SoheilBolvardi/Audio-Amplifier-LTspice"
                target="_blank"
                rel="noopener noreferrer"
              >
                View on GitHub →
              </a>
            </div>
          </article>

          <!-- Project 3 -->
          <article class="project-card">
            <div class="project-number">03</div>

            <div class="project-content">
              <p class="project-category">
                MATLAB · Signal Processing
              </p>

              <p class="project-meta">Summer 2026</p>

              <h3>Speech and Siren Filtering</h3>

              <p>
                MATLAB project involving Fourier analysis and FFT-based
                frequency-domain filtering to attenuate a police siren in
                a speech recording, with comparisons of the original and
                processed signals.
              </p>

              <div class="project-tags">
                <span>MATLAB</span>
                <span>Fourier Analysis</span>
                <span>FFT</span>
                <span>Filtering</span>
              </div>

              <a
                class="project-link"
                href="https://github.com/SoheilBolvardi/Speech-and-Siren-Filtering"
                target="_blank"
                rel="noopener noreferrer"
              >
                View on GitHub →
              </a>
            </div>
          </article>

          <!-- Project 4 -->
          <article class="project-card">
            <div class="project-number">04</div>

            <div class="project-content">
              <p class="project-category">
                Next.js · Full Stack
              </p>

              <p class="project-meta">In Development</p>

              <h3>Student Collaboration Platform</h3>

              <p>
                A full-stack platform for university students to publish
                projects and find teammates. Developed core backend
                components, including database architecture, institutional
                email verification, authentication, and user validation.
              </p>

              <div class="project-tags">
                <span>Next.js</span>
                <span>TypeScript</span>
                <span>PostgreSQL</span>
                <span>Redis</span>
              </div>
            </div>
          </article>

          <!-- Project 5 -->
          <article class="project-card">
            <div class="project-number">05</div>

            <div class="project-content">
              <p class="project-category">
                Probability Theory · Mathematical Proof
              </p>

              <p class="project-meta">Winter 2025–2026</p>

              <h3>Tanaka’s Central Limit Theorem</h3>

              <p>
                A study of Tanaka’s Central Limit Theorem in the W₂
                Wasserstein metric, focusing on a coupling-based proof
                approach, with supporting notes on measure-theoretic
                probability and probability metrics.
              </p>

              <div class="project-tags">
                <span>Probability Theory</span>
                <span>Wasserstein Distance</span>
                <span>Coupling</span>
                <span>Mathematical Proof</span>
              </div>

              <a
                class="project-link"
                href="https://github.com/SoheilBolvardi/Tanaka-CLT-Study"
                target="_blank"
                rel="noopener noreferrer"
              >
                View on GitHub →
              </a>
            </div>
          </article>

          <!-- Project 6 -->
          <article class="project-card">
            <div class="project-number">06</div>

            <div class="project-content">
              <p class="project-category">
                C · ncurses
              </p>

              <p class="project-meta">Winter 2024–2025</p>

              <h3>Rogue Game</h3>

              <p>
                A Rogue-like game implemented in C, featuring procedural
                dungeon generation, combat, items, spells, save/load,
                user accounts, persistent player data, and a leaderboard.
              </p>

              <div class="project-tags">
                <span>C</span>
                <span>ncurses</span>
                <span>Game Development</span>
              </div>

              <a
                class="project-link"
                href="https://github.com/SoheilBolvardi/rogue-game"
                target="_blank"
                rel="noopener noreferrer"
              >
                View on GitHub →
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>


    <!-- Skills -->
    <section id="skills" class="section">
      <div class="container">
        <div class="section-heading">
          <p class="eyebrow">Technical</p>
          <h2>Skills</h2>
        </div>

        <div class="skills-grid">
          <div class="skill-group">
            <h3>Programming</h3>

            <p>
              C · C++ · Python · MATLAB · Verilog · Assembly · TypeScript
            </p>
          </div>

          <div class="skill-group">
            <h3>Tools & Software</h3>

            <p>
              LTspice · Git · GitHub · LaTeX · Next.js · PostgreSQL ·
              Redis · ncurses
            </p>
          </div>

          <div class="skill-group">
            <h3>Areas</h3>

            <p>
              Communications · Signal Processing · Mathematical Methods ·
              Analog Electronics
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact -->
    <section id="contact" class="section contact-section">
      <div class="container contact-content">
        <h2>Contact</h2>

        <div class="contact-links">
          <a href="mailto: soheil.bolvardi@ee.sharif.ir">
            Email
          </a>

          <a
            href="https://github.com/SoheilBolvardi"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          <a
           href="https://www.linkedin.com/in/soheil-bolvardi/"
           target="_blank" 
           rel="noopener noreferrer" 
          >
           LinkedIn 
          </a>
        </div>
      </div>
    </section>
  </main>

  <footer class="site-footer">
    <div class="container">
      <p>© 2026 Soheil Bolvardi</p>
    </div>
  </footer>
`