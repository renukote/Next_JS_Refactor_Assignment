import NextImage, { ImageProps as NextImageProps } from "next/image";

// re-exporting image props here to import { Image, ImageProps } from the same component to ensure consistency
export type ImageProps = NextImageProps;

export const Image = ({ ...rest }: ImageProps) => {
  return <NextImage {...rest} />;
};
