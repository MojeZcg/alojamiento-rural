import type { Metadata } from "next";
import { Roboto_Condensed } from "next/font/google";
import "./globals.css";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import { Analytics } from "@vercel/analytics/next";

const font = Roboto_Condensed({
  weight: ["300", "700"],
  variable: "--font",
  subsets: ["latin"],
});

const baseUrl = "https://www.alojamientorural.com.ar";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Alojamiento Rural | San Rafael, Mendoza",
    template: "%s | Alojamiento Rural San Rafael",
  },
  description:
    "Casa de campo en San Rafael, Mendoza. Alojamiento completo con 2 habitaciones para hasta 6 personas, pileta, WiFi, parrilla y estacionamiento.",
  keywords: [
    "alojamiento rural",
    "san rafael",
    "mendoza",
    "casa de campo",
    "alquiler casas rurales",
    "vacaciones campo mendoza",
    "turismo rural mendoza",
    "alojamiento pileta",
    "alojamiento wifi san rafael",
    "hospedaje san rafael mendoza",
  ],
  authors: [{ name: "Alojamiento Rural San Rafael" }],
  creator: "Alojamiento Rural San Rafael",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Alojamiento Rural | San Rafael, Mendoza",
    description:
      "Casa de campo en San Rafael, Mendoza. Alojamiento completo con 2 habitaciones para hasta 6 personas, pileta, WiFi, parrilla y estacionamiento.",
    url: baseUrl,
    siteName: "Alojamiento Rural San Rafael",
    type: "website",
    locale: "es_AR",
    images: [
      {
        url: "/og.png",
        width: 1500,
        height: 787,
        alt: "Alojamiento Rural San Rafael - Vista Exterior",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Alojamiento Rural | San Rafael, Mendoza",
    description:
      "Casa de campo en San Rafael, Mendoza. Alojamiento para hasta 6 personas con pileta, WiFi, parrilla y estacionamiento.",
    images: ["/og.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LodgingBusiness",
  name: "Alojamiento Rural San Rafael",
  description:
    "Casa de campo en San Rafael, Mendoza. Alojamiento completo con 2 habitaciones para hasta 6 personas.",
  url: baseUrl,
  image: `${baseUrl}/og.png`,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Calle Lozano s/n",
    addressLocality: "San Rafael",
    addressRegion: "Mendoza",
    addressCountry: "AR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -34.575202,
    longitude: -68.098789,
  },
  amenityFeature: [
    { "@type": "LocationFeatureSpecification", name: "WiFi", value: true },
    { "@type": "LocationFeatureSpecification", name: "Pileta", value: true },
    { "@type": "LocationFeatureSpecification", name: "Estacionamiento", value: true },
    { "@type": "LocationFeatureSpecification", name: "TV por cable", value: true },
    { "@type": "LocationFeatureSpecification", name: "Parrilla", value: true },
    { "@type": "LocationFeatureSpecification", name: "Lavandería", value: true },
  ],
  numberOfRooms: 2,
  petsAllowed: false,
  checkinTime: "14:00",
  checkoutTime: "11:00",
  priceRange: "$110,000 ARS por noche",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-AR">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${font.className} antialiased bg-white`}>
        <Navigation />
        {children}
        <Footer />

        <Analytics />
      </body>
    </html>
  );
}
