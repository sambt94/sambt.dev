// ABOUTME: Expandable accordion component with + indicator.
// ABOUTME: Multiple items can be open simultaneously. Smooth max-height animation.

import { useState } from 'react';

export function Accordion({ children }: { children: React.ReactNode }) {
  return <div className="border-t border-border hover-dim-group">{children}</div>;
}

interface AccordionItemProps {
  title: string;
  children: React.ReactNode;
}

export function AccordionItem({ title, children }: AccordionItemProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-border">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center py-sm text-left text-copy text-[0.9375rem] font-normal cursor-pointer transition-opacity duration-300"
      >
        <span>{title}</span>
        <span
          className={`text-faint text-lg transition-transform duration-500 ease-smooth ${
            open ? 'rotate-45' : ''
          }`}
        >
          +
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-500 ease-smooth ${
          open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="pb-sm text-sm text-muted leading-relaxed">{children}</div>
      </div>
    </div>
  );
}
