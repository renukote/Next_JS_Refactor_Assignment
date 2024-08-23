"use client";

import React from "react";

export const Slider = () => {
  const text = "Lorem Ipsum ";
  const separator = "       ";
  const repeatedText = Array.from({ length: 10 })
    .fill(text + separator)
    .join("");

  return (
    <div className="relative w-full overflow-hidden border border-black bg-white bg-gradient-slider p-4 text-white">
      <pre className="animate-scrollLeft uppercase">{repeatedText}</pre>
    </div>
  );
};
