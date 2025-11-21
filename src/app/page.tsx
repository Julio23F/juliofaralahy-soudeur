"use client";

import { useState } from "react";
import { Karantina } from 'next/font/google'

const karantina = Karantina({
  weight: ['400'],
  subsets: ['latin'],
})

export default function Home() {
  const [projectFilter, setProjectFilter] = useState("UX/UI Design");
  const [toolFilter, setToolFilter] = useState("UX/UI Design");

  return (
    <main className="min-h-screen">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="w-16 h-16 bg-[#2b2834] rounded-3xl flex items-center justify-center">
            <img src="https://ext.same-assets.com/405950729/2097046639.png" alt="Logo" className="w-12 h-12" />
          </div>
          <button className="w-12 h-12 flex items-center justify-center">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <rect width="24" height="2" fill="currentColor" />
              <rect y="11" width="24" height="2" fill="currentColor" />
              <rect y="22" width="24" height="2" fill="currentColor" />
            </svg>
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-2 pt-24 pb-16">
  <div className="max-w-4xl mx-auto space-y-" style={{width: "100%",}}>
    <aside className={`${karantina.className}  text-center text-zinc-800 text-6xl xl:flex xl:flex-col xl:items-start xl:justify-center`}>
      <h1 className="tracking-[8px] text-zinc-800 xl:text-[140px] 2xl:text-[180px] text-5xl"
        style={{
          fontWeight: "bolder",
        }}
      >
        DEVELOPER
      </h1>
      <h1 className="tracking-[8px] -mt-6 xl:-mt-22 2xl:-mt-16 xl:text-[160px] 2xl:text-[200px] text-8xl" 
        style={{
          background: 'linear-gradient(135deg, #4169e8 0%, #8ce913 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          fontWeight: "bolder",
        }}
      >
        UX/UI DESIGNER
      </h1>
    </aside>

    <div className="space-y-5 max-w-2xl  ">
      <p className="text-lg md:text-xl font-semibold">"Crée avec passion, avance avec vision"</p>
      <p className="text-sm md:text-base text-gray-700">
        Je me spécialise dans le développement informatique et l'UX UI design.
      </p>
    </div>

    <div className="flex flex-wrap gap-4 pt-4">
      <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm md:text-base font-medium bg-primary text-primary-foreground shadow-lg hover:bg-primary/90 transition-all px-6 md:px-8 py-3 md:py-4">
        Contactez-moi →
      </button>
      <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm md:text-base font-medium border-2 border-gray-300 bg-background shadow hover:bg-gray-50 transition-all px-6 md:px-8 py-3 md:py-4">
        Voir mon CV ↓
      </button>
    </div>
  </div>
</section>

      {/* Mes Propos Section */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-5xl md:text-6xl font-black text-impact">MES PROPOS</h2>
          <p className="text-lg leading-relaxed">
            Passionné par l'informatique et le monde de design, ma double compétence, à la fois
            technique et créative, me permet de concevoir des solutions fonctionnelles, esthétiques
            et centrées sur l'utilisateur. J'ai à cœur de créer autrement, d'apporter des idées
            utiles et d'impacter positivement ceux qui m'entourent
          </p>
        </div>
      </section>

      {/* Projets Section */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto space-y-12">
          <h2 className="text-5xl md:text-6xl font-black text-impact text-center">PROJETS</h2>

          <div className="flex gap-4 justify-center flex-wrap">
            {["UX/UI Design", "Web", "Mobile"].map((filter) => (
              <button
                key={filter}
                onClick={() => setProjectFilter(filter)}
                className={`rounded-full px-4 py-2 text-sm font-medium ${
                  projectFilter === filter
                    ? "bg-primary text-primary-foreground"
                    : "border border-input bg-background"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          <div className="grid gap-8">
            {[
              {
                title: "ALAIVO",
                description: "Etude de cas UX/UI design d'une application de taxi moto locale",
                image: "https://ext.same-assets.com/405950729/1359461707.png",
                tags: ["Audit", "User research", "User Journey map", "User persona", "Carte empathie", "User flow", "Wireframe", "Components", "User interface", "Prototype", "Figma"],
                gradient: "from-purple-300 via-pink-200 to-yellow-200"
              },
              {
                title: "SMARTSENA",
                description: "Application réseau social d'e-commerce à Madagascar.",
                image: "https://ext.same-assets.com/405950729/2828925519.jpeg",
                tags: ["En phase analyse", "Figma", "Wireframe", "User flow", "Components", "User Interface", "Prototypage"],
                gradient: "from-blue-200 via-purple-200 to-pink-200"
              },
              {
                title: "i-TAKALO",
                description: "Application mobile de don et vente des articles, divers vêtements et autres.",
                image: "https://ext.same-assets.com/405950729/2961876309.png",
                tags: ["En développement", "Figma", "Audit", "User flow", "Wireframe", "Components", "User Interface", "Prototypage"],
                gradient: "from-green-200 via-blue-200 to-purple-200"
              }
            ].map((project, idx) => (
              <div key={idx} className={`relative overflow-hidden rounded-3xl bg-gradient-to-br ${project.gradient} p-8`}>
                <div className="relative z-10 space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-[#c6c737] text-black text-xs font-bold rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex justify-center my-8">
                    <img src={project.image} alt={project.title} className="h-96 object-contain" />
                  </div>
                  <div>
                    <h3 className="text-4xl font-black mb-2">{project.title}</h3>
                    <p className="mb-4">{project.description}</p>
                    <button className="rounded-full bg-primary text-primary-foreground px-6 py-3 font-medium">
                      Détails →
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertises Section */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto space-y-12">
          <h2 className="text-5xl md:text-6xl font-black text-impact text-center">EXPERTISES</h2>

          <div className="grid gap-6">
            {[
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
            ].map((expertise, idx) => (
              <div key={idx} className="p-8 rounded-3xl shadow-sm hover:shadow-md transition-shadow bg-white border">
                <div className="flex gap-6 items-start">
                  <div className="flex-shrink-0">
                    <img src={expertise.icon} alt={expertise.title} className="w-12 h-12" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{expertise.title}</h3>
                    <p className="text-gray-600">{expertise.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto space-y-12">
          <h2 className="text-5xl md:text-6xl font-black text-impact text-center">CERTIFICATIONS</h2>

          <div className="relative">
            <div className="flex justify-center">
              <img
                src="https://ext.same-assets.com/405950729/233610112.jpeg"
                alt="Certification"
                className="rounded-3xl max-w-2xl w-full"
              />
            </div>
            <div className="flex justify-center gap-2 mt-8">
              <div className="w-3 h-3 rounded-full bg-primary" />
              <div className="w-3 h-3 rounded-full bg-gray-300" />
              <div className="w-3 h-3 rounded-full bg-gray-300" />
            </div>
          </div>
        </div>
      </section>

      {/* Langages & Outils Section */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto space-y-12">
          <h2 className="text-5xl md:text-6xl font-black text-impact text-center">LANGAGES & OUTILS</h2>

          <div className="flex gap-4 justify-center flex-wrap">
            {["UX/UI Design", "Front-end", "Back-end", "Mobile", "Desktop", "Base de donnée", "Graphisme"].map((filter) => (
              <button
                key={filter}
                onClick={() => setToolFilter(filter)}
                className={`rounded-full px-4 py-2 text-sm font-medium ${
                  toolFilter === filter
                    ? "bg-primary text-primary-foreground"
                    : "border border-input bg-background"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          <div className="flex flex-wrap gap-3 justify-center">
            {[
              "Audit", "UX research", "User persona", "User journey map", "User flow",
              "Wireflow", "Wireframe", "Components", "User interface", "User story"
            ].map((tool) => (
              <span key={tool} className="text-base">
                {tool} •
              </span>
            ))}
          </div>

          <div className="flex justify-center">
            <button className="rounded-full px-8 py-6 text-base bg-[#c6c737] text-black hover:bg-[#b5b530] font-medium">
              Discutons ensemble
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#2b2834] text-white py-16 px-6">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="flex justify-center">
            <img src="https://ext.same-assets.com/405950729/2097046639.png" alt="Logo" className="w-16 h-16" />
          </div>

          <div>
            <h3 className="text-2xl font-bold">MARIO RALISON</h3>
            <p className="text-gray-400">marioeuphraim@gmail.com</p>
          </div>

          <div className="flex justify-center gap-6">
            {[
              "https://ext.same-assets.com/405950729/3405966200.svg",
              "https://ext.same-assets.com/405950729/1597490893.svg",
              "https://ext.same-assets.com/405950729/3570589054.svg",
              "https://ext.same-assets.com/405950729/2683347401.svg",
              "https://ext.same-assets.com/405950729/3599690651.svg"
            ].map((icon, idx) => (
              <a
                key={idx}
                href="#"
                className="w-12 h-12 bg-white rounded-lg flex items-center justify-center hover:bg-gray-100 transition-colors"
              >
                <img src={icon} alt="Social" className="w-6 h-6" />
              </a>
            ))}
          </div>

          <div className="text-sm text-gray-400 space-y-2">
            <p>© 2025 - Tous droits réservés.</p>
            <div className="flex gap-4 justify-center">
              <a href="#" className="hover:text-white">Mentions légales</a>
              <a href="#" className="hover:text-white">Politique de confidentialité</a>
            </div>
            <p className="font-semibold">DESIGNED BY ME</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
