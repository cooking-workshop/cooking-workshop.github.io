"use client";

import { Accordion } from "./Accordion";
import Image from "next/image";

type Gift = {
  id: string;
  title: string;
  description: string;
  image: string;
};

const gifts: Gift[] = [
  {
    id: "baikal",
    title: "Baikal",
    description:
      "A traditional Russian soft-drink blend named after the famous Lake Baikal. This aromatic soft-drink combines various Siberian herbs and is known for its refreshing and slightly sweet taste. Perfect for warming up during cold Russian winters or enjoying as a soothing beverage after a hearty meal.",
    image: "/images/gifts/baikal.jpg",
  },
  {
    id: "sushniki",
    title: "Sushniki",
    description:
      "Traditional Russian sweet bread rings that are dried and have a unique texture. These delightful treats are perfect for dipping in tea or coffee. Sushniki are a beloved Russian snack that brings back childhood memories and are often enjoyed with a warm cup of tea during cozy evenings.",
    image: "/images/gifts/sushniki.png",
  },
  {
    id: "vodka",
    title: "Russian Vodka",
    description:
      "A premium quality Russian vodka, representing the pinnacle of Russian distilling tradition. This smooth and refined spirit is perfect for toasting special occasions or enjoying in the traditional Russian way - chilled and sipped slowly. A true taste of Russian hospitality and craftsmanship.",
    image: "/images/gifts/vodka.png",
  },
];

export default function GiftsAccordion() {
  return (
    <Accordion
      type="single"
      className="mt-6"
      items={gifts.map((gift) => ({
        id: gift.id,
        title: gift.title,
        content: (
          <div className="space-y-4">
            <div className="rounded-md border overflow-hidden flex items-center justify-center">
              <Image
                src={gift.image}
                alt={gift.title}
                width={400}
                height={400}
              />
            </div>
            <p className="opacity-80 leading-relaxed">{gift.description}</p>
          </div>
        ),
      }))}
    />
  );
}
