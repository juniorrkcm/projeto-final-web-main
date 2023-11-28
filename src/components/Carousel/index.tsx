/* eslint-disable @next/next/no-img-element */
"use client";

import { Carousel as FlowbiteCarousel } from "flowbite-react";

export const Carousel = () => {
  return (
    <div className="flex h-80 mt-5 mb-5">
      <FlowbiteCarousel>
        <img
          alt="..."
          src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
        />
        <img
          alt="..."
          src="https://flowbite.com/docs/images/carousel/carousel-2.svg"
        />
        <img
          alt="..."
          src="https://flowbite.com/docs/images/carousel/carousel-3.svg"
        />
        <img
          alt="..."
          src="https://flowbite.com/docs/images/carousel/carousel-4.svg"
        />
        <img
          alt="..."
          src="https://flowbite.com/docs/images/carousel/carousel-5.svg"
        />
      </FlowbiteCarousel>
    </div>
  );
};
