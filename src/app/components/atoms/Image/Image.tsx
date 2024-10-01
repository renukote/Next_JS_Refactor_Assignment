import NextImage, { ImageProps as NextImageProps } from "next/image";

// re-exporting image props here to import { Image, ImageProps } from the same component to ensure consistency
export type ImageProps = NextImageProps;

export const Image = ({ src, alt = "image", ...rest }: ImageProps) => {
  return <NextImage src={src} alt={alt} {...rest} />;
};
