import React from 'react';
import { FooterBase } from './styles';
import './Footer.css';
import Logo from '../../assets/img/logo-vegflix.png';

function Footer() {
  return (
    <FooterBase>
      <a href="/">
        <img className="Logo" src={Logo} alt="Logo Alura" />
      </a>
      <p>
        Orgulhosamente criado durante a
        {' '}
        <a href="https://www.alura.com.br/">
          Imersão React da Alura
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;
