import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  Instagram,
  Linkedin,
  Twitter,
} from "lucide-react";
import { useTranslation } from "react-i18next";

function Footer() {
  const { t } = useTranslation();

  const quickLinks = t("footer.quick_links.items", {
    returnObjects: true,
  });

  const services = t("footer.service_list.items", {
    returnObjects: true,
  });

  return (
    <footer className="bg-dark text-white pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* BRAND */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">
              WindBright<span className="text-primary">.</span>
            </h2>
            <p className="text-gray-400 leading-relaxed">
              {t("footer.brand_desc")}
            </p>

            <div className="flex gap-4">
              <a
                href="#"
                className="p-2 bg-white/5 rounded-full hover:bg-primary transition-colors"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                className="p-2 bg-white/5 rounded-full hover:bg-primary transition-colors"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="#"
                className="p-2 bg-white/5 rounded-full hover:bg-primary transition-colors"
              >
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h3 className="text-lg font-bold mb-6">
              {t("footer.quick_links.title")}
            </h3>
            <ul className="space-y-4 text-gray-400">
              {quickLinks.map((item, idx) => (
                <li key={idx}>
                  <a href="#" className="hover:text-primary transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* SERVICES (SUDAH DIGANTI service_list) */}
          <div>
            <h3 className="text-lg font-bold mb-6">
              {t("footer.service_list.title")}
            </h3>
            <ul className="space-y-4 text-gray-400">
              {services.map((item, idx) => (
                <li key={idx}>
                  <a href="#" className="hover:text-primary transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="text-lg font-bold mb-6">
              {t("footer.contact.title")}
            </h3>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-start gap-3">
                <MapPin className="text-primary shrink-0" size={20} />
                <span>{t("footer.contact.address")}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-primary shrink-0" size={20} />
                <span>{t("footer.contact.phone")}</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-primary shrink-0" size={20} />
                <span>{t("footer.contact.email")}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>{t("footer.bottom.copyright")}</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">
              {t("footer.bottom.privacy")}
            </a>
            <a href="#" className="hover:text-white transition-colors">
              {t("footer.bottom.terms")}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
