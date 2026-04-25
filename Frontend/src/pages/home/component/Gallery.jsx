import { useState } from "react";

import img1 from "../images/SliderPhoto/1.jpg";
import img2 from "../images/SliderPhoto/2.jpg";
import img3 from "../images/SliderPhoto/3.jpg";
import img4 from "../images/SliderPhoto/4.jpg";
import img5 from "../images/SliderPhoto/5.jpg";
import img6 from "../images/SliderPhoto/6.jpg";

const images = [img1, img2, img3, img4, img5, img6];

const Gallery = () => {
  const [index, setIndex] = useState(0);

  const next = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  const prev = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section
      id="gallery-section"
      className="scroll-mt-28 bg-[#1A1A1A] py-20 text-center text-white"
    >
      <h1 className="text-5xl mb-4 font-['Anton',sans-serif]">
        Photo Gallery
      </h1>

      <p className="mb-10 text-gray-300">
        A closer look at our fresh slices, kitchen, and signature pizzas.
      </p>

      <div className="relative max-w-3xl mx-auto">
        <img
          src={images[index]}
          alt="gallery"
          className="w-full h-[400px] object-cover rounded-lg"
        />

        {/* Left Arrow */}
        <button
          onClick={prev}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 px-4 py-2 text-2xl"
        >
          ❮
        </button>

        {/* Right Arrow */}
        <button
          onClick={next}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 px-4 py-2 text-2xl"
        >
          ❯
        </button>
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-3 mt-6">
        {images.map((_, i) => (
          <div
            key={i}
            onClick={() => setIndex(i)}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              i === index ? "bg-white" : "bg-gray-500"
            }`}
          ></div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;