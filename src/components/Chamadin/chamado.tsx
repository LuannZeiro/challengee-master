"use client";

import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';

const Container = styled.div``;

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
            Usuário descreveu que seu carro furou o pneu na Avenida Paulista n°1106 - via chatbot
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
