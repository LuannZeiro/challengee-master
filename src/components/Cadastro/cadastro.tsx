"use client";

import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';

const Logo = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 50px;
`;

const Title = styled.h3`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: -50px;
    color: #727375;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
`;

const Dados = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    margin-top: 50px;
`;

const Dados2 = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    margin-top: 50px;
`;

const Cliente = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: 1px solid;
    max-width: 500px;
    margin: 0 auto;
    margin-top: 20px;
    padding: 10px;
`;

const Fornecedor = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: 1px solid;
    max-width: 500px;
    margin: 0 auto;
    margin-top: 20px;
    padding: 10px;
`;

const InputContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
`;

const Input = styled.input`
    width: 500px;
    height: 40px;
`;

const RadioInput = styled(Input).attrs({ type: 'radio' })`
    width: 24px;
`;

const BotaoEntrar = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 50px;
`;

const Button = styled.button`
    width: 400px;
    height: 50px;
    border: none;
    background-color: #01A1FD;
    color: white;
    border-radius: 10px;
`;

const ResponsiveContainer = styled.div`
    @media (max-width: 575px) {
        ${Logo}, ${Title}, ${Dados}, ${Dados2}, ${BotaoEntrar} {
            margin: 20px 0;
            margin-left: auto;
            flex-direction: column;
        }
        
        ${Input}, ${Button} {
            width: 100%;
        }

        ${Cliente}, ${Fornecedor} {
            max-width: 100%;
            margin: 0 auto;
        }
    }

    @media (min-width: 576px) and (max-width: 767px) {
        ${Dados}, ${Dados2}, ${BotaoEntrar} {
            margin-left: auto;
        }

        ${Input}, ${Button} {
            width: 100%;
        }

        ${Cliente}, ${Fornecedor} {
            max-width: 100%;
            margin: 0 auto;
        }
    }

    @media (min-width: 768px) and (max-width: 991px) {
        ${Dados}, ${Dados2}, ${BotaoEntrar} {
            margin-left: 0;
        }

        ${Input}, ${Button} {
            width: 100%;
        }

        ${Cliente}, ${Fornecedor} {
            max-width: 100%;
            margin: 0 auto;
        }
    }

    @media (min-width: 992px) and (max-width: 1199px) {
        ${Cliente}, ${Fornecedor} {
            margin: 0 auto;
        }
    }

    @media (min-width: 1200px) {
        ${Cliente}, ${Fornecedor} {
            margin: 0 auto;
        }
    }
`;

const Cadastrar: React.FC = () => {
    return (
        <ResponsiveContainer>
            <Logo>
                <Link href="/Home">
                <Image src="/PortoLogo.png" alt="Logo da Porto" width={400} height={200} />
                </Link>
            </Logo>
            <Title>A Maior Seguradora do Brasil</Title>
            <Dados>
                <p>Selecione uma das opções abaixo:</p>
            </Dados>
            <Cliente>
                <p>Cliente</p>
                <RadioInput name="cliente" id="cliente" value="cliente" />
            </Cliente>
            <Fornecedor>
                <p>Fornecedor</p>
                <RadioInput name="cliente" id="fornecedor" value="fornecedor" />
            </Fornecedor>
            <Dados2>
                <p>Agora, preencha os campos abaixo:</p>
            </Dados2>
            <InputContainer>
                <Input type="text" name="nome" id="nome" placeholder="Nome Completo" />
            </InputContainer>
            <InputContainer>
                <Input type="text" name="cpf" id="cpf" placeholder="CPF" />
            </InputContainer>
            <InputContainer>
                <Input type="email" name="email" id="email" placeholder="E-mail" />
            </InputContainer>
            <InputContainer>
                <Input type="password" name="senha" id="senha" placeholder="Senha" />
            </InputContainer>
            <BotaoEntrar>
                <Link href="/Inicial">
                    <Button>CONTINUAR</Button>
                </Link>
            </BotaoEntrar>
        </ResponsiveContainer>
    );
}

export default Cadastrar;
