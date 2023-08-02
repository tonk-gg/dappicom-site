import styled from 'styled-components'

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
  max-width: 1920px;
`

const Segment = styled.div`
  width: 100%;
  text-align: center;
  margin: 0;
  padding: 0;
`

const TitleSegment = styled(Segment)`
  height: 100vh;
`

const Title = styled.h1`
  font-family: "Alro";
  font-size: 300px;
`

function App() {

  return (
    <>
    <Container>
      <ScrollContainer>
        <TitleSegment>
          <Title>DAPPICOM</Title>
        </TitleSegment>
        <Segment>
            <img src="/images/2_PlayNESROMS.gif"/>
        </Segment>
      </ScrollContainer>
    </Container>
    </>
  )
}

export default App
