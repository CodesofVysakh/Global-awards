import React from 'react';
import Logo from '../../assets/images/logo.svg';
import styled from 'styled-components';

export default function Head() {
    return (
        <Header>
            <Wrapper className="wrapper">
                <H1><Img src={Logo} alt="Logo" /></H1>
                <Ul>
                    <Li>Home</Li>
                    <Li>About Us</Li>
                    <Li>Awards</Li>
                    <Li>Contact Us</Li>
                    <Button>Get Start</Button>
                </Ul>
            </Wrapper>
        </Header>
    )
}

const Header = styled.header`
    padding: 30px 0;
`;
const Wrapper = styled.section`    
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
const H1 = styled.h1`
    width: 250px;
`;
const Img = styled.img`
`;
const Ul = styled.ul`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
const Li = styled.li`
    margin-left: 25px;
    font-size: 15px;
    cursor: pointer;
    &:hover {
        color: #fff;
    }
`;
const Button = styled.li`
    padding: 10px 25px;
    cursor: pointer;
    border-radius: 8px;
    border: 1px solid #d45945;
    color: #d45945;
    margin-left: 25px;
    font-size: 15px;
    font-family: 'gorditabold';
    &:hover {
        color: #fff;
    }
`;