import { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components'

import { TALL_THIN_SIZE } from '../constants';

const float = keyframes`
  0% {
    transform: translateY(0vh);
  }
  50% {
    transform: translateY(20px);
  }
  100% {
    transform: translateY(0);
  }
`

const LLImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: auto;
  padding: 0;
  @media (max-width: ${TALL_THIN_SIZE}) {
    top: ${({$pad}) => $pad ? `10vh` : 0};
    padding-top: 10vh;
  }
`

const FloatingImage = styled(LLImage)`
  animation: 5s infinite ${float} ease-in-out;
`

function preloadImage (src) {
    return new Promise((resolve, reject) => {
      const img = new Image()
      img.onload = function() {
        resolve(img)
      }
      img.onerror = img.onabort = function() {
        reject(src)
      }
      img.src = src
    })
  }
  
function useImagePreloader(imageList) {
    const [imagesPreloaded, setImagesPreloaded] = useState(false)

    useEffect(() => {
      async function effect() {

        const imagesPromiseList = [];
        for (const i of imageList) {
            imagesPromiseList.push(preloadImage(i))
        }

        await Promise.all(imagesPromiseList)

        setImagesPreloaded(true)
      }

      effect();
    }, [imageList]);

    return { imagesPreloaded }
}

const LazyLoadImage = ({ srcList, initialSrc, float, pad, onPreloaded, showPreloaded = true }) => {
    const { imagesPreloaded } = useImagePreloader(srcList);

    if (imagesPreloaded && !showPreloaded && !!onPreloaded) {
      onPreloaded();
    }

    const compoundCondition = imagesPreloaded && showPreloaded;

    const RenderComponent = float ? FloatingImage : LLImage;

    if (!compoundCondition) {
        return <RenderComponent src={initialSrc} $pad={pad} />
    } else {
        return <RenderComponent src={srcList[0]} $pad={pad}/>
    }
}

export default LazyLoadImage;
