import React, {useState} from 'react';
import Logo from '../../assets/images/logo.svg';
import close from '../../assets/images/close.png';
import styled from 'styled-components';
import MenuIcon from '../../assets/images/menu-icon.png';
import '../../App.css'

export default function Head() {
    const[menuBar, setMenuBar]= useState(false)

    // let renderMenu = () => {
    //     return (
    //         <Overlay>
    //             <MUl>
    //                 <MLi>Home</MLi>
    //                 <MLi>About Us</MLi>
    //                 <MLi>Awards</MLi>
    //                 <MLi>Contact Us</MLi>
    //                 <MButton><MContent>Get Start</MContent></MButton>
    //             </MUl>
    //         </Overlay>
    //     )
    // }

    
    return (
        <Header>
            <Wrapper className="wrapper">
                <H1><Img src={Logo} alt="Logo" /></H1>
                <Ul>
                    <Li>Home</Li>
                    <Li>About Us</Li>
                    <Li>Awards</Li>
                    <Li>Contact Us</Li>
                    <Button><Content>Get Start</Content></Button>
                </Ul>
                <MenuI src={MenuIcon} alt="Hamburger" onClick={()=>{
                                setMenuBar(!menuBar)}} />
                {menuBar?(
                    <>
                        <CloseIcon id="close-icon" onClick={()=>{
                            setMenuBar(!menuBar)
                        }}>
                            <img src={close} alt="image" />
                        </CloseIcon>                
                        <MUl>
                            <MLi>Home</MLi>
                            <MLi>About</MLi>
                            <MLi>Awards</MLi>
                            <MLi>Contact Us</MLi>
                            <MLi>Get Start</MLi>
                        </MUl>
                        <Overlay className="overlay" onClick={()=>{
                            setMenuBar(!menuBar)
                        }}>
                        </Overlay>
                    </>):null}
            </Wrapper>
        </Header>
    )
}

const CloseIcon = styled.a`
    width: 30px;
    z-index: 4;
    position: absolute;
    top: 25px;
    right: 35px;
    border: 1px solid #000;
    border-radius: 4px;
    padding: 5px;
    box-sizing: content-box;
    cursor: pointer;
`;
const Overlay = styled.div`
    background: rgba(0,0,0,0.6);
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: 2;
`;
const MUl = styled.ul`
    display: none;
    background: #fff;
    @media all and (max-width: 768px) {
        display:block;
        position: absolute;
        top: 0;
        right: 0;
        height: 100vh;
        z-index: 3;
        width: 200px;
        padding: 80px 30px;
        text-align: right;
    }
`;
const MLi = styled.li`
    color: #000;
    margin-bottom: 8px;
    cursor: pointer;
    &:last-child {
        background: linear-gradient(to right, #d45945, #D25B79, #B54790);
        padding: 12px;
        border-radius: 8px;
        color: #fff;
        font-weight: 600;
        text-align: center;
        margin-top: 30px;
    }
`;

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
    @media all and (max-width: 980px) {
        width: 200px;
    }
`;
const Img = styled.img`
`;
const MenuI = styled.img`
    display: none;
    width: 30px;
    filter: invert(1);
    border: 1px solid #000;
    padding: 5px;
    box-sizing: border-box;
    border-radius: 3px;
    @media all and (max-width: 768px) {
        display:block;
        position: absolute;
        top: 30px;
        right: 40px;
    }
`;

const Ul = styled.ul`
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media all and (max-width: 768px) {
        display:none;
    }
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
    cursor: pointer;
    border-radius: 8px;
    background: linear-gradient(to right, #d45945, #D25B79, #B54790);
    padding: 2px;
    margin-left: 25px;
    @media all and (max-width: 980px) {
        margin-left: 12px;
    }
    
`;
const Content = styled.div`
    padding: 10px 25px;
    border-radius: 8px;
    color: #d45945;
    font-size: 15px;
    background: #141414;
    font-family: 'gorditabold';
    &:hover {
        color: #fff;
        transition: 0.5s ease;
    }
    @media all and (max-width: 980px) {
        padding: 8px 20px;
    }
`;