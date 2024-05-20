import { useState } from 'react';
import './App.css';
import logotype from './assets/logotype.svg';
import styled from "styled-components";

function App() {
    const [text, setText] = useState<string>('Тык сюда');
    return (
        <AppBlock>
            <Logotype src={logotype} alt="logotype"/>
            <Button onClick={() => {
                confirm('Ты уверена? Назад дороги не будет') ? setText('😏') : setText('😐')
            }}>{text}</Button>
        </AppBlock>
    )
}

export default App

const AppBlock = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #f5f5f5;
`

const Logotype = styled.img`
    height: 2em;
    will-change: filter;
    transition: filter 300ms;

    &:hover {
        filter: drop-shadow(0 0 2em #646cffaa);
    }
`

const Button = styled.button`
    margin-top: 2rem;
    padding: 1rem 2rem;
    border: 2px solid #47BFF2;
    font-weight: bold;
    background-color: white;
    border-radius: 0.2rem;
    transition: .2s;

    &:hover {
        color: white;
        background-color: #47BFF2;
    }
`