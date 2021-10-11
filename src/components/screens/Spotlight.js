import React from 'react';
import styled from 'styled-components';
import SpotImg from '../../assets/images/spot-image.svg';
import Pattern from '../../assets/images/pattern-color.png';

export default function Spotlight() {
    return (
        <Section>
            <Wrapper className="wrapper">
                <Left>
                    <H3>2021 Global Design <Br /> <Span>Awards</Span> Published</H3>
                    <Para>Here we published 2021 global design awards <Br />for the design Competitions.</Para>
                    <Button><ButtonSpan>Already impressed?</ButtonSpan><Small>Get started today!</Small></Button>
                </Left>
                <Right>
                    <Container>
                        <Img src={SpotImg} alt="Image" />
                    </Container>
                    <BG1><img src={Pattern} alt="Effect" /></BG1>
                    <BG2><img src={Pattern} alt="Effect" /></BG2>
                </Right>
            </Wrapper>
        </Section>
    )
}

const Section = styled.section`
    padding: 100px 0 200px;
    @media all and (max-width: 980px) {
        padding: 100px 0 125px;
    }
    @media all and (max-width: 640px) {
        padding: 50px 0 75px;
    }
`;
const Wrapper = styled.section`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
const Left = styled.div`
    width: 50%;
    @media all and (max-width: 768px) {
        width: 70%;
    }
    @media all and (max-width: 640px) {
        width: 100%;
        text-align: center;
    }
`;
const H3 = styled.h3`
    font-size: 45px;
    color: #fff;
    font-family: 'gorditabold';
    margin-bottom: 20px;
    @media all and (max-width: 1080px) {
        font-size: 40px;
    }
    @media all and (max-width: 980px) {
        font-size: 32px;
    }
`;
const Br = styled.br`
    @media all and (max-width: 480px) {
        display: none;
    }
`;
const Span = styled.span`
    color: #d45945;
`;
const Para = styled.p`
    font-size: 20px;
    margin-bottom: 50px;
    @media all and (max-width: 1080px) {
        font-size: 16px;
    }
`;
const Button = styled.a`
    padding: 16px 24px;
    background: linear-gradient(to right, #F55102, #F3795E, #9D4088);
    border-radius: 8px;
    display: inline-block;
    cursor: pointer;
    transition: 0.3s ease;
    @media all and (max-width: 980px) {
        padding: 12px 20px;
    }
`;
const ButtonSpan = styled.span`
    color: #fff;
    display: block;
    font-size: 16px;
    opacity: 0.5;
    @media all and (max-width: 980px) {
        font-size: 14px;
    }
`;
const Small = styled.small`
    color: #fff;
    font-family: 'gorditabold';
    font-size: 16px;
    @media all and (max-width: 980px) {
        font-size: 14px;
    }
`;
const Right = styled.div`
    width: 50%;
    @media all and (max-width: 640px) {
        display: none;
    }
`;
const Container = styled.div`
    position: absolute;
    top: 100px;
    right: 0;
    width: 40%;
    z-index: 1;
`;
const Img = styled.img`
    
`;
const BG1 = styled.div`
    width: 250px;
    filter: blur(30px);
    position: absolute;
    top: 140px;
    right: 20px;
    @media all and (max-width: 1080px) {
        width: 225px;
    }
    @media all and (max-width: 980px) {
        width: 150px;
    }
    @media all and (max-width: 768px) {
        width: 80px;
    }
`;
const BG2 = styled.div`
    width: 250px;
    filter: blur(35px);
    position: absolute;
    top: 360px;
    right: 325px;
    @media all and (max-width: 1080px) {
        width: 225px;
        filter: blur(35px);
        position: absolute;
        top: 300px;
        right: 250px;
    }
    @media all and (max-width: 980px) {
        width: 150px;
        top: 300px;
        right: 200px;
    }
    @media all and (max-width: 768px) {
        width: 80px;
    }
`;