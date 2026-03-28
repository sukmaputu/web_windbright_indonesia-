import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const ThemeToggle = ({ isDark, setIsDark }) => {
  return (
    <>
      <style>{`
.switch {
  font-size: 17px;
  position: relative;
  display: inline-block;
  width: 4em;
  height: 2.2em;
  border-radius: 30px;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
}
.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}
.slider {
  position: absolute;
  cursor: pointer;
  inset: 0;
  background-color: #2a2a2a;
  transition: 0.4s;
  border-radius: 30px;
  overflow: hidden;
}
.slider:before {
  position: absolute;
  content: "";
  height: 1.2em;
  width: 1.2em;
  border-radius: 20px;
  left: 0.5em;
  bottom: 0.5em;
  transition: 0.4s;
  transition-timing-function: cubic-bezier(0.81,-0.04,0.38,1.5);
  box-shadow: inset 8px -4px 0px 0px #fff;
}
.switch input:checked + .slider {
  background-color: #00a6ff;
}
.switch input:checked + .slider:before {
  transform: translateX(1.8em);
  box-shadow: inset 15px -4px 0px 15px #ffcf48;
}
.star {
  background-color: #fff;
  border-radius: 50%;
  position: absolute;
  width: 5px;
  transition: all 0.4s;
  height: 5px;
}
.star_1 {
  left: 2.5em;
  top: 0.5em;
}
.star_2 {
  left: 2.2em;
  top: 1.2em;
}
.star_3 {
  left: 3em;
  top: 0.9em;
}
.switch input:checked ~ .slider .star {
  opacity: 0;
}
.cloud {
  width: 3.5em;
  position: absolute;
  bottom: -1.4em;
  left: -1.1em;
  opacity: 0;
  transition: all 0.4s;
}
.switch input:checked ~ .slider .cloud {
  opacity: 1;
}
`}</style>

      <label className="switch">
        <input
          checked={!isDark}
          onChange={() => setIsDark(!isDark)}
          id="checkbox"
          type="checkbox"
        />
        <span className="slider">
          <div className="star star_1"></div>
          <div className="star star_2"></div>
          <div className="star star_3"></div>
          <svg viewBox="0 0 16 16" className="cloud_1 cloud">
            <path
              transform="matrix(.77976 0 0 .78395-299.99-418.63)"
              fill="#fff"
              d="m391.84 540.91c-.421-.329-.949-.524-1.523-.524-1.351 0-2.451 1.084-2.485 2.435-1.395.526-2.388 1.88-2.388 3.466 0 1.874 1.385 3.423 3.182 3.667v.034h12.73v-.006c1.775-.104 3.182-1.584 3.182-3.395 0-1.747-1.309-3.186-2.994-3.379.007-.106.011-.214.011-.322 0-2.707-2.271-4.901-5.072-4.901-2.073 0-3.856 1.202-4.643 2.925"
            ></path>
          </svg>
        </span>
      </label>
    </>
  );
};

const Navbar = ({ isDark, setIsDark }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const navLinks = [
    { name: t("home"), path: "/" },
    { name: t("service"), path: "/service" },
    { name: t("technology"), path: "/technology" },
    { name: t("about"), path: "/about" },
  ];

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <nav className="bg-white dark:bg-slate-900 shadow-md sticky top-0 z-50 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <div className="w-5 h-5 bg-accent rounded-full animate-pulse"></div>
            </div>
            <span className="text-2xl font-bold text-dark dark:text-white tracking-tight">
              Wind<span className="text-primary">Bright</span>
            </span>
          </div>

          <div className="hidden lg:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="relative text-dark dark:text-white hover:text-primary font-medium transition-colors py-1 group"
              >
                {link.name}
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}

            <select
              onChange={(e) => changeLanguage(e.target.value)}
              className="bg-transparent border border-gray-300 dark:border-gray-600 text-dark dark:text-white px-2 py-1 rounded-md text-sm"
            >
              <option value="id">ID</option>
              <option value="en">EN</option>
            </select>

            <Link to="/consultation">
              <button className="bg-primary hover:bg-secondary text-white px-6 py-2 rounded-full font-semibold transition-all shadow-lg hover:shadow-indigo-200">
                {t("consult")}
              </button>
            </Link>

            <ThemeToggle isDark={isDark} setIsDark={setIsDark} />
          </div>

          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-dark dark:text-white focus:outline-none p-2"
            >
              <svg
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      <div
        className={`fixed top-0 left-0 h-full w-72 bg-white dark:bg-slate-900 z-50 transform ${isOpen ? "translate-x-0" : "-translate-x-full"} transition-transform duration-300 md:hidden shadow-2xl`}
      >
        <div className="p-6">
          <div className="flex items-center justify-between mb-10">
            <span className="text-xl font-bold text-primary">EcoTech</span>
            <button
              onClick={() => setIsOpen(false)}
              className="text-dark dark:text-white"
            >
              ✕
            </button>
          </div>

          <div className="flex flex-col space-y-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="relative text-lg font-medium text-dark dark:text-white hover:text-primary transition-colors py-1 group w-fit"
              >
                {link.name}
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}

            <div className="pt-4 flex justify-start">
              <ThemeToggle isDark={isDark} setIsDark={setIsDark} />
            </div>

            <Link to="/consultation">
              <button className="bg-primary hover:bg-secondary text-white px-6 py-2 rounded-full font-semibold transition-all shadow-lg hover:shadow-indigo-200">
                Mulai Konsultasi
              </button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
