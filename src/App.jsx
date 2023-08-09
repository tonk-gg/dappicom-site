import { useRef, useEffect, useState } from 'react';
import styled from 'styled-components'
import throttle from "lodash.throttle";

import LazyLoadImage from './LazyLoadImage';

const Container = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  width: 100vw;
  max-height: 100vh;
  height: 100vh;
`

const ScrollContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  overflow-y: scroll;
  width: 100%;
`

const Section = styled.div`
  width: 100%;
  height: auto;
`

const TextContainer = styled.div`
  width: 100%;
  height: 62vw;
  background: ${({$background}) => {
    if ($background === "DAPPICOM") {
      return `#FF83BD;`
    }
    else if ($background === "PLAY") {
      return `linear-gradient(180deg, #017EC6 0%, #8D84CE 61.98%, #CE9DD6 100%);`
    }
    else if ($background === "PROVE") {
      return `linear-gradient(180deg, #8A93CE 0%, #748ECF 7.03%, #3567B7 23.44%, #5A73BD 59.89%, #BF9CD5 98.96%);`
    }
    else if ($background === "PERSIST") {
      return `linear-gradient(180deg, #FFDD3C 0%, #395FAC 100%);`
    } else {
      return `white;`
    }
  }};
`

const Segment = styled.div`
  width: 100%;
  text-align: center;
  margin: 0;
  padding: 0;
`

const ImageContainer = styled.div`
  width: 100%;
  height: 62vw;
  position: relative;
  background: ${({$background}) => {
    if ($background === "DAPPICOM") {
      return `#FF83BD;`
    }
    else if ($background === "PLAY") {
      return `linear-gradient(180deg, #FF83BD 0%, #FFBACD 35.94%, #FED700 84.90%, #037FC5 91.15%, #007DC6 100%);`
    }
    else if ($background === "PROVE") {
      return `linear-gradient(180deg, #CE9DD6 0%, #FFA5DE 25.52%, #FDBAD7 30.45%, #FECED1 38.02%, #FEEF5C 49.88%, #8992CE 100%);`
    }
    else if ($background === "PERSIST") {
      return `linear-gradient(180deg, #BF9CD5 0%, #DAD1B8 28.58%, #FEF554 43.86%, #FFDC3A 100%);`
    } else {
      return `linear-gradient(180deg, #3860AD 0%, #3B005F 100%);`
    }
  }};
`

// const TitleSegment = styled(Segment)`
//   height: 100vh;
// `

// const Title = styled.h1`
//   font-family: "Alro";
//   font-size: 300px;
// `

// const BottomImage = styled.img`
//   position: absolute;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: auto;
// `

// const LazyLoadImage = styled.img`
//   position: absolute;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: auto;
// `

/**
 * Check if an element is in viewport

 * @param {number} offset - Number of pixels up to the observable element from the top
 * @param {number} throttleMilliseconds - Throttle observable listener, in ms
 */
function useVisibility (
  offset = 0,
  throttleMilliseconds = 100
) {
  const [isVisible, setIsVisible] = useState(false);
  const currentElement = useRef(null);

  const onScroll = throttle(() => {
    if (!currentElement.current) {
      setIsVisible(false);
      return;
    }
    const top = currentElement.current.getBoundingClientRect().top;
    setIsVisible(top + offset >= 0 && top - offset <= window.innerHeight);
  }, throttleMilliseconds);

  useEffect(() => {
    document.addEventListener('scroll', onScroll, true);
    return () => document.removeEventListener('scroll', onScroll, true);
  });

  return [ isVisible, currentElement ];
}


const ListeningSegment = (props) => {
  const [ isVisible, currentElement ] = useVisibility(100, 100);

  return <Segment ref={currentElement} $isVisible={isVisible} >{props.children}</Segment>;
}

function App() {
  return (
    <>
    <Container>
      <ScrollContainer>
        <Section>
          <ListeningSegment>
            <ImageContainer $background={"DAPPICOM"}>
                <LazyLoadImage initialSrc="/images/1_DappicomBox_illo.gif" srcList={["/images/HD/1_DappicomBox_illo.gif"]}/>
                <LazyLoadImage initialSrc="/images/1_DappicomBox_anim.gif" srcList={["/images/HD/1_DappicomBox_anim.gif"]}/>
            </ImageContainer>
          </ListeningSegment>
          <TextContainer $background={"DAPPICOM"}>

          </TextContainer>
        </Section>
      <Section>
        <ListeningSegment>
            <ImageContainer $background={"PLAY"}>
                <LazyLoadImage initialSrc="/images/2_PlayNESROMS_illo.gif" srcList={["/images/HD/2_PlayNESROMS_illo.gif"]}/>
                <LazyLoadImage initialSrc="/images/2_PlayNESROMS_anim.gif" srcList={["/images/HD/2_PlayNESROMS_anim.gif"]}/>
            </ImageContainer>
          </ListeningSegment>
          <TextContainer $background={"PLAY"}>

          </TextContainer>

      </Section>
      <Section>
        <ListeningSegment>
            <ImageContainer $background={"PROVE"}>
                <LazyLoadImage initialSrc="/images/3_ProveGameplay_illo.gif" srcList={["/images/HD/3_ProveGameplay_illo.gif"]}/>
            </ImageContainer>
          </ListeningSegment>
          <TextContainer $background={"PROVE"}>

          </TextContainer>
        </Section>
        <Section>
          <ListeningSegment>
            <ImageContainer $background={"PERSIST"}>
                <LazyLoadImage initialSrc="/images/4_PersistStateOnchain_illo.gif" srcList={["/images/HD/4_PersistStateOnchain_illo.gif"]}/>
                <LazyLoadImage initialSrc="/images/4_PersistStateOnchain_anim.gif" srcList={["/images/HD/4_PersistStateOnchain_anim.gif"]}/>
            </ImageContainer>
          </ListeningSegment>
          <TextContainer $background={"PERSIST"}>

          </TextContainer>
        </Section>
      </ScrollContainer>
    </Container>
    </>
  )
}

export default App
