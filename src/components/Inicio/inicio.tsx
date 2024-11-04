"use client";

// Inicio TSX
import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

const Body = styled.div`
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f0f0f0;
`;

const Content = styled.div`
    padding: 20px;
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
`;

const CardSpan = styled.span`
    &:last-child {
        font-size: 24px;
    }
`;

const Inicial: React.FC = () => {
    return (
        <Body>
            <Content>
                <Title>Chamados Ativos</Title>
                <Link href="/Chamado">
                    <Card>
                        <span>Miguel G.</span>
                        <CardSpan>&gt;</CardSpan>
                    </Card>
                </Link>
                <Card>
                    <span>Fulano F.</span>
                    <CardSpan>&gt;</CardSpan>
                </Card>
            </Content>
        </Body>
    );
};

export default Inicial;
