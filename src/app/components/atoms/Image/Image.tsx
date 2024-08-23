import NextImage, {
  ImageProps as NextImageProps,
  StaticImageData,
} from "next/image";

interface ImageProps extends NextImageProps {
  alt: string;
  src: string | StaticImageData;
}

export const Image = ({ src, alt = "image", ...rest }: ImageProps) => {
  return <NextImage src={src} alt={alt} {...rest} />;
};
