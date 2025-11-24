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
            src="https://ext.same-assets.com/405950729/2097046639.png" 
            alt="Logo" 
            style={styles.logoImage}
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
    <section style={styles.section}>
      <div style={styles.sectionContainer}>
        <h2 style={styles.sectionTitle} className={`${karantina.className}`}>MES PROPOS</h2>
        <p style={styles.aboutText}>
        Passionné par la création numérique 💡, je conçois et développe des interfaces web et mobiles avec JavaScript, React.js et React Native. Je travaille aussi sur le backend avec Python, en utilisant notamment le framework Django, pour construire des applications fiables et bien organisées.
        </p>
      </div>
    </section>
  );
};

// Composant ProjectCard
const ProjectCard = ({ project }) => {
  return (
    <div style={{...styles.projectCard, background: project.gradient}}>
      <div style={styles.projectContent}>
        <div style={styles.tagsContainer}>
          {project.tags.map((tag, i) => (
            <span key={i} style={styles.tag}>{tag}</span>
          ))}
        </div>
        <div style={styles.projectImageContainer}>
          <img src={project.image} alt={project.title} style={styles.projectImage} />
        </div>
        <div>
          <h3 style={styles.projectTitle}>{project.title}</h3>
          <p style={styles.projectDescription}>{project.description}</p>
          <button style={styles.detailsButton}>Détails →</button>
        </div>
      </div>
    </div>
  );
};

// Composant Projects
// const ProjectsSection = ({ filter, setFilter }) => {
//   const projects = [
//     {
//       title: "ALAIVO",
//       description: "Etude de cas UX/UI design d'une application de taxi moto locale",
//       image: "https://ext.same-assets.com/405950729/1359461707.png",
//       tags: ["Audit", "User research", "User Journey map", "User persona", "Carte empathie", "User flow", "Wireframe", "Components", "User interface", "Prototype", "Figma"],
//       gradient: "linear-gradient(135deg, #d8b4fe 0%, #fbcfe8 50%, #fef08a 100%)"
//     },
//     {
//       title: "SMARTSENA",
//       description: "Application réseau social d'e-commerce à Madagascar.",
//       image: "https://ext.same-assets.com/405950729/2828925519.jpeg",
//       tags: ["En phase analyse", "Figma", "Wireframe", "User flow", "Components", "User Interface", "Prototypage"],
//       gradient: "linear-gradient(135deg, #bfdbfe 0%, #ddd6fe 50%, #fbcfe8 100%)"
//     },
//     {
//       title: "i-TAKALO",
//       description: "Application mobile de don et vente des articles, divers vêtements et autres.",
//       image: "https://ext.same-assets.com/405950729/2961876309.png",
//       tags: ["En développement", "Figma", "Audit", "User flow", "Wireframe", "Components", "User Interface", "Prototypage"],
//       gradient: "linear-gradient(135deg, #bbf7d0 0%, #bfdbfe 50%, #ddd6fe 100%)"
//     }
//   ];

//   return (
//     <section style={styles.section}>
//       <div style={styles.largeSectionContainer}>
//         <h2 style={styles.sectionTitle}>PROJETS</h2>

//         <div style={styles.filterContainer}>
//           {["UX/UI Design", "Web", "Mobile"].map((filterOption) => (
//             <button
//               key={filterOption}
//               onClick={() => setFilter(filterOption)}
//               style={filter === filterOption ? styles.filterButtonActive : styles.filterButton}
//             >
//               {filterOption}
//             </button>
//           ))}
//         </div>

//         <div style={styles.projectsGrid}>
//           {projects.map((project, idx) => (
//             <ProjectCard key={idx} project={project} />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// Composant Expertise
const ExpertiseCard = ({ expertise }) => {
  return (
    <div style={styles.expertiseCard}>
      <div style={styles.expertiseContent}>
        <div style={styles.expertiseIconContainer}>
          <img src={expertise.icon} alt={expertise.title} style={styles.expertiseIcon} />
        </div>
        <div>
          <h3 style={styles.expertiseTitle}>{expertise.title}</h3>
          <p style={styles.expertiseDescription}>{expertise.description}</p>
        </div>
      </div>
    </div>
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
const ToolsSection = ({ filter, setFilter }) => {
  const tools = [
    "Audit", "UX research", "User persona", "User journey map", "User flow",
    "Wireflow", "Wireframe", "Components", "User interface", "User story"
  ];

  return (
    <section style={styles.section}>
      <div style={styles.mediumSectionContainer}>
        <h2 style={styles.sectionTitle}>LANGAGES & OUTILS</h2>

        <div style={styles.filterContainer}>
          {["UX/UI Design", "Front-end", "Back-end", "Mobile", "Desktop", "Base de donnée", "Graphisme"].map((filterOption) => (
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

// Composant Footer
const Footer = () => {
  const socialIcons = [
    "https://ext.same-assets.com/405950729/3405966200.svg",
    "https://ext.same-assets.com/405950729/1597490893.svg",
    "https://ext.same-assets.com/405950729/3570589054.svg",
    "https://ext.same-assets.com/405950729/2683347401.svg",
    "https://ext.same-assets.com/405950729/3599690651.svg"
  ];

  return (
    <footer style={styles.footer}>
      <div style={styles.footerContainer}>
        <div style={styles.footerLogoContainer}>
          <img src="https://ext.same-assets.com/405950729/2097046639.png" alt="Logo" style={styles.footerLogo} />
        </div>

        <div style={styles.footerInfo}>
          <h3 style={styles.footerName}>MARIO RALISON</h3>
          <p style={styles.footerEmail}>marioeuphraim@gmail.com</p>
        </div>

        <div style={styles.socialContainer}>
          {socialIcons.map((icon, idx) => (
            <a key={idx} href="#" style={styles.socialLink}>
              <img src={icon} alt="Social" style={styles.socialIcon} />
            </a>
          ))}
        </div>

        <div style={styles.footerBottom}>
          <p style={styles.footerText}>© 2025 - Tous droits réservés.</p>
          <div style={styles.footerLinks}>
            <a href="#" style={styles.footerLink}>Mentions légales</a>
            <a href="#" style={styles.footerLink}>Politique de confidentialité</a>
          </div>
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
      <ExpertisesSection />
      <CertificationsSection />
      <ToolsSection filter={toolFilter} setFilter={setToolFilter} />
      <Footer />
    </main>
  );
}

// Styles
// Styles avec typage correct
const styles: { [key: string]: CSSProperties } = {
  main: {
    minHeight: '100vh',
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
    maxWidth: '80rem',
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logoContainer: {
    width: '4rem',
    height: '4rem',
    backgroundColor: '#2b2834',
    borderRadius: '1.5rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoImage: {
    width: '3rem',
    height: '3rem',
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
  
  // Hero Section
  heroSection: {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '6rem 0.5rem 4rem',
  },
  heroContainer: {
    maxWidth: '56rem',
    margin: '0 auto',
    width: '100%',
  },
  heroTitles: {
    fontFamily: 'Karantina, sans-serif',
    color: '#27272a',
  },
  title1: {
    letterSpacing: '0.5rem',
    fontSize: '140px',
    fontWeight: 'bolder',
    margin: 0,
    lineHeight: "0.85em"
  },
  title2: {
    lineHeight: "0.85em",
    letterSpacing: '0.5rem',
    fontSize: '140px',
    background: 'linear-gradient(135deg, #4169e8 0%, red 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    fontWeight: 'bolder',
    margin: 0,
  },
  heroContent: {
    marginTop: "2em",
    maxWidth: '42rem',
    lineHeight: '0.6em'
  },
  subtitle: {
    fontSize: '1.25rem',
    fontWeight: '600',
    marginBottom: '1.25rem',
  },
  description: {
    fontSize: '1rem',
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
    padding: '0.75rem 2rem',
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
    padding: '0.75rem 2rem',
    cursor: 'pointer',
    transition: 'all 0.3s',
  },
  
  // Sections
  section: {
    padding: '3rem 1.5rem',
  },
  sectionContainer: {
    maxWidth: '56rem',
    margin: '0 auto',
    textAlign: 'center',
  },
  mediumSectionContainer: {
    maxWidth: '64rem',
    margin: '0 auto',
  },
  largeSectionContainer: {
    maxWidth: '72rem',
    margin: '0 auto',
  },
  sectionTitle: {
    letterSpacing: '0.4rem',
    fontSize: '120px',
    color: "#27272a",
    fontFamily: 'Karantina, sans-serif',
    fontWeight: 'bolder',
    textAlign: 'center',
    width: '50%',
    lineHeight: "1em",
    margin: 'auto'
  },
  
  // About
  aboutText: {
    fontSize: '1.125rem',
    lineHeight: '1.75',
    width: "75%",
    margin: "auto"
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
    height: '24rem',
    objectFit: 'contain',
  },
  projectTitle: {
    fontSize: '2.25rem',
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
    display: 'grid',
    gap: '1.5rem',
  },
  expertiseCard: {
    padding: '2rem',
    borderRadius: '1.5rem',
    boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
    backgroundColor: 'white',
    border: '1px solid #e5e7eb',
    transition: 'box-shadow 0.3s',
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
    maxWidth: '42rem',
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
    backgroundColor: '#2b2834',
    color: 'white',
    padding: '4rem 1.5rem',
  },
  footerContainer: {
    maxWidth: '56rem',
    margin: '0 auto',
    textAlign: 'center',
  },
  footerLogoContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '2rem',
  },
  footerLogo: {
    width: '4rem',
    height: '4rem',
  },
  footerInfo: {
    marginBottom: '2rem',
  },
  footerName: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    marginBottom: '0.5rem',
  },
  footerEmail: {
    color: '#9ca3af',
  },
  socialContainer: {
    display: 'flex',
    justifyContent: 'center',
    gap: '1.5rem',
    marginBottom: '2rem',
  },
  socialLink: {
    width: '3rem',
    height: '3rem',
    backgroundColor: 'white',
    borderRadius: '0.5rem',
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