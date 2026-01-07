import Link from "next/link";
import products from "../data/products.json";
import Image from "next/image";

export const ProductsPreview = () => {
  return (
    <section className="font-sans py-16 px-6 bg-background" id="products">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mb-4">
            Featured Products
          </h2>
          <div className="w-77 h-1 bg-linear-to-r from-wine-primary to-cocoa-primary mx-auto rounded-full"></div>
        </div>

        {/* Product Card */}
        <div className="bg-dark-card rounded-2xl shadow-2xl overflow-hidden border border-gray-700">
          <div className="flex flex-col lg:flex-row items-center">
            {/* Product Image */}
            <div className="w-full lg:w-1/2 p-8 lg:p-12">
              <div className="relative aspect-square max-w-md mx-auto">
                <Image
                  src={products[0].imgPath}
                  alt={products[0].name}
                  fill
                  className="object-cover rounded-xl shadow-lg"
                  quality={85}
                  loading="lazy"
                />
              </div>
            </div>

            {/* Product Details */}
            <div className="w-full lg:w-1/2 p-8 lg:p-12">
              <div className="max-w-md mx-auto lg:mx-0">
                {/* Product Name */}
                <h3 className="text-2xl md:text-3xl font-bold text-wine-primary mb-4 leading-tight">
                  {products[0].name}
                </h3>

                {/* Product Description */}
                <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                  {products[0].description}
                </p>

                {/* Benefits List */}
                <div className="mb-8">
                  <h4 className="text-xl font-semibold text-cocoa-primary mb-4">
                    Key Benefits:
                  </h4>
                  <ul className="space-y-2">
                    {products[0].benefits.slice(0, 3).map((benefit, index) => (
                      <li
                        key={index}
                        className="flex items-start text-gray-300"
                      >
                        <span className="text-amber-400 mr-3 mt-1">✓</span>
                        <span className="text-sm md:text-base">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Price */}
                <div className="mb-8">
                  <span className="text-3xl font-bold text-amber-400">
                    ${products[0].price.toFixed(2)}
                  </span>
                </div>

                {/* Call to Action Button */}
                <Link href="/products">
                  <button className="bg-linear-to-r from-amber-600 to-amber-500 hover:from-amber-700 hover:to-amber-600 text-white font-bold py-4 px-8 md:py-5 md:px-12 rounded-full text-lg md:text-xl shadow-2xl transform hover:scale-105 transition-all duration-300 ease-out hover:shadow-amber-500/30 w-full lg:w-auto">
                    View All Products
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Optional: Additional Products Teaser */}
        <div className="text-center mt-12">
          <p className="text-gray-400 text-lg">
            Discover our complete range of natural haircare solutions
          </p>
        </div>
      </div>
    </section>
  );
};
