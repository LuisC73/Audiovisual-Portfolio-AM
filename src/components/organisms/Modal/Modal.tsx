import { Button } from '@/components/atoms';
import { ModalProps } from './types';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useModal } from '@/hooks';

export const Modal = ({ id, children, onClose }: ModalProps) => {
  const isOpen = !!id;
  useModal(isOpen, onClose);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          id={id}
          role="dialog"
          aria-modal="true"
          className="bg-opacity-60 fixed inset-0 z-50 flex items-center justify-center bg-black backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-black-on-color text-white-color relative w-full max-w-3xl rounded-xl p-6 shadow-lg"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
          >
            <div className="absolute top-4 right-4">
              <Button
                variant="text"
                color="secondary"
                aria-label="Close modal"
                onClick={onClose}
              >
                <X />
              </Button>
            </div>
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
