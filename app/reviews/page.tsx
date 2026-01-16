import reviews from "../data/reviews.json";
import Image from "next/image";

export const ReviewsPage = () => {
  return (
    <main className="overflow-hidden py-20 px-4 md:px-6">
      <div className="max-w-8xl mx-auto">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-center mb-3">
            Customer Reviews
          </h2>
          <div className="w-68 h-1 bg-gradient-to-r from-wine-primary to-cocoa-primary rounded-full mx-auto mt-2 mb-6"></div>
          <p className="text-base text-gray-300 max-w-2xl mx-auto">
            Real transformations from our customers using EWÀ herbal scalp oil.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-12 lg:gap-16">
          {reviews.map((review) => (
            <div key={review.id} className="space-y-8">
              {/* Before/After Images */}
              <div className="grid grid-cols-2 gap-4">
                {/* Before Image */}
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-wine-primary text-center">
                    Before
                  </h3>
                  <div className="relative w-full h-48 sm:h-56 rounded-lg overflow-hidden shadow-lg">
                    <Image
                      src={review.before_img}
                      alt={`${review.reviewer_name} before image`}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* After Image */}
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-wine-primary text-center">
                    After
                  </h3>
                  <div className="relative w-full h-48 sm:h-56 rounded-lg overflow-hidden shadow-lg">
                    <Image
                      src={review.after_img}
                      alt={`${review.reviewer_name} after image`}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Review Content */}
              <div className="text-center space-y-4">
                <blockquote className="text-base lg:text-lg text-gray-300 italic leading-relaxed">
                  "{review.comment}"
                </blockquote>

                <div className="text-wine-primary font-semibold text-lg">
                  - {review.reviewer_name}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default ReviewsPage;
