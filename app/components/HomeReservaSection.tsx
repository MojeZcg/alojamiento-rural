"use client";

import { useState } from "react";
import { Calendar } from "lucide-react";
import ReservaModal from "./ReservaModal";

export default function HomeReservaSection() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setModalOpen(true)}
        className="w-full sm:w-auto inline-flex items-center justify-center px-8 sm:px-10 py-4 sm:py-5 text-lg sm:text-xl font-semibold text-stone-800 bg-white rounded-lg hover:bg-stone-100 transition-all shadow-2xl hover:shadow-3xl transform hover:-translate-y-1"
      >
        <Calendar className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3" />
        Reservar Ahora
      </button>
      <ReservaModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        habitacion="Alojamiento Rural - Completo"
      />
    </>
  );
}
