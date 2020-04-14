import React, { Component } from 'react'
import styled , { css } from 'styled-components';
export class Footer extends Component {
    render() {
        return (
            <FooterContainer>
                <AboutAndContact>
                    <HypertextLink>
                    <i className="fa fa-book fa-lg"><span>About Us</span></i>
                    </HypertextLink>
                    <HypertextLink>
                        <i className="fa fa-address-book-o fa-lg"><span>Contact</span></i> 
                    </HypertextLink>
                </AboutAndContact>
                <SocialMedia>
                <HypertextLink>
                <i className="fa fa-twitter fa-lg" aria-hidden="true"><span>Twitter</span></i> 
                    </HypertextLink>
                    <HypertextLink>
                    <i className="fa fa-facebook fa-lg" aria-hidden="true"><span>Facebook</span> </i> 
                    </HypertextLink>
                </SocialMedia>
            </FooterContainer>
        )
    }
}

export default Footer

const FooterContainer = styled.div`
    background-color: #202027;
    display: grid;
    grid-template-columns: 50% 50%;
    padding: 4vh 0;
    position:absolute;
    bottom:0;
    left:0;
    right:0;
    @media (max-width:960px){
        grid-template-columns:50% 50%;
        padding: 2vh 0;
        align-items:center;
        bottom:-5.3vh;
        right:-5vw;
    }
`;

const AboutAndContact = styled.div`
    display:grid;
    grid-template-columns: 50% 50%;
    place-items:center;
    @media (max-width:960px){
        grid-template-columns:50% 50%;
        justify-content:start;
    }
`;

const SocialMedia = styled.div`
    display:grid;
    grid-template-columns: 50% 50%;
    place-items: center;
    @media (max-width:960px){
        grid-template-columns:50% 50%;
    }
`;

const HypertextLink = styled.a`
    color:white;
    text-decoration: none;
    @media (max-width:960px){
        span{
            display:none;
        }
    }
`;