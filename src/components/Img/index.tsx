import React, { useState } from 'react'
import { ImgProps } from './types';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/opacity.css';

const Img = (props: ImgProps) => {
  const { className, src, placeholderSrc, effect } = props;

  const [loadError, setLoadError] = useState(false);

  const imageSrc = loadError ? placeholderSrc : src;

  return (
    <LazyLoadImage
      className={className}
      src={imageSrc}
      effect={effect}
      placeholderSrc={placeholderSrc}
      onError={() => setLoadError(true)}
    />
  );
}

export default Img;