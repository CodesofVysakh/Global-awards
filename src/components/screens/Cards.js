import React from 'react';
import Apple from '../../assets/images/apple.svg';
import Google from '../../assets/images/google.svg';
import Freepik from '../../assets/images/freepik-logo-.svg';
import Flaticon from '../../assets/images/flaticon.svg';
import Crossline from '../../assets/images/cross-line.svg';
import Arrow from '../../assets/images/arrow.svg';
import styled from 'styled-components';


export default function Cards() {
    return (
        <Section className="wrapper">
            <Ul>
                <Li>
                    <BodyContent >
                        <Top>
                            <Container><img src={Apple} alt="Icon" /></Container>
                            <Span>18 Jun 2020</Span>
                        </Top>
                        <Middle>
                            <Small>Gold Winner</Small>
                            <Para>Apple Design Award</Para>
                            <Para>2020-21</Para>
                            <CrossL src={Crossline} alt="Icon" />
                        </Middle>
                        <Bottom>
                            <Country>United States</Country>
                            <Icon src={Arrow} alt="Icon" />
                        </Bottom>
                    </BodyContent>
                </Li>
                <Li>
                    <BodyContent>
                        <Top>
                            <Container><img src={Google} alt="Icon" /></Container>
                            <Span>8 Mar 2021</Span>
                        </Top>
                        <Middle>
                            <Small>Runner Up</Small>
                            <Para>Google Design Award</Para>
                            <Para>2020-21</Para>
                            <CrossL src={Crossline} alt="Icon" />
                        </Middle>
                        <Bottom>
                            <Country>India, New Delhi</Country>
                            <Icon src={Arrow} alt="Icon" />
                        </Bottom>
                    </BodyContent>
                </Li>
                <Li>
                    <BodyContent>
                        <Top>
                            <Container><img src={Freepik} alt="Icon" /></Container>
                            <Span>18 Jun 2019</Span>
                        </Top>
                        <Middle>
                            <Small>Silver Winner</Small>
                            <Para>Freepik Best UI Award</Para>
                            <Para>2019-20</Para>
                            <CrossL src={Crossline} alt="Icon" />
                        </Middle>
                        <Bottom>
                            <Country>France</Country>
                            <Icon src={Arrow} alt="Icon" />
                        </Bottom>
                    </BodyContent>
                </Li>
                <Li>
                    <BodyContent>
                        <Top>
                            <Container><img src={Flaticon} alt="Icon" /></Container>
                            <Span>24 Feb 2020</Span>
                        </Top>
                        <Middle>
                            <Small>Spacial Jury</Small>
                            <Para>Flaticon Design Award</Para>
                            <Para>2020-21</Para>
                            <CrossL src={Crossline} alt="Icon" />
                        </Middle>
                        <Bottom>
                            <Country>New York</Country>
                            <Icon src={Arrow} alt="Icon" />
                        </Bottom>
                    </BodyContent>
                </Li>
            </Ul>
        </Section>
    )
}

const Section = styled.section`
    padding-bottom: 200px;
    @media all and (max-width: 980px) {
        padding-bottom: 100px;
    }
    @media all and (max-width: 640px) {
        padding-bottom: 50px;
    }
`;

const Ul = styled.ul`
    display: flex;
    justify-content: space-between;
    @media all and (max-width: 980px) {
        flex-direction: column;
    }
`;
const BodyContent = styled.div`
    padding: 20px;
    background: #141414;
    border-radius: 8px;
    transition: 0.5s ease-in;
`;
const Li = styled.li`
    width: 24%;
    background: linear-gradient(to right bottom, #DA4C4E, #D25B79, #B54790);
    padding: 2px;
    transition: 0.5s ease-in-out;
    border-radius: 8px;
    &:hover {
        transform: scaleY(1.1);
        transition: 0.5s ease-in-out;
        background: linear-gradient(to right bottom, #DA4C4E, #D25B79, #B54790);
    }
    &:hover ${BodyContent} {
        transform: scaleY(0.9);
        transition: 0.5s ease-in-out;
        background: linear-gradient(to right bottom, #DA4C4E, #D25B79, #B54790);
    }
    @media all and (max-width: 980px) {
        margin: 0 auto 25px;
        width: 70%;
    }
    @media all and (max-width: 480px) {
        width: 100%;
    }
`;
const Top = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 40px;
    &:hover {
        transform: scaleY(1);
    }
    
`;
const Container = styled.div`
    width: 50px;
    height: 50px;
    background: #5B5A5D;
    padding: 10px;
    border-radius: 10px;
    display: flex;
    align-items: center;
`;
const Span = styled.span`
    font-size: 14px;
`;
const Middle = styled.div`
    &:hover {
        transform: scaleY(1);
    }
`;
const Small = styled.small`
    margin-bottom: 20px;
    display: inline-block;
`;
const Para = styled.p`
    color: #fff;
    font-size: 22px;
`;
const CrossL = styled.img`
    width: 30px;
    margin: 20px 0;
`;
const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
const Country = styled.p`
    color: #fff;
`;
const Icon = styled.img`
    width: 30px;
`;






