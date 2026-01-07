import products from "../data/products.json";
import Image from "next/image";

const Page = () => {
  return (
    <div className="font-sans bg-background min-h-screen">
      {/* Page Header Section */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground mb-6">
            All Products
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-wine-primary to-cocoa-primary mx-auto rounded-full mb-6"></div>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Discover our complete collection of natural haircare products,
            thoughtfully crafted to nourish your crown with effective, herbal
            ingredients.
          </p>
        </div>
      </section>

      {/* Products Listing Section */}
      <section className="py-8 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="space-y-12">
            {products.map((product, index) => (
              <div
                key={product.name}
                className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12 py-8 border-b border-gray-700 last:border-b-0"
              >
                {/* Product Image */}
                <div className="w-full md:w-1/3 max-w-sm">
                  <div className="relative aspect-square">
                    <Image
                      src={product.imgPath}
                      alt={product.name}
                      fill
                      className="object-cover rounded-xl shadow-lg"
                      quality={85}
                    />
                  </div>
                </div>

                {/* Product Details */}
                <div className="w-full md:w-2/3 space-y-6">
                  {/* Product Name */}
                  <h2 className="text-3xl md:text-4xl font-bold text-wine-primary leading-tight">
                    {product.name}
                  </h2>

                  {/* Product Description */}
                  <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                    {product.description}
                  </p>

                  {/* Benefits */}
                  <div>
                    <h3 className="text-xl font-semibold text-cocoa-primary mb-4">
                      Key Benefits:
                    </h3>
                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-3">
                      {product.benefits.map((benefit, benefitIndex) => (
                        <li
                          key={benefitIndex}
                          className="flex items-start text-gray-300"
                        >
                          <span className="text-amber-400 mr-3 mt-1 text-sm">
                            ✓
                          </span>
                          <span className="text-base leading-relaxed">
                            {benefit}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Price */}
                  <div className="pt-4">
                    <span className="text-4xl font-bold text-amber-400">
                      ${product.price.toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Simple expansion message */}
          <div className="mt-16 text-center py-12">
            <p className="text-lg text-gray-400 leading-relaxed">
              We're expanding our collection of natural haircare products. Stay
              tuned for exciting new additions!
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Page;
