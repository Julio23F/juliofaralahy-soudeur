import React, { useState, useRef, useEffect, useCallback } from 'react';
import { MoveRight, MoveLeft, Download, ArrowUpRight } from "lucide-react"

interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  gradient: string;
  type: string;
  status: string;
  apk: string;
}

interface ProjectCardProps {
  project: Project;
  style?: React.CSSProperties;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, style }) => {
  return (
    <div style={{
      ...styles.card,
      ...style,
      backgroundImage: `url(${project.image})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    }}>
      <div style={styles.statusBadge}>
        {project.status}
      </div>
      
      <div style={styles.cardContent}>
        <div style={styles.cardProjectDescription}>
            <div style={styles.tagsContainer}>
                {project.tags.map((tag, idx) => (
                <span key={idx} style={styles.tag}>
                    {tag}
                </span>
                ))}
            </div>
            
            <h3 style={styles.cardTitle}>{project.title}</h3>
            <p style={styles.cardDescription}>{project.description}</p>
            <div style={styles.cardButtonActions}>
                <button 
                    style={{
                        ...styles.secondaryButton,
                        opacity: project.apk === "" ? 0.5 : 1,
                        cursor: project.apk === "" ? "not-allowed" : "pointer"
                      }}
                    disabled={project.apk === ""}
                    
                    onClick={() => window.open(`${project.apk}`, "_blank")}
                >
                    <span>Télécharger</span>
                    <Download absoluteStrokeWidth size={18} />
                </button>
                <button style={styles.detailsButton}>
                    <span>Détails</span>
                    <ArrowUpRight absoluteStrokeWidth size={18}/>
                </button>
            </div>
        </div>
      </div>
    </div>
  );
};

interface ProjectsSectionProps {
  filter?: string;
  setFilter?: (filter: string) => void;
}

const ProjectsSection: React.FC<ProjectsSectionProps> = ({ 
  filter: externalFilter, 
  setFilter: externalSetFilter 
}) => {
  const [internalFilter, setInternalFilter] = useState("UX/UI Design");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  const filter = externalFilter !== undefined ? externalFilter : internalFilter;
  const setFilter = externalSetFilter || setInternalFilter;

  const allProjects: Project[] = [
    {
      title: "musevibes",
      description: "Application mobile de streaming musical",
      image: "/images/musevibes.jpeg",
      tags: ["Figma", "Typescript", "React Native", "NativeWind", "PostgreSQL", "NestJS"],
      gradient: "linear-gradient(135deg, #d4fc79 0%, #96e6a1 100%)",
      type: "Mobile",
      status: "En développement",
      apk: "/apk/base.apk",
    },
    {
      title: "i-TAKALO",
      description: "Application mobile de don et vente des articles, divers vêtements et autres.",
      image: "/images/itakalo.webp",
      tags: ["Audit", "User research", "User Journey map", "User persona", "Carte empathie", "User flow", "Wireframe", "Components", "User interface", "Prototype", "Figma"],
      gradient: "linear-gradient(135deg, #d8b4fe 0%, #fbcfe8 50%, #fef08a 100%)",
      type: "Web",
      status: "Terminé",
      apk: "/apk/base.apk",
    },
    {
      title: "domestik",
      description: "Application mobile collaborative de gestion des tâches",
      image: "/images/domestik.jpeg",
      tags: ["En phase analyse", "Figma", "Wireframe", "User flow", "Components", "User Interface", "Prototypage"],
      gradient: "linear-gradient(135deg, #bfdbfe 0%, #ddd6fe 50%, #fbcfe8 100%)",
      type: "Mobile",
      status: "Terminé",
      apk: "",
    },
    {
      title: "Agritech",
      description: "Solution mobile connectée pour la qualité des produits agricoles",
      image: "/images/agritech.jpeg",
      tags: ["En développement", "Figma", "Audit", "User flow", "Wireframe", "Components", "User Interface", "Prototypage"],
      gradient: "linear-gradient(135deg, #bbf7d0 0%, #bfdbfe 50%, #ddd6fe 100%)",
      type: "Mobile",
      status: "Terminé",
      apk: "",
    },

    {
        title: "portfolio",
        description: "Etude de cas UX/UI design d'une application de taxi moto locale",
        image: "/images/portfolio.jpeg",
        tags: ["Audit", "User research", "User Journey map", "User persona", "Carte empathie", "User flow", "Wireframe", "Components", "User interface", "Prototype", "Figma"],
        gradient: "linear-gradient(135deg, #d8b4fe 0%, #fbcfe8 50%, #fef08a 100%)",
        type: "Web",
        status: "Terminé",
        apk: "",
    },
    {
        title: "portfolio2",
        description: "Etude de cas UX/UI design d'une application de taxi moto locale",
        image: "/images/portfolio2.png",
        tags: ["Audit", "User research", "User Journey map", "User persona", "Carte empathie", "User flow", "Wireframe", "Components", "User interface", "Prototype", "Figma"],
        gradient: "linear-gradient(135deg, #d8b4fe 0%, #fbcfe8 50%, #fef08a 100%)",
        type: "Web",
        status: "Terminé",
        apk: "",
    },
    {
        title: "velya",
        description: "Etude de cas UX/UI design d'une application de taxi moto locale",
        image: "/images/velya.png",
        tags: ["Audit", "User research", "User Journey map", "User persona", "Carte empathie", "User flow", "Wireframe", "Components", "User interface", "Prototype", "Figma"],
        gradient: "linear-gradient(135deg, #d8b4fe 0%, #fbcfe8 50%, #fef08a 100%)",
        type: "Web",
        status: "Terminé",
        apk: "",
    },
    {
        title: "youstudy",
        description: "Etude de cas UX/UI design d'une application de taxi moto locale",
        image: "/images/youstudy.jpeg",
        tags: ["Audit", "User research", "User Journey map", "User persona", "Carte empathie", "User flow", "Wireframe", "Components", "User interface", "Prototype", "Figma"],
        gradient: "linear-gradient(135deg, #d8b4fe 0%, #fbcfe8 50%, #fef08a 100%)",
        type: "Web",
        status: "Terminé",
        apk: "",
    },
  ];

  const filters = ["UX/UI Design", "Web", "Mobile"];

  const filteredProjects = filter === "UX/UI Design" 
    ? allProjects 
    : allProjects.filter(project => project.type.toLowerCase() === filter.toLowerCase());

  useEffect(() => {
    setCurrentIndex(0);
  }, [filter]);

  const goToSlide = (index: number) => {
    if (isTransitioning) return;

    // On small screens, perform a smooth scroll to the slide
    if (isSmallScreen && carouselRef.current) {
      const container = carouselRef.current;
      const slideWidth = container.offsetWidth;
      setIsTransitioning(true);
      container.scrollTo({ left: index * slideWidth, behavior: 'smooth' });
      setCurrentIndex(index);
      // allow scroll animation to finish
      setTimeout(() => setIsTransitioning(false), 600);
      return;
    }

    setIsTransitioning(true);
    setCurrentIndex(index);
    setTimeout(() => setIsTransitioning(false), 500);
  };


  const goToNext = useCallback(() => {
    if (isTransitioning || filteredProjects.length === 0) return;
    const nextIndex = (currentIndex + 1) % filteredProjects.length;
    goToSlide(nextIndex);
  }, [currentIndex, filteredProjects.length, isTransitioning]);

  const goToPrev = useCallback(() => {
    if (isTransitioning || filteredProjects.length === 0) return;
    const prevIndex = currentIndex === 0 ? filteredProjects.length - 1 : currentIndex - 1;
    goToSlide(prevIndex);
  }, [currentIndex, filteredProjects.length, isTransitioning]);


  useEffect(() => {
    if (filteredProjects.length === 0) return;
    
    const interval = setInterval(() => {
      goToNext();
    }, 5000);

    return () => clearInterval(interval);
  }, [goToNext, filteredProjects.length]);

  // Detect small screens to enable touch/scroll behavior
  useEffect(() => {
    const mq = window.matchMedia('(max-width: 640px)');
    const handle = (e: MediaQueryListEvent | MediaQueryList) => setIsSmallScreen(e.matches);
    handle(mq);
    if (mq.addEventListener) mq.addEventListener('change', handle as any);
    else mq.addListener(handle as any);
    return () => {
      if (mq.removeEventListener) mq.removeEventListener('change', handle as any);
      else mq.removeListener(handle as any);
    };
  }, []);

  // When on small screens, update currentIndex based on scroll position
  useEffect(() => {
    if (!isSmallScreen || !carouselRef.current) return;
    const container = carouselRef.current;
    let rafId: number | null = null;

    const onScroll = () => {
      if (!container) return;
      if (rafId !== null) return;
      rafId = window.requestAnimationFrame(() => {
        const slideWidth = container.offsetWidth;
        const idx = Math.round(container.scrollLeft / slideWidth);
        if (idx !== currentIndex) setCurrentIndex(idx);
        rafId = null;
      });
    };

    container.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      container.removeEventListener('scroll', onScroll);
      if (rafId) window.cancelAnimationFrame(rafId);
    };
  }, [isSmallScreen, currentIndex]);

  if (filteredProjects.length === 0) {
    return (
      <section style={{...styles.section, padding: '60px 200px',}}>
        <div style={styles.container}>
          <h2 style={styles.sectionTitle}>PROJETS</h2>
          
          <div style={styles.filterContainer}>
            {filters.map((filterOption) => (
              <button
                key={filterOption}
                onClick={() => setFilter(filterOption)}
                style={filter === filterOption ? styles.filterButtonActive : styles.filterButton}
              >
                {filterOption}
              </button>
            ))}
          </div>

          <div style={styles.emptyState}>
            <p style={styles.emptyText}>Aucun projet disponible pour cette catégorie.</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section style={{...styles.section, ...(isSmallScreen ? {padding: '60px 0px'} : {})}} id="projects">
      <div style={{...styles.container}}>
        <h2 style={styles.sectionTitle}>PROJETS</h2>
        
        <div style={styles.filterContainer}>
          {filters.map((filterOption) => (
            <button
              key={filterOption}
              onClick={() => setFilter(filterOption)}
              style={filter === filterOption ? styles.filterButtonActive : styles.filterButton}
            >
              {filterOption}
            </button>
          ))}
        </div>

        <div style={{...styles.carouselWrapper}}>
          {/* Hide nav buttons on small screens, allow touch scrolling */}
          {!isSmallScreen && filteredProjects.length > 1 && (
            <button onClick={goToPrev} style={styles.navButton}>
              <MoveLeft absoluteStrokeWidth size={18} />
            </button>
          )}

          <div
            style={isSmallScreen ? { ...styles.carouselContainer, overflowX: 'auto', WebkitOverflowScrolling: 'touch', scrollSnapType: 'x mandatory', scrollBehavior: 'smooth', paddingLeft: '2px', paddingRight: '2px', boxSizing: 'border-box'} : styles.carouselContainer}
            ref={carouselRef}
          >
            <div
              style={isSmallScreen ? { ...styles.carouselTrack, transform: undefined, gap: '0', display: 'flex' } : { ...styles.carouselTrack, transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {filteredProjects.map((project, idx) => (
                <div
                  key={idx}
                  style={isSmallScreen ? { ...styles.carouselSlide, minWidth: '100%', flex: '0 0 100%', scrollSnapAlign: 'center', scrollSnapStop: 'always', marginLeft: "10px", marginRight: "10px" } : styles.carouselSlide}
                >
                  <ProjectCard
                    project={project}
                    style={isSmallScreen ? { width: '100%', minHeight: 'min(600px, 75vh)' } : undefined}
                  />
                </div>
              ))}
            </div>
          </div>

          {!isSmallScreen && filteredProjects.length > 1 && (
            <button onClick={goToNext} style={styles.navButton}>
              <MoveRight absoluteStrokeWidth size={18} />
            </button>
          )}
        </div>

        {filteredProjects.length > 1 && (
          <div style={styles.pagination}>
            {filteredProjects.map((_, idx) => (
              <button
                key={idx}
                onClick={() => goToSlide(idx)}
                style={idx === currentIndex ? styles.dotActive : styles.dot}
                aria-label={`Aller au projet ${idx + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

const styles = {
  section: {
    padding: '60px 20px',
  },
  container: {
    maxWidth: 'min(1400px, 99%)',
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
  filterContainer: {
    display: 'flex',
    justifyContent: 'center',
    gap: '12px',
    marginBottom: '40px',
    flexWrap: 'wrap' as const,
  },
  filterButton: {
    padding: '10px 24px',
    borderRadius: '24px',
    border: 'none',
    backgroundColor: '#e5e7eb',
    color: '#6b7280',
    fontSize: '14px',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
  },
  filterButtonActive: {
    padding: '10px 24px',
    borderRadius: '24px',
    border: 'none',
    backgroundColor: '#3b82f6',
    color: '#ffffff',
    fontSize: '14px',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
  },
  carouselWrapper: {
    display: 'flex',
    alignItems: 'center',
    gap: '20px',
    marginBottom: '30px',
  },
  carouselContainer: {
    flex: 1,
    overflow: 'hidden',
    position: 'relative' as const,
  },
  carouselTrack: {
    display: 'flex',
    transition: 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
  },
  carouselSlide: {
    minWidth: '100%',
    display: 'flex',
    justifyContent: 'center',
  },
  card: {
    position: "relative" as const,
    width: '90%',
    borderRadius: '24px',
    overflow: 'hidden',
    boxShadow: 'none',
    minHeight: 'min(600px, 75vh)',
  },
  statusBadge: {
    position: 'absolute' as const,
    top: '24px',
    left: '24px',
    backgroundColor: '#ffffff',
    color: '#1f2937',
    padding: '8px 16px',
    borderRadius: '16px',
    fontSize: '14px',
    fontWeight: '600',
    zIndex: 2,
  },
  cardContent: {
    position: 'absolute' as const,
    top: '0px',
    bottom: '0px',
    left: '0px',
    right: '0px',
    display: 'flex',
    flexDirection: 'column' as const,
    justifyContent: 'center',
    background: 'linear-gradient(to top, rgba(0, 0, 0, 0.85) 0%, rgba(0, 0, 0, 0.4) 50%, rgba(0, 0, 0, 0) 100%)',
  },
  cardProjectDescription: {
    position: "absolute" as const,
    bottom: 0,
    right: 0,
    left: 0,
    padding: "20px",
    // border: "solid red 5px"
  },
  cardTitle: {
    fontSize: 'clamp(1.25rem, 2.5vw, 2rem)',
    fontWeight: 'bold',
    color: '#ffffff',
    marginTop: '17px',
    // border: "solid red 2px",
    lineHeight: "1em"
  },
  cardDescription: {
    fontSize: '1.125rem',
    color: '#ffffff',
    lineHeight: '1.7',
    marginBottom: '15px',
  },
  tagsContainer: {
    display: 'flex',
    flexWrap: 'wrap' as const,
    gap: '8px',
    width: "min(70%, 100%)"
  },
  tag: {
    backgroundColor: '#ccfd16',
    padding: '7px 10px',
    borderRadius: '16px',
    fontSize: '0.875rem',
    color: '#1f2937',
    fontWeight: '600',
  },
  cardButtonActions: {
    display: "flex",
    gap: '1em'
  },
  detailsButton: {
    display: 'inline-flex',
    gap: '0.7rem',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '0.6rem 1rem',
    backgroundColor: '#3b82f6',
    border: '1px solid #3b82f6',

    color: '#ffffff',
    fontSize: '16px',
    fontWeight: '600',
    // border: 'none',
    borderRadius: '24px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    alignSelf: 'flex-start',
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
    border: '1px solid #d1d5db',
    backgroundColor: 'white',
    boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    padding: '0.6rem 1rem',
    cursor: 'pointer',
    transition: 'all 0.3s',
  },
  navButton: {
    width: 'clamp(36px, 4vw, 48px)',
    height: 'clamp(36px, 4vw, 48px)',
    borderRadius: '50%',
    border: 'none',
    backgroundColor: '#ffffff',
    color: '#1f2937',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    transition: 'all 0.3s ease',
    flexShrink: 0,
  } as const,
  pagination: {
    display: 'flex',
    justifyContent: 'center',
    gap: '12px',
    marginTop: '20px',
  },
  dot: {
    width: '12px',
    height: '12px',
    borderRadius: '50%',
    border: 'none',
    backgroundColor: '#d1d5db',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    padding: 0,
  },
  dotActive: {
    width: '32px',
    height: '12px',
    borderRadius: '6px',
    border: 'none',
    backgroundColor: '#3b82f6',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    padding: 0,
  },
  emptyState: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '60px 20px',
  },
  emptyText: {
    fontSize: '1.125rem',
    color: '#6b7280',
    textAlign: 'center' as const,
  },
};

export default ProjectsSection;