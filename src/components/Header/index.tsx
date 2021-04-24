import format from 'date-fns/format'; //data
import ptBR from 'date-fns/locale/pt-BR'; //data

import styles from './styles.module.scss';

export function Header(){
    //data
    const currentDate = format (new Date(), 'EEEEEE, d MMMM',{
        locale: ptBR,
    });

    return(
        <header className={styles.headerContainer}>
            <img src="/logo.svg" alt="Podcastr"/>
            <p>O melhor para você ouvir, sempre</p>
            <span>{currentDate}</span>
        </header>
    );
}