import { useEffect, useState } from 'react';
import styled from 'styled-components'

const LLImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: auto;
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

    if (!imagesPreloaded) {
        return <LLImage src={props.initialSrc} />
    } else {
        return <LLImage src={props.srcList[0]} />
    }
}

export default LazyLoadImage;
