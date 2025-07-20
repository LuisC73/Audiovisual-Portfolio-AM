import { Button } from '@/components/atoms';
import { AlignRight, X } from 'lucide-react';
import Link from 'next/link';
import { NavbarProps } from './types';
import { NavbarMenu } from '@/components/molecules';
import { useNavbar } from '@/hooks';

export const Navbar = ({ page }: NavbarProps) => {
  const { isActive, toggleMenu } = useNavbar();

  return (
    <header className="sticky top-0 w-full bg-tertiary z-50">
      <nav className='w-full flex items-center justify-between py-4 px-3 md:px-6 lg:px-8  text-white'>
        <Link href="/" className='text-base text-white transition hover:text-secondary'>Ana Ramírez</Link>
        <div className='flex items-center gap-4'>
          <Button
            variant="filled"
            color="primary"
          >
            Hoja de vida
          </Button>
          <Button
            variant="text"
            color="primary"
            className='p-0'
            onClick={toggleMenu}
          >
            {!isActive && <AlignRight size={32} className="text-white transition hover:text-secondary" />}
            {isActive && <X size={32} className="text-white transition hover:text-secondary" />}
          </Button>
        </div>
      </nav>

      <NavbarMenu
        isActive={isActive}
        page={page}
      />
    </header>
  );
};
