import { pessoa } from './InfoProfile';
import styles from './Profile.module.css'

export default function List() {
    const listItems = pessoa.map(person =>
        <li className={styles.list}>
            <p>
                <b className={styles.name}>{person.name}</b>
                <b>  {' ' + person.profession + ', '} </b>
                trabalho com  
               <b>{' ' + person.languages}</b>, além dos <span>Frameworks</span><b>{' ' + person.frameworks + '. '}</b> Atualmente busco a minha 
               primeira oportunidade formal dentro da área de T.I. 
               <hr></hr>
            </p>
        </li>
    );
    return (
        <article>
            <h1>Desenvolvedor</h1>
            <img
                src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiJQAyDru9uGNFQXtHis9fyeDDwvq3FZqzeVANJuD0yvevQKDRVdNwcbmIQKqNcTRfDSsqMW-aJi18CoJZ54KzmwgSfCKZEC1Scr_TTDwLpjcpNzUBQhUwoWrYt_StSUoGiNQi8zANUEsWUYSBXtCpOaLm70bWXAuJ_CxM9FmqLHq0G6SJHrxJSVTKqCQ/s320/Design%20sem%20nome%20(2).png"
                alt="Jeff Profile"
                class="photo"
            />
            <ul >{listItems}</ul>
        </article>
    );
}
