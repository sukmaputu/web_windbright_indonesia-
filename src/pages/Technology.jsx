import React, { useEffect, useRef } from "react";
import { Cpu, Zap, BarChart3, ShieldCheck } from "lucide-react";
import { LayoutGrid, MapPin, ArrowUpRight } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTranslation } from "react-i18next";

gsap.registerPlugin(ScrollTrigger);

const TechHero = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);
  const { t } = useTranslation();

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".tech-title", {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      gsap.from(cardsRef.current, {
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const technologies = [
    { key: "solar", img: "image/t15.jpg" },
    { key: "wind", img: "image/t16.jpg" },
    { key: "sensor", img: "image/t17.jpg" },
  ];

  const dataInovasi = [
    {
      key: "drone",
      image: "image/t4.jpg",
      alt: "Drone Maintenance",
    },
    {
      key: "remin",
      image: "image/t5.jpg",
      alt: "Automatic Brake System",
    },
    {
      key: "foundation",
      image: "image/t6.jpg",
      alt: "Modular Foundation",
    },
  ];

  const projectImages = [
    {
      src: "image/t7.jpg",
    },
    {
      src: "image/t8.jpg",
    },
    {
      src: "image/t9.jpg",
    },
    {
      src: "image/t10.jpg",
    },
  ];

  const projectImages2 = [
    {
      src: "image/t11.png",
    },
    {
      src: "image/t12.png",
    },
    {
      src: "image/t13.jpg",
    },
    {
      src: "image/t14.jpg",
    },
  ];

  return (
    <main>
      <section className="relative min-h-[100vh] lg:min-h-screen w-full flex items-start lg:items-center overflow-hidden transition-colors duration-500 py-24 lg:py-0">
        <div className="absolute inset-0 z-0">
          <div
            className="absolute inset-0 bg-fixed bg-cover bg-center bg-no-repeat blur-sm scale-105"
            style={{
              backgroundImage: "url('/image/t3.webp')",
            }}
          ></div>
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1 text-left">
              <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-[1.1] mb-6">
                {t("hero.tech")}{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                  {t("hero.smart")}
                </span>{" "}
                {t("hero.energy")}
              </h1>

              <p className="text-lg text-gray-200 mb-10 max-w-xl leading-relaxed">
                {t("hero.description")}
              </p>

              <div className="flex flex-wrap gap-4">
                <button className="px-8 py-4 bg-primary hover:bg-indigo-600 text-white rounded-xl font-bold transition-all shadow-lg shadow-primary/25 hover:-translate-y-1">
                  {t("hero.explore")}
                </button>
                <button className="px-8 py-4 bg-white/10 backdrop-blur-md text-white border border-white/20 rounded-xl font-bold hover:bg-white/20 transition-all">
                  {t("hero.whitepaper")}
                </button>
              </div>
            </div>

            <div className="flex-1 relative w-full max-w-2xl lg:max-w-none mt-12 lg:mt-0">
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl transform lg:rotate-3 hover:rotate-0 transition-transform duration-700 border border-white/10">
                <img
                  src="image/t1.jpg"
                  alt="Technology Hardware"
                  className="w-full h-[300px] md:h-[400px] lg:h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              </div>

              <div className="absolute -top-6 -right-6 md:right-0 bg-white/10 backdrop-blur-xl p-6 rounded-2xl shadow-xl border border-white/20 z-20 animate-bounce-slow">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-accent/20 rounded-lg text-accent">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-gray-300 uppercase font-bold">
                      Output Real-time
                    </p>
                    <p className="text-xl font-black text-white">1.2 GWh</p>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-8 -left-8 bg-white/10 backdrop-blur-xl p-5 rounded-2xl shadow-xl border border-white/20 z-20 animate-float">
                <div className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></div>
                  <p className="text-sm font-medium text-white">
                    {t("hero.system_status")}
                  </p>
                </div>
              </div>

              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-primary/20 rounded-full z-0 pointer-events-none"></div>
            </div>
          </div>
        </div>

        <style
          dangerouslySetInnerHTML={{
            __html: `
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-bounce-slow {
          animation: bounce-slow 4s ease-in-out infinite;
        }
      `,
          }}
        />
      </section>

      <section
        ref={sectionRef}
        className="relative py-24 px-6 md:px-12 lg:px-24 overflow-hidden bg-gradient-to-br from-primary via-indigo-600 to-secondary transition-all duration-500"
      >
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: "32px 32px",
          }}
        ></div>

        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <Zap
            size={400}
            className="absolute -top-20 -right-20 text-white opacity-10 rotate-12"
            strokeWidth={1}
          />
          <Cpu
            size={350}
            className="absolute top-1/2 -left-20 text-white opacity-5 -rotate-12"
            strokeWidth={1}
          />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="tech-header text-center mb-20">
            <h2 className="text-white text-4xl md:text-5xl font-black leading-tight tracking-tighter drop-shadow-2xl">
              {t("technology_section.title")}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {technologies.map((tech, index) => (
              <div
                key={index}
                ref={(el) => (cardsRef.current[index] = el)}
                className="group relative aspect-square overflow-hidden rounded-[1rem] bg-dark shadow-[0_20px_50px_rgba(0,0,0,0.3)] border border-white/10"
              >
                <img
                  src={tech.img}
                  alt={tech.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-2  group-hover:opacity-40"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/40 to-transparent opacity-90 transition-opacity group-hover:opacity-100" />

                <div className="absolute inset-0 p-10 flex flex-col justify-end translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="w-12 h-1.5 bg-accent mb-6 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 delay-100 rounded-full" />
                  <h3 className="text-white text-3xl font-black mb-3 tracking-tight">
                    {t(`technology_section.items.${tech.key}.title`)}
                  </h3>
                  <p className="text-white/0 group-hover:text-white/80 text-base leading-relaxed transition-opacity duration-500 delay-200">
                    {t(`technology_section.items.${tech.key}.desc`)}
                  </p>
                </div>

                <div className="absolute top-8 right-8 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-4 group-hover:translate-x-0">
                  <div className="w-12 h-12 rounded-2xl bg-accent/20 border border-white/30 flex items-center justify-center text-white backdrop-blur-md">
                    <Zap size={20} fill="currentColor" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background dark:bg-dark py-24 px-6 md:px-12 lg:px-24 transition-colors duration-500">
        <div className="max-w-7xl mx-auto">
          <div className="tech-title mb-16">
            <h2 className="text-dark dark:text-white text-4xl md:text-5xl font-black leading-tight text-center">
              {t("innovation.title.part1")}{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                {t("innovation.title.highlight")}{" "}
              </span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {dataInovasi.map((item, index) => (
              <div
                key={index}
                className="flex flex-col border border-slate-200 dark:border-white/10 rounded-[1rem] overflow-hidden bg-white dark:bg-slate-900 group hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
              >
                <div className="flex items-center justify-center h-full">
                  <img
                    src={item.image}
                    alt={item.alt}
                    className="max-h-[300px] max-w-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                <div className="p-8 pb-0 bg-slate-50 dark:bg-white/5 flex-grow text-center flex flex-col justify-between border-t border-slate-100 dark:border-white/5">
                  <div className="mb-8">
                    <h3 className="text-dark dark:text-white text-xl lg:text-2xl font-bold leading-snug mb-4 px-2">
                      {t(`innovation.items.${item.key}.title`)}
                    </h3>
                    <p className="text-dark/60 dark:text-white/60 text-base">
                      {t(`innovation.items.${item.key}.desc`)}
                    </p>
                  </div>

                  <div className="w-20 h-1.5 bg-primary dark:bg-accent mx-auto rounded-t-full shadow-lg"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background dark:bg-dark py-24 px-6 md:px-12 lg:px-24 transition-colors duration-500 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(#4F46E5 1px, transparent 1px), linear-gradient(90deg, #4F46E5 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        ></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <div className="flex items-center justify-center gap-2 mb-4"></div>
            <h2 className="text-dark dark:text-white text-4xl md:text-5xl font-black">
              {t("project.title.part1")}{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                {t("project.title.highlight")}
              </span>
            </h2>
          </div>

          <div className="relative border-2 border-slate-200 dark:border-white/10 rounded-[2rem] bg-white/50 dark:bg-white/5 backdrop-blur-sm p-6 md:p-10 shadow-2xl">
            <div className="absolute -top-7 left-6 md:left-12 bg-dark dark:bg-primary text-white px-8 py-4 rounded-xl shadow-xl border border-white/10 group cursor-default">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
                <p className="font-black text-sm md:text-base tracking-wider uppercase">
                  {t("project.badge")}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
              {projectImages.map((project, idx) => (
                <div
                  key={idx}
                  className="group relative aspect-[3/4] overflow-hidden rounded-2xl bg-slate-100 dark:bg-slate-800"
                >
                  <img
                    src={project.src}
                    alt={project.title}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-1"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-6">
                    <div className="flex items-center justify-between translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <div>
                        <div className="flex items-center gap-1 text-white/60 text-xs">
                          <MapPin size={10} />
                          <span>J{t("project.location")}</span>
                        </div>
                      </div>
                      <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white">
                        <ArrowUpRight size={16} />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-col items-end md:flex-row md:justify-end gap-6 border-t border-slate-200 dark:border-white/10 pt-8">
              <div className="flex gap-8 text-right">
                <div>
                  <p className="text-dark/40 dark:text-white/40 text-[10px] uppercase font-bold tracking-widest mb-1">
                    {t("project.status_label")}
                  </p>
                  <p className="text-dark dark:text-white font-bold">
                    {t("project.status_value")}
                  </p>
                </div>
                <div>
                  <p className="text-dark/40 dark:text-white/40 text-[10px] uppercase font-bold tracking-widest mb-1">
                    {t("project.energy_label")}
                  </p>
                  <p className="text-dark dark:text-white font-bold">
                    {t("project.energy_value")}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
        </div>
      </section>

      <section className="bg-background dark:bg-dark py-12 px-6 md:px-12 lg:px-24 transition-colors duration-500 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(#4F46E5 1px, transparent 1px), linear-gradient(90deg, #4F46E5 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        ></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="relative border-2 border-slate-200 dark:border-white/10 rounded-[2rem] bg-white/50 dark:bg-white/5 backdrop-blur-sm p-6 md:p-10 shadow-2xl">
            <div className="absolute -top-7 left-6 md:left-12 bg-dark dark:bg-primary text-white px-8 py-4 rounded-xl shadow-xl border border-white/10 group cursor-default">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
                <p className="font-black text-sm md:text-base tracking-wider uppercase">
                  {t("project_2.badge")}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
              {projectImages2.map((project, idx) => (
                <div
                  key={idx}
                  className="group relative aspect-[3/4] overflow-hidden rounded-2xl bg-slate-100 dark:bg-slate-800"
                >
                  <img
                    src={project.src}
                    alt={project.title}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-1"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-6">
                    <div className="flex items-center justify-between translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <div>
                        <div className="flex items-center gap-1 text-white/60 text-[10px]">
                          <MapPin size={10} />
                          <span>{t("project_2.location")}</span>
                        </div>
                      </div>
                      <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white">
                        <ArrowUpRight size={16} />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-col items-end md:flex-row md:justify-end gap-6 border-t border-slate-200 dark:border-white/10 pt-8">
              <div className="flex gap-8 text-right">
                <div>
                  <p className="text-dark/40 dark:text-white/40 text-[10px] uppercase font-bold tracking-widest mb-1">
                    {t("project_2.status_label")}
                  </p>
                  <p className="text-dark dark:text-white font-bold">
                    {t("project_2.status_value")}
                  </p>
                </div>
                <div>
                  <p className="text-dark/40 dark:text-white/40 text-[10px] uppercase font-bold tracking-widest mb-1">
                    {t("project_2.energy_label")}
                  </p>
                  <p className="text-dark dark:text-white font-bold">
                    {t("project_2.energy_value")}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-accent/10 rounded-full blur-3xl"></div>
        </div>
      </section>
    </main>
  );
};

export default TechHero;
