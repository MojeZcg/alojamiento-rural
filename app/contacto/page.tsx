import type { Metadata } from "next";
import ContactoClient from "./ContactoClient";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Contáctanos para consultas y reservas. Alojamiento Rural en San Rafael, Mendoza. Respondemos a la brevedad.",
  alternates: {
    canonical: "https://www.alojamientorural.com.ar/contacto",
  },
  openGraph: {
    title: "Contacto | Alojamiento Rural San Rafael",
    description:
      "Contáctanos para consultas y reservas. Estamos en San Rafael, Mendoza.",
    url: "https://www.alojamientorural.com.ar/contacto",
  },
};

export default function ContactoPage() {
  return <ContactoClient />;
}
