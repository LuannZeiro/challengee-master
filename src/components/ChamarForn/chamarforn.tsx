"use client";

import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

const Content = styled.div`
  padding: 20px;

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

const Title = styled.h2`
  color: #333;
  margin-bottom: 10px;
`;

const Card = styled.div`
  background-color: #007bff;
  color: white;
  padding: 15px;
  border-radius: 5px;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }

  span:last-child {
    font-size: 24px;

    @media (max-width: 575px) {
      font-size: 18px;
    }

    @media (min-width: 576px) and (max-width: 767px) {
      font-size: 20px;
    }

    @media (min-width: 768px) and (max-width: 991px) {
      font-size: 22px;
    }

    @media (min-width: 1200px) {
      font-size: 26px;
    }
  }
`;

const ChamarFornecedor: React.FC = () => {
  return (
    <Content>
      <Title>Chamados Ativos</Title>
      <Link href="/Chatbot">
        <Card>
          <span>Fornecedor 1</span>
          <span>&gt;</span>
        </Card>
      </Link>
      <Card>
        <span>Fornecedor 2</span>
        <span>&gt;</span>
      </Card>
      <Card>
        <span>Fornecedor 3</span>
        <span>&gt;</span>
      </Card>
      <Card>
        <span>Fornecedor 4</span>
        <span>&gt;</span>
      </Card>
    </Content>
  );
};

export default ChamarFornecedor;
