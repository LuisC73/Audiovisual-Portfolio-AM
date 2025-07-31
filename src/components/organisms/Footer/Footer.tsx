export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-tertiary flex items-center justify-between gap-10 px-3 py-4 md:px-6 lg:px-8">
      <p className="text-secondary text-base">
        &copy; {currentYear} Ana Manuela Ramírez.
      </p>
      <p className="text-secondary text-base">
        Desarrollado y diseñado por Miguel Castro
      </p>
    </footer>
  );
};
