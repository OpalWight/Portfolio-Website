const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <nav className="nav">
          <a href="#home" className="logo">
            Albert's Portfolio
          </a>
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;