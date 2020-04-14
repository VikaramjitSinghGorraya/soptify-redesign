import React, { Component } from 'react'
import styled  from 'styled-components'
import Navigation from '../Components/Navigation'
import Footer from '../Components/Footer'
import AlbumsImage from '../Images/albums.svg'
import MicrophoneImage from '../Images/microphone.svg'
import MoreImage from '../Images/more.svg'
import CoverImage from '../Images/covers.jpg'
export class Discover extends Component {
    render() {
        return (
            <>
                <Navigation/>
                <OutermostContainer>
                    <TextContainer>
                        <h1>Discover new music</h1>
                        <ThreeImageContainer>
                            <EacImageWrapper>
                            <img src={MicrophoneImage} alt="microPhone"/>
                            </EacImageWrapper>
                            <EacImageWrapper>
                            <img src={AlbumsImage} alt ="albumImage"/>
                            </EacImageWrapper>
                            <EacImageWrapper>
                            <img src={MoreImage} alt ="moreImage"/>
                            </EacImageWrapper>
                        </ThreeImageContainer>
                        <h4>By joining you get the benefit of listening to the latest albums released</h4>
                    </TextContainer>
                    <CoverContainer>
                        <Image src ={CoverImage}/>
                    </CoverContainer>
                </OutermostContainer>
                <Footer/>  
            </>
        )
    }
}

export default Discover
const OutermostContainer = styled.div`
    display:grid;
    grid-template-columns: 65% 25%;
    place-items:center;
    margin-top:10vh;
    @media (max-width: 960px) {
        grid-template-columns: 100%;
        margin:28% auto;
      }
`;

const TextContainer = styled.div`
    display: grid;
    grid-template-columns: 100%;
    grid-row-gap:4vh;
    color:white;
    @media (max-width: 960px) {
        place-items:center;
        text-align:center;
      }

`;

const CoverContainer = styled.div`
    @media (max-width: 960px) {
        display:none;
    }
`;

const Image = styled.img`
    width:30vw;
    height:60vh;
`;

const ThreeImageContainer = styled.div`
    display:grid;
    grid-template-columns: 15% 15% 15%;
    @media (max-width: 960px) {
        grid-template-columns: 36% 36% 36%;
       
      }
`;

const EacImageWrapper = styled.div`
    background-color:#202027;
    margin-right:1vw;
    padding:1vh 1vw;
    @media (max-width: 960px) {
        padding: 1vh 5vw;
        margin-right:2vw;
      }
`;
