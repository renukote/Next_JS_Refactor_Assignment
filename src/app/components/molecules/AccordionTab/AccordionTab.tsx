import clsx from "clsx";
import { Button } from "../../atoms/Button/Button";
import { Image } from "../../atoms/Image/Image";

interface AccordionTabProps {
  // eslint-disable-next-line no-unused-vars
  onClickCallback: (index: number) => void;
  index: number;
  isActive: boolean;
  title: string;
  content: string;
}

export const AccordionTab = ({
  onClickCallback,
  index,
  isActive,
  title,
  content,
}: AccordionTabProps) => {
  const buttonClassNames = clsx("relative h-12 cursor-pointer w-full", {
    "bg-gradient-footer": isActive,
  });

  return (
    <section className="rounded p-2 pb-2">
      <Button
        onClick={() => onClickCallback(index)}
        additionalButtonClassNames={buttonClassNames}
      >
        <div className="container relative mx-auto flex h-12 max-w-screen-xl items-center justify-between px-5">
          <p className="text-base font-medium uppercase text-white lg:text-2xl">
            {title}
          </p>
          <div className="text-left font-semibold text-white">
            <Image
              alt="plus-icon"
              src={isActive ? "/images/minus.png" : "/images/plus.png"}
              width={20}
              height={20}
            />
          </div>
        </div>
      </Button>

      {isActive && (
        <p className="container mx-auto mt-5 max-w-screen-xl px-5 leading-7 text-gray-300">
          {content}
        </p>
      )}
    </section>
  );
};
