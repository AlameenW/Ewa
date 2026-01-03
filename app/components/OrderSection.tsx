const OrderSection = () => {
  return (
    <section className="bg-dark-card shadow-2xl overflow-hidden border border-gray-700 py-20 px-6">
      <div className="max-w-8xl mx-auto">
        <div>
        <h2 className="text-4xl lg:text-5xl font-bold text-center mb-3">How To Order</h2>
        <div className="w-68 h-1 bg-linear-to-r from-wine-primary to-cocoa-primary rounded-full mt-2 justify-self-center-safe mb-5"></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Step 1 */}
          <div className="px-4 py-6 flex flex-col items-center text-center rounded-lg transition-colors duration-200 hover:bg-gray-700/30 hover:shadow-md cursor-default">
            <div className="flex items-center gap-3 mb-2">
              <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-wine-primary to-cocoa-primary text-white text-lg font-bold">1</span>
              <span className="text-xl lg:text-2xl font-semibold">Explore</span>
            </div>
            <p className="text-sm text-gray-300">
              Browse our collection of natural haircare products and choose what best supports your hair and scalp needs.
            </p>
          </div>

          {/* Step 2 */}
          <div className="px-4 py-6 flex flex-col items-center text-center rounded-lg transition-colors duration-200 hover:bg-gray-700/30 hover:shadow-md cursor-default">
            <div className="flex items-center gap-3 mb-2">
              <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-wine-primary to-cocoa-primary text-white text-lg font-bold">2</span>
              <span className="text-xl lg:text-2xl font-semibold">Place Your Order</span>
            </div>
            <p className="text-sm text-gray-300">
              Complete our order form with your selected product(s) and contact details.
            </p>
            <a
              href="https://forms.office.com/r/4Yw5aSx7gZ"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm mt-3 inline-flex items-center text-sm text-blue-400 hover:underline"
            >
              👉 Order Form
            </a>
          </div>

          {/* Step 3 */}
          <div className="px-4 py-6 flex flex-col items-center text-center rounded-lg transition-colors duration-200 hover:bg-gray-700/30 hover:shadow-md cursor-default">
            <div className="flex items-center gap-3 mb-2">
              <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-wine-primary to-cocoa-primary text-white text-lg font-bold">3</span>
              <span className="text-xl lg:text-2xl font-semibold">Confirmation</span>
            </div>
            <p className="text-sm text-gray-300">
              Once your order is received, you’ll get a confirmation via email or text message with next steps.
            </p>
          </div>

          {/* Step 4 */}
          <div className="px-4 py-6 flex flex-col items-center text-center rounded-lg transition-colors duration-200 hover:bg-gray-700/30 hover:shadow-md cursor-default">
            <div className="flex items-center gap-3 mb-2">
              <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-wine-primary to-cocoa-primary text-white text-lg font-bold">4</span>
              <span className="text-xl lg:text-2xl font-semibold">Payment & Delivery</span>
            </div>
            <p className="text-sm text-gray-300">
              We’ll follow up with payment instructions and delivery details to ensure your order is processed smoothly.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrderSection;