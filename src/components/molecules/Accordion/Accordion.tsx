import { ChevronDown } from 'lucide-react';
import { AccordionProps, LabelTag } from './types';
import { generateChevronClasses } from './helpers';
import { motion, AnimatePresence } from 'motion/react';

export const Accordion = (props: AccordionProps) => {
  const { id, labelTag, label, place, date, isOpen, children, onClick } = props;
  const chevronClass: string = generateChevronClasses(isOpen || false);
  const Tag: LabelTag = labelTag;

  return (
    <div
      id={id}
      className='w-full py-10 border-b border-secondary bg-tertiary overflow-hidden'
    >
      <button
        className="w-full flex items-center justify-between h-fit p-0 group cursor-pointer"
        onClick={() => onClick(id)}
      >
        <Tag className="text-2xl font-medium text-white group-hover:text-secondary">{label}</Tag>
        <div className="flex items-center justify-center">
          <ChevronDown
            size={24}
            className={chevronClass}
          />
        </div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="accordion-content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { height: 'auto', opacity: 1 },
              collapsed: { height: 0, opacity: 0 },
            }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden flex flex-col gap-10"
          >
            <div className="flex items-center gap-3">
              <p className="text-base text-white">{place}</p>
              <div className="w-1.5 h-1.5 rounded-full bg-primary" />
              <p className="text-base text-white">{date}</p>
            </div>
            <div className="text-secondary">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
