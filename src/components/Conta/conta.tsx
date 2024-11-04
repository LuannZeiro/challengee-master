"use client";

import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f0f0f0;
  }

  @media (max-width: 575px) {
    .header-icons .icon {
      width: 50px;
      padding-left: 15px;
    }

    .icon {
      margin: 20px;
    }

    .nome, .carro, .email{
      width: 400px; 
    }
  }

  @media (min-width: 576px) and (max-width: 767px) {
    .header-icons .icon {
      width: 50px;
      padding-left: 20px;
    }

    .icon {
      margin: 30px;
    }
  }

  @media (min-width: 768px) and (max-width: 991px) {
    .header-icons .icon {
      width: 45px;
      padding-left: 25px;
    }

    .icon {
      margin: 40px;
    }
  }

  @media (min-width: 992px) and (max-width: 1199px) {
    .header-icons .icon {
      width: 50px;
      padding-left: 30px;
    }

    .icon {
      margin: 50px;
    }
  }

  @media (min-width: 1200px) {
    .header-icons .icon {
      width: 50px;
      padding-left: 30px;
    }

    .icon {
      margin: 60px;
    }
  }
`;

const Header = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background-color: white;
  border-bottom: 1px solid #727375;
`;

const Logo = styled.div`
  img {
    width: 350px;
  }
`;

const HeaderIcons = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
`;

const Icon = styled.div`
  width: 50px;
  padding-left: 30px;

  img {
    width: 100%;
  }
`;

const Central = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Dados = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 500px;
  color: #01A1FD;
`;

const Item = styled.div`
  border: 1px solid #727375;
  width: 500px;
  height: 40px;
  display: flex;
  align-items: center;
  padding: 0 10px;

  img {
    margin-right: 10px;
  }
`;

// Component
const Conta: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <Header>
        <Logo>
          <Link href="/Inicial">
          <Image src="/PortoLogo.png" alt="Logo da Porto" width={400} height={200} />
          </Link>
        </Logo>
      </Header>
      <HeaderIcons>
        <Link href="/Inicial">
          <Icon><Image src="/pasta.png" alt="Pasta" width={40} height={25} /></Icon>
        </Link>
        <Link href="/ChamarFornecedor">
          <Icon><Image src="/mais.png" alt="Mais" width={40} height={25} /></Icon>
        </Link>
        <Link href="/Conta">
          <Icon><Image src="/user.png" alt="User" width={40} height={25} /></Icon>
        </Link>
      </HeaderIcons>
      <Central>
        <Dados>
          <Item><Image src="/Vectorr.png" alt="Nome" width={20} height={20} />Administrador 1</Item>
          <Item><Image src="/icon_document_.png" alt="Carro" width={15} height={15} />123.456.789.10</Item>
          <Item><Image src="/icon_email.png" alt="Email" width={20} height={20} />admin1@porto.com.br</Item>
        </Dados>
      </Central>
    </>
  );
};

export default Conta;
