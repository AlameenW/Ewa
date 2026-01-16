import Link from "next/link";

const AboutSection = () => {

return (
  <div
    className="bg-dark-card  shadow-2xl overflow-hidden border border-gray-700"
    id="about"
  >
    <div className="flex flex-col lg:flex-row items-start">
      {/* About Image */}
      <div className="w-full lg:w-1/2 p-8 lg:p-12 flex items-center justify-center">
        <img
          src="/images/ewa2.png"
          alt="About EWA"
          width={600}
          height={400}
          className="w-full h-auto max-w-150 rounded-lg shadow-lg"
        />
      </div>
      <div className="w-full lg:w-1/2 p-8 lg:p-12">
        <div className="flex flex-col items-center lg:items-start mb-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold">
            About EWÀ
          </h2>
          <div className="w-68 h-1 bg-linear-to-r from-wine-primary to-cocoa-primary rounded-full mt-2"></div>
        </div>
        <p className="text-base text-gray-300 mb-4">
          EWÀ was created from a personal journey toward healthier hair and a
          simple truth: the right products make all the difference. After
          realizing that many hair products promise results without truly
          nourishing the hair, the focus became clear—intentional care that
          actually works. What started as a homemade herbal oil for personal use
          quickly became something others wanted too. That response transformed
          EWA into a brand dedicated to scalp health, effectiveness, and trust.
          Every EWA product is crafted with purpose, rooted in experience, and
          designed to support the health and beauty of your crown.
        </p>

        <div className="mt-4">
          <Link href="/about">
            <button className="bg-linear-to-r from-amber-600 to-amber-500 hover:from-amber-700 hover:to-amber-600 text-white font-bold py-4 px-8 md:py-5 md:px-12 rounded-full text-lg md:text-xl shadow-2xl transform hover:scale-105 transition-all duration-300 ease-out hover:shadow-amber-500/30 w-full lg:w-auto">
              Learn More
            </button>
          </Link>
        </div>
      </div>
    </div>
  </div>
);
}

export default AboutSection;