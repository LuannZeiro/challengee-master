"use client";

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-color: #f0f0f0;
`;

const Logo = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 200px;
`;

const Heading = styled.h3`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: -50px;
    color: #727375;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
`;

const ButtonContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 30px;

    & > a {
        margin-top: 30px;
    }
`;

const Button = styled.button`
    width: 400px;
    height: 50px;
    border: none;
    background-color: #01A1FD;
    color: white;
    border-radius: 10px;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
        background-color: #007bb5;
    }
`;

const Home: React.FC = () => {
    return (
        <Container>
            <Logo>
                <Image src="/PortoLogo.png" alt="Logo da Porto" width={400} height={200} />
            </Logo>
            <Heading>A Maior Seguradora do Brasil</Heading>
            <ButtonContainer>
                <Link href="/Entrar" passHref>
                    <Button>ENTRAR</Button>
                </Link>
                <Link href="/Cadastrar" passHref>
                    <Button>CADASTRAR</Button>
                </Link>
            </ButtonContainer>
        </Container>
    );
};

export default Home;
