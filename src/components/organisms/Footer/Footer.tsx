export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="flex items-center justify-between py-4 px-3 md:px-6 lg:px-8 gap-10 bg-tertiary">
      <p className="text-base text-secondary">&copy; {currentYear} Ana Manuela Ramírez.</p>
      <p className="text-base text-secondary">Desarrollado y diseñado por Miguel Castro</p>
    </footer>
  );
};
