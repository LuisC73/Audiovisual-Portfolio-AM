import { useState } from "react";

export const useCopyToClipboard = (value: string) => {
  const [isCopied, setIsCopied] = useState<boolean>(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 200);
      return true;
    } catch (err) {
      console.error('Error al copiar: ', err);
      setIsCopied(false);
      return false;
    }
  }

  return {
    isCopied,
    copyToClipboard
  }
}