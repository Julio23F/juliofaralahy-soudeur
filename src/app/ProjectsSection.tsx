import React, { useState, useRef, useEffect, useCallback } from 'react';
import { MoveRight, MoveLeft, Download, Github, ArrowUpRight, X } from "lucide-react"

interface Project {
  title: string;
  description: string;
  image: string;
  images?: string[];
  tags: string[];
  gradient: string;
  type: string;
  status: string;
  apk: string;
  github?: string;
  isShowing?: "apk" | "github" | "none";
}

interface ProjectCardProps {
  project: Project;
  style?: React.CSSProperties;
  onOpenModal: (project: Project) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, style, onOpenModal }) => {
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
              {
                project.isShowing === "github" && project.github ? (
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <button
                      style={{
                        ...styles.secondaryButton,
                        opacity: project.github ? 1 : 0.5,
                        cursor: project.github ? "pointer" : "not-allowed"
                      }}
                      disabled={!project.github}
                      // onClick={onOpenModal}
                    >
                      <span>Github</span>
                      <Github absoluteStrokeWidth size={18} />
                    </button>
                  </a>

                ) : project.isShowing === "apk" && project.apk ? (
                  <button
                    style={{
                      ...styles.secondaryButton,
                      opacity: project.apk ? 1 : 0.5,
                      cursor: project.apk ? "pointer" : "not-allowed"
                    }}
                    disabled={!project.apk}
                    onClick={() => onOpenModal(project)}
                  >
                    <span>Télécharger</span>
                    <Download absoluteStrokeWidth size={18} />
                  </button>
                ) : null
              }

              
              <button style={styles.detailsButton} onClick={() => onOpenModal(project)}>
                  <span>Détails</span>
                  <ArrowUpRight absoluteStrokeWidth size={18}/>
              </button>
            </div>
        </div>
      </div>
    </div>
  );
};

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface ProjectDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: Project | null;
}

const ProjectDetailsModal: React.FC<ProjectDetailsModalProps> = ({ isOpen, onClose, project }) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  
  if (!isOpen || !project) return null;

  const images = project.images && project.images.length > 0 ? project.images : [project.image];
  const currentImage = images[selectedImageIndex];

  const handlePrevImage = () => {
    setSelectedImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNextImage = () => {
    setSelectedImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const handleThumbnailClick = (index: number) => {
    setSelectedImageIndex(index);
  };

  return (
    <div style={styles.modalOverlay} onClick={onClose}>
      <div style={styles.projectModalContent} onClick={(e) => e.stopPropagation()}>
        <button style={styles.closeButton} onClick={onClose}>
          <X size={24} />
        </button>

        <div style={styles.projectModalBody}>
          <div style={{width: '55%',}}>
            <div style={styles.mainImageContainer}>
              <img 
                src={currentImage} 
                alt={`${project.title} - Vue principale`}
                style={styles.mainImage}
              />
              {images.length > 1 && (
                <>
                  <button 
                    style={{...styles.imageNavButton, left: '16px'}}
                    onClick={handlePrevImage}
                    aria-label="Image précédente"
                  >
                    <MoveLeft size={20} />
                  </button>
                  <button 
                    style={{...styles.imageNavButton, right: '16px'}}
                    onClick={handleNextImage}
                    aria-label="Image suivante"
                  >
                    <MoveRight size={20} />
                  </button>
                </>
              )}
            </div>
            {/* <p style={styles.otherPicturesTitle}>D'autres images</p> */}
            {images.length > 1 && (
              <div style={styles.thumbnailsContainer}>
                {images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleThumbnailClick(idx)}
                    style={{
                      ...styles.thumbnail,
                      border: idx === selectedImageIndex ? '3px solid #3b82f6' : '2px solid #e5e7eb',
                      opacity: idx === selectedImageIndex ? 1 : 0.6,
                    }}
                  >
                    <img 
                      src={img} 
                      alt={`${project.title} - Vue ${idx + 1}`}
                      style={styles.thumbnailImage}
                    />
                  </button>
                ))}
              </div>
            )}
            
            
          </div>
          

          <div style={styles.projectDetailsSection}>
            <h2 style={styles.projectModalTitle}>{project.title}</h2>
            <p style={styles.projectModalDescription}>{project.description}</p>
            
            <div style={styles.tagsContainerModal}>
              {project.tags.map((tag, idx) => (
                <span key={idx} style={styles.tagModal}>
                  {tag}
                </span>
              ))}
            </div>
            <div className='mt-5'>
              <a href={project.github} target="_blank" rel="noopener noreferrer">
                <button
                  style={{
                    ...styles.secondaryButton,
                    opacity: project.github ? 1 : 0.5,
                    cursor: project.github ? "pointer" : "not-allowed"
                  }}
                  disabled={!project.github}
                  // onClick={onOpenModal}
                >
                  <span>Github</span>
                  <Github absoluteStrokeWidth size={18} />
                </button>
              </a>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

const ConstructionModal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div style={styles.modalOverlay} onClick={onClose}>
      <div style={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <button style={styles.closeButton} onClick={onClose}>
          <X size={24} />
        </button>
        
        <div style={styles.modalBody}>
          <div style={styles.emojiContainer}>
            😔
          </div>
          <h2 style={styles.modalTitle}>Oops !</h2>
          <p style={styles.modalText}>
            Cette page est encore en construction
          </p>
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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  const filter = externalFilter !== undefined ? externalFilter : internalFilter;
  const setFilter = externalSetFilter || setInternalFilter;

  const allProjects: Project[] = [
    {
      title: "musevibes",
      description: "Application mobile de streaming musical",
      image: "/images/musevibes.jpeg",
      images: ["/images/musevibes.jpeg", "/images/itakalo.webp", "/images/musevibes.jpeg"],
      tags: ["Figma", "Dart", "Flutter", "PostgreSQL"],
      gradient: "linear-gradient(135deg, #d4fc79 0%, #96e6a1 100%)",
      type: "Mobile",
      status: "En développement",
      apk: "",
      github: "https://github.com/Julio23F/musevibes",
      isShowing: "github",
    },
    {
      title: "i-TAKALO",
      description: "Application mobile de don et vente des articles, divers vêtements et autres.",
      image: "/images/itakalo.webp",
      images: ["/images/itakalo.webp"],
      tags: ["Typescript", "React Native", "PostgreSQL", "Django"],
      gradient: "linear-gradient(135deg, #d8b4fe 0%, #fbcfe8 50%, #fef08a 100%)",
      type: "Web",
      status: "Terminé",
      apk: "",
      github: "https://github.com/Julio23F/itakalo-mobile",
      isShowing: "github",

    },
    {
      title: "domestik",
      description: "Application mobile collaborative de gestion des tâches",
      image: "/images/domestik.jpeg",
      images: ["/images/domestik.jpeg"],
      tags: ["Figma", "Dart", "Flutter", "Laravel"],
      gradient: "linear-gradient(135deg, #bfdbfe 0%, #ddd6fe 50%, #fbcfe8 100%)",
      type: "Mobile",
      status: "Terminé",
      apk: "",
      github: "https://github.com/Julio23F/domestiK",
      isShowing: "github",

    },
    {
      title: "Agritech",
      description: "Solution mobile connectée pour la qualité des produits agricoles",
      image: "/images/agritech.jpeg",
      images: ["/images/agritech.jpeg", "/images/agritech.jpeg"],
      tags: ["Figma", "React Native", "Firebase"],
      gradient: "linear-gradient(135deg, #bbf7d0 0%, #bfdbfe 50%, #ddd6fe 100%)",
      type: "Mobile",
      status: "Terminé",
      apk: "",
      github: "https://github.com/Julio23F/agri_tech",
      isShowing: "none",

    },
    {
      title: "youstudy",
      description: "Projet réalisé pour faciliter l'étude en ligne. L'objectif du site est de connecter les enseignants avec les étudiants.",
      image: "/images/youstudy.jpeg",
      images: ["/images/youstudy.jpeg"],
      tags: ["Wireframe", "HTML CSS", "Components", "User interface", "Prototype", "Figma"],
      gradient: "linear-gradient(135deg, #d8b4fe 0%, #fbcfe8 50%, #fef08a 100%)",
      type: "Web",
      status: "Terminé",
      apk: "",
      github: "",
      isShowing: "none",
    },
    {
      title: "portfolio",
      description: "C'était mon tout premier portfolio. Je l'ai conçu et réalisé uniquement avec HTML et CSS.",
      image: "/images/portfolio.jpeg",
      images: ["/images/portfolio.jpeg"],
      tags: ["Wireframe", "HTML & CSS", "User interface", "Prototype", "Figma"],
      gradient: "linear-gradient(135deg, #d8b4fe 0%, #fbcfe8 50%, #fef08a 100%)",
      type: "Web",
      status: "Terminé",
      apk: "",
      github: "",
      isShowing: "none",
    },
    {
      title: "portfolio2",
      description: "C'était mon second portfolio, dans lequel j'ai apporté plusieurs améliorations par rapport à la première version.",
      image: "/images/portfolio2.png",
      images: ["/images/portfolio2.png"],
      tags: ["Wireframe", "React Js", "Components", "User interface", "Prototype", "Figma"],
      gradient: "linear-gradient(135deg, #d8b4fe 0%, #fbcfe8 50%, #fef08a 100%)",
      type: "Web",
      status: "Terminé",
      apk: "",
      github: "",
      isShowing: "none",
    },
    {
      title: "velya",
      description: "Site web d'une ESN. J'ai voulu créer une startup, et ce site a été conçu pour la représenter en ligne.",
      image: "/images/velya.png",
      images: ["/images/velya.png"],
      tags: ["React Js", "Components", "User interface", "Prototype", "Figma"],
      gradient: "linear-gradient(135deg, #d8b4fe 0%, #fbcfe8 50%, #fef08a 100%)",
      type: "Web",
      status: "Terminé",
      apk: "",
      github: "https://github.com/Julio23F/velya",
      isShowing: "github",
    },


  ];

  const filters = ["UX/UI Design", "Web", "Mobile"];

  const filteredProjects = filter === "UX/UI Design" 
    ? allProjects 
    : allProjects.filter(project => project.type.toLowerCase() === filter.toLowerCase());

  useEffect(() => {
    setCurrentIndex(0);
  }, [filter]);

  const goToSlide = useCallback((index: number) => {
    if (isTransitioning) return;

    if (isSmallScreen && carouselRef.current) {
      const container = carouselRef.current;
      const slideWidth = container.offsetWidth;
      setIsTransitioning(true);
      container.scrollTo({ left: index * slideWidth, behavior: 'smooth' });
      setCurrentIndex(index);
      setTimeout(() => setIsTransitioning(false), 600);
      return;
    }

    setIsTransitioning(true);
    setCurrentIndex(index);
    setTimeout(() => setIsTransitioning(false), 500);
  }, [isTransitioning, isSmallScreen]);

  const goToNext = useCallback(() => {
    if (isTransitioning || filteredProjects.length === 0) return;
    const nextIndex = (currentIndex + 1) % filteredProjects.length;
    goToSlide(nextIndex);
  }, [currentIndex, filteredProjects.length, isTransitioning, goToSlide]);

  const goToPrev = useCallback(() => {
    if (isTransitioning || filteredProjects.length === 0) return;
    const prevIndex = currentIndex === 0 ? filteredProjects.length - 1 : currentIndex - 1;
    goToSlide(prevIndex);
  }, [currentIndex, filteredProjects.length, isTransitioning, goToSlide]);

  useEffect(() => {
    if (filteredProjects.length === 0) return;
    
    const interval = setInterval(() => {
      goToNext();
    }, 5000);

    return () => clearInterval(interval);
  }, [goToNext, filteredProjects.length]);

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 640px)');
    const handle = (e: MediaQueryListEvent | MediaQueryList) => setIsSmallScreen(e.matches);
    handle(mq);
    if (mq.addEventListener) {
      mq.addEventListener('change', handle);
    } else {
      mq.addListener(handle);
    }
    return () => {
      if (mq.removeEventListener) {
        mq.removeEventListener('change', handle);
      } else {
        mq.removeListener(handle);
      }
    };
  }, []);

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
    <>
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
                      onOpenModal={(proj) => {
                        setSelectedProject(proj);
                        setIsModalOpen(true);
                      }}
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

      <ProjectDetailsModal 
        isOpen={isModalOpen} 
        onClose={() => {
          setIsModalOpen(false);
          setSelectedProject(null);
        }}
        project={selectedProject}
      />
    </>
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
  } as const,
  filterContainer: {
    display: 'flex',
    justifyContent: 'center',
    gap: '12px',
    marginBottom: '40px',
    flexWrap: 'wrap' as const,
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
  },
  cardTitle: {
    fontSize: 'clamp(1.25rem, 2.5vw, 2rem)',
    fontWeight: 'bold',
    color: '#ffffff',
    marginTop: '17px',
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
    whiteSpace: 'nowrap' as const,
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
  modalOverlay: {
    position: 'fixed' as const,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1000,
    backdropFilter: 'blur(4px)',
  },
  modalContent: {
    backgroundColor: 'white',
    borderRadius: '24px',
    padding: '40px',
    maxWidth: '500px',
    width: '90%',
    position: 'relative' as const,
    boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    animation: 'modalFadeIn 0.3s ease-out',
  },
  closeButton: {
    position: 'absolute' as const,
    top: '16px',
    right: '16px',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    color: '#6b7280',
    padding: '8px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'all 0.2s',
  },
  modalBody: {
    textAlign: 'center' as const,
  },
  emojiContainer: {
    fontSize: '80px',
    marginBottom: '20px',
    animation: 'bounce 1s ease-in-out infinite',
  },
  modalTitle: {
    fontSize: '2rem',
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: '16px',
  },
  modalText: {
    fontSize: '1.125rem',
    color: '#6b7280',
    lineHeight: '1.6',
  },
  projectModalContent: {
    backgroundColor: 'white',
    borderRadius: '24px',
    width: '95%',
    maxWidth: '1400px',
    height: '85vh',
    position: 'relative' as const,
    boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column' as const,
  },
  projectModalBody: {
    display: 'flex',
    gap: '24px',
    padding: '40px',
    overflowY: 'auto' as const,
    height: '100%',
    flex: 1,
  },
  mainImageContainer: {
    position: 'relative' as const,
    flex: '0 0 50%',
    minWidth: '0',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f3f4f6',
    borderRadius: '16px',
    overflow: 'hidden',
    height: '500px',
    width: '100%',
  },
  mainImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover' as const,
    display: 'block',
  },
  imageNavButton: {
    position: 'absolute' as const,
    top: '50%',
    transform: 'translateY(-50%)',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    border: 'none',
    color: 'white',
    width: '44px',
    height: '44px',
    borderRadius: '50%',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'all 0.3s ease',
    zIndex: 10,
  },
  projectDetailsSection: {
    flex: '0 0 380px',
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '16px',
    overflowY: 'auto' as const,
  },
  projectModalTitle: {
    fontSize: '1.875rem',
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: '8px',
  },
  otherPicturesTitle: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: '#1f2937',
    marginTop: '8px',
    marginBottom: '0',
  },
  projectModalDescription: {
    fontSize: '0.95rem',
    color: '#6b7280',
    lineHeight: '1.6',
  },
  tagsContainerModal: {
    display: 'flex',
    flexWrap: 'wrap' as const,
    gap: '8px',
  },
  tagModal: {
    backgroundColor: '#ccfd16',
    padding: '6px 12px',
    borderRadius: '12px',
    fontSize: '0.8rem',
    color: '#1f2937',
    fontWeight: '600',
  },
  thumbnailsContainer: {
    display: 'flex',
    gap: '8px',
    overflowX: 'auto' as const,
    paddingTop: '25px',
  },
  thumbnail: {
    width: '95px',
    height: '95px',
    borderRadius: '8px',
    backgroundColor: '#f3f4f6',
    cursor: 'pointer',
    overflow: 'hidden',
    transition: 'all 0.3s ease',
    flexShrink: 0,
  },
  thumbnailImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover' as const,
    display: 'block',
  },
};

export default ProjectsSection;