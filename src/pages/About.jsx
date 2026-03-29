import React, { useState, useEffect, useRef } from "react";
import {
  Leaf,
  Zap,
  Users,
  Award,
  HeartHandshake,
  CheckCircle2,
} from "lucide-react";
import { Linkedin, Mail, Twitter, Globe } from "lucide-react";
import { Lightbulb, Target, Sparkles } from "lucide-react";
import { gsap } from "gsap";
import { ChevronRight, Calendar } from "lucide-react";
import { useTranslation } from "react-i18next";

const AboutHero = () => {
  const { t } = useTranslation();
  const galleryImages = [
    "image/a4.jpeg",
    "image/a5.jpeg",
    "image/a6.jpeg",
    "image/a7.webp",
    "image/a8.webp",
    "image/a9.webp",
    "image/a10.webp",
    "image/a11.webp",
    "image/a12.webp",
    "image/a13.webp",
  ];

  const team = [
    {
      id: 1,
      name: "Ahmadin Faturahman",
      img: "image/faturahman.jpeg",
      linkedin: "#",
    },
    {
      id: 2,
      name: "Ahmad Roni",
      img: "image/roni.jpeg",
      linkedin: "#",
    },
    {
      id: 3,
      name: "I Putu Sukma W.",
      img: "image/sukma.jpeg",
      linkedin: "#",
    },
    {
      id: 4,
      name: "Mirza Akbar M",
      img: "image/mirza2.jpeg",
      linkedin: "#",
    },
  ];

  const misiList = [1, 2, 3, 4, 5];

  const valuesList = [
    {
      id: 1,
      icon: <Users className="w-6 h-6 text-primary" />,
      color: "primary",
    },
    {
      id: 2,
      icon: <Award className="w-6 h-6 text-accent" />,
      color: "accent",
    },
    {
      id: 3,
      icon: <HeartHandshake className="w-6 h-6 text-secondary" />,
      color: "secondary",
    },
    {
      id: 4,
      icon: <CheckCircle2 className="w-6 h-6 text-emerald-500" />,
      color: "emerald",
    },
  ];

  const colorMap = {
    primary: "bg-primary/10",
    accent: "bg-accent/10",
    secondary: "bg-secondary/10",
    emerald: "bg-emerald-500/10",
  };

  const [activeTab, setActiveTab] = useState(0);
  const contentRef = useRef(null);

  const historyData = [
    {
      id: 1,
      year: "2023",
      image: "image/a1.jpg",
    },
    {
      id: 2,
      year: "2024",
      image: "image/a2.jpg",
    },
    {
      id: 3,
      year: "2025",
      image: "image/a3.jpg",
    },
  ];

  useEffect(() => {
    gsap.fromTo(
      contentRef.current,
      { opacity: 0, x: 20 },
      { opacity: 1, x: 0, duration: 0.8, ease: "power3.out" },
    );
  }, [activeTab]);

  return (
    <main>
      <section className="relative min-h-screen w-full flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div
            className="absolute inset-0 bg-fixed bg-cover bg-center bg-no-repeat blur-[4px] scale-105"
            style={{
              backgroundImage: "url('image/t2.jpg')",
            }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/40"></div>
        </div>

        <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-8xl font-bold text-white leading-tight mb-8">
              {t("about_hero.title.part1")} <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                {t("about_hero.title.highlight")}
              </span>
            </h1>
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="flex-1">
                <p className="text-lg md:text-xl text-gray-300 leading-relaxed border-l-4 border-primary pl-6 py-2">
                  {t("about_hero.description")}
                </p>
              </div>
              <div className="flex-1 grid grid-cols-2 gap-6 w-full md:w-auto">
                <div>
                  <h3 className="text-white text-3xl font-bold italic">
                    {" "}
                    {t("about_hero.stats.founded.value")}
                  </h3>
                  <p className="text-gray-400 text-xs uppercase tracking-widest mt-1">
                    {t("about_hero.stats.founded.label")}
                  </p>
                </div>
                <div>
                  <h3 className="text-white text-3xl font-bold italic">
                    {" "}
                    {t("about_hero.stats.partner.value")}
                  </h3>
                  <p className="text-gray-400 text-xs uppercase tracking-widest mt-1">
                    {t("about_hero.stats.partner.label")}
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-12 flex flex-wrap items-center gap-8">
              <button className="px-10 py-4 bg-primary hover:bg-indigo-600 text-white font-bold rounded-sm transition-all duration-300 transform hover:translate-x-2">
                {t("about_hero.button")}
              </button>
              <div className="group cursor-pointer">
                <span className="text-white font-semibold flex items-center gap-2">
                  {t("about_hero.link")}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-accent transition-transform group-hover:translate-x-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </span>
                <div className="h-[1px] w-0 bg-accent transition-all duration-300 group-hover:w-full"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-24 px-4 md:px-12 lg:px-24 transition-all duration-500 overflow-hidden bg-gradient-to-br from-primary via-indigo-600 to-secondary">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <Zap
            size={400}
            className="absolute -top-20 -left-20 text-white opacity-10 -rotate-12"
            strokeWidth={1}
          />
          <Zap
            size={350}
            className="absolute top-1/2 -right-20 text-white opacity-5 rotate-12"
            strokeWidth={1}
          />
          <Zap
            size={300}
            className="absolute -bottom-10 left-1/3 text-white opacity-10"
            strokeWidth={1}
          />
        </div>

        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/30 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-white/20 rounded-full blur-[100px]"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-white text-4xl md:text-5xl font-black mt-2 mb-4 tracking-tighter drop-shadow-lg">
              Pilar Energi Kami
            </h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
            {team.map((member, idx) => (
              <div key={idx} className="group relative">
                <div className="relative bg-white/95 dark:bg-slate-900 border border-white/20 rounded-[1.2rem] md:rounded-[2rem] p-3 md:p-6 h-full flex flex-col items-center text-center transition-all duration-500 group-hover:-translate-y-4 shadow-[0_20px_50px_rgba(0,0,0,0.2)] hover:shadow-[0_30px_60px_rgba(0,0,0,0.3)]">
                  <div className="relative w-full aspect-square rounded-[1rem] md:rounded-[1.5rem] overflow-hidden mb-5 md:mb-8 shadow-md">
                    <img
                      src={member.img}
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end justify-center pb-4">
                      <div className="flex gap-2 translate-y-10 group-hover:translate-y-0 transition-transform duration-500">
                        <a
                          href={member.linkedin}
                          className="w-8 h-8 md:w-10 md:h-10 bg-white text-primary rounded-full flex items-center justify-center hover:bg-accent hover:text-white transition-all shadow-lg"
                        >
                          <Linkedin size={16} className="md:w-[18px]" />
                        </a>
                        <a
                          href="#"
                          className="w-8 h-8 md:w-10 md:h-10 bg-white text-primary rounded-full flex items-center justify-center hover:bg-accent hover:text-white transition-all shadow-lg"
                        >
                          <Mail size={16} className="md:w-[18px]" />
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="mb-4">
                    <h3 className="text-dark dark:text-white text-base md:text-2xl font-black mb-1 tracking-tight leading-tight transition-colors group-hover:text-primary">
                      {member.name}
                    </h3>
                    <p className="text-primary/80 dark:text-accent font-bold text-[10px] md:text-sm mb-3 md:mb-4 uppercase tracking-wider">
                      {t(`energy_pillars.team.${member.id}.role`)}
                    </p>
                    <div className="inline-block px-3 py-1 bg-primary/5 dark:bg-white/5 rounded-full border border-primary/10">
                      <p className="text-dark/60 dark:text-white/60 text-[8px] md:text-[10px] font-bold tracking-widest uppercase italic">
                        {t(`energy_pillars.team.${member.id}.specialty`)}
                      </p>
                    </div>
                  </div>
                  <div className="w-full mt-auto pt-5 border-t border-slate-100 dark:border-white/5 flex justify-center items-center gap-1.5">
                    <div className="h-1 bg-primary rounded-full w-8 shadow-[0_0_8px_rgba(79,70,229,0.4)] group-hover:w-16 group-hover:bg-accent transition-all duration-700"></div>
                    <div className="h-1 bg-slate-200 dark:bg-white/10 rounded-full w-2"></div>
                    <div className="h-1 bg-slate-100 dark:bg-white/10 rounded-full w-2"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background dark:bg-dark py-24 px-6 md:px-12 lg:px-24 transition-colors duration-500 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-30 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[100px]"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[100px]"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-0 items-start relative">
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-slate-400 dark:bg-white/40 -translate-x-1/2"></div>
            <div className="lg:pr-20 group">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500">
                  <Lightbulb size={24} />
                </div>
                <h2 className="text-dark dark:text-white text-4xl font-black uppercase tracking-tighter">
                  {t("vision_mission.vision.title")}
                </h2>
              </div>

              <div className="relative">
                <p className="text-dark/80 dark:text-white/80 text-2xl md:text-3xl font-bold leading-tight tracking-tight mb-8">
                  {t("vision_mission.vision.description")}
                </p>

                <div className="flex items-center gap-4 text-primary font-bold text-sm tracking-widest uppercase">
                  <Sparkles size={16} />
                  <span>{t("vision_mission.vision.tag")}</span>
                </div>
              </div>
            </div>

            <div className="lg:pl-20 group">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all duration-500">
                  <Target size={24} />
                </div>
                <h2 className="text-dark dark:text-white text-4xl font-black uppercase tracking-tighter">
                  {t("vision_mission.mission.title")}
                </h2>
              </div>

              <div className="space-y-6">
                {misiList.map((id) => (
                  <div key={id} className="flex items-start gap-4 group/item">
                    <div className="mt-1.5 w-5 h-5 rounded-full border-2 border-primary/30 flex items-center justify-center flex-shrink-0 group-hover/item:border-primary transition-colors">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary scale-0 group-hover/item:scale-100 transition-transform"></div>
                    </div>

                    <p className="text-dark/70 dark:text-white/70 text-lg leading-snug font-medium">
                      {t(`vision_mission.mission.list.${id}`)}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-12 flex items-center gap-4 text-accent font-bold text-sm tracking-widest uppercase">
                <Zap size={16} />
                <span>{t("vision_mission.mission.tag")}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-background dark:bg-dark py-24 px-6 md:px-12 lg:px-24 transition-colors duration-500">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* LEFT - COMMITMENT */}
            <div className="lg:col-span-5 bg-gradient-to-br from-primary via-secondary to-primary bg-[length:200%_200%] hover:bg-[100%_100%] transition-all duration-700 p-8 md:p-12 rounded-[3rem] shadow-2xl flex flex-col justify-between text-white relative overflow-hidden group">
              <Zap className="absolute -bottom-10 -right-10 w-64 h-64 opacity-10 rotate-12 group-hover:rotate-0 transition-transform duration-1000" />

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-8">
                  <div className="h-1 w-12 bg-accent rounded-full"></div>
                  <h2 className="text-3xl md:text-4xl font-black tracking-tight">
                    {t("commitment.title")}
                  </h2>
                </div>

                <div className="space-y-12">
                  {/* ITEM 1 */}
                  <div className="group/item flex gap-6">
                    <div className="flex-shrink-0 w-14 h-14 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/30 group-hover/item:scale-110 group-hover/item:bg-white/30 transition-all">
                      <Leaf className="text-white w-7 h-7" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-3">
                        {t("commitment.items.1.title")}
                      </h3>
                      <p className="text-white/80 leading-relaxed text-sm md:text-base">
                        {t("commitment.items.1.desc")}
                      </p>
                    </div>
                  </div>

                  {/* ITEM 2 */}
                  <div className="group/item flex gap-6">
                    <div className="flex-shrink-0 w-14 h-14 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/30 group-hover/item:scale-110 group-hover/item:bg-white/30 transition-all">
                      <Zap className="text-white w-7 h-7" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-3">
                        {t("commitment.items.2.title")}
                      </h3>
                      <p className="text-white/80 leading-relaxed text-sm md:text-base">
                        {t("commitment.items.2.desc")}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <button className="mt-12 w-fit px-6 py-3 bg-white text-primary font-bold rounded-xl hover:bg-accent hover:text-white transition-colors relative z-10">
                {t("commitment.button")}
              </button>
            </div>

            {/* RIGHT - CORE VALUES */}
            <div className="lg:col-span-7 bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-white/5 p-8 md:p-12 rounded-[3rem] shadow-xl dark:shadow-none transition-all">
              <div className="flex items-center gap-3 mb-12">
                <div className="h-1 w-12 bg-primary rounded-full"></div>
                <h2 className="text-dark dark:text-white text-3xl md:text-4xl font-black tracking-tight">
                  {t("core_values.title")}
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
                {valuesList.map((value) => (
                  <div
                    key={value.id}
                    className="group flex flex-col gap-4 p-4 rounded-3xl hover:bg-slate-50 dark:hover:bg-white/5 transition-all duration-300"
                  >
                    <div
                      className={`w-12 h-12 rounded-2xl flex items-center justify-center ${colorMap[value.color]} dark:bg-white/5 group-hover:scale-110 transition-transform`}
                    >
                      {value.icon}
                    </div>

                    <div>
                      <h3 className="text-dark dark:text-white text-lg font-bold mb-2">
                        {t(`core_values.items.${value.id}.title`)}
                      </h3>

                      <p className="text-dark/60 dark:text-white/60 text-sm leading-relaxed">
                        {t(`core_values.items.${value.id}.desc`)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative h-screen min-h-[700px] w-full bg-dark overflow-hidden transition-colors duration-500">
        {/* BACKGROUND */}
        <div className="absolute inset-0 z-0">
          <img
            src={historyData[activeTab].image}
            alt="History Background"
            className="w-full h-full object-cover transition-all duration-1000 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-dark via-dark/80 to-transparent"></div>
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto h-full flex flex-col justify-center px-6 md:px-12 lg:px-24">
          {/* TAB YEAR */}
          <div className="absolute top-10 left-0 right-0 px-6 md:px-12 lg:px-24">
            <div className="flex items-center border-b border-white/20">
              {historyData.map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(index)}
                  className={`relative pb-6 px-4 md:px-10 text-sm md:text-base font-bold transition-all duration-300 outline-none ${
                    activeTab === index
                      ? "text-white"
                      : "text-white/40 hover:text-white/70"
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <div
                      className={`w-2 h-2 rounded-full ${
                        activeTab === index
                          ? "bg-primary animate-pulse"
                          : "bg-white/20"
                      }`}
                    ></div>
                    {item.year}
                  </div>

                  {activeTab === index && (
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-primary transition-all duration-500"></div>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* CONTENT */}
          <div ref={contentRef} className="max-w-3xl mt-20">
            <div className="flex items-center gap-3 text-primary mb-6">
              <Calendar size={20} />
              <span className="font-bold tracking-[0.3em] uppercase text-sm">
                {t("history.label")}
              </span>
            </div>

            <h2 className="text-white text-5xl md:text-7xl font-black mb-8 leading-tight">
              {t("history.title")}{" "}
              <span className="text-primary">
                {historyData[activeTab].year}
              </span>
            </h2>

            <p className="text-white/80 text-lg md:text-xl leading-relaxed mb-10">
              {t(`history.items.${historyData[activeTab].id}.description`)}
            </p>

            {/* HIGHLIGHTS */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {t(`history.items.${historyData[activeTab].id}.highlights`, {
                returnObjects: true,
              }).map((point, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 bg-white/5 backdrop-blur-md border border-white/10 p-4 rounded-xl"
                >
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                    <ChevronRight size={18} />
                  </div>
                  <span className="text-white font-medium text-sm">
                    {point}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* BIG YEAR */}
          <div className="absolute bottom-10 right-10 pointer-events-none opacity-10 hidden lg:block">
            <h1 className="text-[250px] font-black text-white leading-none select-none">
              {historyData[activeTab].year}
            </h1>
          </div>
        </div>

        {/* SIDE INDICATOR */}
        <div className="absolute right-10 top-1/2 -translate-y-1/2 hidden md:flex flex-col gap-4 z-20">
          {historyData.map((_, i) => (
            <div
              key={i}
              className={`w-1 transition-all duration-500 ${
                activeTab === i ? "h-12 bg-primary" : "h-6 bg-white/20"
              }`}
            ></div>
          ))}
        </div>
      </section>

      {/* SECTION VIDEO - Diubah h-screen menjadi h-auto atau h-[80vh] langsung */}
      {/* <section className="w-full h-[80vh] bg-background dark:bg-dark transition-colors duration-500 overflow-hidden relative">
        <div className="w-full h-full flex items-center justify-center">
          <div className="w-full h-full">
            <iframe
              src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7425070249181523968?compact=1"
              className="w-full h-full border-none"
              frameBorder="0"
              allowFullScreen={true}
              title="Embedded post"
            ></iframe>
          </div>
        </div>
      </section> */}

      <section className="bg-background dark:bg-dark pt-12 pb-24 px-6 md:px-12 lg:px-24 transition-colors duration-500 mt-12">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-dark dark:text-white text-4xl md:text-5xl font-black text-center">
              Kilas{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                {" "}
                Balik{" "}
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {galleryImages.map((src, index) => (
              <div
                key={index}
                className="group relative aspect-square overflow-hidden rounded-2xl bg-slate-200 dark:bg-slate-800 shadow-lg"
              >
                <img
                  src={src}
                  alt={`Gallery Wind Bright ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-700 scale-125 group-hover:scale-100"
                />
                <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutHero;
