"use client";
import React from "react";

export const Slider = () => {
  const text = "Lorem Ipsum ";
  const separator = "       ";
  const repeatedText = Array.from({ length: 10 })
    .fill(text + separator)
    .join("");

  return (
    <div className="overflow-hidden relative w-full bg-white text-white border border-black p-4 bg-gradient-slider">
      <pre className="uppercase animate-scrollLeft">{repeatedText}</pre>
    </div>
  );
};
