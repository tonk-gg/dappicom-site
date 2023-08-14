import styled from 'styled-components'

import LazyLoadImage from './components/LazyLoadImage';
import TextBox from './components/TextBox';

import { MOBILE_WIDTH_SIZE, TALL_THIN_SIZE } from './constants'


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
  height: auto;
  padding: 0 0;
  margin: -1px 0;
  display: flex;
  justify-content: center;
  padding: 0 0 20vh 0;
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
  overflow: visible;

  @media (max-width: ${TALL_THIN_SIZE}) {
    padding: 20vh 0 100px 0;
  }
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

  @media (max-width: ${MOBILE_WIDTH_SIZE}) {
    height: 82vw;
  }
`

const SectionExpander = styled.div`
  height: 100vh;
`


function App() {
  return (
    <>
    <Container>
      <ScrollContainer>
        <Section>
          <ImageContainer $background={"DAPPICOM"}>
              <LazyLoadImage initialSrc="/images/1_DappicomBox_illo.gif" srcList={["/images/HD/1_DappicomBox_illo.gif"]}/>
              <LazyLoadImage initialSrc="/images/1_DappicomBox_anim.gif" srcList={["/images/HD/1_DappicomBox_anim.gif"]}/>
          </ImageContainer>
          <TextContainer $background={"DAPPICOM"}>
            <TextBox>
            Dappicom is a new open-source project brought to you by TONK and friends. 
<br/><br/>
Keep Scrolling to see a playful overview of how it works and our vision for what dappicom might become one day.
            </TextBox>
          </TextContainer>
        </Section>
      <Section>
          <ImageContainer $background={"PLAY"}>
              <LazyLoadImage initialSrc="/images/2_PlayNESROMS_illo.gif" srcList={["/images/HD/2_PlayNESROMS_illo.gif"]}/>
              <LazyLoadImage initialSrc="/images/2_PlayNESROMS_anim.gif" srcList={["/images/HD/2_PlayNESROMS_anim.gif"]}/>
          </ImageContainer>
          <TextContainer $background={"PLAY"}>
            <TextBox>
            a retro game should feel like old times. first and foremost, dappicom just let’s you play and enjoy!
            <br/><br/>
what’s new? as you play, bits of the nes machine state are streamed to a proving server. 
            </TextBox>
          </TextContainer>
      </Section>
      <Section>
          <ImageContainer $background={"PROVE"}>
              <LazyLoadImage initialSrc="/images/3_ProveGameplay_illo.gif" srcList={["/images/HD/3_ProveGameplay_illo.gif"]}/>
          </ImageContainer>
          <TextContainer $background={"PROVE"}>
            <TextBox>
            the proving server works day and night in A land far far away. 
            <br/><br/>
It takes the bits of machine state and uses aztec’s noir language to convert it all into mathematical proofs.
            <br/><br/>
you can’t argue with maths.
            </TextBox>
          </TextContainer>
        </Section>
        <Section>
          <ImageContainer $background={"PERSIST"}>
              <LazyLoadImage initialSrc="/images/4_PersistStateOnchain_illo.gif" srcList={["/images/HD/4_PersistStateOnchain_illo.gif"]}/>
              <LazyLoadImage initialSrc="/images/4_PersistStateOnchain_anim.gif" srcList={["/images/HD/4_PersistStateOnchain_anim.gif"]}/>
          </ImageContainer>
          <TextContainer $background={"PERSIST"}>
            <TextBox>
            those mathematical proofs? They’re beamed into the blockchain and verified by noir’s generated smart contract code. 
            <br/><br/>

you get rewards, badges, or new levels, when the proofs of your achievement are correct.
            </TextBox>
          </TextContainer>
        </Section>
        <Section>
          <SectionExpander/>
        </Section>
      </ScrollContainer>
    </Container>
    </>
  )
}

export default App
