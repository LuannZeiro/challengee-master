"use client";

import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';

const Container = styled.div``;

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
  margin: 60px;
  margin-top: 3px;

  @media (max-width: 575px) {
    width: 50px;
    padding-left: 15px;
    margin: 20px;
  }

  @media (min-width: 576px) and (max-width: 767px) {
    width: 50px;
    padding-left: 20px;
    margin: 30px;
  }

  @media (min-width: 768px) and (max-width: 991px) {
    width: 45px;
    padding-left: 25px;
    margin: 40px;
  }

  @media (min-width: 992px) and (max-width: 1199px) {
    width: 50px;
    padding-left: 30px;
    margin: 50px;
  }

  @media (min-width: 1200px) {
    width: 50px;
    padding-left: 30px;
    margin: 60px;
  }
`;

const Central = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Dados = styled.div`
  flex-direction: column;
  max-width: 500px;
  color: #01a1fd;
`;

const InfoBlock = styled.div`
  border: 1px solid #727375;
  height: 40px;
  display: flex;
  align-items: center;
`;

const Anexo = styled(InfoBlock)`
  color: #01a1fd;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const Texto = styled(InfoBlock)``;

const Botoes = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Botao = styled.button`
  width: 400px;
  height: 50px;
  border: none;
  background-color: #01a1fd;
  color: white;
  border-radius: 10px;
  cursor: pointer;
  margin-top: 30px;

  &:hover {
    background-color: #0081d3;
  }

  @media (max-width: 575px) {
    margin-top: 50px;
  }

  @media (min-width: 576px) and (max-width: 767px) {
    margin-top: 75px;
  }

  @media (min-width: 768px) and (max-width: 991px) {
    margin-top: 80px;
  }

  @media (min-width: 992px) and (max-width: 1199px) {
    margin-top: 90px;
  }

  @media (min-width: 1200px) {
    margin-top: 100px;
  }
`;

const Chamado: React.FC = () => {
  return (
    <Container>
      <Header>
        <Logo>
          <Link href="/Inicial">
          <Image src="/PortoLogo.png" alt="Logo da Porto" width={400} height={170} />
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
            <Image src="/mais.png" alt="Mais" width={25} height={25} />
          </Icon>
        </Link>
        <Link href="/Conta">
          <Icon>
            <Image src="/user.png" alt="User" width={25} height={25} />
          </Icon>
        </Link>
      </HeaderIcons>

      <Central>
        <Dados>
          <InfoBlock>
            <Image src="/Vectorr.png" alt="User" width={30} height={30} />
            Miguel Rodrigues Ghelman
          </InfoBlock>
          <InfoBlock>
            <Image src="/Vector.png" alt="Car" width={30} height={30} />
            FIESTA - FORD - ABC1D23
          </InfoBlock>
          <InfoBlock>
            <Image src="/icon_email.png" alt="Mail" width={30} height={30} />
            Miguel.rodrigues@gmail.com
          </InfoBlock>
          <Link href="#">
            <Anexo> &gt; Visualizar anexo</Anexo>
          </Link>
          <Texto>
            Usuario descreveu que seu carro furou o pneu na Avenida Paulista n°1106 - via chatbot
          </Texto>
        </Dados>
      </Central>

      <Botoes>
        <Link href="#">
          <Botao>Enviar Caminhão Guincho</Botao>
        </Link>
        <Link href="#">
          <Botao>Enviar Mecânico</Botao>
        </Link>
      </Botoes>
    </Container>
  );
};

export default Chamado;
