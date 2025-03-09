import Link from 'next/link';
import { ModeToggle } from '@/components/ModeToggle';
import { Button, buttonVariants } from './ui/button';
import Image from 'next/image';
import MaxWidthWrapper from './MaxWidthWrapper';
import Sidesheet from './Sidesheet';

export default function Navbar() {
  return (
    <nav className="w-full h-16 sticky top-0 flex items-center justify-between md:justify-center p-4 ">
      <div className=" md:flex-[0.5] flex-initial justify-center items-center">
        <Link href="/">
          <Image
            src="/Images/logo.png"
            alt="Logo"
            className="object-contain flex items-center justify-center mt-4"
            width={150}
            height={150}
          />
        </Link>
      </div>
      <ul className=" text-white md:flex hidden list-none flex-row justify-between items-center flex-initial gap-8  ">
        <Link className={buttonVariants({ variant: 'ghost' })} href="/Learn">
          Blockchain
        </Link>
        <Link className={buttonVariants({ variant: 'ghost' })} href="/Bitcoin">
          Bitcoin
        </Link>
        <Link
          className={buttonVariants({ variant: 'ghost' })}
          href="/Developer"
        >
          Developer
        </Link>
        <Link className={buttonVariants({ variant: 'ghost' })} href="/Currency">
          MyCurrency
        </Link>
        <Link className={buttonVariants({ variant: 'ghost' })} href="/Prices">
          Prices
        </Link>
      </ul>
      <Sidesheet />
    </nav>
  );
}
