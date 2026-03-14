import { useState, CSSProperties } from "react";
import { ArrowUpRight } from "lucide-react"

function AnimatedCTA() {
  const [hover, setHover] = useState(false);

  return (
    <div style={styles.ctaContainer}>
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
    </div>
  );
}


const styles: { [key: string]: CSSProperties } = {
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
}

export default AnimatedCTA;
