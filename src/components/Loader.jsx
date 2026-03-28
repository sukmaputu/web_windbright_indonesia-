import React, { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";

const Loader = () => {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-dark">
      <style>
        {`
          .loader { position: relative; width: 20px; height: 20px; }
          .stick { width: 5px; height: 150px; background-color: #a3541c; position: absolute; top: 0; left: 50%; transform: translate(-50%, 0%); z-index: -1; }
          .container-loader { position: relative; width: 20px; height: 20px; transform: rotate(30deg) scale(0.77); animation: rotateAnimation 3s infinite linear; }
          .pin { position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 8px; height: 8px; background-color: white; z-index: 10; border-radius: 999px; }
          .paper-container { position: absolute; scale: 1.5; }
          .paper-leaf-1 { position: relative; width: 0; height: 0; clip-path: ellipse(50% 50% at 50% 109%); border-left: 30px solid transparent; border-right: 30px solid transparent; border-top-left-radius: 222px; border-top-right-radius: 222px; }
          .paper-leaf-2 { position: absolute; right: -1px; bottom: 0; width: 30px; height: 20.5px; border-bottom-right-radius: 2px; z-index: 2; }
          .paper-leaf-2::before { content: ""; position: absolute; right: 1/2; bottom: 0; width: 24.5px; height: 20.5px; clip-path: ellipse(100% 100% at 0% 100%); border-top-right-radius: 999px; box-shadow: inset -5px 0px 3px -3px rgba(0, 0, 0, 0.2), 10px -10px 10px 0px rgba(255, 255, 255, 0.1); z-index: 1; }
          .red { top: 50%; left: 50%; transform: translate(-80%, -85%); z-index: 2; }
          .red-1 { border-bottom: 50px solid #ff5733; }
          .red-2 { background-color: #ff5733; }
          .rotate-90 { transform: rotate(90deg) translate(-75%, -10%); top: 50%; left: 50%; z-index: 3; }
          .yellow-1 { border-bottom: 50px solid #ffc300; }
          .yellow-2 { background-color: #ffc300; }
          .rotate-180 { transform: rotate(180deg) translate(-16%, -17%); top: 50%; left: 50%; z-index: 4; }
          .green-1 { border-bottom: 50px solid #2ecc71; }
          .green-2 { background-color: #2ecc71; }
          .rotate-270 { transform: rotate(270deg) translate(-22%, -90%); top: 50%; left: 50%; z-index: 5; }
          .blue-1 { border-bottom: 50px solid #3498db; }
          .blue-2 { background-color: #3498db; }
          @keyframes rotateAnimation { from { transform: rotate(30deg) scale(0.77); } to { transform: rotate(390deg) scale(0.77); } }
        `}
      </style>
      <div className="loader">
        <div className="stick"></div>
        <div className="container-loader">
          <div className="pin"></div>
          <div className="paper-container red">
            <div className="paper-leaf-1 red-1"></div>
            <div className="paper-leaf-2 red-2"></div>
          </div>
          <div className="paper-container rotate-90">
            <div className="paper-leaf-1 yellow-1"></div>
            <div className="paper-leaf-2 yellow-2"></div>
          </div>
          <div className="paper-container rotate-180">
            <div className="paper-leaf-1 green-1"></div>
            <div className="paper-leaf-2 green-2"></div>
          </div>
          <div className="paper-container rotate-270">
            <div className="paper-leaf-1 blue-1"></div>
            <div className="paper-leaf-2 blue-2"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

const CompanySection = () => {
  const data = [
    {
      id: 1,
      category: "PROFIL PPID",
      title: "Layanan Informasi Publik",
      image:
        "https://images.unsplash.com/photo-1581094288338-2314dddb7bc3?q=80&w=2070&auto=format&fit=crop",
    },
    {
      id: 2,
      category: "INFORMASI",
      title: "Harga BBM Pertamina",
      image:
        "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2070&auto=format&fit=crop",
    },
    {
      id: 3,
      category: "GCG",
      title: "Tata Kelola Perseroan",
      image:
        "https://images.unsplash.com/photo-1513828583688-c52646db42da?q=80&w=2070&auto=format&fit=crop",
    },
    {
      id: 4,
      category: "REKRUTMEN",
      title: "Menjadi Perwira Pertamina",
      image:
        "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop",
    },
  ];

  return (
    <section className="flex flex-col md:flex-row h-screen w-full overflow-hidden">
      {data.map((item) => (
        <div
          key={item.id}
          className="relative flex-1 group cursor-pointer overflow-hidden border-r border-white/10 last:border-r-0"
        >
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
            style={{ backgroundImage: `url(${item.image})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/20 to-transparent" />
          <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="absolute bottom-0 left-0 p-8 w-full">
            <p className="text-accent text-sm font-bold tracking-wider mb-2">
              {item.category}
            </p>
            <h3 className="text-background text-2xl md:text-3xl font-bold mb-8 leading-tight">
              {item.title}
            </h3>
            <div className="w-12 h-12 rounded-full border-2 border-background flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all duration-300">
              <ArrowRight className="text-background w-6 h-6" />
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

const InvestorSection = () => {
  return (
    <section className="bg-background py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 lg:gap-16">
        <div className="flex-1">
          <span className="text-primary font-bold text-sm tracking-widest uppercase mb-3 block">
            INVESTOR
          </span>
          <h2 className="text-dark text-4xl md:text-5xl font-bold leading-tight">
            Hubungan Investor
          </h2>
        </div>
        <div className="flex-[1.5] flex flex-col md:flex-row items-start md:items-center gap-8 lg:gap-12">
          <p className="text-dark/70 text-lg leading-relaxed flex-1">
            Sebagai perusahaan BUMN yang 100% sahamnya dimiliki oleh pemerintah
            Indonesia, Pertamina senantiasa menjaga akuntabilitas perusahaan
            dengan menyediakan informasi yang akurat.
          </p>
          <button className="flex items-center gap-3 px-8 py-4 border-2 border-dark/20 rounded-full text-dark font-semibold hover:bg-primary hover:text-background hover:border-primary transition-all duration-300 group whitespace-nowrap">
            Selengkapnya
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="bg-background min-h-screen">
      {isLoading && <Loader />}
      <div
        className={`transition-opacity duration-1000 ${isLoading ? "opacity-0" : "opacity-100"}`}
      >
        <CompanySection />
        <InvestorSection />
      </div>
    </main>
  );
};

export default App;
