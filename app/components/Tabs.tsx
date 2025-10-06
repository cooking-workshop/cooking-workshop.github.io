"use client";

import { ReactNode, useId, useState } from "react";

export type Tab = {
  id: string;
  label: ReactNode;
  content: ReactNode;
};

type TabsProps = {
  tabs: Tab[];
  defaultTabId?: string;
  className?: string;
};

export function Tabs({ tabs, defaultTabId, className }: TabsProps) {
  const autoId = useId();
  const [active, setActive] = useState<string>(defaultTabId ?? tabs[0]?.id);

  return (
    <div className={className}>
      <div
        role="tablist"
        aria-label="Tabs"
        className="flex flex-wrap gap-2 border-b border-black/[.08] dark:border-white/[.12] pb-2"
      >
        {tabs.map((tab) => {
          const isActive = tab.id === active;
          return (
            <button
              key={tab.id}
              role="tab"
              aria-selected={isActive}
              aria-controls={`${autoId}-${tab.id}-panel`}
              id={`${autoId}-${tab.id}-tab`}
              onClick={() => setActive(tab.id)}
              className={`px-3 py-1.5 rounded-md text-sm border ${
                isActive ? "border-black/50" : "border-transparent"
              } hover:underline`}
            >
              {tab.label}
            </button>
          );
        })}
      </div>
      {tabs.map((tab) => {
        const isActive = tab.id === active;
        return (
          <div
            key={tab.id}
            role="tabpanel"
            id={`${autoId}-${tab.id}-panel`}
            aria-labelledby={`${autoId}-${tab.id}-tab`}
            hidden={!isActive}
            className="pt-3"
          >
            {tab.content}
          </div>
        );
      })}
    </div>
  );
}
