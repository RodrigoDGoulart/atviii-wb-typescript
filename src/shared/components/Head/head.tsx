import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Head.module.scss';
import { HPage } from './HPage/hPage';

interface Props {
    selecionado: number,
}

export const Head = ({selecionado}: Props) => {

    const pages = [
        {nome: 'Home', url: '/'},
        {nome: 'Clientes', url: '/clientes'},
        {nome: 'Produtos', url: '/produtos'},
        {nome: 'Serviços', url: '/servicos'},
        {nome: 'Relatórios', url: '/menu-relatorio'},
    ]

    const history = useNavigate();

    return(
        <div className={styles.container}>
            <h1 className={styles.logo}>World Beauty</h1>
            <div className={styles.menu}>
                {pages.map((page, index) => (
                    <HPage
                        key={index}
                        onClick={() => history(page.url)}
                        selected={index === selecionado}
                    >   
                        {page.nome}
                    </HPage>
                ))}
            </div>
        </div>
    )
}