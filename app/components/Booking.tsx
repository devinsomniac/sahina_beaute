"use client";

import React, { useState } from "react";
import { playfair, nunito } from "@/app/font";
import { Button } from "@/components/ui/button";

type BookingFormData = {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  date: string;
  service: string;
  notes: string;
};

const initialFormData: BookingFormData = {
  firstName: "",
  lastName: "",
  phone: "",
  email: "",
  date: "",
  service: "",
  notes: "",
};

const services = [
  "Manucure",
  "Pédicure",
  "Soin du visage",
  "Épilation",
  "Henné",
  "Massage ayurvédique",
  "Faux ongles",
  "Yeux & sourcils",
  "Faux cils",
  "Strass dentaire",
];

const Booking = () => {
  const [formData, setFormData] = useState<BookingFormData>(initialFormData);
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (successMessage) setSuccessMessage("");
    if (errorMessage) setErrorMessage("");
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);
    setSuccessMessage("");
    setErrorMessage("");

    try {
      const response = await fetch("/api/booking", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.message || "Échec de l'envoi de la réservation.");
      }

      setSuccessMessage("Votre demande de rendez-vous a été envoyée avec succès.");
      setFormData(initialFormData);
    } catch (error) {
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Une erreur est survenue. Veuillez réessayer."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="booking"
      className="bg-[#7c0828] px-6 py-16 md:px-10 lg:px-16 xl:px-20"
    >
      <div className="mx-auto max-w-5xl">
        <div className="text-center">
          <p
            className={`${nunito.className} flex items-center justify-center gap-3 uppercase tracking-[0.35em] text-[11px] text-[#E8D5A0]`}
          >
            <span className="inline-block h-px w-8 bg-[#E8D5A0]" />
            Réserver un rendez-vous
          </p>

          <h2
            className={`${playfair.className} mt-5 text-4xl leading-tight text-[#FDF6F0] md:text-5xl xl:text-6xl`}
          >
            Réservez votre{" "}
            <span className="italic text-[#D9BB63]">moment beauté</span>
          </h2>

          <p
            className={`${nunito.className} mx-auto mt-4 max-w-2xl text-sm leading-7 text-[#e7bcc7] md:text-base`}
          >
            Remplissez le formulaire ci-dessous et nous recevrons immédiatement
            votre demande de rendez-vous. Les visites sans rendez-vous sont
            également les bienvenues.
          </p>
        </div>

        <div className="mt-12 rounded-[28px] border border-[#a84766] bg-[#8b163b]/60 p-4 shadow-[0_20px_60px_rgba(0,0,0,0.18)] backdrop-blur md:p-8">
          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 gap-4 md:grid-cols-2"
          >
            <div>
              <label
                htmlFor="firstName"
                className={`${nunito.className} mb-2 block text-sm text-[#F8E7D8]`}
              >
                Prénom
              </label>
              <input
                id="firstName"
                name="firstName"
                type="text"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="Entrez votre prénom"
                required
                className={`${nunito.className} h-12 w-full rounded-2xl border border-[#b55b78] bg-[#8d1b3f]/80 px-4 text-sm text-white placeholder:text-[#c9899d] outline-none transition focus:border-[#E8D5A0]`}
              />
            </div>

            <div>
              <label
                htmlFor="lastName"
                className={`${nunito.className} mb-2 block text-sm text-[#F8E7D8]`}
              >
                Nom
              </label>
              <input
                id="lastName"
                name="lastName"
                type="text"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Entrez votre nom"
                required
                className={`${nunito.className} h-12 w-full rounded-2xl border border-[#b55b78] bg-[#8d1b3f]/80 px-4 text-sm text-white placeholder:text-[#c9899d] outline-none transition focus:border-[#E8D5A0]`}
              />
            </div>

            <div>
              <label
                htmlFor="phone"
                className={`${nunito.className} mb-2 block text-sm text-[#F8E7D8]`}
              >
                Numéro de téléphone
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Entrez votre numéro de téléphone"
                required
                className={`${nunito.className} h-12 w-full rounded-2xl border border-[#b55b78] bg-[#8d1b3f]/80 px-4 text-sm text-white placeholder:text-[#c9899d] outline-none transition focus:border-[#E8D5A0]`}
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className={`${nunito.className} mb-2 block text-sm text-[#F8E7D8]`}
              >
                Adresse e-mail
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Entrez votre adresse e-mail"
                required
                className={`${nunito.className} h-12 w-full rounded-2xl border border-[#b55b78] bg-[#8d1b3f]/80 px-4 text-sm text-white placeholder:text-[#c9899d] outline-none transition focus:border-[#E8D5A0]`}
              />
            </div>

            <div>
              <label
                htmlFor="date"
                className={`${nunito.className} mb-2 block text-sm text-[#F8E7D8]`}
              >
                Date souhaitée
              </label>
              <input
                id="date"
                name="date"
                type="date"
                value={formData.date}
                onChange={handleChange}
                required
                className={`${nunito.className} h-12 w-full rounded-2xl border border-[#b55b78] bg-[#8d1b3f]/80 px-4 text-sm text-white outline-none transition focus:border-[#E8D5A0]`}
              />
            </div>

            <div>
              <label
                htmlFor="service"
                className={`${nunito.className} mb-2 block text-sm text-[#F8E7D8]`}
              >
                Service
              </label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
                className={`${nunito.className} h-12 w-full rounded-2xl border border-[#b55b78] bg-[#8d1b3f]/80 px-4 text-sm text-white outline-none transition focus:border-[#E8D5A0]`}
              >
                <option value="" disabled>
                  Choisissez un service
                </option>
                {services.map((service) => (
                  <option key={service} value={service}>
                    {service}
                  </option>
                ))}
              </select>
            </div>

            <div className="md:col-span-2">
              <label
                htmlFor="notes"
                className={`${nunito.className} mb-2 block text-sm text-[#F8E7D8]`}
              >
                Demandes ou notes particulières
              </label>
              <textarea
                id="notes"
                name="notes"
                value={formData.notes}
                onChange={handleChange}
                placeholder="Demandes spéciales, préférences ou informations supplémentaires..."
                rows={5}
                className={`${nunito.className} w-full rounded-2xl border border-[#b55b78] bg-[#8d1b3f]/80 px-4 py-4 text-sm text-white placeholder:text-[#c9899d] outline-none transition focus:border-[#E8D5A0]`}
              />
            </div>

            {(successMessage || errorMessage) && (
              <div className="md:col-span-2">
                {successMessage && (
                  <div
                    className={`${nunito.className} rounded-2xl border border-green-300/30 bg-green-500/10 px-4 py-3 text-sm text-green-100`}
                  >
                    {successMessage}
                  </div>
                )}

                {errorMessage && (
                  <div
                    className={`${nunito.className} rounded-2xl border border-red-300/30 bg-red-500/10 px-4 py-3 text-sm text-red-100`}
                  >
                    {errorMessage}
                  </div>
                )}
              </div>
            )}

            <div className="md:col-span-2 flex justify-center pt-2">
              <Button
                type="submit"
                disabled={loading}
                className={`${nunito.className} h-12 rounded-full bg-[#D9BB63] px-10 uppercase tracking-[0.18em] text-xs text-[#5a1630] shadow-[0_10px_30px_rgba(217,187,99,0.35)] transition hover:bg-[#e5cc7e] disabled:cursor-not-allowed disabled:opacity-70`}
              >
                {loading ? "Envoi..." : "Confirmer mon rendez-vous"}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Booking;