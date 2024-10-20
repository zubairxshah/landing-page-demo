import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white py-4 rounded-t-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">My Landing Page</h1>
        <nav>
          <ul className="flex space-x-4">
            <li><Link href="#about">About Us</Link></li>
            <li><Link href="#portfolio">Portfolio</Link></li>
            <li><Link href="#contact">Contact Us</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

