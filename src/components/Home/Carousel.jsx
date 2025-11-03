import { useState, useEffect } from "react";

const images = [
  "/images/Aap_ki_punji_aapka_aadhikar_banner-_English-curved_1920x500.jpg",
  "/images/Banner (1)-min.jpg",
  "/images/LIC No GST Creative_1920x500_Eng.jpg",
  "/images/LIC-Bima-Lakshmi-Plan-Creative-1920x500.jpg",

];

export default function Carousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setIndex((prev) => (prev + 1) % images.length);
  const prevSlide = () =>
    setIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div className="relative w-full  overflow-hidden bg-black">
      {/* Slides */}
      <div
        className="flex transition-transform duration-700"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {images.map((src, i) => (
          <div key={i} className="w-full  flex-shrink-0  flex items-center justify-center bg-black">
            <img
              src={src}
              className="w-full h-full object-fill"
              alt=""
            />
          </div>
        ))}
      </div>

      {/* Prev */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-3 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white px-3 py-1 rounded-full text-lg transition"
      >
        ‹
      </button>

      {/* Next */}
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-3 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white px-3 py-1 rounded-full text-lg transition"
      >
        ›
      </button>
    </div>
  );
}