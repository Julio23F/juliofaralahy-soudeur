"use client";

import { useState, CSSProperties } from "react";
import { Karantina, Plus_Jakarta_Sans } from 'next/font/google'
import { Download, ArrowUpRight } from "lucide-react"
import ProjectsSection from './ProjectsSection'

const karantina = Karantina({
  weight: ['400'],
  subsets: ['latin'],
})

const jakarta = Plus_Jakarta_Sans({
  weight: ['400', '500', '600', '700'], // exemple de poids
  subsets: ['latin'],
})

// Composant Header
const Header = ({ menuOpen, setMenuOpen }: { menuOpen: boolean; setMenuOpen: (open: boolean) => void }) => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  
  const menuItems = [
    { label: "À propos", id: "about" },
    { label: "Projets", id: "projects" },
    { label: "Prix & Distinctions", id: "distinctions" },
    { label: "Langages & Outils", id: "tools" },
    { label: "Contact", id: "footer" }
  ];

  const handleMenuClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMenuOpen(false);
    }
  };

  return (
    <header style={styles.header}>
      <style>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes slideUp {
          from {
            opacity: 1;
            transform: translateY(0);
          }
          to {
            opacity: 0;
            transform: translateY(-10px);
          }
        }

        @media (max-width: 768px) {
          .header-container {
            padding: 0.1em 1em !important;
          }
        }
      `}</style>
      
      <div className="header-container" style={{...styles.headerContainer, position: 'relative', flex: 1}}>
        <div style={styles.logoContainer}>
          <img 
            src="/images/logo.png" 
            alt="Logo" 
            style={styles.rotate }
          />
        </div>
        <div style={{  }}>
          <button 
            style={styles.menuButton}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M18 6L6 18M6 6l12 12" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
              </svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                {/* <rect width="24" height="2" fill="#fff" />
                <rect y="11" width="24" height="2" fill="#fff" />
                <rect y="22" width="24" height="2" fill="#fff" /> */}

                <rect width="20" height="2" fill="#fff" y="7" />
                <rect width="20" height="2" fill="#fff" y="15" />
              </svg>
            )}
          </button>
          {menuOpen && (
            <nav style={{...styles.dropdownMenu, animation: menuOpen ? 'slideDown 0.3s ease-out' : 'slideUp 0.3s ease-out'}}>
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleMenuClick(item.id)}
                  onMouseEnter={() => setHoveredItem(item.id)}
                  onMouseLeave={() => setHoveredItem(null)}
                  style={{
                    ...styles.menuItem,
                    ...(hoveredItem === item.id ? styles.menuItemHover : {})
                  }}
                >
                  {item.label}
                </button>
              ))}
              <a 
                href="https://wa.me/+2610320513845" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ textDecoration: "none", width: '100%' }}
              >
                <button style={{...styles.primaryButton, backgroundColor: '#ccfd16', color: "#000", padding: '1rem 1.25rem', marginTop: "20px", width: '100%'}}>
                  <span>Contactez-moi</span>
                  <ArrowUpRight absoluteStrokeWidth size={18}/>
                </button>
              </a>
            </nav>
          )}
        </div>
      </div>
    </header>
  );
};

// Composant Hero
// const HeroSection = () => {
//   return (
//     <section style={styles.heroSection}>
//       <div style={styles.heroContainer}>
//         <aside style={styles.heroTitles}>
//           {/* <h1 style={styles.title1}>DEVELOPER</h1>
//           <h1 style={styles.title2}>UX/UI DESIGNER</h1> */}
//           <h1 style={styles.title1}>MOBILE &</h1>
//           <h1 style={styles.title2}>WEB DEVELOPPEUR</h1>
//         </aside>

//         <div style={styles.heroContent}>
//           <p style={styles.subtitle}>"Toujours apprendre, toujours s’améliorer"</p>
//           <p style={styles.description}>
//             Je me spécialise dans le développement web avec Django et React JS.
//           </p>
//         </div>

//         <div style={styles.heroButtons}>
//           <a 
//             href="https://wa.me/+2610320513845" 
//             target="_blank" 
//             rel="noopener noreferrer"
//             style={{ textDecoration: "none" }}
//           >
//             <button style={styles.primaryButton}>
//               <span>Contactez-moi</span>
//               <ArrowUpRight absoluteStrokeWidth size={18}/>
//             </button>
//           </a>
//           <a 
//             href="https://drive.google.com/file/d/1XHuOiH-zGE_hxzyfCkMKyIenHKeWNSXE/view?usp=sharing" 
//             target="_blank" 
//             rel="noopener noreferrer"
//             style={{ textDecoration: "none" }}
//           >
//             <button style={styles.secondaryButton}>
//               <span>Voir mon CV</span>
//               <Download absoluteStrokeWidth size={18} />
//             </button>
//           </a>

//         </div>
//       </div>
//       <div style={styles.imageWrapper}>
//         <img 
//           src="/images/profile.png" 
//           alt="" 
//           style={styles.heroImage}
//         />

//         <div
//           className="absolute bottom-0 left-0 w-full h-2/5 pointer-events-none"
//           style={{
//             background: "linear-gradient(to top, rgb(248, 250, 252) 2%, rgba(0, 0, 0, 0) 100%)",
//             backdropFilter: "blur(1px)",
//             WebkitBackdropFilter: "blur(1px)"
//           }}
//         ></div>

//       </div>

//     </section>
//   );
// };
const HeroSection = () => {
  return (
    <section style={styles.heroSection}>
      <style>{`
        @media (max-width: 768px) {
          .hero-image-wrapper {
            display: none !important;
          }
        }
      `}</style>
      
      <div style={styles.heroContainer}>
        <aside style={styles.heroTitles}>
          {/* <h1 style={styles.title1}>DEVELOPER</h1>
          <h1 style={styles.title2}>UX/UI DESIGNER</h1> */}
          <h1 style={styles.title1}>MOBILE &</h1>
          <h1 style={styles.title2}>WEB DEVELOPPEUR</h1>
        </aside>

        <div style={styles.heroContent}>
          <p style={styles.subtitle}>"Toujours apprendre, toujours s’améliorer"</p>
          <p style={styles.description}>
            Je me spécialise dans le développement web avec Django et React JS.
          </p>
        </div>

        <div style={styles.heroButtons}>
          <a 
            href="https://wa.me/+2610320513845" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{ textDecoration: "none" }}
          >
            <button style={styles.primaryButton}>
              <span>Contactez-moi</span>
              <ArrowUpRight absoluteStrokeWidth size={18}/>
            </button>
          </a>
          <a 
            href="https://drive.google.com/file/d/1o8pzuQyv0kBOmDVnUPAeERTYv5vx2Fvi/view?usp=sharing" 
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

      <div className="hero-image-wrapper" style={styles.imageWrapper}>
        <img src="/images/profile.png" alt="" style={styles.heroImage} />
        <div style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100%",
          height: "40%",
          pointerEvents: "none",
          background: "linear-gradient(to top, rgb(248, 250, 252) 2%, rgba(0, 0, 0, 0) 100%)",
          backdropFilter: "blur(1px)",
          WebkitBackdropFilter: "blur(1px)"
        }} />
      </div>
    </section>
  );
};

// Composant About
const AboutSection = () => {
  return (
    <section style={{...styles.section}} id="about">
      <div style={styles.sectionContainer}>
        <h2 style={styles.sectionTitle} className={`${karantina.className}`}>MES PROPOS</h2>
        <p style={styles.aboutText}>
        {/* Passionné par la création numérique 💡, je conçois et développe des interfaces web et mobiles avec JavaScript, React.js et React Native. Je travaille aussi sur le backend avec Python, en utilisant notamment le framework Django, pour construire des applications fiables et bien organisées. */}
          J’ai toujours eu ce goût pour la création numérique 💡. Aujourd’hui, je conçois et développe des interfaces web et mobiles avec JavaScript, React.js et React Native. Je travaille aussi sur le backend avec Python, notamment avec Django, pour donner vie à des applications fiables, structurées et agréables à utiliser
        </p>
      </div>
    </section>
  );
};


// Composant Expertise
  const ExpertiseCard = ({ expertise }: { expertise: { icon: string; title: string; description: string; company: string, period: string, location: string, skills: string[] } }) => {
  return (
    <div style={styles.expertiseCard}>
      <div
        style={{
          ...styles.expertiseContent,
          alignItems: expertise.skills ? 'center' : 'flex-start',
          gap: expertise.skills ? '2rem' : '1.5rem',
        }}
      >

        {expertise.icon ? (
          <div style={styles.expertiseIconContainer}>
            <img src={expertise.icon} alt={expertise.title} style={styles.expertiseIcon} />
          </div>
        ) : null}
        <div style={{width: "100%"}}>
          <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
            <div style={{lineHeight: "1.4em", marginBottom: "10px"}}>
              <h3 style={styles.jobTitle}>{expertise.title}</h3>
              <p style={styles.companyName}>{expertise?.company}</p>
            </div>
            <div style={{ textAlign: 'right', lineHeight: "1em", }}>
                <p style={styles.period}>{expertise?.period}</p>
                <p style={styles.locationText}>{expertise?.location}</p>
            </div>
          </div>
          <p style={styles.expertiseDescription}>{expertise.description}</p>

          <div style={{ marginTop: '1rem', display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
            {expertise.skills && expertise.skills.map((s, i) => (
              <span key={i} style={styles.skillTag}>{s}</span>
            ))}
          </div>
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
      title: "3ème place — Hackathon IFM 2025",
      description: "Hackathon organisé par l'institut français de Madagascar",
    },
  ];

  return (
    <section style={styles.section} id="distinctions">
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
const ExperiencesSection = () => {
  const expertises = [
    {
      icon: "/images/softimad_logo.png",
      title: "Développeur web",
      description: "Participer à la conception et à la maintenance d'une application web avec Django et React Js",
      skills: ["Django", "React.js", "JavaScript", "HTML/CSS"],
      company: "SOFTIMAD ESN",
      period: "mai. 2024 - aujourd’hui",
      location: "Antananarivo, Madagascar",
    },
  ];

  return (
    <section style={styles.section}>
      <div style={styles.mediumSectionContainer}>
        <h2 style={styles.sectionTitle}>EXPÉRIENCES</h2>
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

// Animated CTA component (background grows from bottom to top on hover)
function AnimatedCTA() {
  const [hover, setHover] = useState(false);

  return (
    <a
      href="https://wa.me/+2610320513845"
      target="_blank"
      rel="noopener noreferrer"
      style={{ textDecoration: 'none' }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div style={{ position: 'relative', display: 'inline-block', borderRadius: '9999px', overflow: 'hidden' }}>
        <div
          style={{
            position: 'absolute',
            left: 0,
            right: 0,
            bottom: 0,
            height: hover ? '100%' : '0%',
            background: '#c6c737',
            transition: 'height 350ms cubic-bezier(.2,.8,.2,1)',
            zIndex: 0,
            
          }}
        />

        <button
          style={{
            ...styles.ctaButton,
            position: 'relative',
            zIndex: 1,
            background: 'transparent',
            border: '2px solid #c6c737',
            color: '#000',
          }}
        >
          <span style={{ position: 'relative', zIndex: 2, pointerEvents: 'none' }}>Discutons ensemble</span>
          <ArrowUpRight absoluteStrokeWidth size={18} />
        </button>
      </div>
    </a>
  );
}

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
    <section style={styles.section} id="tools">
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
          <AnimatedCTA />
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

const MailSVG = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="white" viewBox="0 0 256 256">
  {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="50" height="50" fill="white" aria-hidden> */}
    <path d="M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48Zm-8,144H40V74.19l82.59,75.71a8,8,0,0,0,10.82,0L216,74.19V192Z"/>
  </svg>
);

// Composant Footer
const Footer = () => {
  const socialLinks = [
    { Svg: GitHubSVG, href: 'https://github.com/Julio23F' },
    { Svg: LinkedInSVG, href: 'https://www.linkedin.com/in/julio-faralahy/' },
    { Svg: MailSVG, href: 'mailto:juliofaralahy23@gmail.com' },
    { Svg: FacebookSVG, href: 'https://www.facebook.com/julio.faralahy.5' },
  ];

  return (
    <footer style={styles.footer} id="footer">
      <style>
        {`
          @media (max-width: 768px) {
            .footer-container {
              display: block !important;
            }
            .footer-bottom {
              align-items: center !important;
            }
          }
        `}
      </style>
      <div className="footer-container" style={{...styles.footerContainer}}>
        <div >
          <div style={styles.footerLogoContainer}>
            <img src="/images/logo.png" alt="Logo" style={{...styles.footerLogo, ...styles.rotate}} />
          </div>

          <div style={styles.footerInfo}>
            <h3 style={styles.footerName} className={jakarta.className}>FARALAHY Julio</h3>
            <div style={{marginTop: '0.5em'}}>
              <p style={styles.footerEmail}>juliofaralahy23@gmail.com</p>
              <p style={styles.footerPhone}>+261 32 05 138 45</p>
            </div>
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

        <div className="footer-bottom" style={{...styles.footerBottom}}>
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
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main style={styles.main}>
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <HeroSection />
      <AboutSection />
      <ProjectsSection filter={projectFilter} setFilter={setProjectFilter} />
      {/* <ExperiencesSection /> */}
      <ExperiencesSection />
      <DistinctionsSection />
      {/* <CertificationsSection /> */}
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
    maxWidth: 'max(400px, 37%)',
    // maxWidth: 'min(80rem, 40%)',
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: "#2b2834",
    padding: "0.5em 1em",
    // padding: "clamp(0.7rem, 0.7em, 0.1em) 1em",
    borderRadius: '3em',
  },  
  logoContainer: {
    width: '3.25rem',
    height: '3.25rem',
    // backgroundColor: '#2b2834',
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
    padding: 'clamp(1rem, 6em, 6em) 0.5rem clamp(0.5rem, 2vw, 1.5rem)',
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
  // Hero image
  imageWrapper: {
    position: "absolute",
    right: 0,
    top: "3%",
    width: "37%",
    height: "auto",
    overflow: "hidden",
    display: "clamp(block, none, none)",
  },

  heroImage: {
    width: "100%",
    display: "block",
    filter: "none",
    
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
    padding: '5rem 1.5rem',
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
    width: 'min(77%, 95%)',
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
  experiencesList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    marginTop: '1.5rem',
  },
  experienceCard: {
    padding: '1.25rem',
    borderRadius: '1rem',
    border: '1px solid #e5e7eb',
    backgroundColor: 'white',

    display: "flex",
    flexDirection: "column",
    gap: "0.75rem"
  },
  experienceImageContainer: {
    width: '6rem',
    height: '6rem',
    borderRadius: '1rem',
    overflow: 'hidden',
    flexShrink: 0,
  },
  experienceHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    gap: '1rem',
    marginBottom: '0.75rem',
  },
  jobTitle: {
    fontSize: '1.25rem',
    fontWeight: 800,
    margin: 0,
  },
  companyName: {
    color: '#6b7280',
    marginTop: '0.25rem',
  },
  period: {
    color: '#9ca3af',
    fontSize: '0.9rem',
    margin: 0,
  },
  locationText: {
    color: '#9ca3af',
    fontSize: '0.9rem',
    marginTop: '0.25rem',
  },
  experienceDesc: {
    color: '#374151',
    marginTop: '0.5rem',
  },
  skillTag: {
    padding: '0.25rem 0.5rem',
    borderRadius: '20px',
    backgroundColor: '#f3f4f6',
    color: '#111827',
    fontSize: '0.85rem',
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
    
  },
  expertiseIconContainer: {
    flexShrink: 0,
  },
  expertiseIcon: {
    width: '5rem',
    height: '5rem',
    borderRadius: '0.75rem',
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
    padding: '1.25rem 1.75rem',
    fontSize: '1rem',
    backgroundColor: 'transparent',
    color: 'black',
    fontWeight: '600',
    border: '2px solid #c6c737',
    cursor: 'pointer',
    transition: 'color 250ms ease',
    display: 'inline-flex',
    gap: '0.5rem',
    alignItems: 'center',
    justifyContent: 'center'
  },
  
  // Footer
  footer: {
    backgroundColor: '#27272a',
    color: 'white',
    padding: '1rem 0',
    borderRadius: "24px",
    marginBottom: "24px"
  },
  footerContainer: {
    width: '100%',
    // maxWidth: 'min(56rem, 95%)',
    margin: '0 auto',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'row',
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
    // fontFamily: 'jakarta',
    // marginBottom: '0.5rem',
  },
  footerEmail: {
    color: '#9ca3af',
  },
  footerPhone: {
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
  
  // Menu Dropdown
  dropdownMenu: {
    position: 'absolute',
    top: '30%',
    left: 0,
    right: 0,
    backgroundColor: '#2b2834',
    border: '1px solid #2b2834',
    borderRadius: '0 0 1.5rem 1.5rem',
    boxShadow: '0 4px 6px rgba(253, 10, 10, 0.1)',
    zIndex: "-100",
    overflow: 'hidden',
    marginTop: '1rem',
    display: 'flex',
    flexDirection: 'column',
    padding: "30px",
    paddingTop: "35px",
    paddingBottom: "25px",
  },
  menuItem: {
    // backgroundColor: "red",
    display: 'block',
    width: '100%',
    padding: '1rem 0',
    backgroundColor: 'transparent',
    border: 'none',
    textAlign: 'left',
    fontSize: '1rem',
    fontWeight: '500',
    cursor: 'pointer',
    transition: 'background-color 0.2s',
    color: 'white',
  },
  menuItemHover: {
    // backgroundColor: '#1a1620',
    color: '#ccfd16',
  },
};

// Composant Expériences
// const ExperiencesSection = () => {
//   const experiences = [
//     {
//       title: "Développeur web",
//       company: "SOFTIMAD ESN",
//       period: "févr. 2026 - aujourd’hui · 1 mois",
//       location: "Antananarivo, Analamanga, Madagascar · Sur site",
//       description: "Participer à la conception et à la maintenance d'une application web avec Django et React Js",
//       skills: ["Python", "Django", "React"],
//       image: "/images/softimad_logo.png",
//     }
//   ];

//   return (
//     <section style={styles.section} id="experience">
//       <div style={styles.mediumSectionContainer}>
//         <h2 style={styles.sectionTitle}>EXPÉRIENCES</h2>
//         <div style={styles.experiencesList}>
//           {experiences.map((exp, idx) => (
//             <div key={idx} style={styles.experienceCard}>
//               <div style={styles.experienceImageContainer}>
//                 <img src={exp.image} alt="" />
//               </div>
//               <div>
//                 <div style={styles.experienceHeader}>
//                   <div>
//                     <h3 style={styles.jobTitle}>{exp.title}</h3>
//                     <p style={styles.companyName}>{exp.company}</p>
//                   </div>
//                   {/* <div style={{ textAlign: 'right' }}>
//                     <p style={styles.period}>{exp.period}</p>
//                     <p style={styles.locationText}>{exp.location}</p>
//                   </div> */}
//                 </div>
//                 <p style={styles.experienceDesc}>{exp.description}</p>
//                 <div style={{ marginTop: '1rem', display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
//                   {exp.skills.map((s, i) => (
//                     <span key={i} style={styles.skillTag}>{s}</span>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };
