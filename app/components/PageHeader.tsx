"use client";
import Link from "next/link";
const PageHeader = () => {
  const scrollContact = () => {
    const footer = document.getElementById("footer");
    footer?.scrollIntoView({
      behavior: "smooth",
    });
  };
  return (
    <header
      className="bg-background border-b border-gray-700 shadow-lg fixed top-0 left-0 w-full z-50"
      id="header"
    >
      <div className="flex justify-between items-center px-6 py-4">
        <Link
          href="/"
          className="font-sans font-bold text-4xl text-wine-primary hover:text-wine-hover transition-colors cursor-pointer"
        >
          EWA
        </Link>
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
    </header>
  );
};

export default PageHeader;
