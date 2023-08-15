import styled from 'styled-components'

import { MOBILE_WIDTH_SIZE, LAPTOP_SCREEN_HEIGHT, TALL_THIN_SIZE, ULTRA_SLIM } from '../constants'


const Container = styled.div`
    position: relative;
    width: 1500px;
    height: 300px;
    @media(max-width: ${LAPTOP_SCREEN_HEIGHT}) {
        width: 1250px;
        height: 250px;
    }
    @media(max-width: ${TALL_THIN_SIZE}) {
        width: 900px;
        height: 180px;
    }
    @media(max-width: ${MOBILE_WIDTH_SIZE}) {
        width: 500px;
        height: 100px;
    }
    @media(max-width: ${ULTRA_SLIM}) {
        width: 300px;
        height: 60px;
    }
`

const DappicomTextTop = styled.p`
    position: absolute;
    top: 0;
    font-family: "Alro";
    left: 0;
    margin: 0;
    font-size: 300px; 
    color: white;
    text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
    @media(max-width: ${LAPTOP_SCREEN_HEIGHT}) {
        font-size: 250px; 
    }
    @media(max-width: ${TALL_THIN_SIZE}) {
        font-size: 180px;
    }
    @media(max-width: ${MOBILE_WIDTH_SIZE}) {
        font-size: 100px;
    }
    @media(max-width: ${ULTRA_SLIM}) {
        font-size: 60px;
    }
    font-size: ${({$size}) => $size}px;
`
const DappicomTextBottom = styled.p`
    position: absolute;
    font-family: "Alro";
    top: 15px;
    left: 15px;
    color: rgb(139 143,191);
    text-shadow: -1px 0 white, 0 1px white, 1px 0 white, 0 -1px white;
    font-size: 300px; 
    margin: 0;
    @media(max-width: ${LAPTOP_SCREEN_HEIGHT}) {
        font-size: 250px; 
        top: 12px;
        left: 12px;
    }
    @media(max-width: ${TALL_THIN_SIZE}) {
        font-size: 180px; 
        top: 9px;
        left: 9px;
    }
    @media(max-width: ${MOBILE_WIDTH_SIZE}) {
        font-size: 100px; 
        top: 5px;
        left: 5px;
    }
    @media(max-width: ${ULTRA_SLIM}) {
        font-size: 60px;
        top: 3px;
        left: 3px;
    }
`

const DappicomText = () => {
    return (
        <Container>
            <DappicomTextBottom>DAPPICOM</DappicomTextBottom>
            <DappicomTextTop>DAPPICOM</DappicomTextTop>
        </Container>
    )
}

export default DappicomText;