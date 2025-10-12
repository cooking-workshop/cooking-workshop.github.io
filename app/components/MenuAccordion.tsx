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
    title: "1. Starter: Bread with Spread",
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
    title: "2. Olivie Salad",
    previewText:
      "Classic Russian Olivier salad with fresh vegetables, eggs, kolbasa and creamy mayonnaise dressing.",
    ingredients: [
      "Kolbasa (Russian ham, find it in the box)",
      "Potatoes (2 large, find it in the box)",
      "Carrots (2 medium, find it in the box)",
      "Pickles (1 can, find it in the box)",
      "Green peas (1 can, find it in the box)",
      "Mayonnaise (find it in the box)",
      "Eggs (4 pieces)",
      "Green onions (1 pieces)",
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
      "Garnish with green onions",
    ],
    serving: [
      "/images/salad/kolbaca.png",
      "/images/salad/olivie-serving1.png",
      "/images/salad/olivie-serving2.png",
      "/images/salad/olivie-serving3.png",
    ],
  },
  {
    id: "buckwheat",
    title: "3. Buckwheat with Meat/Mushroom Stew",
    previewText:
      "Traditional Russian buckwheat (grecha) served with hearty meat or mushroom stew",
    ingredients: [
      "Buckwheat groats (1 packet for 2 persons)",
      "Chicken breast (300g, cubed) or mushrooms (300g, diced)",
      "Onions (1 large, diced)",
      "Carrots (2 medium, diced)",
      "Paprika (1 medium/large, diced)",
      "Garlic (2 cloves, minced)",
      "Tomato paste (2 tbsp)",
      "Salt and black pepper to taste",
      "Vegetable oil for cooking",
    ],
    image: "/images/main/grecha-box.jpeg",
    steps: [
      "Heat oil in a large pan and brown the cubed meat/mushrooms on all sides",
      "Add diced onions and carrots, sauté until onions are translucent",
      "Slice paprika into small pieces and add to the pan",
      "Add tomato paste and stir for 1-2 minutes until fragrant",
      "Pour in stock, add garlic, salt and pepper, bring to a boil",
      "Reduce heat, cover and simmer for 20 minutes (for meat) or 15 minutes (for mushrooms)",
      "In a separate pot, cook buckwheat in salted water (1:2 ratio) for 12 minutes",
      "Take the buckwheat out of the packet and place it in the pot",
      "Mix the cooked buckwheat with the meat or mushroom stew",
    ],
    serving: [
      "/images/main/grecha-mushrooms1.png",
      "/images/main/grecha-mushrooms2.png",
      "/images/main/grecha-chicken.png",
    ],
  },
  {
    id: "syrniki",
    title: "4. Cottage Cheese Pancakes (Syrniki)",
    previewText:
      "Traditional Russian cottage cheese pancakes with a soft, creamy center and golden crispy exterior. Perfect sweet ending to your meal.",
    ingredients: [
      "Cottage cheese (tvorog) - 400g (find it in the box)",
      "Sgushenka - 1 can (find it in the box)",
      "Eggs - 1 large",
      "All-purpose flour - 4-5 tbsp",
      "Sugar - 2-3 tbsp",
      "Vanilla extract - 1 tsp",
      "Vegetable oil for frying",
    ],
    image: "/images/dessert/tvorog.jpeg",
    steps: [
      "Place cottage cheese in a large bowl and mash with a fork until smooth",
      "Add eggs, sugar, vanilla extract. Mix well",
      "Gradually add flour, mixing until you get a soft, slightly sticky dough",
      "Dust your hands with flour and shape the mixture into small patties (about 4cm wide)",
      "Heat vegetable oil in a large pan over medium heat",
      "Carefully place the patties in the hot oil and fry for 2-3 minutes on each side until golden brown",
      "Serve warm with sgushenka (look serving options for inspiration)",
    ],
    serving: [
      // "/images/dessert/sgushenka.png",
      "/images/dessert/syrniki-serving1.png",
      "/images/dessert/syrniki-serving2.png",
      "/images/dessert/syrniki-serving3.png",
      "/images/dessert/syrniki-serving4.png",
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
                    <div className="overflow-hidden flex items-center justify-center">
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
                    {dish.id === "starter" ||
                    dish.id === "olivie" ||
                    dish.id === "buckwheat" ||
                    dish.id === "syrniki" ? (
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
