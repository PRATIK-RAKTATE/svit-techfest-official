import './App.css'

const registerLink = '#events'
const whatsappLink = 'https://chat.whatsapp.com/FhOfu5HY9prCO0ADMDzBzr'

const eventLinks = {
  hackverse: 'https://svit-hackverse.netlify.app/',
  projectCompetition: 'https://forms.gle/vKo3pF8Stk8Hxyzp9',
  businessPlan: 'https://forms.gle/5CKqp5rmyTjEx8vJ8',
}

const stats = [
  ['300+', 'Participants'],
  ['4+', 'Technical events'],
  ['2', 'Days of competition'],
  ['36 Hr', 'Flagship hackathon'],
  ['₹200', 'Entry fee starts'],
  ['SVIT', 'Nashik campus'],
]

const eventTeasers = [
  {
    title: 'HackVerse',
    meta: '36 Hr Hackathon',
    desc: 'Build real-world solutions in a 36-hour coding challenge.',
    href: '#hackverse',
  },
  {
    title: 'Project Competition',
    meta: 'Innovation Showcase',
    desc: 'Showcase innovative technical projects across multiple domains.',
    href: '#project-competition',
  },
  {
    title: 'Paper Presentation',
    meta: 'Research Forum',
    desc: 'Present research ideas and technical papers to expert evaluators.',
    href: '#paper-presentation',
  },
  {
    title: 'Business Plan Contest',
    meta: 'Startup Pitch',
    desc: 'Pitch startup ideas, business models, and impact-driven ventures.',
    href: '#business-plan',
  },
]

const detailSections = [
  {
    id: 'hackverse',
    eyebrow: 'Flagship Event',
    title: 'HackVerse - 36 Hour Hackathon',
    registrationHref: eventLinks.hackverse,
    overview:
      'A 36-hour hackathon where participants build innovative solutions to real-world problems and compete for prizes, internships, and startup opportunities.',
    facts: [
      ['Date', '24-25 April 2026'],
      ['Venue', 'SVIT, Nashik'],
      ['Team Size', '1-5 members'],
      ['Fee', '₹200 per student'],
    ],
    groups: [
      {
        title: 'What You Get',
        items: [
          'Cash prizes, trophy, and certificates',
          'Internship opportunities',
          "Startup mentorship by TenAI's",
          'Networking and exposure',
        ],
      },
      {
        title: 'Rules',
        items: [
          'Build during the hackathon only',
          'No plagiarism',
          'Open-source allowed, but it must be declared',
          'Team participation required',
          'Submit before the deadline',
        ],
      },
      {
        title: 'Judging Criteria',
        items: [
          'Innovation',
          'Technical implementation',
          'Practical impact',
          'Presentation',
        ],
      },
    ],
  },
  {
    id: 'business-plan',
    eyebrow: 'Entrepreneurship',
    title: 'Business Plan Contest',
    registrationHref: eventLinks.businessPlan,
    overview:
      'Present innovative business ideas focusing on real-world problems, sustainability, and technology-driven solutions.',
    facts: [
      ['Dates', '24-25 April 2026'],
      ['Time', '9:30 AM onwards'],
      ['Venue', 'SVIT, Nashik'],
      ['Team Size', '2-4 members'],
      ['Fee', '₹200 per group'],
    ],
    groups: [
      {
        title: 'Eligibility',
        items: [
          'Open to Pharmacy, Nursing, MBA, Diploma, UG, and PG Engineering students',
        ],
      },
      {
        title: 'Focus Areas',
        items: [
          'Engineering innovation',
          'Green tech and SDGs',
          'AI, IoT, and automation',
          'Waste management',
          'Social entrepreneurship',
        ],
      },
      {
        title: 'Presentation Format',
        items: ['10 minute presentation', '5 minute Q&A'],
      },
      {
        title: 'Judging Criteria',
        items: [
          'Innovation',
          'Feasibility',
          'Market potential',
          'Impact',
          'Business viability',
          'Presentation skills',
        ],
      },
      {
        title: 'Rules',
        items: [
          'Original idea only',
          'PPT submission before event',
          'Professional conduct required',
          "Judges' decision will be final",
        ],
      },
      {
        title: 'Awards',
        items: [
          '1st Prize',
          '2nd Prize',
          '3rd Prize',
          'Participation certificates',
        ],
      },
    ],
  },
  {
    id: 'project-competition',
    eyebrow: 'Build Showcase',
    title: 'Project Competition',
    registrationHref: eventLinks.projectCompetition,
    overview: 'Present innovative technical projects across multiple domains.',
    facts: [
      ['Team Size', '4 members'],
      ['Fee', '₹200 per group'],
      ['Venue', 'SVIT, Nashik'],
    ],
    groups: [
      {
        title: 'Tracks',
        items: ['Emerging Tech', 'Green Tech', 'AI and Digital'],
      },
    ],
  },
  {
    id: 'paper-presentation',
    eyebrow: 'Research Stage',
    title: 'Paper Presentation',
    overview: 'Present research papers across multiple technical domains.',
    facts: [
      ['Team Size', 'Up to 4'],
      ['Presentation', '6-10 mins + Q&A'],
      ['Venue', 'SVIT, Nashik'],
    ],
    groups: [
      {
        title: 'Tracks',
        items: [
          'Emerging Technologies',
          'Environmental and Sustainable Engineering',
          'AI and Digital Transformation',
        ],
      },
    ],
  },
]

const contacts = [
  ['Hackathon', 'Prathmesh', '9970694027'],
  ['Hackathon', 'Payal', '878898211'],
  ['Business Plan', 'Dr. D.K. Chandre', '9423065528'],
  ['Project', 'Laukik Lanke', ''],
  ['Faculty', 'Prof. Rokade', ''],
]

function App() {
  return (
    <main>
      <header className="site-header">
        <a href="#home" className="brand" aria-label="TECHX 2026 home">
          <img src="/techfest-logo.png" alt="TECHX 2026" />
        </a>
        <nav aria-label="Main navigation">
          <a href="#about">About</a>
          <a href="#events">Events</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section className="hero-section" id="home">
        <div className="hero-copy">
          <p className="kicker">SVIT Technical Fest | 24-25 April 2026</p>
          <h1>TECHX'26</h1>
          <p className="hook">Build. Compete. Innovate.</p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="#events">
              Explore Events
            </a>
            <a className="btn btn-secondary" href={registerLink}>
              Register Now
            </a>
          </div>
        </div>

        <div className="hero-mark" aria-hidden="true">
          <img src="/pravara-svit-long-logo.png" alt="" />
          <span className="orb orb-one" />
          <span className="orb orb-two" />
        </div>
      </section>

      <section className="section about-grid" id="about">
        <div>
          <p className="section-label">About TECHX</p>
          <h2>Where ideas leave the notebook and face the floor.</h2>
        </div>
        <p>
          TECHX'26 is the annual technical fest of Sir Visvesvaraya Institute of
          Technology, Nashik, bringing together students from multiple
          disciplines to showcase innovation, technical skills, and
          entrepreneurial ideas through competitive events.
        </p>
      </section>

      <section className="stats-strip" aria-label="TECHX statistics">
        {stats.map(([value, label]) => (
          <article className="stat-card" key={label}>
            <strong>{value}</strong>
            <span>{label}</span>
          </article>
        ))}
      </section>

      <section className="section" id="events">
        <div className="section-heading">
          <p className="section-label">Events</p>
          <h2>Choose your arena.</h2>
          <p>
            Quick event teasers only. Open each detail page section for rules,
            format, eligibility, and registration.
          </p>
        </div>

        <div className="event-grid">
          {eventTeasers.map((event, index) => (
            <article className="event-card" key={event.title}>
              <span className="event-number">{String(index + 1).padStart(2, '0')}</span>
              <p>{event.meta}</p>
              <h3>{event.title}</h3>
              <span>{event.desc}</span>
              <a href={event.href}>View Details</a>
            </article>
          ))}
        </div>
      </section>

      <section className="detail-stack" aria-label="Event details">
        {detailSections.map((event) => (
          <article className="detail-card" id={event.id} key={event.id}>
            <div className="detail-intro">
              <p className="section-label">{event.eyebrow}</p>
              <h2>{event.title}</h2>
              <p>{event.overview}</p>
              <a
                className="btn btn-primary"
                href={event.registrationHref || registerLink}
                target={event.registrationHref ? '_blank' : undefined}
                rel={event.registrationHref ? 'noreferrer' : undefined}
              >
                Register Now
              </a>
            </div>

            <div className="detail-content">
              <div className="fact-grid">
                {event.facts.map(([label, value]) => (
                  <div className="fact" key={`${event.id}-${label}`}>
                    <span>{label}</span>
                    <strong>{value}</strong>
                  </div>
                ))}
              </div>

              <div className="info-grid">
                {event.groups.map((group) => (
                  <section className="info-box" key={`${event.id}-${group.title}`}>
                    <h3>{group.title}</h3>
                    <ul>
                      {group.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </section>
                ))}
              </div>
            </div>
          </article>
        ))}
      </section>

      <section className="updates-section" id="updates">
        <div>
          <p className="section-label">Official Updates</p>
          <h2>Join the TECHX WhatsApp group for announcements.</h2>
        </div>
        <a className="btn btn-secondary" href={whatsappLink} target="_blank" rel="noreferrer">
          Join Official Updates Group
        </a>
      </section>

      <section className="section contact-location" id="contact">
        <div className="contact-card">
          <p className="section-label">Contact</p>
          <h2>Reach the event coordinators.</h2>
          <div className="contact-list">
            {contacts.map(([role, name, phone]) => (
              <div className="contact-row" key={`${role}-${name}`}>
                <span>{role}</span>
                <strong>{name}</strong>
                {phone ? <a href={`tel:${phone}`}>{phone}</a> : <em>Details soon</em>}
              </div>
            ))}
          </div>
        </div>

        <div className="map-card">
          <p className="section-label">Location</p>
          <h2>SVIT, Nashik</h2>
          <iframe
            title="SVIT Nashik on Google Maps"
            src="https://www.google.com/maps?q=Sir%20Visvesvaraya%20Institute%20Of%20Technology%20Nashik&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>

      <footer className="site-footer">
        Made by Pratik Raktate - Dept. Of Computer Engineering
      </footer>
    </main>
  )
}

export default App
