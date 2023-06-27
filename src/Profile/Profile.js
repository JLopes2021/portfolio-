import React from "react";
import { pessoa } from './InfoProfile';
import './Profile.css'

export default function List() {
    const listItems = pessoa.map(person => (
        <div key={person.id}>
            <p className="profissao">
                    <b>{' ' + person.profession}<small>Portfolio em construção</small></b>
                </p>
            <small>
                <b className="linguagens">{' ' + person.languages}</b>, além dos <span>Frameworks</span>
                <b className="frameworks">{' ' + person.frameworks + '. '}</b> Atualmente busco a minha
                primeira oportunidade formal dentro da área de T.I.
            </small>
        </div>
    ));
    return (
        <div className="profile">
            <img
                src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiJQAyDru9uGNFQXtHis9fyeDDwvq3FZqzeVANJuD0yvevQKDRVdNwcbmIQKqNcTRfDSsqMW-aJi18CoJZ54KzmwgSfCKZEC1Scr_TTDwLpjcpNzUBQhUwoWrYt_StSUoGiNQi8zANUEsWUYSBXtCpOaLm70bWXAuJ_CxM9FmqLHq0G6SJHrxJSVTKqCQ/s320/Design%20sem%20nome%20(2).png"
                alt="Jeff Profile"
            />
            <p><small>{listItems}</small></p>
        </div>
    );
}
