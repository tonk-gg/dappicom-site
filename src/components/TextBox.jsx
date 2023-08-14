import { useParallax } from 'react-scroll-parallax';


import styled from 'styled-components'

import { MOBILE_WIDTH_SIZE, ULTRA_SLIM, TALL_THIN_SIZE } from '../constants'

const MetaBox = styled.div`
    flex: none;
    position: relative;
    width: 80vw;
    max-height: 80%;
    padding: 0 5vw;
    @media (max-width: ${TALL_THIN_SIZE}) {
        padding: 0;
        width: calc(100vw - 20px);
        left: -20px;
    }
`
const InnerBoxNotBig = styled.div`
    position: relative;
    width: 100%;
    height: auto;
    max-width: 1920px;
`

const BorderBox = styled.div`
    position: absolute;
    top: ${({$upsideDown}) => $upsideDown ? (
        `10px;`
    ) : (
        `0;`
    )}
    left: ${({$upsideDown}) => $upsideDown ? (
        `10px;`
    ) : (
        `0;`
    )}
    background: rgba(0,0,0,0);
    border-image: ${({$upsideDown}) => $upsideDown ? (
        `linear-gradient(180deg, #FEEF5C 0%, #FEEF5C 24.95%, #FECED1 41.67%, #FCA6DD 60.94%, #9186CE 100%) 30;`
    ) : (
        `linear-gradient(180deg, #9186CE 0%, #FCA6DD 24.95%, #FECED1 41.67%, #FEEF5C 60.94%, #FEEF5C 100%) 30;`
    )};
    border-width: 10px;
    height: calc(100% + 60px);
    width: 100%;
    padding: 0;
    max-width: 1920px;
    border-style: solid;
    background: ${({$upsideDown}) => !$upsideDown ? `rgba(0,0,0,0.33)` : ``};
    // @media (max-width: ${TALL_THIN_SIZE}) {

    // }
    // @media (max-width: ${MOBILE_WIDTH_SIZE}) {
    //     font-size: 24px;
    //     padding: 0;
    // }
    // @media (max-width: ${ULTRA_SLIM}) {
    // }
`

const TextContainerBox = styled.div`
    position: relative;
    top: 20px;
    left: 20px;
    padding: 60px 0 20px 80px;
    width: calc(100% - 160px);
    color: #FFF;
    text-shadow: 2px 2px 0px #000;
    font-family: 'Rubik Mono One';
    font-size: 62px;
    @media (max-width: ${TALL_THIN_SIZE}) {
        font-size: 36px;
    }
    @media (max-width: ${MOBILE_WIDTH_SIZE}) {
        font-size: 24px;
        padding: 20px 0 5px 30px;
        width: calc(100% - 50px);
    }
    @media (max-width: ${ULTRA_SLIM}) {
        font-size: 18px;
        padding: 10px 0 2px 20px;
    }
    // background: rgba(255,0,0,0.2);
`

const TextBox = ({ children }) => {
    const { ref } = useParallax({ speed: 10 });
    return (
        <MetaBox>
            <InnerBoxNotBig ref={ref}>
                <BorderBox />
                <BorderBox $upsideDown={true} />
                <TextContainerBox>
                    {children}
                </TextContainerBox>
            </InnerBoxNotBig>
        </MetaBox>
    )
}

export default TextBox;

