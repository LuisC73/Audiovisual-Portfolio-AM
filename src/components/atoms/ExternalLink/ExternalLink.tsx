import { ExternalLinkProps } from './types';

export const ExternalLink = ({
  href,
  title,
  ariaLabel,
  children,
}: ExternalLinkProps) => {
  return (
    <a
      href={href}
      title={title}
      aria-label={ariaLabel}
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-secondary inline-flex w-fit items-center justify-center gap-1 text-base text-white transition hover:underline"
    >
      {children}
    </a>
  );
};
