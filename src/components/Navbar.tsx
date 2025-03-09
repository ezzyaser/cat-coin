import Link from 'next/link';
import { ModeToggle } from '@/components/ModeToggle';
import { FaCat } from 'react-icons/fa';

export default function Navbar() {
  return (
    <nav className="w-full h-16 sticky top-0 flex items-center justify-between px-6 md:px-20 lg:px-48 bg-white dark:bg-gray-900 shadow-md transition-all duration-300">
      <Link href="/" className="flex items-center gap-2">
        <FaCat className="text-2xl text-blue-500 dark:text-blue-400" />
        <h1 className="text-2xl md:text-3xl font-bold text-blue-500 dark:text-blue-400 transition-colors duration-300">
          Cat<span className="text-blue-700 dark:text-blue-300">Coin</span>
        </h1>
      </Link>
      <ModeToggle />
    </nav>
  );
}
