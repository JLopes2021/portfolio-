import { pessoa } from './InfoProfile';
import styles from './Profile.module.css'
import Digita from './Digita'

export default function List() {
    const listItems = pessoa.map(person =>
        <ul>
            <p>
                <b>  {' ' + person.profession + ', '} </b>
                trabalho com  
               <b className={styles.frameworks}>{' ' + person.languages}</b>, além dos <span>Frameworks</span><b className={styles.frameworks}>{' ' + person.frameworks + '. '}</b> Atualmente busco a minha 
               primeira oportunidade formal dentro da área de T.I. 
            </p>
        </ul>
    );
    return (
        <div className={styles.profile}>
            <img
                src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiJQAyDru9uGNFQXtHis9fyeDDwvq3FZqzeVANJuD0yvevQKDRVdNwcbmIQKqNcTRfDSsqMW-aJi18CoJZ54KzmwgSfCKZEC1Scr_TTDwLpjcpNzUBQhUwoWrYt_StSUoGiNQi8zANUEsWUYSBXtCpOaLm70bWXAuJ_CxM9FmqLHq0G6SJHrxJSVTKqCQ/s320/Design%20sem%20nome%20(2).png"
                alt="Jeff Profile"
            />
            <h2><Digita text = "Testando se funciona" /></h2>
            <p><small>{listItems}</small></p>
        </div>
    );
}
