"use client";

import { useState, ReactNode } from "react";

type AccordionItem = {
  id: string;
  title: ReactNode;
  content: ReactNode;
  defaultOpen?: boolean;
};

type AccordionProps = {
  items: AccordionItem[];
  type?: "single" | "multiple";
  className?: string;
};

export function Accordion({
  items,
  type = "single",
  className,
}: AccordionProps) {
  const [openIds, setOpenIds] = useState<string[]>(
    items.filter((i) => i.defaultOpen).map((i) => i.id),
  );

  function toggle(id: string) {
    setOpenIds((prev) => {
      const isOpen = prev.includes(id);
      if (type === "single") {
        return isOpen ? [] : [id];
      }
      if (isOpen) return prev.filter((v) => v !== id);
      return [...prev, id];
    });
  }

  return (
    <div className={className}>
      {items.map((item) => {
        const isOpen = openIds.includes(item.id);
        const contentId = `${item.id}-content`;
        const buttonId = `${item.id}-button`;
        return (
          <div
            key={item.id}
            className="border border-black/[.08] dark:border-white/[.12] rounded-md mb-3"
          >
            <h3>
              <button
                id={buttonId}
                aria-controls={contentId}
                aria-expanded={isOpen}
                onClick={() => toggle(item.id)}
                className="w-full text-left px-4 py-3 flex items-center justify-between gap-3"
              >
                <span className="font-medium">{item.title}</span>
                <span className="text-sm opacity-70">{isOpen ? "−" : "+"}</span>
              </button>
            </h3>
            <div
              id={contentId}
              role="region"
              aria-labelledby={buttonId}
              hidden={!isOpen}
              className="px-4 pb-4"
            >
              {item.content}
            </div>
          </div>
        );
      })}
    </div>
  );
}
