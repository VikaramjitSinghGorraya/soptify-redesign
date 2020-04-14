import React, { Component } from 'react'
import styled  from 'styled-components'
import LandingPageGirl from '../Images/landing-page-girl.png';
import Navigation from './Navigation'
export class Body extends Component {
    render() {
        return (
            <>
            <Navigation/>
                <BodyContainer>
                    <ImageContainer>
                        <Image src={LandingPageGirl}/>
                    </ImageContainer>
                    <IntroText>
                        <h1>Feel The Music.</h1>
                        <h3>Stream over 20 thousand songs with one click</h3>
                        <Hyperlink href="Join.js"><Button>Join Now</Button></Hyperlink>
                    </IntroText>
                </BodyContainer>
                <Circle1/>
                <Circle2/>
                <Circle3/>          
            </>
        )
    }
}

export default Body

const BodyContainer = styled.div`
    display: grid;
    grid-template-columns: 40% 60%;
    @media (max-width: 960px) {
        grid-template-columns:100%;
        h1,h3{
            margin-bottom:5vh;
        }
      }
`;

const IntroText = styled.div`
    margin-top:30vh;
    color:white;
    @media (max-width: 960px) {
        text-align:center;
        
      }
`;

const Button = styled.button`
color: white;
background-color: #1762A7;
padding: .75rem 1.5rem;
border-radius: .5rem;
text-decoration: none;
font-size: .9rem;
border: none;
outline:none;
cursor:pointer;
`;

const Hyperlink = styled.a`
    text-decoration:none;
    color:white;
`;

const Image = styled.img`
    width:30vw;
    height:78vh;
    position:absolute;
    bottom:0;
`;

const ImageContainer = styled.div`
    width:100%:
    height:100%;
    @media (max-width: 960px) {
        display: none;
      }
`;

const Circle1 = styled.div`
    position: absolute;
    width: 15vw;
    height: 15vw;
    border-radius: 50%;
    background-color: rgb(188, 58, 128, .1);
    top: 13vh;
    left: 20vw;
    z-index: -1;
    @media (max-width: 960px) {
        top: 25vh;
        left: 20vw;
        width: 25vw;
        height: 25vw;
      }
`;

const Circle2 = styled.div`
    position: absolute;
    width: 15vw;
    height: 15vw;
    border-radius: 50%;
    background-color: rgb(52, 87, 178, .1);
    top: 55vh;
    left: 0;
    z-index: -1;
    overflow: hidden;
    @media (max-width: 960px) {
        top:55vh;
        width: 45vw;
        height: 45vw;
      }
`;

const Circle3 = styled.div`
    position: absolute;
    width: 25vw;
    height: 25vw;
    bottom: 0;
    right: 0;
    z-index: -1;
    overflow: hidden;
    &:before{
        content: '';
        transform: translate(30%, 20%);
        position: absolute;
        height: 100%;
        width: 100%;
        border-radius: 50%;
        background-color: rgb(52, 87, 178, .1);
    }
    @media (max-width: 960px) {
        width: 45vw;
        height: 45vw;
        &:before{
            transform: translate(0%, 0%);
        }
      }
`;
