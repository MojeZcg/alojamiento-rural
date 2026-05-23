import type { Metadata } from "next";
import DormitoriosClient from "./DormitoriosClient";

export const metadata: Metadata = {
  title: "Habitaciones",
  description:
    "Habitación matrimonial y familiar con WiFi, TV por cable, aire acondicionado y pileta al aire libre. Hasta 6 personas. $110,000/noche en San Rafael, Mendoza.",
  alternates: {
    canonical: "https://www.alojamientorural.com.ar/dormitorios",
  },
  openGraph: {
    title: "Habitaciones | Alojamiento Rural San Rafael",
    description:
      "Habitación matrimonial y familiar con WiFi, TV por cable y pileta. Hasta 6 personas en San Rafael, Mendoza.",
    url: "https://www.alojamientorural.com.ar/dormitorios",
    images: [
      {
        url: "/og.png",
        width: 1500,
        height: 787,
        alt: "Habitaciones Alojamiento Rural San Rafael",
      },
    ],
  },
};

export default function DormitoriosPage() {
  return <DormitoriosClient />;
}
