import { useTranslation } from "react-i18next";
import React, { useRef, useState, useEffect } from "react";
import { Sun, Lightbulb, CloudDownload, Wrench } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const scrollRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const stats = [
    {
      icon: <Sun size={32} className="text-white" />,
      value: 67,
      suffix: "",
      label: t("plts_exp"),
    },
    {
      icon: <Lightbulb size={32} className="text-white" />,
      value: 80.1,
      suffix: " GWh",
      label: t("hijau_exp"),
    },
    {
      icon: <CloudDownload size={32} className="text-white" />,
      value: 68,
      suffix: " Giga Ton",
      label: t("co2_exp"),
    },
    {
      icon: <Wrench size={32} className="text-white" />,
      value: 200,
      suffix: "",
      label: t("kerja_exp"),
    },
  ];
  const [counts, setCounts] = useState(stats.map(() => 0));
  useEffect(() => {
    const duration = 2000;
    const steps = 50;

    const timers = stats.map((stat, index) => {
      const increment = stat.value / steps;
      let current = 0;

      return setInterval(() => {
        current += increment;

        setCounts((prev) => {
          const newCounts = [...prev];
          newCounts[index] =
            current >= stat.value ? stat.value : parseFloat(current.toFixed(1));
          return newCounts;
        });

        if (current >= stat.value) clearInterval(timers[index]);
      }, duration / steps);
    });

    return () => timers.forEach(clearInterval);
  }, []);

  const [currentImage, setCurrentImage] = useState(0);
  const buttonRef = useRef(null);

  const images = ["image/h2.webp", "image/h3.webp", "image/h4.webp"];
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const textRef = useRef(null);

  // auto slide image
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          once: true,
        },
      });

      tl.from(imageRef.current, {
        x: -120,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });

      tl.from(
        textRef.current.querySelector("h2"),
        {
          x: 120,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
        },
        "-=0.6",
      );

      tl.from(
        textRef.current.querySelector("p"),
        {
          x: 120,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
        },
        "-=0.4",
      );

      tl.from(
        buttonRef.current,
        {
          y: 40,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
        },
        "-=0.3",
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [images.length]);

  const data = [
    {
      id: 1,
      image: "image/h5.jpg",
    },
    {
      id: 2,
      image: "image/h6.jpg",
    },
    {
      id: 3,
      image: "image/h7.webp",
    },
    {
      id: 4,
      image: "image/h8.webp",
    },
  ];

  return (
    <>
      <section className="relative h-[90vh] w-full flex items-center justify-center text-white">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url(image/h1.webp)",
          }}
        />

        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 text-center max-w-4xl px-6">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-wide">
            {t("hero_title")}
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8">
            {t("hero_subtitle")}
          </p>
          <div className="flex gap-4 justify-center">
            <button className="bg-[#4F46E5] hover:bg-[#3A32B0] text-white px-6 py-3 rounded font-semibold transition">
              {t("hero_start")}
            </button>

            <button className="border border-white hover:bg-white hover:text-black px-6 py-3 rounded font-semibold transition">
              {t("hero_contact")}
            </button>
          </div>
        </div>
      </section>

      {/* Explain */}
      <section className="bg-primary py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-white text-3xl md:text-4xl mb-16">
            <span className="font-bold">{t("title_exp")}</span>{" "}
            {t("title_exp2")}
          </h2>

          <div
            ref={scrollRef}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave}
            className={`flex overflow-x-auto gap-8 pb-4 scrollbar-hide 
  ${stats.length < 5 ? "justify-center" : ""} 
  ${isDragging ? "cursor-grabbing" : "cursor-grab"}`}
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {stats.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center flex-shrink-0 w-48 select-none"
              >
                <div className="w-24 h-24 rounded-full bg-white/20 flex items-center justify-center mb-6 transition-transform hover:scale-105 cursor-default">
                  {item.icon}
                </div>
                <div className="text-white">
                  <h3 className="text-2xl font-bold mb-2">
                    {counts[index]}
                    {item.suffix}
                  </h3>
                  <p className="text-white/90 text-sm font-medium tracking-wide">
                    {item.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Profile */}
      <section
        ref={sectionRef}
        className="bg-background dark:bg-slate-900 py-20 px-6"
      >
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
          {/* IMAGE SLIDER */}
          <div
            ref={imageRef}
            className="w-full lg:w-1/2 relative h-[400px] overflow-hidden rounded-2xl shadow-xl"
          >
            <div
              className="flex transition-transform duration-700 ease-in-out h-full"
              style={{ transform: `translateX(-${currentImage * 100}%)` }}
            >
              {images.map((src, index) => (
                <img
                  key={index}
                  src={src}
                  alt={`Slide ${index}`}
                  className="w-full h-full object-cover flex-shrink-0"
                />
              ))}
            </div>

            {/* DOT INDICATOR */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {images.map((_, index) => (
                <div
                  key={index}
                  className={`h-2 w-2 rounded-full transition-all ${
                    currentImage === index ? "bg-white w-6" : "bg-white/50"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* TEXT CONTENT */}
          <div ref={textRef} className="w-full lg:w-1/2 space-y-6">
            <h2 className="text-4xl font-bold text-dark dark:text-white">
              Who Are We?
            </h2>

            <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
              <span className="font-bold text-dark dark:text-white">
                PT WindBright Indonesia
              </span>
              {t("profile")}
            </p>

            <button className="bg-primary hover:opacity-90 text-white px-8 py-3 rounded-lg font-bold transition-all shadow-lg uppercase tracking-wider text-sm">
              Learn More
            </button>
          </div>
        </div>
      </section>

      <section className="bg-background dark:bg-slate-900 py-20 px-6">
        <style>{`
        /* Loader 1: Book (Ilmu) */
        .loader-book {
          --background: linear-gradient(135deg, #4F46E5, #7C3AED);
          --shadow: rgba(79, 70, 229, 0.28);
          --page: rgba(255, 255, 255, 0.36);
          --page-fold: rgba(255, 255, 255, 0.52);
          --duration: 3s;
          width: 160px; height: 120px; position: relative;
        }
        .loader-book:before, .loader-book:after {
          --r: -6deg; content: ""; position: absolute; bottom: 8px; width: 100px; top: 80%;
          box-shadow: 0 16px 12px var(--shadow); transform: rotate(var(--r));
        }
        .loader-book:before { left: 4px; }
        .loader-book:after { --r: 6deg; right: 4px; }
        .loader-book div { width: 100%; height: 100%; border-radius: 13px; position: relative; z-index: 1; perspective: 600px; background-image: var(--background); }
        .loader-book ul { margin: 0; padding: 0; list-style: none; position: relative; }
        .loader-book ul li { --r: 180deg; --o: 0; --c: var(--page); position: absolute; top: 10px; left: 10px; transform-origin: 100% 50%; color: var(--c); opacity: var(--o); transform: rotateY(var(--r)); animation: var(--duration) ease infinite; }
        .loader-book ul li:nth-child(2) { --c: var(--page-fold); animation-name: page-2; }
        .loader-book ul li:nth-child(3) { --c: var(--page-fold); animation-name: page-3; }
        .loader-book ul li:nth-child(4) { --c: var(--page-fold); animation-name: page-4; }
        .loader-book ul li:nth-child(5) { --c: var(--page-fold); animation-name: page-5; }
        .loader-book ul li svg { width: 70px; height: 100px; display: block; }
        .loader-book ul li:first-child { --r: 0deg; --o: 1; }
        .loader-book ul li:last-child { --o: 1; }
        @keyframes page-2 { 0% {transform: rotateY(180deg); opacity: 0;} 20% {opacity: 1;} 35%, 100% {opacity: 0;} 50%, 100% {transform: rotateY(0deg);} }
        @keyframes page-3 { 15% {transform: rotateY(180deg); opacity: 0;} 35% {opacity: 1;} 50%, 100% {opacity: 0;} 65%, 100% {transform: rotateY(0deg);} }
        @keyframes page-4 { 30% {transform: rotateY(180deg); opacity: 0;} 50% {opacity: 1;} 65%, 100% {opacity: 0;} 80%, 100% {transform: rotateY(0deg);} }
        @keyframes page-5 { 45% {transform: rotateY(180deg); opacity: 0;} 65% {opacity: 1;} 80%, 100% {opacity: 0;} 95%, 100% {transform: rotateY(0deg);} }

        /* Loader 2: Truck (Jelajah) */
        .truckWrapper { width: 180px; height: 100px; display: flex; flex-direction: column; position: relative; align-items: center; justify-content: flex-end; overflow-x: hidden; }
        .truckBody { width: 110px; height: fit-content; margin-bottom: 6px; animation: motion 1s linear infinite; }
        @keyframes motion { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(3px); } }
        .truckTires { width: 110px; height: fit-content; display: flex; align-items: center; justify-content: space-between; padding: 0 10px; position: absolute; bottom: 0; }
        .truckTires svg { width: 20px; }
        .road { width: 100%; height: 1.5px; background-color: #282828; position: relative; border-radius: 3px; }
        .road::before, .road::after { content: ""; position: absolute; background-color: #282828; border-radius: 3px; animation: roadAnimation 1.4s linear infinite; }
        .road::before { width: 20px; height: 100%; right: -50%; border-left: 10px solid white; }
        .road::after { width: 10px; height: 100%; right: -65%; border-left: 4px solid white; }
        .lampPost { position: absolute; bottom: 0; right: -90%; height: 70px; animation: roadAnimation 1.4s linear infinite; }
        @keyframes roadAnimation { 0% { transform: translateX(0px); } 100% { transform: translateX(-350px); } }

        /* Loader 3: Step (Progres) */
        .loader-step { position: relative; width: 100px; height: 80px; }
        .loader-step:before { content: ""; position: absolute; bottom: 20px; left: 40px; height: 25px; width: 25px; border-radius: 50%; background: #06B6D4; animation: loading-bounce 0.5s ease-in-out infinite alternate; }
        .loader-step:after { content: ""; position: absolute; right: 0; top: 0; height: 6px; width: 35px; border-radius: 4px; box-shadow: 0 5px 0 #ddd, -30px 40px 0 #ddd, -60px 75px 0 #ddd; animation: loading-step 1s ease-in-out infinite; }
        @keyframes loading-bounce { 0% { transform: scale(1, 0.7); } 40% { transform: scale(0.8, 1.2); } 100% { bottom: 100px; } }
        @keyframes loading-step { 0% { box-shadow: 0 10px 0 rgba(0,0,0,0), 0 10px 0 #ddd, -30px 40px 0 #ddd, -60px 75px 0 #ddd; } 100% { box-shadow: 0 10px 0 #ddd, -30px 40px 0 #ddd, -60px 75px 0 #ddd, -60px 75px 0 rgba(0,0,0,0); } }
      `}</style>

        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl dark:text-white font-bold text-dark mb-16 uppercase tracking-widest">
            {t("values.title")}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8 items-end">
            {/* Item 1: Ilmu */}
            <div className="flex flex-col items-center">
              <div className="loader-book mb-8">
                <div>
                  <ul>
                    {[...Array(6)].map((_, i) => (
                      <li key={i}>
                        <svg fill="currentColor" viewBox="0 0 90 120">
                          <path d="M90,0 L90,120 L11,120 C4.92486775,120 0,115.075132 0,109 L0,11 C0,4.92486775 4.92486775,0 11,0 L90,0 Z M71.5,81 L18.5,81 C17.1192881,81 16,82.1192881 16,83.5 C16,84.8254834 17.0315359,85.9100387 18.3356243,85.9946823 L18.5,86 L71.5,86 C72.8807119,86 74,84.8807119 74,83.5 C74,82.1745166 72.9684641,81.0899613 71.6643757,81.0053177 L71.5,81 Z M71.5,57 L18.5,57 C17.1192881,57 16,58.1192881 16,59.5 C16,60.8254834 17.0315359,61.9100387 18.3356243,61.9946823 L18.5,62 L71.5,62 C72.8807119,62 74,60.8807119 74,59.5 C74,58.1192881 72.8807119,57 71.5,57 Z M71.5,33 L18.5,33 C17.1192881,33 16,34.1192881 16,35.5 C16,36.8254834 17.0315359,37.9100387 18.3356243,37.9946823 L18.5,38 L71.5,38 C72.8807119,38 74,36.8807119 74,35.5 C74,34.1192881 72.8807119,33 71.5,33 Z"></path>
                        </svg>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <h3 className="text-xl font-bold text-primary mt-4">
                {t("values.knowledge")}
              </h3>
            </div>

            {/* Item 2: Jelajah */}
            <div className="flex flex-col items-center">
              <div className="truckWrapper mb-8">
                <div className="truckBody">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 198 93"
                  >
                    <path
                      strokeWidth="3"
                      stroke="#282828"
                      fill="#4F46E5"
                      d="M135 22.5H177.264C178.295 22.5 179.22 23.133 179.594 24.0939L192.33 56.8443C192.442 57.1332 192.5 57.4404 192.5 57.7504V89C192.5 90.3807 191.381 91.5 190 91.5H135C133.619 91.5 132.5 90.3807 132.5 89V25C132.5 23.6193 133.619 22.5 135 22.5Z"
                    ></path>
                    <path
                      strokeWidth="3"
                      stroke="#282828"
                      fill="#7C3AED"
                      d="M146 33.5H181.741C182.779 33.5 183.709 34.1415 184.078 35.112L190.538 52.112C191.16 53.748 189.951 55.5 188.201 55.5H146C144.619 55.5 143.5 54.3807 143.5 53V36C143.5 34.6193 144.619 33.5 146 33.5Z"
                    ></path>
                    <circle cx="146.5" cy="65" r="2" fill="#282828" />
                    <rect
                      strokeWidth="2"
                      stroke="#282828"
                      fill="#FFFCAB"
                      rx="1"
                      height="7"
                      width="5"
                      y="63"
                      x="187"
                    ></rect>
                    <rect
                      strokeWidth="3"
                      stroke="#282828"
                      fill="#DFDFDF"
                      rx="2.5"
                      height="90"
                      width="121"
                      y="1.5"
                      x="6.5"
                    ></rect>
                  </svg>
                </div>
                <div className="truckTires">
                  {[1, 2].map((i) => (
                    <svg key={i} viewBox="0 0 30 30">
                      <circle
                        strokeWidth="3"
                        stroke="#282828"
                        fill="#282828"
                        r="13.5"
                        cy="15"
                        cx="15"
                      ></circle>
                      <circle fill="#DFDFDF" r="7" cy="15" cx="15"></circle>
                    </svg>
                  ))}
                </div>
                <div className="road"></div>
                <svg
                  viewBox="0 0 453.459 453.459"
                  fill="#282828"
                  className="lampPost"
                >
                  <path d="M252.882,0c-37.781,0-68.686,29.953-70.245,67.358h-6.917v8.954c-26.109,2.163-45.463,10.011-45.463,19.366h9.993c-1.65,5.146-2.507,10.54-2.507,16.017c0,28.956,23.558,52.514,52.514,52.514c28.956,0,52.514-23.558,52.514-52.514c0-5.478-0.856-10.872-2.506-16.017h9.992c0-9.354-19.352-17.204-45.463-19.366v-8.954h-6.149C200.189,38.779,223.924,16,252.882,16c29.952,0,54.32,24.368,54.32,54.32c0,28.774-11.078,37.009-25.105,47.437c-17.444,12.968-37.216,27.667-37.216,78.884v113.914h-0.797c-5.068,0-9.174,4.108-9.174,9.177c0,2.844,1.293,5.383,3.321,7.066c-3.432,27.933-26.851,95.744-8.226,115.459v11.202h45.75v-11.202c18.625-19.715-4.794-87.527-8.227-115.459c2.029-1.683,3.322-4.223,3.322-7.066c0-5.068-4.107-9.177-9.176-9.177h-0.795V196.641c0-43.174,14.942-54.283,30.762-66.043c14.793-10.997,31.559-23.461,31.559-60.277C323.202,31.545,291.656,0,252.882,0z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-primary">
                {t("values.explore")}
              </h3>
            </div>

            {/* Item 3: Progres */}
            <div className="flex flex-col items-center">
              <div className="loader-step mb-8"></div>
              <h3 className="text-xl font-bold text-primary mt-4">
                {t("values.progress")}
              </h3>
            </div>
          </div>
        </div>
      </section>

      <section className="flex flex-col md:flex-row h-auto md:h-screen w-full overflow-hidden">
        {data.map((item) => (
          <div
            key={item.id}
            className="relative flex-1 min-h-[260px] md:min-h-0 group cursor-pointer overflow-hidden border-b md:border-b-0 md:border-r border-white/10 last:border-r-0"
          >
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
              style={{ backgroundImage: `url(${item.image})` }}
            />

            <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/20 to-transparent" />

            <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="absolute bottom-0 left-0 p-8 w-full">
              <p className="text-accent text-sm font-bold tracking-wider mb-2">
                {t(`cards.${item.id}.category`)}
              </p>
              <h3 className="text-background text-2xl md:text-3xl font-bold mb-8 leading-tight">
                {t(`cards.${item.id}.title`)}
              </h3>

              <div className="w-12 h-12 rounded-full border-2 border-background flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all duration-300">
                <ArrowRight className="text-background w-6 h-6" />
              </div>
            </div>
          </div>
        ))}
      </section>
      <section className="bg-background dark:bg-slate-900 py-20 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 lg:gap-16">
          <div className="flex-1">
            <span className="text-primary font-bold text-sm tracking-widest uppercase mb-3 block">
              {t("investor.label")}
            </span>
            <h2 className="text-dark dark:text-white text-4xl md:text-5xl font-bold leading-tight">
              {t("investor.title")}
            </h2>
          </div>

          <div className="flex-[1.5] flex flex-col md:flex-row items-start md:items-center gap-8 lg:gap-12">
            <p className="text-dark/70 dark:text-white/70 text-lg leading-relaxed flex-1">
              {t("investor.description")}
            </p>

            <button
              onClick={() => navigate("/consultation")}
              className="flex items-center gap-3 px-8 py-4 border-2 border-dark/20 dark:border-white/20 rounded-full text-dark dark:text-white font-semibold hover:bg-primary hover:text-background hover:border-primary transition-all duration-300 group whitespace-nowrap"
            >
              {t("investor.button")}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
