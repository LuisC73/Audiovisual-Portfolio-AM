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
          className="bg-tertiary absolute top-auto left-0 flex h-dvh w-full flex-col gap-10 px-3 py-20 text-white md:px-6 lg:px-8"
        >
          <div className="grid grid-cols-1 items-center gap-6 md:grid-cols-2">
            <ul className="flex flex-col gap-5">
              <li>
                <Link
                  href="/"
                  className="hover:text-secondary text-5xl font-medium text-white transition"
                >
                  Inicio
                </Link>
              </li>
              <li>
                <Link
                  href="/acerca-de-mi"
                  className="hover:text-secondary text-5xl font-medium text-white transition"
                >
                  Acerca de mí
                </Link>
              </li>
              <li>
                <Link
                  href="/fotografias"
                  className="hover:text-secondary text-5xl font-medium text-white transition"
                >
                  Fotografías
                </Link>
              </li>
              <li>
                <Link
                  href="/videos"
                  className="hover:text-secondary text-5xl font-medium text-white transition"
                >
                  Videos
                </Link>
              </li>
            </ul>

            <Img
              src={imageSrc}
              alt="Descripción de la imagen"
              width={426}
              height={412}
            />
          </div>

          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <ExternalLink
              href="mailto:anamaproducciones@gmail.com"
              title="Enviar un correo electrónico"
            >
              anamaproducciones@gmail.com
            </ExternalLink>

            <div className="flex items-center gap-6">
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
