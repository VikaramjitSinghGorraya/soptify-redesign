import React, { Component } from 'react'
import styled  from 'styled-components';
import LogoText from '../Images/logo.png';

export class Navigation extends Component {
    
    render() {
        return (
           <HeaderContainer >
                <LogoContainer>
                    <Hyperlink href="Body.js"><Image src={LogoText}/></Hyperlink>
                    <Hyperlink href="Body.js">SoundWave</Hyperlink>
                </LogoContainer> 

            <Nav>
                <Hyperlink href="/Discover.js">Discover</Hyperlink>
                <Hyperlink href="Join.js">Join</Hyperlink>
            </Nav>
           </HeaderContainer >
        )
    }
}

const Nav = styled.nav`
    display:grid;
    grid-template-columns: 50% 50%;
    align-items:center;
    @media (max-width: 960px) {
        grid-template-columns: 50% 50%;
        grid-column-gap:5vw;
      }
`;

const Hyperlink = styled.a`
    text-decoration:none;
    color:white;
`;

const HeaderContainer = styled.div`
    background-color:#2F303A;
    display:grid;
    grid-template-columns: 80% 20% ;  
    margin-bottom:2vh;
    @media (max-width: 960px) {
        grid-template-columns: 60% 40%;
        margin-bottom:0;
      }
`;

const LogoContainer = styled.div `
    display:grid;
    grid-template-columns: 10% 90% ; 
    align-items:center;
    @media (max-width: 960px) {
        grid-template-columns:30% 70%;
      }
`;

const Image = styled.img`
    width:4.5vw;
    height:9.5vh;
    margin-top:1vh;
    margin-left:1vw;
    @media (max-width: 960px) {
        width:11vw;
        height:7.5vh;
      }
`;


export default Navigation
