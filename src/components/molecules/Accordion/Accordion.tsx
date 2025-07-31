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
      className="border-secondary bg-tertiary w-full overflow-hidden border-b py-10"
    >
      <button
        className="group flex h-fit w-full cursor-pointer items-center justify-between p-0"
        onClick={() => onClick(id)}
      >
        <Tag className="group-hover:text-secondary text-2xl font-medium text-white">
          {label}
        </Tag>
        <div className="flex items-center justify-center">
          <ChevronDown size={24} className={chevronClass} />
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
            className="flex flex-col gap-10 overflow-hidden"
          >
            <div className="flex items-center gap-3">
              <p className="text-base text-white">{place}</p>
              <div className="bg-primary h-1.5 w-1.5 rounded-full" />
              <p className="text-base text-white">{date}</p>
            </div>
            <div className="text-secondary">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
