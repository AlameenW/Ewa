"use client";
import React from "react";
import reviews from "../data/reviews.json";
import Image from "next/image";
import Link from "next/link";

const ReviewsSection =  () => {
  const featuredReviewer = reviews[0];

  return (
    <section className="overflow-hidden my-10 px-4 md:px-6" id="reviews">
      <div className="max-w-8xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-center mb-3">
            Customer Reviews
          </h2>
          <div className="w-68 h-1 bg-gradient-to-r from-wine-primary to-cocoa-primary rounded-full mx-auto mt-2 mb-6"></div>
          <p className="text-base text-gray-300 max-w-2xl mx-auto">
            Real transformations from our customers using EWÀ herbal scalp oil.
          </p>
        </div>

        {/* Featured Review */}
        <div className="max-w-4xl mx-auto">
          {/* Before/After Images */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-8">
            {/* Before Image */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-wine-primary text-center">
                Before
              </h3>
              <div className="relative w-full h-64 md:h-80 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src={featuredReviewer.before_img}
                  alt={`${featuredReviewer.reviewer_name} before image`}
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* After Image */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-wine-primary text-center">
                After
              </h3>
              <div className="relative w-full h-64 md:h-80 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src={featuredReviewer.after_img}
                  alt={`${featuredReviewer.reviewer_name} after image`}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Review Content */}
          <div className="text-center mt-12">
            <blockquote className="text-lg lg:text-xl text-gray-300 mb-6 italic leading-relaxed">
              "{featuredReviewer.comment}"
            </blockquote>

            <div className="text-wine-primary font-semibold text-lg mb-8">
              - {featuredReviewer.reviewer_name}
            </div>

            {/* View More Link */}
            <Link
              href="/reviews"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-wine-primary to-cocoa-primary hover:from-wine-hover hover:to-cocoa-hover text-white font-semibold py-4 px-6 rounded-full transition-all duration-300 ease-out hover:scale-105 transform hover:shadow-lg"
            >
              <span>View More Reviews</span>
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ReviewsSection;
