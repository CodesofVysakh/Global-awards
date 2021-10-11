import React from 'react';
import styled from 'styled-components';
import Global from '../../assets/images/logo.svg';


export default function Foot() {
    return (
        <Footer className="wrapper">
            <Left>
                <Container><Logo src={Global} alt="Logo" /></Container>
                <Para>Apartment 0031 Broadmoor Ln, Rotonda West Wood, <br />FL, 33947</Para>
            </Left>
            <Right>
                <SideL>
                    <Ul>
                        <Li>Home</Li>
                        <Li>About Us</Li>
                        <Li>Awards</Li>
                        <Li>Contact Us</Li>
                    </Ul>
                </SideL>
                <SideM>

                </SideM>
                <SideR>
                    <Para>Designed by <Span>www.steyp.in</Span></Para>
                </SideR>
            </Right>
        </Footer>
    )
}

const Footer = styled.footer`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 50px;
    @media all and (max-width: 640px) {
        text-align: center;
        flex-wrap: wrap;
    }
`;
const Left = styled.div`
    width: 25%;
    @media all and (max-width: 1080px) {
        width: 26%;
    }
    @media all and (max-width: 640px) {
        width: 100%;
    }
    @media all and (max-width: 480px) {
        margin-bottom: 20px;
    }

`;
const Container = styled.div`
    width: 200px;
    margin-bottom: 10px;
    @media all and (max-width: 640px) {
        margin: 0 auto;
    }
`;
const Logo = styled.img``;
const Para = styled.p``;
const Right = styled.div`
    width: 600px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media all and (max-width: 1080px) {
       width: 575px;
    } 
    @media all and (max-width: 980px) {
       flex-direction: column;
    } 
    
`;
const SideL = styled.div`
   @media all and (max-width: 980px) {
        margin-bottom: 10px;
}
`;
const Ul = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    @media all and (max-width: 480px) {
        flex-wrap: wrap;
    }
    
`;
const Li = styled.li`
    margin-left: 20px;
    cursor: pointer;
    &:hover{
        color: #fff;
    }
    @media all and (max-width: 480px) {
        width: 50%;
    }
`;
const SideM = styled.div`
    height: 50px;
    border-right: 1px solid #5b5a5d;
    @media all and (max-width: 980px) {
        display:none;
    }
`;
const SideR = styled.div``;
const Span = styled.span`
    color: #d45945;
`;
