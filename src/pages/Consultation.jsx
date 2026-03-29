import React, { useState } from "react";

const Consultation = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    question: "",
  });

  const [status, setStatus] = useState({
    success: false,
    error: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    // 🔍 VALIDASI
    if (
      !formData.fullName ||
      !formData.phoneNumber ||
      !formData.email ||
      !formData.question
    ) {
      setStatus({ success: false, error: "Semua field wajib diisi" });
      return;
    }

    if (!formData.email.includes("@")) {
      setStatus({ success: false, error: "Format email tidak valid" });
      return;
    }

    if (formData.phoneNumber.length < 10) {
      setStatus({ success: false, error: "Nomor HP tidak valid" });
      return;
    }

    try {
      await fetch(
        "https://hook.eu1.make.com/q4akfsrk0u542i4r4aulq3h8n58o7ebk",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        },
      );

      // ✅ SUCCESS
      setStatus({ success: true, error: "" });

      setFormData({
        fullName: "",
        phoneNumber: "",
        email: "",
        question: "",
      });

      // auto hide notif setelah 3 detik
      setTimeout(() => {
        setStatus({ success: false, error: "" });
      }, 3000);
    } catch {
      setStatus({ success: false, error: "Gagal mengirim pesan" });
    }
  };
  return (
    <section className="min-h-screen bg-background dark:bg-slate-900 pt-32 pb-20 px-6 transition-colors duration-300">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-black text-dark dark:text-white mb-4 tracking-tight uppercase">
            ANY{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              QUESTION
            </span>{" "}
            ?
          </h1>
          <p className="text-gray-500 dark:text-white/60 text-lg">
            Submit your feedback, suggestions, and complaint to the PT
            WindBright Team
          </p>
        </div>

        {status.success && (
          <div className="mb-6 p-4 rounded-xl bg-green-500/10 border border-green-500 text-green-600 font-semibold text-center">
            ✅ Pesan Terkirim
          </div>
        )}

        {status.error && (
          <div className="mb-6 p-4 rounded-xl bg-red-500/10 border border-red-500 text-red-600 font-semibold text-center">
            ❌ {status.error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex flex-col space-y-2">
            <label className="text-dark dark:text-white font-bold text-sm uppercase tracking-wider">
              Full Name
            </label>
            <input
              type="text"
              value={formData.fullName}
              placeholder="Enter your full name"
              className="w-full px-4 py-4 rounded-xl border-2 border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-dark dark:text-white focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all placeholder:text-gray-400"
              required
              onChange={(e) =>
                setFormData({ ...formData, fullName: e.target.value })
              }
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col space-y-2">
              <label className="text-dark dark:text-white font-bold text-sm uppercase tracking-wider">
                Phone Number
              </label>
              <input
                type="text"
                value={formData.phoneNumber}
                placeholder="e.g. 08xxxxxxxx"
                className="w-full px-4 py-4 rounded-xl border-2 border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-dark dark:text-white focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all placeholder:text-gray-400"
                required
                onChange={(e) =>
                  setFormData({ ...formData, phoneNumber: e.target.value })
                }
              />
            </div>
            <div className="flex flex-col space-y-2">
              <label className="text-dark dark:text-white font-bold text-sm uppercase tracking-wider">
                Email Address
              </label>
              <input
                type="email"
                value={formData.email}
                placeholder="name@example.com"
                className="w-full px-4 py-4 rounded-xl border-2 border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-dark dark:text-white focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all placeholder:text-gray-400"
                required
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </div>
          </div>

          <div className="flex flex-col space-y-2">
            <label className="text-dark dark:text-white font-bold text-sm uppercase tracking-wider">
              Question
            </label>
            <textarea
              rows={6}
              placeholder="Describe your complaint or feedback here..."
              value={formData.question}
              className="w-full px-4 py-4 rounded-xl border-2 border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-dark dark:text-white focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all resize-none placeholder:text-gray-400"
              required
              onChange={(e) =>
                setFormData({ ...formData, question: e.target.value })
              }
            ></textarea>
          </div>

          <div className="pt-4">
            <button
              type="submit"
              className="w-full bg-primary hover:bg-primary/90 text-white font-black py-5 rounded-xl shadow-xl shadow-primary/20 transition-all transform hover:-translate-y-1 active:scale-95 text-xl uppercase tracking-[0.2em]"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Consultation;
