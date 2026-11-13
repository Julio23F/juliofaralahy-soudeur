import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { CSSProperties } from "react";
import AnimatedCTA from "@/components/ui/AnimatedCTA";

export default function BehindScenesSection() {
  return (
    <section className="py-16 md:py-24" id="coulisses">
      <div className="max-w-6xl mx-auto px-6" style={{ marginBottom: '100px' }}>
        <div className="mb-12" style={{ textAlign: "center" }}>
          {/* <h2 className="text-3xl md:text-4xl font-bold text-[#3d374a] mb-3">
            Nos coulisses
          </h2> */}
          <h2 style={styles.sectionTitle}>Mes Vidéos</h2>
          <p className="text-[#9e9ca2] text-lg">
            Découvrez mon travail en atelier : soudage, assemblage et fabrication de portails.
          </p>
        </div>

        {/* YouTube Section */}
        <div className="bg-[#fcfcfa] rounded-3xl p-6 mb-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-red-500 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </div>
              <div>
                <div className="font-semibold text-[#3d374a]">YouTube</div>
                <div className="text-sm text-[#9e9ca2]">Soudage, assemblage & réalisations</div>              </div>
            </div>
            <Link
              href="https://www.youtube.com/@julioFARALAHY"
              target="_blank"
              rel="noopener noreferrer"
              // className="flex items-center gap-2 text-red-500 hover:text-red-600 font-medium transition-colors"
              className="flex items-center gap-2 bg-red-500 text-white px-4 py-2 rounded-full font-medium hover:bg-[#2d2a38] transition-colors"

            >
              Open <ExternalLink className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-4 justify-center">
            <div className="w-full max-w-[560px] aspect-video rounded-xl overflow-hidden">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/6199-2FbUXA"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>

            <div className="w-full max-w-[560px] aspect-video rounded-xl overflow-hidden">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/jkDYrNF3ZD0"
                title="YouTube video player"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>

      <AnimatedCTA />
    </section>
  );
}
const styles: { [key: string]: CSSProperties } = {
  sectionTitle: {
    letterSpacing: '0.4rem',
    fontSize: 'clamp(4rem, 8vw, 6rem)',
    color: "#27272a",
    fontFamily: 'Karantina, sans-serif',
    fontWeight: 'bolder',
    textAlign: 'center',
    width: 'min(90%, 800px)',
    lineHeight: "1.05em",
    margin: 'auto',
    textTransform: "uppercase"
  },
}
