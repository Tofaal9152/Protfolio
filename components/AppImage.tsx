"use client";

import Image, { ImageProps } from "next/image";
import { useState } from "react";
import clsx from "clsx";
import { imagePath } from "@/constants/imagePath";


interface AppImageProps extends ImageProps {
  fallbackSrc?: string;
}

const AppImage = ({
  src,
  alt = "",
  className,
  fallbackSrc = imagePath.NoImage,
  ...props
}: AppImageProps) => {
  const safeSrc =
    !src || src === "" || src === "null" || src === undefined
      ? fallbackSrc
      : src;

  const [imgSrc, setImgSrc] = useState(safeSrc);

  const handleImageLoad = (event: React.SyntheticEvent<HTMLImageElement>) => {
    event.currentTarget.classList.remove("opacity-0");
  };

  return (
    <Image
      {...props}
      src={imgSrc || fallbackSrc}
      alt={alt}
      onError={() => setImgSrc(fallbackSrc)}
      quality={100}
      priority
      className={clsx(
        className,
        "transition-opacity duration-700 opacity-0",
        "will-change-transform"
      )}
      onLoad={handleImageLoad}
    />
  );
};

export default AppImage;
