'use client'
import Image from "next/image";

const IntroSection = () => {
    const scrollProducts = () => {
      const products = document.getElementById("products");
      products?.scrollIntoView({
        behavior: "smooth",
      });
    };
  return (
    <div className="w-full font-sans" id="intro">
      <div className="relative w-full h-[70vh] md:h-[75vh] lg:h-[80vh]">
        {/* Hero Image */}
        <Image
          src="/images/landing-page-img.jpg"
          alt="Landing page image"
          fill
          className="object-cover"
          priority
        />

        {/* Lighter overlay for dark theme */}
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>

        {/* Hero Content Overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-6 max-w-4xl">
            {/* Main Heading */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight">
              Beauty for your <span className="text-amber-300">crown</span>
            </h1>

            {/* Description */}
            <p className="text-lg md:text-xl lg:text-2xl mb-8 leading-relaxed text-gray-100 max-w-3xl mx-auto">
              EWA is a natural haircare brand rooted in intention and care. We
              create herbal hair products designed to nourish the scalp, support
              healthy hair growth, and protect your crown using thoughtfully
              selected, effective ingredients.
            </p>

            {/* Call to Action Button */}
            <button 
            onClick = {scrollProducts}
            className="bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-700 hover:to-amber-600 text-white font-bold py-4 px-8 md:py-5 md:px-12 rounded-full text-lg md:text-xl shadow-2xl transform hover:scale-105 transition-all duration-300 ease-out hover:shadow-amber-500/30">
              Shop EWA
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroSection;
