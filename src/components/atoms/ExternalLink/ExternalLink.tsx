import { ExternalLinkProps } from './types';

export const ExternalLink = ({ href, title, ariaLabel, children }: ExternalLinkProps) => {
  return (
    <a
      href={href}
      title={title}
      aria-label={ariaLabel}
      target="_blank"
      rel="noopener noreferrer"
      className="w-fit inline-flex items-center justify-center gap-1 text-base text-white transition hover:text-secondary hover:underline"
    >
      {children}
    </a>
  );
};
