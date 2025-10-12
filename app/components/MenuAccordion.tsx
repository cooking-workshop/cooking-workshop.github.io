"use client";

import { Accordion } from "./Accordion";
import { Tabs } from "./Tabs";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

type Dish = {
  id: string;
  title: string;
  previewText: string;
  ingredients: string[];
  steps: string[];
  serving: string[];
  image: string;
};

const dishes: Dish[] = [
  {
    id: "starter",
    title: "Starter: Bread with Spread",
    previewText:
      "A good bread with a tasty spread. Perfect snack to keep everyone satisfied while we cook the main dishes.",
    ingredients: ["Fresh bread", "Vegetable spread (find in the box"],
    steps: ["Cut the bread into slices", "Spread the vegetable spread on top"],
    serving: [
      "/images/starter/starter-serving1.png",
      "/images/starter/starter-serving2.png",
      "/images/starter/starter-serving3.png",
      "/images/starter/starter-serving4.png",
    ],
    image: "/images/starter/ikra.png",
  },
  {
    id: "olivie",
    title: "Olivie Salad",
    previewText:
      "Classic Russian Olivier salad with fresh vegetables, eggs, kolbasa and creamy mayonnaise dressing.",
    ingredients: [
      "Kolbasa (Russian ham)  (diced)",
      "Potatoes (boiled and diced)",
      "Carrots (boiled and diced)",
      "Green peas",
      "Pickles (diced)",
      "Hard-boiled eggs (diced)",
      "Mayonnaise",
      "Salt and pepper to taste",
    ],
    image: "/images/salad/olivie.png",
    steps: [
      "Boil potatoes and carrots until tender, then dice into small cubes",
      "Hard-boil eggs, cool, peel and dice",
      "Dice pickles into small pieces",
      "Dice kolbasa into small pieces",
      "Mix all diced ingredients in a large bowl",
      "Add green peas and season with salt and pepper",
      "Fold in mayonnaise until well combined",
    ],
    serving: ["/images/salad/olivie.png", "/images/salad/kolbaca.png"],
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
    image: "/images/grecha.png",
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
    image: "/images/syrniki.png",
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
    image: "/images/gifts.png",
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
                      <Image
                        src={dish.image}
                        alt={dish.title}
                        width={400}
                        height={400}
                      />
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
                  <div className="space-y-3">
                    {dish.id === "starter" || dish.id === "olivie" ? (
                      <Carousel className="w-full max-w-md mx-auto">
                        <CarouselContent>
                          {dish.serving.map((imagePath, idx) => (
                            <CarouselItem key={`${dish.id}-serv-${idx}`}>
                              <div className="aspect-[4/3] w-full rounded-md border border-black/[.08] dark:border-white/[.12] overflow-hidden">
                                <Image
                                  src={imagePath}
                                  alt={`Serving option ${idx + 1}`}
                                  width={800}
                                  height={800}
                                  className="w-full h-full object-cover"
                                />
                              </div>
                            </CarouselItem>
                          ))}
                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
                      </Carousel>
                    ) : (
                      <ul className="list-disc pl-6 space-y-1">
                        {dish.serving.map((s, idx) => (
                          <li
                            key={`${dish.id}-serv-${idx}`}
                            className="opacity-80"
                          >
                            {s}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ),
              },
            ]}
          />
        ),
      }))}
    />
  );
}
