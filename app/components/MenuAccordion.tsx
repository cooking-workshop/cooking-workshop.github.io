"use client";

import { Accordion } from "./Accordion";
import { Tabs } from "./Tabs";
import Image from "next/image";

type Dish = {
  id: string;
  title: string;
  previewText: string;
  ingredients: string[];
  steps: string[];
  serving: string[];
};

const dishes: Dish[] = [
  {
    id: "starter",
    title: "Starter: Bread with Spread",
    previewText: "Placeholder: Rustic bread with a creamy herb spread.",
    ingredients: [
      "Placeholder bread",
      "Placeholder spread",
      "Placeholder herbs",
    ],
    steps: [
      "Placeholder: Slice bread",
      "Placeholder: Mix spread",
      "Placeholder: Assemble",
    ],
    serving: [
      "Placeholder: Serve on a wooden board",
      "Placeholder: Garnish with herbs",
    ],
  },
  {
    id: "olivie",
    title: "Olivie Salad",
    previewText:
      "Placeholder: Classic Russian Olivier salad with veggies and mayo.",
    ingredients: [
      "Placeholder potatoes",
      "Placeholder carrots",
      "Placeholder peas",
      "Placeholder pickles",
      "Placeholder mayo",
    ],
    steps: [
      "Placeholder: Boil and dice vegetables",
      "Placeholder: Mix with mayo",
      "Placeholder: Chill",
    ],
    serving: ["Placeholder: Serve chilled", "Placeholder: Top with dill"],
  },
  {
    id: "buckwheat",
    title: "Buckwheat with Stew",
    previewText: "Placeholder: Hearty buckwheat with tender meat stew.",
    ingredients: [
      "Placeholder buckwheat",
      "Placeholder stew meat",
      "Placeholder onions",
      "Placeholder stock",
    ],
    steps: [
      "Placeholder: Rinse buckwheat",
      "Placeholder: Sauté aromatics",
      "Placeholder: Simmer stew",
      "Placeholder: Steam buckwheat",
    ],
    serving: [
      "Placeholder: Serve hot",
      "Placeholder: Add a dollop of sour cream",
    ],
  },
  {
    id: "syrniki",
    title: "Cottage Cheese Pancakes (Syrniki)",
    previewText: "Placeholder: Golden syrniki with a soft, creamy center.",
    ingredients: [
      "Placeholder cottage cheese",
      "Placeholder eggs",
      "Placeholder flour",
      "Placeholder sugar",
    ],
    steps: [
      "Placeholder: Mix batter",
      "Placeholder: Shape patties",
      "Placeholder: Pan-fry until golden",
    ],
    serving: [
      "Placeholder: Serve with jam",
      "Placeholder: Dust with powdered sugar",
    ],
  },
  {
    id: "gifts",
    title: "Other Gifts",
    previewText: "Placeholder: Sweet and savory extras for the table.",
    ingredients: [
      "Placeholder chocolates",
      "Placeholder preserves",
      "Placeholder tea",
    ],
    steps: ["Placeholder: Arrange on platter", "Placeholder: Add labels"],
    serving: [
      "Placeholder: Pair with tea",
      "Placeholder: Offer as take-home gifts",
    ],
  },
];

export default function MenuAccordion() {
  return (
    <Accordion
      type="single"
      className="mt-6"
      items={dishes.map((dish) => ({
        id: dish.id,
        title: dish.title,
        content: (
          <Tabs
            tabs={[
              {
                id: "preview",
                label: "Preview",
                content: (
                  <div className="space-y-3">
                    <div className="aspect-video w-full rounded-md border border-black/[.08] dark:border-white/[.12] overflow-hidden flex items-center justify-center">
                      {dish.id === "olivie" ? (
                        <Image
                          src="/images/olivie.png"
                          alt="Olivie"
                          width={1280}
                          height={720}
                          className="w-full h-full object-cover"
                        />
                      ) : dish.id === "buckwheat" ? (
                        <Image
                          src="/images/grecha.png"
                          alt="Buckwheat with stew"
                          width={1280}
                          height={720}
                          className="w-full h-full object-cover"
                        />
                      ) : dish.id === "syrniki" ? (
                        <Image
                          src="/images/syrniki.png"
                          alt="Syrniki"
                          width={1280}
                          height={720}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-sm opacity-70">
                          Image Placeholder
                        </div>
                      )}
                    </div>
                    <p className="opacity-80">{dish.previewText}</p>
                  </div>
                ),
              },
              {
                id: "ingredients",
                label: "Ingredients",
                content: (
                  <ul className="list-disc pl-6 space-y-1">
                    {dish.ingredients.map((ing) => (
                      <li key={ing} className="opacity-80">
                        {ing}
                      </li>
                    ))}
                  </ul>
                ),
              },
              {
                id: "recipe",
                label: "Recipe",
                content: (
                  <ol className="list-decimal pl-6 space-y-1">
                    {dish.steps.map((step, idx) => (
                      <li key={`${dish.id}-step-${idx}`} className="opacity-90">
                        {step}
                      </li>
                    ))}
                  </ol>
                ),
              },
              {
                id: "serving",
                label: "Serving options",
                content: (
                  <ul className="list-disc pl-6 space-y-1">
                    {dish.serving.map((s, idx) => (
                      <li key={`${dish.id}-serv-${idx}`} className="opacity-80">
                        {s}
                      </li>
                    ))}
                  </ul>
                ),
              },
            ]}
          />
        ),
      }))}
    />
  );
}
