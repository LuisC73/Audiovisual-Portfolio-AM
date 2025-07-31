import { Button } from '@/components/atoms';
import { AlignRight, X } from 'lucide-react';
import Link from 'next/link';
import { NavbarProps } from './types';
import { NavbarMenu } from '@/components/molecules';
import { useNavbar } from '@/hooks';

export const Navbar = ({ page }: NavbarProps) => {
  const { isActive, toggleMenu } = useNavbar();

  return (
    <header className="bg-tertiary sticky top-0 z-50 w-full">
      <nav className="flex w-full items-center justify-between px-3 py-4 text-white md:px-6 lg:px-8">
        <Link
          href="/"
          className="hover:text-secondary text-base text-white transition"
        >
          Ana Ramírez
        </Link>
        <div className="flex items-center gap-4">
          <Button variant="filled" color="primary">
            Hoja de vida
          </Button>
          <Button
            variant="text"
            color="primary"
            className="p-0"
            onClick={toggleMenu}
          >
            {!isActive && (
              <AlignRight
                size={32}
                className="hover:text-secondary text-white transition"
              />
            )}
            {isActive && (
              <X
                size={32}
                className="hover:text-secondary text-white transition"
              />
            )}
          </Button>
        </div>
      </nav>

      <NavbarMenu isActive={isActive} page={page} />
    </header>
  );
};
