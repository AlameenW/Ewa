const PageHeader = () => {
    return (
        <header className="flex justify-between items-center px-6 py-4">
        <h1 className="font-bold font-sans text-4xl">EWA</h1>
        <nav className="flex space-x-8 text-lg">
          <span className="cursor-pointer text-foreground hover:text-wine-hover transition-colors">
            Home
          </span>
          <span className="cursor-pointer text-foreground hover:text-wine-hover transition-colors">
            FAQ
          </span>
          <span className="cursor-pointer text-foreground hover:text-wine-hover transition-colors">
            Contact
          </span>
          <span className="cursor-pointer text-foreground hover:text-wine-hover transition-colors">
            Shop
          </span>
        </nav>
      </header>
    )
}

export default PageHeader;