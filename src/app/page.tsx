"use client";

import { useState, CSSProperties } from "react";
import { Karantina } from 'next/font/google'
import { Download, ArrowUpRight } from "lucide-react"
import ProjectsSection from './ProjectsSection'

const karantina = Karantina({
  weight: ['400'],
  subsets: ['latin'],
})

// Composant Header
const Header = () => {
  return (
    <header style={styles.header}>
      <div style={styles.headerContainer}>
        <div style={styles.logoContainer}>
          <img 
            src="/images/logo.png" 
            alt="Logo" 
            style={styles.rotate }
          />

        </div>
        <button style={styles.menuButton}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <rect width="24" height="2" fill="currentColor" />
            <rect y="11" width="24" height="2" fill="currentColor" />
            <rect y="22" width="24" height="2" fill="currentColor" />
          </svg>
        </button>
      </div>
    </header>
  );
};

// Composant Hero
const HeroSection = () => {
  return (
    <section style={styles.heroSection}>
      <div style={styles.heroContainer}>
        <aside style={styles.heroTitles}>
          <h1 style={styles.title1}>DEVELOPER</h1>
          <h1 style={styles.title2}>UX/UI DESIGNER</h1>
        </aside>

        <div style={styles.heroContent}>
          <p style={styles.subtitle}>"Crée avec passion, avance avec vision"</p>
          <p style={styles.description}>
            Je me spécialise dans le développement informatique et l'UX UI design.
          </p>
        </div>

        <div style={styles.heroButtons}>
          <button style={styles.primaryButton}>
            <span>Contactez-moi</span>
            <ArrowUpRight absoluteStrokeWidth size={18}/>
          </button>
          <a 
            href="https://drive.google.com/file/d/1J73ZJI0LbSo1GHoKm_fcXTIa-5UBCMma/view?usp=sharing" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{ textDecoration: "none" }}
          >
            <button style={styles.secondaryButton}>
              <span>Voir mon CV</span>
              <Download absoluteStrokeWidth size={18} />
            </button>
          </a>

        </div>
      </div>
    </section>
  );
};

// Composant About
const AboutSection = () => {
  return (
    <section style={{...styles.section}}>
      <div style={styles.sectionContainer}>
        <h2 style={styles.sectionTitle} className={`${karantina.className}`}>MES PROPOS</h2>
        <p style={styles.aboutText}>
        Passionné par la création numérique 💡, je conçois et développe des interfaces web et mobiles avec JavaScript, React.js et React Native. Je travaille aussi sur le backend avec Python, en utilisant notamment le framework Django, pour construire des applications fiables et bien organisées.
        </p>
      </div>
    </section>
  );
};


// Composant Expertise
// const ExpertiseCard = ({ expertise }: { expertise: any }) => {
  const ExpertiseCard = ({ expertise }: { expertise: { icon: string; title: string; description: string } }) => {
  return (
    <div style={styles.expertiseCard}>
      <div style={styles.expertiseContent}>
        {expertise.icon ? (
          <div style={styles.expertiseIconContainer}>
            <img src={expertise.icon} alt={expertise.title} style={styles.expertiseIcon} />
          </div>
        ) : null}
        <div>
          <h3 style={styles.expertiseTitle}>{expertise.title}</h3>
          <p style={styles.expertiseDescription}>{expertise.description}</p>
        </div>
      </div>
    </div>
  );
};

// Composant Distinctions
const DistinctionsSection = () => {
  const distinctions = [
    {
      icon: "/images/trophy.svg",
      title: "2ème place — FNE PITCH Contest 2025",
      description: "Concours de projet organisé par la Maison de l'Entrepreneuriat et du Développement lors du forum national des entrepreneurs"
    },
    {
      icon: "/images/trophy.svg",
      title: "2ème place — Hackathon IFM 2025",
      description: "Hackathon organisé par l'institut français de Madagascar"
    },
    
    // {
    //   icon: "/images/trophy.svg",
    //   title: "2ème place — Hackathon",
    //   description: "2em place hackation"
    // }
  ];

  return (
    <section style={styles.section}>
      <div style={styles.mediumSectionContainer}>
        <h2 style={styles.sectionTitle}>PRIX & DISTINCTIONS</h2>
        <div style={styles.expertisesGrid}>
          {distinctions.map((distinction, idx) => (
            <ExpertiseCard key={idx} expertise={distinction} />
          ))}
        </div>
      </div>
    </section>
  );
};


// Composant Expertises
const ExpertisesSection = () => {
  const expertises = [
    {
      icon: "https://ext.same-assets.com/405950729/3232410086.svg",
      title: "Développement Web",
      description: "Je conçois et développe une application web performante et évolutif."
    },
    {
      icon: "https://ext.same-assets.com/405950729/1435191985.svg",
      title: "Développement Mobile",
      description: "Je conçois, développe et distribue des applications mobiles android, avec une compétence élargie dans le domaine"
    },
    {
      icon: "https://ext.same-assets.com/405950729/1730093051.svg",
      title: "Analyse & conception - UX/UI Design",
      description: "Je réalise des audits, analyse, conception et prototypage pour divers applicaitons, que ce soit web ou mobile"
    },
    {
      icon: "https://ext.same-assets.com/405950729/4180290346.svg",
      title: "Intégration",
      description: "Je réalise des intégrations des prototype, des UI dans Figma pour les transformer en code"
    },
    {
      icon: "https://ext.same-assets.com/405950729/4045969482.svg",
      title: "Refont application",
      description: "Je réalise des audits et des analyses pour mieux concevoir une interface plus évolutif et viable"
    }
  ];

  return (
    <section style={styles.section}>
      <div style={styles.mediumSectionContainer}>
        <h2 style={styles.sectionTitle}>EXPERTISES</h2>
        <div style={styles.expertisesGrid}>
          {expertises.map((expertise, idx) => (
            <ExpertiseCard key={idx} expertise={expertise} />
          ))}
        </div>
      </div>
    </section>
  );
};

// Composant Certifications
const CertificationsSection = () => {
  return (
    <section style={styles.section}>
      <div style={styles.sectionContainer}>
        <h2 style={styles.sectionTitle}>CERTIFICATIONS</h2>
        <div style={styles.certificationContainer}>
          <div style={styles.certificationImageContainer}>
            <img
              src="https://ext.same-assets.com/405950729/233610112.jpeg"
              alt="Certification"
              style={styles.certificationImage}
            />
          </div>
          <div style={styles.paginationDots}>
            <div style={{...styles.dot, ...styles.dotActive}} />
            <div style={styles.dot} />
            <div style={styles.dot} />
          </div>
        </div>
      </div>
    </section>
  );
};

// Composant Tools
const ToolsSection = ({ filter, setFilter }: { filter: string; setFilter: (filter: string) => void }) => {
  const toolsByCategory: { [key: string]: string[] } = {
    "UX/UI Design": [
      "Figma", "Adobe XD", "Rive editor"
    ],
    "Front-end": [
      "React", "TypeScript", "JavaScript", "HTML", "CSS", "Tailwind CSS", 
      "Responsive Design"
    ],
    "Back-end": [
      "Python", "Django", "PostgreSQL", "REST API", 
      "Authentication", "Deployment"
    ],
    "Mobile": [
      "React Native", "Android", "iOS", "Expo", 
      "Mobile UI/UX", "App Distribution", "Push Notifications", "Offline Storage", "Performance"
    ],
    // "Desktop": [
    //   "Electron", "Qt", "C#", ".NET", "Windows API", "macOS Development", "Linux", 
    //   "Cross-platform", "Desktop UI", "System Integration", "File Management", "Performance"
    // ],
    "Base de donnée": [
      "PostgreSQL", "Firebase", "SQLite", "MySQL", "Redis",
      "Data Modeling", "Optimization"
    ],
    // "Graphisme": [
    //   "Figma", "Adobe Photoshop", "Adobe Illustrator", "Adobe After Effects", "UI Design", 
    //   "Branding", "Logo Design", "Typography", "Color Theory", "Motion Design", "Icon Design"
    // ]
  };

  const tools = toolsByCategory[filter] || toolsByCategory["UX/UI Design"];

  return (
    <section style={styles.section}>
      <div style={styles.mediumSectionContainer}>
        <h2 style={styles.sectionTitle}>LANGAGES & OUTILS</h2>

        <div style={styles.filterContainer}>
          {["Front-end", "Back-end", "Mobile", "Base de donnée", "UX/UI Design"].map((filterOption) => (
            <button
              key={filterOption}
              onClick={() => setFilter(filterOption)}
              style={filter === filterOption ? styles.filterButtonActive : styles.filterButton}
            >
              {filterOption}
            </button>
          ))}
        </div>

        <div style={styles.toolsList}>
          {tools.map((tool) => (
            <span key={tool} style={styles.toolItem}>{tool} •</span>
          ))}
        </div>

        <div style={styles.ctaContainer}>
          <button style={styles.ctaButton}>Discutons ensemble</button>
        </div>
      </div>
    </section>
  );
};

// Small inline SVG icons (white paths) used inside colored squares
const GitHubSVG = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="white" viewBox="0 0 256 256">
    <path d="M216,104v8a56.06,56.06,0,0,1-48.44,55.47A39.8,39.8,0,0,1,176,192v40a8,8,0,0,1-8,8H104a8,8,0,0,1-8-8V216H72a40,40,0,0,1-40-40A24,24,0,0,0,8,152a8,8,0,0,1,0-16,40,40,0,0,1,40,40,24,24,0,0,0,24,24H96v-8a39.8,39.8,0,0,1,8.44-24.53A56.06,56.06,0,0,1,56,112v-8a58.14,58.14,0,0,1,7.69-28.32A59.78,59.78,0,0,1,69.07,28,8,8,0,0,1,76,24a59.75,59.75,0,0,1,48,24h24a59.75,59.75,0,0,1,48-24,8,8,0,0,1,6.93,4,59.74,59.74,0,0,1,5.37,47.68A58,58,0,0,1,216,104Z"/>
  </svg>
  
);

const LinkedInSVG = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="white" viewBox="0 0 256 256">
    <path d="M216,24H40A16,16,0,0,0,24,40V216a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V40A16,16,0,0,0,216,24ZM96,176a8,8,0,0,1-16,0V112a8,8,0,0,1,16,0ZM88,96a12,12,0,1,1,12-12A12,12,0,0,1,88,96Zm96,80a8,8,0,0,1-16,0V140a20,20,0,0,0-40,0v36a8,8,0,0,1-16,0V112a8,8,0,0,1,15.79-1.78A36,36,0,0,1,184,140Z"/>
  </svg>
);

const FacebookSVG = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="white" viewBox="0 0 256 256">
  {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="50" height="50" fill="white" aria-hidden> */}
    <path d="M232,128a104.16,104.16,0,0,1-91.55,103.26,4,4,0,0,1-4.45-4V152h24a8,8,0,0,0,8-8.53,8.17,8.17,0,0,0-8.25-7.47H136V112a16,16,0,0,1,16-16h16a8,8,0,0,0,8-8.53A8.17,8.17,0,0,0,167.73,80H152a32,32,0,0,0-32,32v24H96a8,8,0,0,0-8,8.53A8.17,8.17,0,0,0,96.27,152H120v75.28a4,4,0,0,1-4.44,4A104.15,104.15,0,0,1,24.07,124.09c2-54,45.74-97.9,99.78-100A104.12,104.12,0,0,1,232,128Z"/>
  </svg>
);

// Composant Footer
const Footer = () => {
  const socialLinks = [
    { Svg: GitHubSVG, href: 'https://github.com/Julio23F' },
    { Svg: LinkedInSVG, href: 'https://www.linkedin.com/in/julio-faralahy/' },
    { Svg: FacebookSVG, href: 'https://www.facebook.com/julio.faralahy.5' },
  ];

  return (
    <footer style={styles.footer}>
      <div style={{...styles.footerContainer}}>
        <div >
          <div style={styles.footerLogoContainer}>
            <img src="/images/logo.png" alt="Logo" style={{...styles.footerLogo, ...styles.rotate}} />
          </div>

          <div style={styles.footerInfo}>
            <h3 style={styles.footerName}>FARALAHY Julio</h3>
            <p style={styles.footerEmail}>juliofaralahy23@gmail.com</p>
          </div>
        </div>

        <div style={{...styles.socialContainer}}>
          {socialLinks.map((s, idx) => {
            const Svg = s.Svg;
            return (
              <a key={idx} href={s.href} style={styles.socialLink} target="_blank" rel="noopener noreferrer" aria-label={`social-${idx}`}>
                <Svg />
              </a>
            );
          })}
        </div>

        <div style={{...styles.footerBottom}}>
          <p style={styles.footerText}>© 2025 - Tous droits réservés.</p>
          {/* <div style={styles.footerLinks}>
            <a href="#" style={styles.footerLink}>Mentions légales</a>
            <a href="#" style={styles.footerLink}>Politique de confidentialité</a>
          </div> */}
          <p style={styles.footerDesigner}>DESIGNED BY ME</p>
        </div>
      </div>
    </footer>
  );
};

// Composant Principal
export default function Home() {
  const [projectFilter, setProjectFilter] = useState("UX/UI Design");
  const [toolFilter, setToolFilter] = useState("UX/UI Design");

  return (
    <main style={styles.main}>
      <Header />
      <HeroSection />
      <AboutSection />
      <ProjectsSection filter={projectFilter} setFilter={setProjectFilter} />
      {/* <ExpertisesSection /> */}
      <DistinctionsSection />
      {/* <CertificationsSection /> */}
      <ToolsSection filter={toolFilter} setFilter={setToolFilter} />
      {/* <Footer /> */}
    </main>
  );
}

// Styles
// Styles avec typage correct
const styles: { [key: string]: CSSProperties } = {
  main: {
    minHeight: '100vh',
    // backgroundColor: "red"
  },

  // Header
  header: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 50,
    padding: '1rem 1.5rem',
  },
  headerContainer: {
    maxWidth: 'min(80rem, 95%)',
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logoContainer: {
    width: '3.25rem',
    height: '3.25rem',
    backgroundColor: '#2b2834',
    borderRadius: '1.25rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoImage: {
    width: '2.5rem',
    height: '2.5rem',
  },
  menuButton: {
    width: '3rem',
    height: '3rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
  },
  rotate: {
    transform: "rotate(15deg)"
  },

  // Hero Section
  heroSection: {
    minHeight: 'clamp(50vh, 70vh, 70vh)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 'clamp(1rem, 3vw, 3rem) 0.5rem clamp(0.5rem, 2vw, 1.5rem)',
  },
  heroContainer: {
    maxWidth: 'min(56rem, 95%)',
    margin: '0 auto',
    width: '100%',
    paddingTop: 'clamp(2rem, 4vw, 4rem)',
  },
  heroTitles: {
    fontFamily: 'Karantina, sans-serif',
    color: '#27272a',
  },
  title1: {
    letterSpacing: 'clamp(0.15rem, 2vw, 0.5rem)',
    fontSize: 'clamp(4rem, 12vw, 9rem)',
    fontWeight: 'bolder',
    margin: 0,
    lineHeight: "0.9em"
  },
  title2: {
    lineHeight: "0.9em",
    letterSpacing: 'clamp(0.15rem, 2vw, 0.5rem)',
    fontSize: 'clamp(4rem, 12vw, 9rem)',
    background: 'linear-gradient(135deg, #4169e8 0%, red 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    fontWeight: 'bolder',
    margin: 0,
  },
  heroContent: {
    marginTop: "2em",
    maxWidth: 'min(42rem, 95%)',
    lineHeight: '1.1'
  },
  subtitle: {
    fontSize: 'clamp(1rem, 2.5vw, 1.5rem)',
    fontWeight: '600',
    marginBottom: '1.25rem',
  },
  description: {
    fontSize: 'clamp(0.9rem, 1.6vw, 1rem)',
    color: '#374151',
  },
  heroButtons: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '1rem',
    paddingTop: '2rem',
  },
  primaryButton: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.5rem',
    whiteSpace: 'nowrap',
    borderRadius: '9999px',
    fontSize: '1rem',
    fontWeight: '500',
    backgroundColor: '#3b82f6',
    color: 'white',
    boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
    padding: '0.65rem 1.25rem',
    border: 'none',
    cursor: 'pointer',
    transition: 'all 0.3s',
  },
  secondaryButton: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.7rem',
    whiteSpace: 'nowrap',
    borderRadius: '9999px',
    fontSize: '1rem',
    fontWeight: '500',
    border: '2px solid #d1d5db',
    backgroundColor: 'white',
    boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    padding: '0.65rem 1.25rem',
    cursor: 'pointer',
    transition: 'all 0.3s',
  },
  
  // Sections
  section: {
    padding: '3rem 1.5rem',
  },
  sectionContainer: {
    maxWidth: 'min(56rem, 95%)',
    margin: '0 auto',
    textAlign: 'center',
  },
  mediumSectionContainer: {
    maxWidth: 'min(64rem, 95%)',
    margin: '0 auto',
  },
  largeSectionContainer: {
    maxWidth: 'min(72rem, 95%)',
    margin: '0 auto',
  },
  sectionTitle: {
    letterSpacing: '0.4rem',
    fontSize: 'clamp(4rem, 8vw, 6rem)',
    color: "#27272a",
    fontFamily: 'Karantina, sans-serif',
    fontWeight: 'bolder',
    textAlign: 'center',
    width: 'min(90%, 800px)',
    lineHeight: "1.05em",
    margin: 'auto'
  },
  
  // About
  aboutText: {
    fontSize: 'clamp(1rem, 1.6vw, 1.125rem)',
    lineHeight: '1.6',
    width: 'min(75%, 95%)',
    margin: 'auto'
  },
  
  // Filters
  filterContainer: {
    display: 'flex',
    gap: '1rem',
    justifyContent: 'center',
    flexWrap: 'wrap',
    marginBottom: '3rem',
  },
  filterButton: {
    borderRadius: '9999px',
    padding: '0.5rem 1rem',
    fontSize: '0.875rem',
    fontWeight: '500',
    border: '1px solid #e5e7eb',
    backgroundColor: 'white',
    cursor: 'pointer',
    transition: 'all 0.3s',
  },
  filterButtonActive: {
    borderRadius: '9999px',
    padding: '0.5rem 1rem',
    fontSize: '0.875rem',
    fontWeight: '500',
    backgroundColor: '#3b82f6',
    color: 'white',
    border: 'none',
    cursor: 'pointer',
  },
  
  // Projects
  projectsGrid: {
    display: 'grid',
    gap: '2rem',
    gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
  },
  projectCard: {
    position: 'relative',
    overflow: 'hidden',
    borderRadius: '1.5rem',
    padding: '2rem',
  },
  projectContent: {
    position: 'relative',
    zIndex: 10,
  },
  tagsContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '0.5rem',
    marginBottom: '1rem',
  },
  tag: {
    padding: '0.25rem 0.75rem',
    backgroundColor: '#c6c737',
    color: 'black',
    fontSize: '0.75rem',
    fontWeight: 'bold',
    borderRadius: '9999px',
  },
  projectImageContainer: {
    display: 'flex',
    justifyContent: 'center',
    margin: '2rem 0',
  },
  projectImage: {
    width: '100%',
    maxHeight: 'min(24rem, 45vh)',
    objectFit: 'cover',
  },
  projectTitle: {
    fontSize: 'clamp(1.25rem, 2.5vw, 2.25rem)',
    fontWeight: '900',
    marginBottom: '0.5rem',
  },
  projectDescription: {
    marginBottom: '1rem',
  },
  detailsButton: {
    borderRadius: '9999px',
    backgroundColor: '#3b82f6',
    color: 'white',
    padding: '0.75rem 1.5rem',
    fontWeight: '500',
    border: 'none',
    cursor: 'pointer',
  },
  
  // Expertises
  expertisesGrid: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
    width: '100%',
  },
  expertiseCard: {
    padding: '2rem',
    borderRadius: '1.5rem',
    boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
    backgroundColor: 'white',
    border: '1px solid #e5e7eb',
    transition: 'box-shadow 0.3s',
    width: '100%',
  },
  expertiseContent: {
    display: 'flex',
    gap: '1.5rem',
    alignItems: 'flex-start',
  },
  expertiseIconContainer: {
    flexShrink: 0,
  },
  expertiseIcon: {
    width: '3rem',
    height: '3rem',
  },
  expertiseTitle: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    marginBottom: '0.5rem',
  },
  expertiseDescription: {
    color: '#4b5563',
  },
  
  // Certifications
  certificationContainer: {
    position: 'relative',
  },
  certificationImageContainer: {
    display: 'flex',
    justifyContent: 'center',
  },
  certificationImage: {
    borderRadius: '1.5rem',
    maxWidth: 'min(42rem, 95%)',
    width: '100%',
  },
  paginationDots: {
    display: 'flex',
    justifyContent: 'center',
    gap: '0.5rem',
    marginTop: '2rem',
  },
  dot: {
    width: '0.75rem',
    height: '0.75rem',
    borderRadius: '9999px',
    backgroundColor: '#d1d5db',
  },
  dotActive: {
    backgroundColor: '#3b82f6',
  },
  
  // Tools
  toolsList: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '0.75rem',
    justifyContent: 'center',
    marginBottom: '3rem',
  },
  toolItem: {
    fontSize: '1rem',
  },
  ctaContainer: {
    display: 'flex',
    justifyContent: 'center',
  },
  ctaButton: {
    borderRadius: '9999px',
    padding: '1.5rem 2rem',
    fontSize: '1rem',
    backgroundColor: '#c6c737',
    color: 'black',
    fontWeight: '500',
    border: 'none',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
  
  // Footer
  footer: {
    backgroundColor: '#27272a',
    color: 'white',
    padding: '2rem 0 1rem',
    borderRadius: "24px",
    marginBottom: "24px"
  },
  footerContainer: {
    width: '100%',
    // maxWidth: 'min(56rem, 95%)',
    margin: '0 auto',
    textAlign: 'center',
    display: 'flex', // Responsive
    justifyContent: "space-around",
    alignItems: "center"
  },
  footerLogoContainer: {
    display: 'flex',
    justifyContent: 'center',
    // marginBottom: '2rem',
  },
  footerLogo: {
    width: '4rem',
    height: '4rem',
  },
  footerInfo: {
    marginBottom: '2rem',
    marginTop: "-5px",
  },
  footerName: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    // marginBottom: '0.5rem',
  },
  footerEmail: {
    color: '#9ca3af',
  },
  socialContainer: {
    display: 'flex',
    justifyContent: 'center',
    gap: '1.5rem',
    marginBottom: '2rem',
    // width: '100%',
    minWidth: '50%',
  },
  socialLink: {
    width: '48px',
    height: '48px',
    // backgroundColor: 'hsl(var(--primary))',
    borderRadius: '8px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'background-color 0.3s',
  },
  socialIcon: {
    width: '1.5rem',
    height: '1.5rem',
  },
  footerBottom: {
    fontSize: '0.875rem',
    color: '#9ca3af',
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start"
  },
  footerText: {
    marginBottom: '0.5rem',
  },
  footerLinks: {
    display: 'flex',
    gap: '1rem',
    justifyContent: 'center',
    marginBottom: '0.5rem',
  },
  footerLink: {
    color: '#9ca3af',
    textDecoration: 'none',
    transition: 'color 0.3s',
  },
  footerDesigner: {
    fontWeight: '600',
  },
};