"use client";

import React, { useEffect, useState } from "react";
import { playfair, nunito } from "@/app/font";
import { motion } from "framer-motion";

type Review = {
  id: number;
  name: string;
  role: string;
  quote: string;
};

const fallbackReviews: Review[] = [
  {
    id: 1,
    name: "Fatima R.",
    role: "Cliente mariée",
    quote:
      "Le henné de mariée était absolument magnifique. L’artiste était très talentueuse et patiente. J’ai reçu énormément de compliments pendant mon événement.",
  },
  {
    id: 2,
    name: "Priya S.",
    role: "Cliente régulière",
    quote:
      "J’adore ce salon. Le massage ayurvédique était profondément relaxant et l’équipe était très chaleureuse et accueillante. C’est devenu l’un de mes endroits préférés.",
  },
  {
    id: 3,
    name: "Amina K.",
    role: "Avis vérifié",
    quote:
      "Des prix excellents pour une qualité incroyable. Mes ongles en gel ont tenu pendant des semaines et l’épilation au fil était parfaite. Je me sens toujours très bien prise en charge ici.",
  },
];

const avatarGradients = [
  "from-[#f0c7cf] to-[#d68da0]",
  "from-[#e5cf86] to-[#c9a84c]",
  "from-[#c57a91] to-[#8f2948]",
  "from-[#d9b7bf] to-[#b97083]",
  "from-[#edd8de] to-[#d2a3ae]",
  "from-[#dabd68] to-[#b48a2e]",
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

const Reviews = () => {
  const [reviews, setReviews] = useState<Review[]>(fallbackReviews);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    role: "",
    quote: "",
  });

  const fetchReviews = async () => {
    try {
      const res = await fetch("/api/reviews", {
        method: "GET",
        cache: "no-store",
      });

      if (!res.ok) {
        throw new Error("Failed to fetch reviews");
      }

      const data: Review[] = await res.json();

      if (Array.isArray(data) && data.length > 0) {
        setReviews(data);
      } else {
        setReviews(fallbackReviews);
      }
    } catch (error) {
      console.error("Error fetching reviews:", error);
      setReviews(fallbackReviews);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchReviews();
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setSuccessMessage("");
    setErrorMessage("");

    try {
      const res = await fetch("/api/reviews", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to submit review");
      }

      setSuccessMessage("Merci ! Votre avis a été envoyé avec succès.");
      setFormData({
        name: "",
        role: "",
        quote: "",
      });

      await fetchReviews();
    } catch (error) {
      console.error("Error submitting review:", error);
      setErrorMessage("Une erreur est survenue. Veuillez réessayer.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section
      id="reviews"
      className="bg-[#FDF6F0] px-6 py-16 md:px-10 lg:px-16 xl:px-20"
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <p
            className={`${nunito.className} flex items-center justify-center gap-3 uppercase tracking-[0.35em] text-[11px] text-[#C9A84C]`}
          >
            <span className="inline-block h-px w-8 bg-[#C9A84C]" />
            Avis Clients
          </p>

          <h2
            className={`${playfair.className} mt-5 text-4xl leading-tight text-[#6B0F2B] md:text-5xl xl:text-6xl`}
          >
            Ce que disent nos{" "}
            <span className="italic text-[#C9A84C]">clientes</span>
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
          className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3"
        >
          {loading
            ? Array.from({ length: 6 }).map((_, index) => (
                <div
                  key={index}
                  className="min-h-[220px] rounded-2xl bg-[#f4e7e9] px-6 py-6 animate-pulse"
                />
              ))
            : reviews.map((review, index) => (
                <motion.div
                  key={review.id}
                  variants={cardVariants}
                  className="min-h-[220px] rounded-2xl bg-[#f4e7e9] px-6 py-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >

                  <p
                    className={`${playfair.className} text-[15px] leading-6 italic text-[#6B0F2B]`}
                  >
                    “{review.quote}”
                  </p>

                  <div className="mt-5 flex items-center gap-3">
                    <div
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br ${
                        avatarGradients[index % avatarGradients.length]
                      } text-xs font-semibold text-white`}
                    >
                      {review.name
                        .split(" ")
                        .map((part) => part[0])
                        .join("")}
                    </div>

                    <div>
                      <p className={`${nunito.className} text-sm text-[#6B0F2B]`}>
                        {review.name}
                      </p>
                      <p className={`${nunito.className} text-xs text-[#9A6070]`}>
                        {review.role}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.7 }}
          className="mx-auto mt-14 max-w-3xl rounded-3xl bg-[#f4e7e9] p-6 shadow-sm md:p-8"
        >
          <h3
            className={`${playfair.className} text-3xl text-[#6B0F2B] md:text-4xl`}
          >
            Laisser un avis
          </h3>

          <p className={`${nunito.className} mt-2 text-sm text-[#9A6070]`}>
            Partagez votre expérience avec notre salon.
          </p>

          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <input
                type="text"
                name="name"
                placeholder="Votre nom"
                value={formData.name}
                onChange={handleChange}
                required
                maxLength={60}
                className={`${nunito.className} w-full rounded-xl border border-[#e7cdd4] bg-white px-4 py-3 text-[#6B0F2B] outline-none placeholder:text-[#b58593] focus:border-[#C9A84C]`}
              />

              <input
                type="text"
                name="role"
                placeholder="Ex: Cliente régulière"
                value={formData.role}
                onChange={handleChange}
                required
                maxLength={80}
                className={`${nunito.className} w-full rounded-xl border border-[#e7cdd4] bg-white px-4 py-3 text-[#6B0F2B] outline-none placeholder:text-[#b58593] focus:border-[#C9A84C]`}
              />
            </div>

            <textarea
              name="quote"
              placeholder="Écrivez votre avis..."
              value={formData.quote}
              onChange={handleChange}
              required
              rows={5}
              maxLength={500}
              className={`${nunito.className} w-full resize-none rounded-xl border border-[#e7cdd4] bg-white px-4 py-3 text-[#6B0F2B] outline-none placeholder:text-[#b58593] focus:border-[#C9A84C]`}
            />

            {successMessage ? (
              <p className={`${nunito.className} text-sm text-green-700`}>
                {successMessage}
              </p>
            ) : null}

            {errorMessage ? (
              <p className={`${nunito.className} text-sm text-red-700`}>
                {errorMessage}
              </p>
            ) : null}

            <button
              type="submit"
              disabled={submitting}
              className={`${nunito.className} inline-flex rounded-full bg-[#6B0F2B] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#5a0d24] disabled:cursor-not-allowed disabled:opacity-70`}
            >
              {submitting ? "Envoi en cours..." : "Envoyer l’avis"}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Reviews;