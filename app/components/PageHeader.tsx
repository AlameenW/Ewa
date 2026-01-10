"use client";
import Link from "next/link";
import { useState } from "react";

const PageHeader = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const scrollContact = () => {
    const footer = document.getElementById("footer");
    footer?.scrollIntoView({
      behavior: "smooth",
    });
    closeMobileMenu(); // Close mobile menu after navigation
  };
  return (
    <header
      className="bg-background border-b border-gray-700 shadow-lg fixed top-0 left-0 w-full z-50 h-20"
      id="header"
    >
      <div className="flex justify-between items-center px-6 py-4">
        <Link
          href="/"
          className="font-sans font-bold text-4xl text-wine-primary hover:text-wine-hover transition-colors cursor-pointer"
        >
          EWÀ
        </Link>
        <div className="hidden sm:block">
          <nav className="flex space-x-8 text-lg font-sans">
            <Link
              href="/"
              className="cursor-pointer text-foreground hover:text-wine-hover transition-colors duration-300 font-medium"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="cursor-pointer text-foreground hover:text-wine-hover transition-colors duration-300 font-medium"
            >
              About
            </Link>
            <Link
              href="/products"
              className="cursor-pointer text-foreground hover:text-wine-hover transition-colors duration-300 font-medium"
            >
              Products
            </Link>
            <span
              onClick={scrollContact}
              className="cursor-pointer text-foreground hover:text-wine-hover transition-colors duration-300 font-medium"
            >
              Contact
            </span>
          </nav>
        </div>

        <div className="sm:hidden">
          <button
            onClick={toggleMobileMenu}
            className="text-wine-primary hover:text-wine-hover transition-colors"
            aria-label="Toggle mobile menu"
          >
            <svg
              className="w-6 h-6"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-72 bg-background border-l border-gray-700 shadow-2xl transform transition-transform duration-300 ease-in-out z-50 ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        } sm:hidden`}
      >
        {/* Mobile Menu Header */}
        <div className="flex justify-between items-center p-6 border-b border-gray-700">
          <h2 className="text-xl font-bold text-wine-primary">Menu</h2>
          <button
            onClick={closeMobileMenu}
            className="text-gray-400 hover:text-wine-hover transition-colors"
            aria-label="Close mobile menu"
          >
            <svg
              className="w-6 h-6"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation Links */}
        <nav className="flex flex-col py-8 px-6 space-y-6">
          <Link
            href="/"
            onClick={closeMobileMenu}
            className="text-lg font-medium text-foreground hover:text-wine-hover transition-colors duration-300 py-2 border-b border-gray-800 hover:border-wine-primary"
          >
            Home
          </Link>
          <Link
            href="/about"
            onClick={closeMobileMenu}
            className="text-lg font-medium text-foreground hover:text-wine-hover transition-colors duration-300 py-2 border-b border-gray-800 hover:border-wine-primary"
          >
            About
          </Link>
          <Link
            href="/products"
            onClick={closeMobileMenu}
            className="text-lg font-medium text-foreground hover:text-wine-hover transition-colors duration-300 py-2 border-b border-gray-800 hover:border-wine-primary"
          >
            Products
          </Link>
          <button
            onClick={scrollContact}
            className="text-left text-lg font-medium text-foreground hover:text-wine-hover transition-colors duration-300 py-2 border-b border-gray-800 hover:border-wine-primary"
          >
            Contact
          </button>
        </nav>
      </div>

      {/* Mobile Menu Backdrop */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 sm:hidden"
          onClick={closeMobileMenu}
        />
      )}
    </header>
  );
};

export default PageHeader;
