"use client";

// Menu.TSX
import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';

const Header = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background-color: white;
  border-bottom: 1px solid #727375;

  @media (max-width: 575px) {
    padding: 10px;
  }

  @media (min-width: 576px) and (max-width: 767px) {
    padding: 15px;
  }

  @media (min-width: 768px) and (max-width: 991px) {
    padding: 20px;
  }

  @media (min-width: 1200px) {
    padding: 25px;
  }
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
  margin: 60px;
  margin-top: 3px;

  @media (max-width: 575px) {
    width: 30px;
    padding-left: 10px;
  }

  @media (min-width: 576px) and (max-width: 767px) {
    width: 40px;
    padding-left: 20px;
  }

  @media (min-width: 768px) and (max-width: 991px) {
    width: 50px;
    padding-left: 25px;
  }

  @media (min-width: 1200px) {
    width: 60px;
    padding-left: 35px;
  }
`;

const Menu: React.FC = () => {
  return (
    <>
      <Header>
        <Logo>
          <Link href="/Inicial">
            <Image src="/PortoLogo.png" alt="Logo da Porto" width={400} height={200} />
          </Link>
        </Logo>
      </Header>
      <HeaderIcons>
        <Link href="/Inicial">
          <Icon>
            <Image src="/pasta.png" alt="Pasta" width={25} height={25} />
          </Icon>
        </Link>
        <Link href="/ChamarFornecedor">
          <Icon>
            <Image src="/mais.png" alt="Adicionar" width={25} height={25} />
          </Icon>
        </Link>
        <Link href="/Conta">
          <Icon>
            <Image src="/user.png" alt="Usuário" width={25} height={25} />
          </Icon>
        </Link>
      </HeaderIcons>
    </>
  );
};

export default Menu;
