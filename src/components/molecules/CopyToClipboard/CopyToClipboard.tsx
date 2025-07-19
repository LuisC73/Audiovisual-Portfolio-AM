import { Check, Copy } from 'lucide-react';
import { CopyToClipboardProps } from './types';
import { Button } from '@/components/atoms';
import { useCopyToClipboard } from '@/hooks';

export const CopyToClipboard = ({ value }: CopyToClipboardProps) => {
  const { isCopied, copyToClipboard } = useCopyToClipboard(value);

  return (
    <div className="w-fit flex items-center justify-center gap-4 py-3 px-7 bg-white rounded-2xl group">
      <span className="text-base text-black group-hover:text-black/70">{value}</span>
      <Button
        variant="text"
        color="secondary"
        className="p-0"
        onClick={copyToClipboard}
      >
        {isCopied ? (
          <Check
            size={18}
            className="text-primary group-hover:text-primary/70 pointer-events-none"
          />
        ) : (
          <Copy
            size={18}
            className="text-primary group-hover:text-primary/70 pointer-events-none"
          />
        )}
      </Button>
    </div>
  );
};
