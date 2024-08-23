"use client";
import { useState } from "react";
import { Image } from "../../atoms/Image/Image";
import { Heading } from "../../atoms/Heading/Heading";

export const AboutUs = () => {
  const [hoverPosition, setHoverPosition] = useState<{
    x: number;
    y: number;
  } | null>(null);

  const handleMouseMove = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    setHoverPosition({ x, y });
  };

  const handleMouseLeave = () => {
    setHoverPosition(null);
  };

  return (
    <section className="container mx-auto p-4 pt-[80px] xl:pt-[40px]  md:w-3/4 lg:w-3/4 xl:w-2/2">
      <div className="pt-[80px]">
        <div
          className="hidden sm:block relative w-[100%] h-[400px] overflow-hidden"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <div className="flex justify-between">
            <div className="my-auto">
              <Heading
                additionalClassNames="hidden sm:block whitespace-pre"
                tagType="h1"
                text={`About \nus`}
              />
              <p className="text-white opacity-70 leading-relaxed whitespace-pre">
                {`Lorem \nLorem`}
              </p>
            </div>

            <p className="w-[50%] opacity-[70%] leading-relaxed my-auto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>

          <div
            className="absolute inset-0 transition-none duration-none"
            style={{
              clipPath: hoverPosition
                ? `circle(150px at ${hoverPosition.x}px ${hoverPosition.y}px)`
                : "circle(0px at 50% 50%)",
            }}
          >
            <Image
              src="/images/hover-image.png"
              alt="About us"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>

        <div className="sm:hidden w-full sm:w-1/3 md:w-1/3 lg:w-1/3 xl:w-1/3 flex flex-col gap-5 mb-4 pr-4">
          <Heading text="Lorem Ipsum" tagType="h1" />
          <p className="opacity-[70%] leading-relaxed">Instagram</p>
          <p className="opacity-[70%] leading-relaxed">LinkedIn</p>

          <p className="opacity-[70%] leading-relaxed pt-[60px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
    </section>
  );
};
