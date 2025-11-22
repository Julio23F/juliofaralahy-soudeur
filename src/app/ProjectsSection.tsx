import React, { useState, useRef, useEffect } from 'react';

interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  gradient: string;
  type: string;
  status: string;
}

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div style={styles.card}>
        <div style={{ ...styles.cardImageContainer, background: project.gradient }}>
            <div style={styles.statusBadge}>{project.status}</div>
            <img src={project.image} alt={project.title} style={styles.cardImage} />
        </div>
        <div style={styles.cardContent}>
            <div style={styles.tagsContainer}>
            {project.tags.map((tag, idx) => (
                <span key={idx} style={styles.tag}>
                {tag}
                </span>
            ))}
            </div>
            <h3 style={styles.cardTitle}>{project.title}</h3>
            <p style={styles.cardDescription}>{project.description}</p>
            <button style={styles.detailsButton}>
            Détails
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ marginLeft: '8px' }}>
                <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
            </button>
        </div>
    </div>
  );
};

interface ProjectsSectionProps {
  filter?: string;
  setFilter?: (filter: string) => void;
}

const ProjectsSection: React.FC<ProjectsSectionProps> = ({ filter: externalFilter, setFilter: externalSetFilter }) => {
  const [internalFilter, setInternalFilter] = useState("Tous les projets");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);
  
  // Utiliser le filtre externe s'il existe, sinon utiliser le filtre interne
  const filter = externalFilter !== undefined ? externalFilter : internalFilter;
  const setFilter = externalSetFilter || setInternalFilter;

  const allProjects: Project[] = [
    {
      title: "DROPAPP",
      description: "Conception, développement et production d'une application de dropshipping",
      image: "https://ext.same-assets.com/405950729/1359461707.png",
      tags: ["Figma", "Typescript", "React Native", "NativeWind", "PostgreSQL", "NestJS"],
      gradient: "linear-gradient(135deg, #d4fc79 0%, #96e6a1 100%)",
      type: "Mobile",
      status: "En développement"
    },
    {
      title: "ALAIVO",
      description: "Etude de cas UX/UI design d'une application de taxi moto locale",
      image: "https://ext.same-assets.com/405950729/1359461707.png",
      tags: ["Audit", "User research", "User Journey map", "User persona", "Carte empathie", "User flow", "Wireframe", "Components", "User interface", "Prototype", "Figma"],
      gradient: "linear-gradient(135deg, #d8b4fe 0%, #fbcfe8 50%, #fef08a 100%)",
      type: "Web",
      status: "Terminé"
    },
    {
      title: "SMARTSENA",
      description: "Application réseau social d'e-commerce à Madagascar.",
      image: "https://ext.same-assets.com/405950729/2828925519.jpeg",
      tags: ["En phase analyse", "Figma", "Wireframe", "User flow", "Components", "User Interface", "Prototypage"],
      gradient: "linear-gradient(135deg, #bfdbfe 0%, #ddd6fe 50%, #fbcfe8 100%)",
      type: "Web",
      status: "En analyse"
    },
    {
      title: "i-TAKALO",
      description: "Application mobile de don et vente des articles, divers vêtements et autres.",
      image: "https://ext.same-assets.com/405950729/2961876309.png",
      tags: ["En développement", "Figma", "Audit", "User flow", "Wireframe", "Components", "User Interface", "Prototypage"],
      gradient: "linear-gradient(135deg, #bbf7d0 0%, #bfdbfe 50%, #ddd6fe 100%)",
      type: "Mobile",
      status: "En développement"
    }
  ];

  const filters = ["Tous les projets", "Web", "Mobile"];

  // Filtrer les projets selon le filtre sélectionné
  const filteredProjects = filter === "Tous les projets" 
    ? allProjects 
    : allProjects.filter(project => project.type.toLowerCase() === filter.toLowerCase());

  // Réinitialiser l'index quand le filtre change
  useEffect(() => {
    setCurrentIndex(0);
  }, [filter]);

  const goToSlide = (index: number) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex(index);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const goToNext = () => {
    const nextIndex = (currentIndex + 1) % filteredProjects.length;
    goToSlide(nextIndex);
  };

  const goToPrev = () => {
    const prevIndex = currentIndex === 0 ? filteredProjects.length - 1 : currentIndex - 1;
    goToSlide(prevIndex);
  };

  // Auto-play (optionnel)
  useEffect(() => {
    if (filteredProjects.length === 0) return;
    
    const interval = setInterval(() => {
      goToNext();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex, filteredProjects.length]);

  // Gérer le cas où il n'y a pas de projets filtrés
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
          {/* Bouton précédent */}
          {filteredProjects.length > 1 && (
            <button
              onClick={goToPrev}
              style={styles.navButton}
              aria-label="Projet précédent"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
          )}

          {/* Carrousel */}
          <div style={styles.carouselContainer} ref={carouselRef}>
            <div
              style={{
                ...styles.carouselTrack,
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {filteredProjects.map((project, idx) => (
                <div key={idx} style={styles.carouselSlide}>
                  <ProjectCard project={project} />
                </div>
              ))}
            </div>
          </div>

          {/* Bouton suivant */}
          {filteredProjects.length > 1 && (
            <button
              onClick={goToNext}
              style={styles.navButton}
              aria-label="Projet suivant"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          )}
        </div>

        {/* Pagination */}
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
    // backgroundColor: '#ffffff',
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
    // marginBottom: '40px',

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
    // borderRadius: '24px',
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
    width: '90%',
    backgroundColor: '#ffffff',
    borderRadius: '24px',
    overflow: 'hidden',
    boxShadow: 'none',
    display: 'flex',
    flexDirection: 'row' as const,
    minHeight: '500px',
  },
  cardImageContainer: {
    flex: '0 0 55%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '40px',
    position: 'relative' as const,
    borderRadius: '24px 0 0 24px',
  },
  statusBadge: {
    position: 'absolute' as const,
    top: '24px',
    left: '24px',
    backgroundColor: 'rgba(212, 252, 121, 0.95)',
    color: '#1f2937',
    padding: '8px 16px',
    borderRadius: '16px',
    fontSize: '14px',
    fontWeight: '600',
  },
  cardImage: {
    width: '100%',
    height: '100%',
    objectFit: 'contain' as const,
    maxHeight: '400px',
  },
  cardContent: {
    flex: '0 0 45%',
    padding: '40px',
    display: 'flex',
    flexDirection: 'column' as const,
    justifyContent: 'center',
    backgroundColor: '#f9fafb',
  },
  cardTitle: {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: '16px',
    marginTop: '20px',
  },
  cardDescription: {
    fontSize: '1.125rem',
    color: '#6b7280',
    lineHeight: '1.7',
    marginBottom: '32px',
  },
  tagsContainer: {
    display: 'flex',
    flexWrap: 'wrap' as const,
    gap: '8px',
  },
  tag: {
    backgroundColor: '#d4fc79',
    padding: '8px 16px',
    borderRadius: '16px',
    fontSize: '0.875rem',
    color: '#1f2937',
    fontWeight: '600',
  },
  detailsButton: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '14px 32px',
    backgroundColor: '#3b82f6',
    color: '#ffffff',
    fontSize: '16px',
    fontWeight: '600',
    border: 'none',
    borderRadius: '24px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    alignSelf: 'flex-start',
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