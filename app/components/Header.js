const Header = () => {
  return (
    <header className="bg-sky-950 text-white border-b sticky top-0 z-50 py-2">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <ul className="flex justify-between items-center text-center gap-5">
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Galary</a>
          </li>
          <li>
            <a href="">contact</a>
          </li>
          <li>
            <a href="">Blog</a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
