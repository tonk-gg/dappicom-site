import { useEffect, useState } from 'react';
import styled from 'styled-components'

import LazyLoadImage from './components/LazyLoadImage';
import TextBox from './components/TextBox';
import DappicomText from './components/DappicomText';

import { MOBILE_WIDTH_SIZE, TALL_THIN_SIZE, LAPTOP_SCREEN_HEIGHT, ULTRA_SLIM } from './constants'
import BrilliantGithubCorner from './components/BrilliantGithubCorner';


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
  overflow-x: hidden;
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
    padding: 0 0 100px 0;
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

const FinalLanding = styled.div`
  padding-top: 20vh;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background: linear-gradient(180deg, #3860AD 0%, #3B005F 100%);
`

const SubHeading = styled.p`
  font-family: 'VisbyCF';
  font-weight: 800;
  color: white;
  margin: 0;
  padding-top: 180px;
  font-size: 70px;
  @media(max-width: ${LAPTOP_SCREEN_HEIGHT}) {
    font-size: 60px;
  }
  @media(max-width: ${TALL_THIN_SIZE}) {
    font-size: 40px;
    padding-top: 130px;
  }
  @media(max-width: ${MOBILE_WIDTH_SIZE}) {
    font-size: 25px;
    padding-top: 90px;
  }
  @media(max-width: ${ULTRA_SLIM}) {
    padding-top: 60px;
    font-size: 20px;
  }
`

const ParagraphText = styled.p`
  font-family: 'Inter';
  font-size: 43px;
  color: white;
  width: 1400px;
  text-align: center;
  margin-top: 180px;
  @media(max-width: ${LAPTOP_SCREEN_HEIGHT}) {
    width: 1200px;
  }
  @media(max-width: ${TALL_THIN_SIZE}) {
    width: 800px;
    font-size: 28px;
    margin-top: 120px;
  }
  @media(max-width: ${MOBILE_WIDTH_SIZE}) {
    width: 500px;
    margin-top: 70px;
    font-size: 26px;
  }
  @media(max-width: ${ULTRA_SLIM}) {
    width: 300px;
    font-size: 18px;
    margin-top: 40px;
  }
`

const ReadLink = styled.a`
  font-family: 'VisbyCF';
  font-weight: 700;
  color: white;
  text-decoration: underline;
  font-size: 43px;
  padding: 100px;
  margin: 300px;
  width: 100%;
  height: auto;
  cursor: pointer;
  text-align: center;
  @media(max-width: ${LAPTOP_SCREEN_HEIGHT}) {
  }
  @media(max-width: ${TALL_THIN_SIZE}) {
    font-size: 28px;
    margin: 120px;
  }
  @media(max-width: ${MOBILE_WIDTH_SIZE}) {
    font-size: 26px;
  }
  @media(max-width: ${ULTRA_SLIM}) {
    font-size: 21px;
    margin-top: 0;
  }

  &:hover {
    color: #FEB9D8;
  }

`

const BigOlSpacer = styled.div`
  height: 50vh;
  width: 100vw.
`
const SeriousText = styled.p`
  text-align: center;
  width: 100%;
  position: absolute;
  bottom: 0;
  color: white;
  font-size: 18px;
  font-family: 'Inter';
`

function App() {
  const [ preloaded, setPreload ] = useState(false);
  const [ animationLoaded, setAnimationLoaded ] = useState(false);
  useEffect(() => {
    ["images/preload/1_DappicomBox-1.png"].forEach(imageSrc => {
      const img = new Image();
      img.src = imageSrc;
      img.onload = () => {
        setPreload(true);
      }
    })
  }, []);
  return preloaded ? (
    <>
    <Container>
      <BrilliantGithubCorner />
      <ScrollContainer>
        <Section>
          <ImageContainer $background={"DAPPICOM"} style={{
            paddingTop: '10vh',
          }}>
              <LazyLoadImage float={true} pad initialSrc="" srcList={["images/HD/1_DappicomBox_illo.gif"]} showPreloaded={animationLoaded} onPreloaded={() => setAnimationLoaded(true)}/>
              <LazyLoadImage float={true} pad initialSrc="images/preload/1_DappicomBox-1.png" srcList={["images/HD/1_DappicomBox_anim.gif"]} showPreloaded={animationLoaded}/>
          </ImageContainer>
          <TextContainer $background={"DAPPICOM"}>
            <TextBox>
              DAPPICOM IS A NEW OPEN-SOURCE PROJECT BROUGHT TO YOU BY <a href={"https://tonk.gg"} target={"_blank"}>TONK</a> AND FRIENDS. 
            <br/><br/> 
            HERE'S HOW IT WORKS.
            </TextBox>
          </TextContainer>
        </Section>
      <Section>
          <ImageContainer $background={"PLAY"}>
              <LazyLoadImage initialSrc="images/preload/2_PlayNESROMS-1.png" srcList={["images/HD/2_PlayNESROMS_illo.gif"]}/>
              <LazyLoadImage initialSrc="images/SMOL/2_PlayNESROMS_anim.gif" srcList={["images/HD/2_PlayNESROMS_anim.gif"]}/>
          </ImageContainer>
          <TextContainer $background={"PLAY"}>
            <TextBox>
              RETRO GAMES SHOULD FEEL LIKE OLD TIMES. DAPPICOM LETS YOU PLAY YOUR GAMES AND ENJOY!
            <br/><br/>
            WHAT'S NEW? AS YOU PLAY, BITS OF THE NES MACHINE STATE ARE STREAMED TO A SERVER.
            </TextBox>
          </TextContainer>
      </Section>
      <Section>
          <ImageContainer $background={"PROVE"}>
              <LazyLoadImage initialSrc="images/preload/3_ProveGameplay-1.png" srcList={["images/HD/3_ProveGameplay_illo.gif"]}/>
          </ImageContainer>
          <TextContainer $background={"PROVE"}>
            <TextBox>
              THE SERVER WORKS FOR YOU DAY AND NIGHT IN A LAND FAR, FAR AWAY
            <br/><br/>
            IT TAKES THE BITS OF MACHINE STATE AND USES THE <a href={"https://noir-lang.org/"} target={"_blank"}>NOIR LANGUAGE</a> TO CONVERT PLAY INTO MATHEMATICAL PROOFS. 
            <br/><br/>
            YOU CAN'T ARGUE WITH MATHS.
            </TextBox>
          </TextContainer>
        </Section>
        <Section>
          <ImageContainer $background={"PERSIST"}>
              <LazyLoadImage initialSrc="" srcList={["images/HD/4_PersistStateOnchain_anim.gif"]}/>
              <LazyLoadImage initialSrc="images/preload/4_PersistStateOnchain-1.png" srcList={["images/HD/4_PersistStateOnchain_illo.gif"]}/>
          </ImageContainer>
          <TextContainer $background={"PERSIST"}>
            <TextBox>
              THOSE PROOFS ARE SENT TO A BLOCKCHAIN AND VERIFIED BY NOIR'S GENERATED SMART CONTRACT CODE.
            <br/><br/>
            PROVEN GAMEPLAY COULD BE YOUR PATH TO REWARDS, BADGES OR NEW LEVELS.
            <br/><br/>
            WITH EXTRA-SPICY HIDDEN INFORMATION: PROVE THAT YOU BEAT THE MARIO SPEEDRUN WORLD RECORD WITHOUT SHOWING PEOPLE HOW YOU DID IT!
            </TextBox>
          </TextContainer>
        </Section>
        <Section>
          <FinalLanding>
            <DappicomText />
            <SubHeading>
              Provable NES Emulator built in Noir
            </SubHeading>
            <ParagraphText>
              Dappicom is under active development and seeking contributions. Please take a look at the github repository for more detailed technical information and instructions on how to contribute.
            </ParagraphText>
            {/* <ReadLink>
            HIDE FOR NOW
              READ DAPPICOM ARTICLE
            </ReadLink> */}
            <BigOlSpacer />
            <SeriousText>
            Illustrations and Animations by <a href={"https://hi-bred.net/"} target={"_blank"}>Hi-Bred</a>. This project is funded by an <a href={"https://aztec.network/index.html"} target={"_blank"}>Aztec</a> ecosystem grant.
            <br/>
            Much like <a href={"https://nesdev.org/"} target={"_blank"}>nesdev.org</a>, Dappicom is not affiliated with Nintendo and is not for profit.
            <br/>
            Copyright @ 2023 Tonk Labs. All Rights Reserved.
            </SeriousText>
          </FinalLanding>
        </Section>
      </ScrollContainer>
    </Container>
    </>
  ) : false
}

export default App
