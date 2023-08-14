import { useEffect, useRef, useState } from 'react';

import throttle from 'lodash.throttle';
import styled from 'styled-components'


/**
 * SAVE THIS CODE — MAYBE WE'LL ADD THE SCROLL ACTIVATED TEXT LATER
 */

const Container = styled.div`
`

const ScrollyBox = (props) => {
  const [ isVisible, setIsVisible ] = useState(false);
  const [ top, setTop ] = useState(window.innerHeight);
  const ref = useRef(null);

  const onScroll = throttle(() => {
      if (!ref.current) {
        return;
      }
      const top = ref.current.getBoundingClientRect().top;
      const visibility = top >= 0 && top <= window.innerHeight;
      if (visibility) {
        console.log(top);
        setTop(top);
        setIsVisible(visibility);
      }
  }, 100);

  useEffect(() => {
    document.addEventListener('scroll', onScroll, true);
    return () => document.removeEventListener('scroll', onScroll, true);
  });

  return (
    <Container ref={ref} $top={top} $visible={isVisible} style={{
      transform: isVisible ? `translate(0, ${top - window.innerHeight}px)` : `translate(0, 0px)`
    }}>
      {props.children}
    </Container>
  )
}

export default ScrollyBox