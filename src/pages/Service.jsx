import { useTranslation } from "react-i18next";
import React, { useState, useEffect } from "react";
import {
  X,
  ShieldCheck,
  Plane,
  MessageSquare,
  Sun,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

const HeroCarousel = () => {
  const { t } = useTranslation();
  const slides = [
    {
      id: 1,
      image: "image/s1.webp",
    },
    {
      id: 2,
      image: "image/s2.webp",
    },
    {
      id: 3,
      image: "image/s3.webp",
    },
  ];

  const edukitItems = [
    {
      id: 1,
      title: "Basic Turbine Kit",
      image:
        "https://images.unsplash.com/photo-1508791170100-0072940c215e?auto=format&fit=crop&q=80&w=600", // Ganti dengan path lokal kamu
    },
    {
      id: 2,
      title: "Advanced STEM Kit",
      image:
        "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=600",
    },
    {
      id: 3,
      title: "Hybrid Solar-Wind",
      image:
        "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&q=80&w=600",
    },
    {
      id: 4,
      title: "Monitoring System",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600",
    },
    {
      id: 5,
      title: "Workshop Tools",
      image:
        "https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?auto=format&fit=crop&q=80&w=600",
    },
  ];

  const droneServices = [
    {
      id: 1,
      title: "Blade Structural Inspection",
      image: "image/s7.jpg",
    },
    {
      id: 2,
      title: "Thermal Solar Mapping",
      image: "image/s8.jpg",
    },
    {
      id: 3,
      title: "High-Res Aerial Survey",
      image: "image/s9.jpg",
    },
    {
      id: 4,
      title: "AI Defect Detection",
      image: "image/s10.jpg",
    },
    {
      id: 5,
      title: "Routine Data Reporting",
      image: "image/s11.jpg",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1,
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  const services = [
    {
      id: 1,
      image: "image/s17.webp",
    },
    {
      id: 2,
      image: "image/s6.jpg",
    },
    {
      id: 3,
      image: "image/s4.jpg",
    },
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isModalOpen]);

  const openModal = (service) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const installationServices = [
    {
      id: 1,
      title: "Site Survey & Assessment",
      image: "image/s12.jpg",
    },
    {
      id: 2,
      title: "Foundation & Tower Build",
      image: "image/s13.jpg",
    },
    {
      id: 3,
      title: "Turbine Installation",
      image: "image/s14.jpg",
    },
    {
      id: 4,
      title: "Grid Integration",
      image: "image/s15.jpg",
    },
    {
      id: 5,
      title: "Performance Monitoring",
      image: "image/s16.jpg",
    },
  ];

  return (
    <main>
      <section className="relative h-[90vh] w-full overflow-hidden bg-dark">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="absolute inset-0 bg-black/50 z-10"></div>

            <img
              src={slide.image}
              alt={slide.title}
              className="h-full w-full object-cover"
            />

            <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4">
              <h1
                className={`text-4xl md:text-6xl font-bold text-white mb-4 transition-transform duration-700 delay-300 ${
                  index === currentIndex
                    ? "translate-y-0 opacity-100"
                    : "translate-y-10 opacity-0"
                }`}
              >
                {t(`slides.${slide.id}.title`)}
              </h1>
              <p
                className={`max-w-2xl text-lg md:text-xl text-gray-200 mb-8 transition-transform duration-700 delay-500 ${
                  index === currentIndex
                    ? "translate-y-0 opacity-100"
                    : "translate-y-10 opacity-0"
                }`}
              >
                {t(`slides.${slide.id}.description`)}
              </p>
              <button
                className={`bg-primary hover:bg-indigo-600 text-white px-8 py-3 rounded-full font-medium transition-all duration-700 delay-700 ${
                  index === currentIndex
                    ? "scale-100 opacity-100"
                    : "scale-90 opacity-0"
                }`}
              >
                {t("hero_button")}
              </button>
            </div>
          </div>
        ))}

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex space-x-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className="group relative h-1 w-12 md:w-20 bg-white/30 overflow-hidden rounded-full"
            >
              <div
                className={`absolute top-0 left-0 h-full bg-accent transition-all duration-500 ease-out ${
                  index === currentIndex ? "w-full" : "w-0"
                }`}
              ></div>
            </button>
          ))}
        </div>
      </section>

      <div className="relative">
        <section className="py-20 px-4 bg-background dark:bg-slate-900 transition-colors duration-300">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-dark dark:text-white mb-4">
                {t("service_section.title_1")}{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                  {t("service_section.title_2")}
                </span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {services.map((service) => (
                <div
                  key={service.id}
                  className="group bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-md dark:shadow-2xl transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl border border-gray-100 dark:border-slate-700 flex flex-col"
                >
                  <div className="h-56 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>

                  <div className="p-8 flex flex-col flex-grow">
                    <h3 className="text-xl font-bold text-dark dark:text-white mb-3 group-hover:text-primary transition-colors">
                      {t(`services.title_${service.id}`)}
                    </h3>
                    <p className="text-gray-600 dark:text-white/70 leading-relaxed mb-6 flex-grow">
                      {t(`services.desc_${service.id}`)}
                    </p>
                    <button
                      onClick={() => openModal(service)}
                      type="button"
                      className="w-full bg-primary hover:bg-opacity-90 text-white text-center py-3 px-6 rounded-xl font-bold transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-primary/30 hover:shadow-primary/50"
                    >
                      <span>{t("service_section.order")}</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {isModalOpen && (
          <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 md:p-6 bg-dark/90 ">
            <div className="relative w-full max-w-6xl max-h-[95vh] overflow-hidden bg-dark rounded-[1rem] flex flex-col md:flex-row  border border-white/10">
              <button
                onClick={closeModal}
                className="absolute top-6 right-6 z-50 p-3 bg-white/5 hover:bg-red-500/80 backdrop-blur-md rounded-full text-white transition-all duration-300 border border-white/10 group"
              >
                <X
                  size={20}
                  className="group-hover:rotate-90 transition-transform"
                />
              </button>

              <div className="w-full md:w-5/12 h-64 md:h-auto relative overflow-hidden">
                <img
                  src={selectedService?.image}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                  alt={selectedService?.title}
                />
              </div>

              <div className="w-full md:w-7/12 p-8 md:p-14 overflow-y-auto text-white bg-gradient-to-br from-dark via-[#161e33] to-dark [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
                <div className="mb-10 text-left relative z-10">
                  <h2 className="text-4xl md:text-5xl font-black mb-3 bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-accent py-1 leading-tight">
                    {selectedService &&
                      t(`services.title_${selectedService.id}`)}
                  </h2>
                  <p className="mt-8 text-slate-300 leading-relaxed text-lg font-light">
                    {t("modal.description")}
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10 relative z-10">
                  <div className="relative group overflow-hidden border border-white/10 rounded-3xl p-8 bg-white/5 hover:bg-white/10 transition-all duration-500">
                    <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/20 blur-3xl rounded-full group-hover:bg-primary/40 transition-all"></div>
                    <h4 className="text-[11px] font-black tracking-[0.3em] mb-4 text-accent uppercase">
                      {t("modal.full_package")}
                    </h4>
                    <p className="text-sm line-through text-slate-500 mb-1">
                      Rp 5.500.000
                    </p>
                    <div className="flex items-baseline gap-1 mb-6">
                      <p className="text-3xl font-black text-white">
                        Rp 4.464.000
                      </p>
                      <span className="text-[10px] text-slate-400 uppercase font-bold">
                        / Unit
                      </span>
                    </div>
                    <div className="space-y-3 text-left text-sm text-slate-300 border-t border-white/10 pt-6">
                      <div className="flex items-center gap-3">
                        <CheckCircle2 size={16} className="text-accent" />
                        <span>{t("modal.features.battery")}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle2 size={16} className="text-accent" />
                        <span>{t("modal.features.system")}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle2 size={16} className="text-accent" />
                        <span>{t("modal.features.automation")}</span>
                      </div>
                    </div>
                  </div>

                  <div className="relative group overflow-hidden border border-white/10 rounded-3xl p-8 bg-gradient-to-b from-secondary/10 to-transparent hover:from-secondary/20 transition-all duration-500">
                    <h4 className="text-[11px] font-black tracking-[0.3em] mb-4 text-secondary uppercase">
                      PURCHASE
                    </h4>
                    <p className="text-xs text-slate-400 leading-relaxed mb-4">
                      {t("modal.subscription_desc")}
                    </p>
                    <div className="flex items-baseline gap-1">
                      <p className="text-3xl font-black text-white">
                        Rp 372.000
                      </p>
                      {/* <span className="text-[10px] text-slate-400 uppercase font-bold">
                        / Bulan
                      </span> */}
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-8 mb-12 text-left relative z-10">
                  <div className="flex items-center gap-5 group">
                    <div className="p-4 bg-primary/10 rounded-2xl group-hover:bg-primary/20 transition-colors border border-primary/20">
                      <ShieldCheck className="text-primary" size={28} />
                    </div>
                    <p className="text-sm font-bold text-slate-200">
                      {t("modal.benefits.installation")}
                      <br />
                      <span className="text-slate-500 font-normal text-xs">
                        {t("modal.benefits.installation_sub")}
                      </span>
                    </p>
                  </div>
                  <div className="flex items-center gap-5 group">
                    <div className="p-4 bg-accent/10 rounded-2xl group-hover:bg-accent/20 transition-colors border border-accent/20">
                      <Plane className="text-accent" size={28} />
                    </div>
                    <p className="text-sm font-bold text-slate-200">
                      {t("modal.benefits.drone")}
                      <br />
                      <span className="text-slate-500 font-normal text-xs">
                        {t("modal.benefits.drone_sub")}
                      </span>
                    </p>
                  </div>
                  <div className="flex items-center gap-5 group">
                    <div className="p-4 bg-secondary/10 rounded-2xl group-hover:bg-secondary/20 transition-colors border border-secondary/20">
                      <MessageSquare className="text-secondary" size={28} />
                    </div>
                    <p className="text-sm font-bold text-slate-200">
                      {t("modal.benefits.consult")}
                      <br />
                      <span className="text-slate-500 font-normal text-xs">
                        {t("modal.benefits.consult_sub")}
                      </span>
                    </p>
                  </div>
                  <div className="flex items-center gap-5 group">
                    <div className="p-4 bg-orange-400/10 rounded-2xl group-hover:bg-orange-400/20 transition-colors border border-orange-400/20">
                      <Sun className="text-orange-400" size={28} />
                    </div>
                    <p className="text-sm font-bold text-slate-200">
                      {t("modal.benefits.weather")}
                      <br />
                      <span className="text-slate-500 font-normal text-xs">
                        {t("modal.benefits.weather_sub")}
                      </span>
                    </p>
                  </div>
                </div>

                <div className="border-t border-white/10 pt-10 relative z-10">
                  <div className="text-[11px] text-slate-500 mb-10 italic space-y-1">
                    <p>{t("modal.notes.note1")}</p>
                    <p>{t("modal.notes.note2")}</p>
                  </div>

                  <button
                    onClick={() => {
                      const nomorWA = "6282289960215";
                      const pesan = encodeURIComponent(
                        `Halo WIndBright, saya ingin memesan atau bertanya lebih lanjut mengenai layanan: ${selectedService?.title}`,
                      );
                      window.open(
                        `https://wa.me/${nomorWA}?text=${pesan}`,
                        "_blank",
                      );
                    }}
                    className="group relative w-full sm:w-auto overflow-hidden bg-primary text-white font-black py-5 px-16 rounded-2xl transition-all duration-300 shadow-[0_10px_30px_rgba(79,70,229,0.4)] hover:shadow-primary/40 uppercase tracking-widest text-sm"
                  >
                    <div className="absolute inset-0 w-0 bg-secondary transition-all duration-500 ease-out group-hover:w-full"></div>
                    <span className="relative z-10 flex items-center justify-center gap-3">
                      {t("modal.contact")}
                      <ArrowRight
                        size={18}
                        className="group-hover:translate-x-2 transition-transform"
                      />
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <section className="bg-background dark:bg-slate-900 py-24 px-6 md:px-12 lg:px-24 transition-colors duration-300 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 lg:gap-16 mb-12">
            <div className="flex-1">
              <span className="text-primary font-bold text-sm tracking-widest uppercase mb-3 block">
                {t("edukit.label")}
              </span>
              <h2 className="text-dark dark:text-white text-4xl md:text-5xl font-black leading-tight">
                {t("edukit.title_1")}{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                  {t("edukit.title_2")}
                </span>
              </h2>
            </div>

            <div className="flex-[1.5]">
              <p className="text-dark/70 dark:text-white/70 text-lg leading-relaxed max-w-2xl">
                {t("edukit.description")}
              </p>
            </div>
          </div>

          <div className="flex flex-nowrap overflow-x-auto lg:overflow-visible lg:grid lg:grid-cols-5 gap-4 pb-8 lg:pb-0 snap-x snap-mandatory scrollbar-hide">
            {edukitItems.map((item) => (
              <div
                key={item.id}
                className="relative flex-none w-[280px] sm:w-[320px] lg:w-full h-[450px] overflow-hidden rounded-2xl shadow-lg snap-center group cursor-pointer"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/40 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300"></div>

                <div className="absolute top-4 left-4">
                  <div className="w-8 h-[2px] bg-accent/50"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <style
          dangerouslySetInnerHTML={{
            __html: `
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `,
          }}
        />
      </section>

      <section className="bg-background dark:bg-slate-900 py-24 px-6 md:px-12 lg:px-24 transition-colors duration-300 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 lg:gap-16 mb-12">
            <div className="flex-1">
              <span className="text-primary font-bold text-sm tracking-widest uppercase mb-3 block">
                {t("installation.label")}
              </span>
              <h2 className="text-dark dark:text-white text-4xl md:text-5xl font-black leading-tight">
                {t("installation.title_1")}{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                  {t("installation.title_2")}
                </span>
              </h2>
            </div>

            <div className="flex-[1.5]">
              <p className="text-dark/70 dark:text-white/70 text-lg leading-relaxed max-w-2xl">
                {t("installation.description")}
              </p>
            </div>
          </div>

          <div className="flex flex-nowrap overflow-x-auto lg:overflow-visible lg:grid lg:grid-cols-5 gap-4 pb-8 lg:pb-0 snap-x snap-mandatory scrollbar-hide">
            {installationServices.map((service) => (
              <div
                key={service.id}
                className="relative flex-none w-[280px] sm:w-[320px] lg:w-full h-[450px] overflow-hidden rounded-2xl shadow-lg snap-center group cursor-pointer"
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/40 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 left-4">
                  <div className="w-8 h-[2px] bg-accent/60"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <style
          dangerouslySetInnerHTML={{
            __html: `
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `,
          }}
        />
      </section>

      <section className="bg-background dark:bg-slate-900 py-24 px-6 md:px-12 lg:px-24 transition-colors duration-300 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 lg:gap-16 mb-12">
            <div className="flex-1">
              <span className="text-primary font-bold text-sm tracking-widest uppercase mb-3 block">
                {t("drone.label")}
              </span>
              <h2 className="text-dark dark:text-white text-4xl md:text-5xl font-black leading-tight">
                {t("drone.title_1")}{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                  {" "}
                  {t("drone.title_2")}{" "}
                </span>
              </h2>
            </div>

            <div className="flex-[1.5]">
              <p className="text-dark/70 dark:text-white/70 text-lg leading-relaxed max-w-2xl">
                {t("drone.description")}
              </p>
            </div>
          </div>

          <div className="flex flex-nowrap overflow-x-auto lg:overflow-visible lg:grid lg:grid-cols-5 gap-4 pb-8 lg:pb-0 snap-x snap-mandatory scrollbar-hide">
            {droneServices.map((item) => (
              <div
                key={item.id}
                className="relative flex-none w-[280px] sm:w-[320px] lg:w-full h-[450px] overflow-hidden rounded-2xl shadow-lg snap-center group cursor-pointer"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/95 via-dark/30 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 left-4">
                  <div className="w-8 h-[2px] bg-accent/40"></div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex lg:hidden justify-center gap-2 mt-6">
            <div className="w-8 h-1 bg-primary rounded-full"></div>
            <div className="w-2 h-1 bg-gray-300 dark:bg-slate-700 rounded-full"></div>
            <div className="w-2 h-1 bg-gray-300 dark:bg-slate-700 rounded-full"></div>
          </div>
        </div>
        <style
          dangerouslySetInnerHTML={{
            __html: `
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `,
          }}
        />
      </section>
    </main>
  );
};

export default HeroCarousel;
