"use client";

// Conta TSX
import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Image from 'next/image';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f0f0f0;
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

const Conta: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <Central>
        <Dados>
          <Item>
            <Image src="/Vectorr.png" alt="Nome" width={20} height={20} />
            Administrador 1
          </Item>
          <Item>
            <Image src="/icon_document_.png" alt="Carro" width={15} height={15} />
            123.456.789.10
          </Item>
          <Item>
            <Image src="/icon_email.png" alt="Email" width={20} height={20} />
            admin1@porto.com.br
          </Item>
        </Dados>
      </Central>
    </>
  );
};

export default Conta;
