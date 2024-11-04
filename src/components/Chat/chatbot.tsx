"use client";

import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';

const Header = styled.header`
  display: flex;
  align-items: center;
  background-color: #01A1FD;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  width: 100%;

  img {
    width: 100px;
  }
`;

const Topo = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-left: 60px;

  a {
    margin-left: 10px;
  }

  img {
    width: auto;
  }
`;

const Title = styled.h3`
  color: #727375;
  margin-left: 180px;
`;

const Espaco = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 650px;
  width: 1500px;
  background-color: #AEAEAE;
  margin-left: 180px;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  border: 1px solid #727375;

  @media (min-width: 992px) and (max-width: 1199px) {
    height: 400px;
    width: 800px;
  }

  @media (min-width: 768px) and (max-width: 991px) {
    height: 400px;
    width: 800px;
  }

  @media (min-width: 576px) and (max-width: 767px) {
    height: 800px;
    width: 600px;
  }

  @media (max-width: 575px) {
    height: 800px;
    width: 600px;
  }
`;

const Texto = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Input = styled.input`
  width: 1500px;
  height: 25px;
`;

const Chatbot: React.FC = () => {
  return (
    <>
      <Header>
        <Logo>
          <Image src="/fORNECEDOR-removebg-preview (1).png" alt="Logo" width={100} height={100} />
        </Logo>
        <Topo>
          <Link href="/Inicial">
            <Image src="/pasta-branco.png" alt="Pasta" width={25} height={25} />
          </Link>
          <Link href="/ChamarFornecedor">
            <Image src="/mais-branco.png" alt="Mais" width={27} height={27} />
          </Link>
          <Link href="/Conta">
            <Image src="/user-branco.png" alt="User" width={40} height={40} />
          </Link>
        </Topo>
      </Header>
      <br />
      <br />
      <Title>Chat</Title>
      <Espaco />
      <Texto>
        <Input type="text" name="digite" id="digite" placeholder="Digite sua mensagem..." />
      </Texto>
    </>
  );
};

export default Chatbot;
