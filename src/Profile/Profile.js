// List.js

import React from "react";
import { pessoa } from './InfoProfile';
import './Profile.css'

export default function List() {
  const listItems = pessoa.map(person => (
    <div key={person.id}>
      <p className="profissao">
        <b>{' ' + person.profession}</b>
      </p>
      <small>
        <h3 className="title">Serviços de Software</h3>
        <b className="languages">{' ' + person.atributos}</b>
        <b className="languages">{' ' + person.languages}</b>,
        <b className="frameworks">{' ' + person.frameworks}</b> 
        <b className="dbo">{' ' + person.bdo}</b>.

        <h3 className="title">Serviços de Hardware</h3>
        <b className="languages">Manutenção de Hardware, </b> 
        <b className="languages">Formatação, </b>
        <b className="languages">Instalação de Componentes, </b> 
        <b className="languages">Dimensionamento de Redes Locais, </b> 
        <b className="languages">Estruturação e Cabeamento.</b> 

        
        <h3 className="title">Serviços de Gerenciamento</h3>
        <b className="languages">{' ' + person.gerenciamento}</b>

      </small>
    </div>
  ));

  return (
    <div className="container">
      <div className="image-column">
        <img
          src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiJQAyDru9uGNFQXtHis9fyeDDwvq3FZqzeVANJuD0yvevQKDRVdNwcbmIQKqNcTRfDSsqMW-aJi18CoJZ54KzmwgSfCKZEC1Scr_TTDwLpjcpNzUBQhUwoWrYt_StSUoGiNQi8zANUEsWUYSBXtCpOaLm70bWXAuJ_CxM9FmqLHq0G6SJHrxJSVTKqCQ/s320/Design%20sem%20nome%20(2).png"
          alt="Jeff Profile"
        />
      </div>
      <div className="info-column">
        <div className="profile">
          {listItems}
        </div>
      </div>
    </div>
  );
}
