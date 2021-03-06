import React from 'react';

import { FiLogIn } from 'react-icons/fi';

import './styles.css';
import logoImg from '../../img/logo.svg';
import heroesImg from '../../img/heroes.png';

export default function Logon(){
    return (
        <div className="logon-container">
            <session className="form">
                <img src={logoImg} alt="Be The Hero"/>
        
                <form >
                    <h1>Faça seu logon</h1>
                    <input placeholder="Sua ID"/>
                    <button className="button" type="submit">Entrar</button>
                    <a href="/register">
                        <FiLogIn size={16} color="#E02041"/>
                        Não tenho cadastro
                    </a>
                </form>
                </session>
            <img src={heroesImg} alt="Heroes"/>
        </div>
    );
}