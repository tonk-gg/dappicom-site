import { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components'

import { MOBILE_WIDTH_SIZE, TALL_THIN_SIZE } from '../constants';

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
    padding-top: 10vh;
  }
  @media (max-width: ${MOBILE_WIDTH_SIZE}) {
    padding-top: 20vh;
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

const LazyLoadImage = (props) => {
    const { imagesPreloaded } = useImagePreloader(props.srcList);

    const RenderComponent = props.float ? FloatingImage : LLImage;

    if (!imagesPreloaded) {
        return <RenderComponent src={props.initialSrc} />
    } else {
        return <RenderComponent src={props.srcList[0]} />
    }
}

export default LazyLoadImage;
