import React, { Component } from 'react'
import styled from 'styled-components'
import Navigation from '../Components/Navigation'
import Footer from '../Components/Footer'
export class Joinn extends Component {
    render() {
        return (
            <>
            <Navigation/>
            <OutermostContainer>
                <Heading>Join the <span>fun.</span></Heading>  
                <Form>
                    <Label>Name:</Label>
                    <Input type="text"/>
                    <Label>Email:</Label>
                    <Input type="text"/>
                    <Label>Password:</Label>
                    <Input type="password"/>
                    <Input className="btn" type="submit" value ="Join"/>
                </Form>  
            </OutermostContainer>
            <Footer/>
            <Circle1/>
                <Circle2/>
            </>
        )
    }
}

export default Joinn
const OutermostContainer = styled.div`
    margin-top:10vh;
    display:grid;
    grid-template-columns: 30% 70%;
    place-items:center;  
    @media (max-width: 970px) {
        grid-template-columns: 100%;
        margin-left:4vw;
        margin-top:7vh;
      }
`;

const Heading = styled.h1`
    color:white;
    font-size: 3.2rem;
    font-weight: bold;
    span{
        color:deeppink;
    }

    @media (max-width: 960px) {
        display:none;
      }
  
`;

const Form = styled.form`
    display: grid;
    grid-template-columns:100%;
    max-width:60%;
    height:100%;
    background-color: #202027;
    padding:5vh 5vw;
    border-radius: 20px;
    justify-content:center;
    @media (max-width: 960px) {
        max-width:90%;
        padding:2vh 4vw;
        heigth:80%;
      }
    
`;

const Label = styled.label`
    color:white;
`;

const Input = styled.input`
outline: none;
background: none;
border: 1px solid #2E3852;
font-size: 1em;
padding: .5em;
border-radius: 5px;
width: 95%;
margin-bottom:2vh;
&.btn{
    background-color: #1762A7;
    padding: .75rem 1.5rem;
    border-radius: .5rem;
    text-decoration: none;
    font-size: .9rem;
    outline: none;
    border: none;
    cursor: pointer;
    width: 95.5%;
    align-self:center;
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
        top: 9vh;
        left: 2vw;
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
        top: 50vh;
        left: 0vw;
        width: 45vw;
        height: 45vw;
      }
`;
