import React from 'react';
import styled from 'styled-components';
import FootImg from '../../assets/images/Footer-image.png'


export default function Form() {
    return (
        <Message className="wrapper">
            <Overlay >
                <Left>
                    <H6>Want to get new design <Br /> news</H6>
                    <Para>Here is a comparison chart of us with thipsum <Br />tool, but at the end we win!</Para>
                    <FormBox>
                        <Input placeholder="Your email address" />
                        <Submit value="Get Started" />
                    </FormBox>
                </Left>
            </Overlay>
        </Message>
    )
}

const Message = styled.div`
    background: url(${FootImg});
    background-size: cover;
    margin-bottom: 80px;
    border-radius: 20px;
    @media all and (max-width: 640px) {
        margin-bottom: 50px;
    }
`;
const Overlay = styled.div`
    border-radius: 20px;
    background: linear-gradient(to left, rgba(248,83,1, 0.7),rgba(0,0,0,0.3), rgba(0,0,0,0.7));
    padding: 100px 50px;
    @media all and (max-width: 980px) {
        padding: 50px;
    }
    @media all and (max-width: 640px) {
        padding: 30px;
    }
`;
const Left = styled.div`
    width: 50%;
    @media all and (max-width: 980px) {
        width: 100%;
    }
`;
const H6 = styled.h6`
    color: #fff;
    font-size: 36px;
    margin-bottom: 30px;
    @media all and (max-width: 1080px) {
        font-size: 32px;
    }
    @media all and (max-width: 640px) {
        font-size: 30px;
    }
`;
const Br = styled.br`
    @media all and (max-width: 480px) {
        display: none;
    }
`;
const Para = styled.p`
    margin-bottom: 30px;
`;
const FormBox = styled.form`
    display: inline;
    background: #fff;
    display: flex;
    justify-content: space-between;
    border-radius: 8px;
    padding-left: 20px;
    width: 50%;
    @media all and (max-width: 1080px) {
        width: 80%;
    }
    @media all and (max-width: 768px) {
        width: 100%;
    }
    @media all and (max-width: 480px) {
        width: 80%;
        padding-left: 0;
    }
    @media all and (max-width: 360px) {
        width: 100%;
        flex-wrap: wrap;
    }
`;
const Input = styled.input.attrs({type: 'email'})`
    font-family: 'gorditabold';
    display: inline-block;
	font-size: 14px;
    @media all and (max-width: 480px) {
        padding-left: 6px;
    }
    @media all and (max-width: 360px) {
        padding: 10px;
        width: 100%;
    }

`;
const Submit = styled.input.attrs({type: 'submit'})`
    padding: 20px 32px;
    background: linear-gradient(to left top, #8C406E, #E57372, #FC5100 );
    font-family: 'gorditabold';
	color: #fff;
    display: inline-block;
	cursor: pointer;
	border-radius: 8px;
	font-size: 14px;
    @media all and (max-width: 640px) {
        padding: 16px 20px;
    }
    @media all and (max-width: 480px) {
        padding: 10px;
    }
    @media all and (max-width: 360px) {
        width: 100%;
    }
`;
