import styled from 'styled-components'

export const StyledNav = styled.nav`
    border: 1px solid #000;
    height: 100vh;
    width: 450px;
    background-color: chartreuse;
    position: fixed;
    transition: all .25s ease-in-out;
    right: ${props => props.shownav ? "0px" : "-451px"};
    z-index: 10;

    @media screen and (max-width: 440px) {
        position: fixed;
        right: ${props => props.$isopen ? '0px' : '-100vw'};
        width: 100vw;
    }
`