/* eslint-disable @next/next/no-img-element */
"use client";

import { Carousel as FlowbiteCarousel } from "flowbite-react";

export const Carousel = () => {
  return (
    <div className="flex h-80 mt-5 mb-5">
      <FlowbiteCarousel>
        <img
          alt="..."
          src="/1.png"
        />
        <img
          alt="..."
          src="/2.png"
        />
        <img
          alt="..."
          src="/3.jpg"
        />
        <img
          alt="..."
          src="/4.png"
        />
      </FlowbiteCarousel>
    </div>
  );
};
