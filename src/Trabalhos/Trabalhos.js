import React from "react";
import { trabalhos } from './InfosTrabalhos';
import styles from './Trabalhos.module.css'

export default function List() {
    const ionic = trabalhos.filter(aplicacao =>
        aplicacao.framework === 'ionic'
    );
    const js = trabalhos.filter(aplicacao =>
        aplicacao.language === 'JavaScript'
    );
    const outros = trabalhos.filter(aplicacao => (aplicacao.framework === '')
    )
    return (
        <div className={styles.container_trabalhos}>
            <div className={styles.js}>
                <article>
                    <h2 className={styles.h2}>JS</h2>
                    <ul>
                        {js.map(aplicacao =>
                            <li key={aplicacao.id}>
                                <p className={styles.p}>
                                    <b>{aplicacao.name}:</b>
                                </p>
                                <span className={styles.link}>
                                    <a href={aplicacao.deploy} target="_blank" rel="noopener noreferrer">Acesse aqui o projeto</a>
                                </span>
                            </li>
                        )}
                    </ul>
                </article>

            </div>
            <div className={styles.ionic}>
                <article>
                    <h2 className={styles.h2}>IONIC</h2>
                    <ul>
                        {ionic.map(aplicacao =>
                            <li key={aplicacao.id}>
                            <p className={styles.p}>
                                <b>{aplicacao.name}:</b>
                            </p>
                            <span className={styles.link}>
                                <a href={aplicacao.deploy} target="_blank" rel="noopener noreferrer">Acesse aqui o projeto</a>
                            </span>
                        </li>
                        )}
                    </ul>
                </article>
            </div>

            <div className={styles.outros}>
                <article>
                    <h2 className={styles.h2}>Outros</h2>
                    <ul>
                        {outros.map(aplicacao =>
                           <li key={aplicacao.id}>
                           <p className={styles.p}>
                               <b>{aplicacao.name}:</b>
                           </p>
                           <span className={styles.link}>
                               <a href={aplicacao.deploy} target="_blank" rel="noopener noreferrer">Acesse aqui o projeto</a>
                           </span>
                       </li>
                        )}
                    </ul>
                </article>
            </div>
        </div>
    );
}
