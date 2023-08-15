import styled from 'styled-components'

import { MOBILE_WIDTH_SIZE } from '../constants'


const GithubLink = styled.a`
    position: fixed;
    right: 0;
    top: 0;
    height: 10vw;
    width: 10vw;
    z-index: 1;
    cursor: pointer;
    @media (max-width: ${MOBILE_WIDTH_SIZE}) {
        height: 20vw;
        width: 20vw;
    }
`

const GithubImage = styled.img`
    width: 100%;
    height: 100%;
`

const BrilliantGithubCorner = () => {
    return (
        <GithubLink>
            <GithubImage src={"images/github-corner.svg"} />
        </GithubLink>
    )
}

export default BrilliantGithubCorner;
