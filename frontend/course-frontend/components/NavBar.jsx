// components/NavBar.jsx
import Link from 'next/link';

const NavBar = () => {
  return (
    <nav className="bg-gray-900 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="space-x-4">
          <Link href="/" className="hover:text-gray-400">Home</Link>
          <Link href="/login" className="hover:text-gray-400">Login</Link>
          <Link href="/register" className="hover:text-gray-400">Register</Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
