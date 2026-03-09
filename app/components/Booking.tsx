import React from "react";
import { playfair, nunito } from "@/app/font";
import { Button } from "@/components/ui/button";

const Booking = () => {
  return (
    <section
      id="booking"
      className="bg-[#7c0828] px-6 py-16 md:px-10 lg:px-16 xl:px-20"
    >
      <div className="mx-auto max-w-4xl text-center">
        <p
          className={`${nunito.className} flex items-center justify-center gap-3 uppercase tracking-[0.35em] text-[11px] text-[#E8D5A0]`}
        >
          <span className="inline-block h-px w-8 bg-[#E8D5A0]" />
          Book Appointment
        </p>

        <h2
          className={`${playfair.className} mt-5 text-4xl leading-tight text-[#FDF6F0] md:text-5xl xl:text-6xl`}
        >
          Reserve your <span className="italic text-[#D9BB63]">beauty session</span>
        </h2>

        <p className={`${nunito.className} mt-4 text-[#d8a9b6]`}>
          Fill in the form below or call us directly. Walk-ins are always welcome too.
        </p>

        <form className="mt-10 grid grid-cols-1 gap-3 md:grid-cols-3">
          <input
            type="text"
            placeholder="Your First Name"
            className={`${nunito.className} h-12 rounded-xl border border-[#b55b78] bg-[#8d1b3f]/80 px-4 text-sm text-white placeholder:text-[#c9899d] outline-none`}
          />
          <input
            type="text"
            placeholder="Your Last Name"
            className={`${nunito.className} h-12 rounded-xl border border-[#b55b78] bg-[#8d1b3f]/80 px-4 text-sm text-white placeholder:text-[#c9899d] outline-none`}
          />
          <input
            type="tel"
            placeholder="Phone Number"
            className={`${nunito.className} h-12 rounded-xl border border-[#b55b78] bg-[#8d1b3f]/80 px-4 text-sm text-white placeholder:text-[#c9899d] outline-none`}
          />

          <input
            type="email"
            placeholder="Email Address"
            className={`${nunito.className} h-12 rounded-xl border border-[#b55b78] bg-[#8d1b3f]/80 px-4 text-sm text-white placeholder:text-[#c9899d] outline-none md:col-span-1`}
          />
          <input
            type="date"
            className={`${nunito.className} h-12 rounded-xl border border-[#b55b78] bg-[#8d1b3f]/80 px-4 text-sm text-white outline-none md:col-span-1`}
          />
          <select
            className={`${nunito.className} h-12 rounded-xl border border-[#b55b78] bg-[#8d1b3f]/80 px-4 text-sm text-white outline-none md:col-span-1`}
            defaultValue=""
          >
            <option value="" disabled>
              Choose a Service
            </option>
            <option>Manicure</option>
            <option>Pedicure</option>
            <option>Facial</option>
            <option>Waxing / Épilation</option>
            <option>Henna</option>
            <option>Ayurvedic Massage</option>
            <option>Fake Nails</option>
            <option>Eye & Brow</option>
            <option>Fake Eyelashes</option>
            <option>Tooth Diamond</option>
          </select>

          <textarea
            placeholder="Any special requests or notes..."
            rows={4}
            className={`${nunito.className} rounded-xl border border-[#b55b78] bg-[#8d1b3f]/80 px-4 py-4 text-sm text-white placeholder:text-[#c9899d] outline-none md:col-span-3`}
          />

          <div className="md:col-span-3 flex justify-center pt-3">
            <Button className={`${nunito.className} h-12 rounded-full bg-[#D9BB63] px-10 uppercase tracking-[0.18em] text-xs text-[#5a1630] shadow-[0_10px_30px_rgba(217,187,99,0.35)] hover:bg-[#e5cc7e]`}>
              Confirm My Appointment
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Booking;