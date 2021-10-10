import React from 'react';
import styled from 'styled-components';
import SpotImg from '../../assets/images/spot - image.svg';

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
                </Right>
            </Wrapper>
        </Section>
    )
}

const Section = styled.section`
    padding: 100px 0;
`;
const Wrapper = styled.section`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
const Left = styled.div`
    width: 50%;
`;
const H3 = styled.h3`
    font-size: 50px;
    color: #fff;
    font-family: 'gorditabold';
    margin-bottom: 20px;
`;
const Br = styled.br``;
const Span = styled.span`
    color: #d45945;
`;
const Para = styled.p`
    font-size: 20px;
    margin-bottom: 20px;
`;
const Button = styled.div`
    padding: 12px 16px;
    background: linear-gradient(to right, #F55102, #F3795E, #9D4088);
    cursor: pointer;
`;
const ButtonSpan = styled.span`
    color: #5B5A5D;
`;
const Small = styled.small`
    color: #fff;
`;
const Right = styled.div`
    width: 50%;
    position; relative;
`;
const Container = styled.div`
    position: absolute;
    top: 0;
    right: -3%;
    width: 40%;
`;
const Img = styled.img``;