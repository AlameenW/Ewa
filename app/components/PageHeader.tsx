const PageHeader = () => {
  return (
    <header className="bg-background border-b border-gray-700 shadow-lg" id="header">
      <div className="flex justify-between items-center px-6 py-4">
        <h1 className="font-sans font-bold text-4xl text-wine-primary hover:text-wine-hover transition-colors cursor-pointer">
          EWA
        </h1>
        <nav className="flex space-x-8 text-lg font-sans">
          <span className="cursor-pointer text-foreground hover:text-wine-hover transition-colors duration-300 font-medium">
            Home
          </span>
          <span className="cursor-pointer text-foreground hover:text-wine-hover transition-colors duration-300 font-medium">
            FAQ
          </span>
          <span className="cursor-pointer text-foreground hover:text-wine-hover transition-colors duration-300 font-medium">
            Contact
          </span>
          <span className="cursor-pointer text-foreground hover:text-wine-hover transition-colors duration-300 font-medium">
            Shop
          </span>
        </nav>
      </div>
    </header>
  );
};

export default PageHeader;
