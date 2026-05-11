import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-sky-950 text-white border-b sticky top-0 z-50 py-2">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <ul className="flex justify-between items-center text-center gap-5">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/crops">Crops</Link>
          </li>
          <li>
            <Link href="/users">Users</Link>
          </li>
          <li>
            <Link href="">contact</Link>
          </li>
          <li>
            <Link href="/blog">Blog</Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
