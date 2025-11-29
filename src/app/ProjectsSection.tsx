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
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div style={{
      ...styles.card,
      backgroundImage: `url(${project.image})`,
      backgroundSize: 'cover',
    //   backgroundSize: '80%',
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
    setIsTransitioning(true);
    setCurrentIndex(index);
    setTimeout(() => setIsTransitioning(false), 500);
  };


  const goToNext = useCallback(() => {
    const nextIndex = (currentIndex + 1) % filteredProjects.length;
    goToSlide(nextIndex);
  }, [currentIndex, filteredProjects.length]);

  const goToPrev = useCallback(() => {
    const prevIndex = currentIndex === 0 ? filteredProjects.length - 1 : currentIndex - 1;
    goToSlide(prevIndex);
  }, [currentIndex, filteredProjects.length]);


  useEffect(() => {
    if (filteredProjects.length === 0) return;
    
    const interval = setInterval(() => {
      goToNext();
    }, 5000);

    return () => clearInterval(interval);
  }, [goToNext, filteredProjects.length]);

  if (filteredProjects.length === 0) {
    return (
      <section style={styles.section}>
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
    <section style={styles.section}>
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

        <div style={styles.carouselWrapper}>
            {filteredProjects.length > 1 && (
                <button onClick={goToPrev} style={styles.navButton}>
                <MoveLeft absoluteStrokeWidth size={18}/>
                </button>
            )}

            <div style={styles.carouselContainer} ref={carouselRef}>
                <div 
                style={{
                    ...styles.carouselTrack,
                    transform: `translateX(-${currentIndex * 100}%)`
                }}
                >
                {filteredProjects.map((project, idx) => (
                    <div key={idx} style={styles.carouselSlide}>
                    <ProjectCard project={project} />
                    </div>
                ))}
                </div>
            </div>

            {filteredProjects.length > 1 && (
                <button onClick={goToNext} style={styles.navButton}>
                <MoveRight absoluteStrokeWidth size={18}/>
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
    maxWidth: '1400px',
    margin: '0 auto',
  },
  sectionTitle: {
    fontFamily: 'Karantina, sans-serif',
    letterSpacing: '0.4rem',
    fontSize: '120px',
    color: "#27272a",
    fontWeight: 'bold',
    textAlign: 'center' as const,
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
    minHeight: '520px',
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
    fontSize: '2.5rem',
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
    width: "70%"
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
    padding: '0.75rem 2rem',
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
    padding: '0.75rem 2rem',
    cursor: 'pointer',
    transition: 'all 0.3s',
  },
  navButton: {
    width: '48px',
    height: '48px',
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
  },
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