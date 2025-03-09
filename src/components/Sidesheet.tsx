import React from 'react';
import Link from 'next/link';
import { Button, buttonVariants } from './ui/button';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { HamburgerMenuIcon } from '@radix-ui/react-icons';
import Image from 'next/image';
export default function Sidesheet() {
  return (
    <Sheet>
      <SheetTrigger>
        <HamburgerMenuIcon className="md:hidden bg-white flex items-center" />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>
            <div className=" md:flex-[0.5] flex-initial justify-center items-center p-1 gradient-bg-transactions ">
              <Image
                src="/Images/logo.png"
                alt="Logo"
                className="object-contain flex items-center justify-center mt-4"
                width={200}
                height={200}
              />
            </div>
          </SheetTitle>
          <ul className="mt-12 space-y-2 text-left font-medium flex flex-col items-start justify-start">
            <div className="flex flex-col  gap-2 justify-start items-start ">
              <Link
                className={buttonVariants({ variant: 'default' })}
                href="/Learn"
              >
                Learn Blockchain
              </Link>
              <Link
                className={buttonVariants({ variant: 'default' })}
                href="/Bitcoin"
              >
                Bitcoin
              </Link>
              <Link
                className={buttonVariants({ variant: 'default' })}
                href="/Developer"
              >
                Developer
              </Link>
              <Link
                className={buttonVariants({ variant: 'default' })}
                href="/Currency"
              >
                MyCurrency
              </Link>
              <Link
                className={buttonVariants({ variant: 'default' })}
                href="/Prices"
              >
                Prices
              </Link>
            </div>
          </ul>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}
