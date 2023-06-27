import React from "react";
import { trabalhos } from './InfosTrabalhos';
import './Trabalhos.css'

export default function List() {
    const ionic = trabalhos.filter(aplicacao =>
        aplicacao.framework === 'Mobile'
    );
    const js = trabalhos.filter(aplicacao =>
        aplicacao.language === 'WEB'
    );
    const outros = trabalhos.filter(aplicacao => aplicacao.framework === '');

    return (
        <div className="container_trabalhos">
            <div className="js">
                <article>
                    <h2 className="h2">Web</h2>
                    <ul className="carrossel">
                        {js.map(aplicacao =>
                            <li key={aplicacao.id}>
                                <b>{aplicacao.name}:</b>
                                <span className="link">
                                    <a href={aplicacao.deploy} target="_blank" rel="noopener noreferrer"> Acesse aqui o projeto</a>
                                </span>
                            </li>
                        )}
                    </ul>
                </article>
            </div>
            <div className="ionic">
                <article>
                    <h2 className="h2">Mobile</h2>
                    <ul className="carrossel">
                        {ionic.map(aplicacao =>
                            <li key={aplicacao.id}>
                                <b>{aplicacao.name}:</b>
                                <span className="link">
                                    <a href={aplicacao.deploy} target="_blank" rel="noopener noreferrer"> Acesse aqui o projeto</a>
                                </span>
                            </li>
                        )}
                    </ul>
                </article>
            </div>
            <div className="outros">
                <article>
                    <h2 className="h2">Variados</h2>
                    <ul className="carrossel">
                        {outros.map(aplicacao =>
                            <li key={aplicacao.id}>
                                <b>{aplicacao.name}:</b>
                                <span className="link">
                                    <a href={aplicacao.deploy} target="_blank" rel="noopener noreferrer"> Acesse aqui o projeto</a>
                                </span>
                            </li>
                        )}
                    </ul>
                </article>
            </div>
        </div>
    );
}
