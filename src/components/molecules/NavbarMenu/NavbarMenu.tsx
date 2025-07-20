import Link from 'next/link';
import { ExternalLink, Img } from '@/components/atoms';
import { NavbarMenuProps } from './types';
import { getDinamicImage, menuVariants } from './helpers';
import { motion, AnimatePresence } from 'motion/react';

export const NavbarMenu = ({ isActive, page }: NavbarMenuProps) => {
  const imageSrc = getDinamicImage(page);

  return (
    <AnimatePresence>
      {isActive && (
        <motion.div
          key="navbar-menu"
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={menuVariants}
          className="w-full h-dvh absolute top-auto left-0 flex flex-col gap-10 py-20 px-3 md:px-6 lg:px-8 bg-tertiary text-white"
        >
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            <ul className='flex flex-col gap-5'>
              <li>
                <Link href="/" className='text-5xl font-medium text-white transition hover:text-secondary'>Inicio</Link>
              </li>
              <li>
                <Link href="/about-me" className='text-5xl font-medium text-white transition hover:text-secondary'>Acerca de mí</Link>
              </li>
              <li>
                <Link href="/photographs" className='text-5xl font-medium text-white transition hover:text-secondary'>Fotografías</Link>
              </li>
              <li>
                <Link href="/videos" className='text-5xl font-medium text-white transition hover:text-secondary'>Videos</Link>
              </li>
            </ul>

            <Img
              src={imageSrc}
              alt="Descripción de la imagen"
            />
          </div>

          <div className='flex flex-col md:flex-row items-center justify-between gap-4'>
            <ExternalLink
              href="mailto:anamaproducciones@gmail.com"
              title="Enviar un correo electrónico"
            >
              anamaproducciones@gmail.com
            </ExternalLink>

            <div className='flex items-center gap-6'>
              <ExternalLink
                href="https://www.instagram.com/ana_ramireez03/"
                title="Instagram"
                ariaLabel="Boton de instagram"
              >
                Instagram
              </ExternalLink>
              <ExternalLink
                href="https://www.instagram.com/ana_ramireez03/"
                title="Instagram"
                ariaLabel="Boton de instagram"
              >
                Linkedin
              </ExternalLink>
              <ExternalLink
                href="https://www.instagram.com/ana_ramireez03/"
                title="Instagram"
                ariaLabel="Boton de instagram"
              >
                Youtube
              </ExternalLink>
              <ExternalLink
                href="https://www.instagram.com/ana_ramireez03/"
                title="Instagram"
                ariaLabel="Boton de instagram"
              >
                Whatsapp
              </ExternalLink>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
