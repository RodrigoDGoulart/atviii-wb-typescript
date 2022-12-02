import classNames from "classnames";
import { HTMLAttributes } from "react"
import { Opcao } from "../Opcao/opcao";
import styles from './painel.module.scss';

interface configPainelItem extends HTMLAttributes<HTMLButtonElement> {
    titulo: string,
    subtitulo: string,
    imagem: string,
    clickable?: boolean
}

export const PainelItem = (props: configPainelItem) => {

    let clickable = props.clickable === undefined ? true : props.clickable;

    return (
        <button className={classNames({
            [styles.fundo]: true,
            [styles.container]: true,
            [styles.clickable]: clickable
        })} onClick={props.onClick}>
            <div style={{
                backgroundImage: `url(${props.imagem})`
            }} className={styles.foto} />
            <div className={styles.conteudo}>
                <p>{props.titulo}</p>
                <p>{props.subtitulo}</p>
            </div>
        </button>
    )
}

interface configPainelRaking extends configPainelItem {
    ranking: number
}

export const PainelRankingItem = (props: configPainelRaking) => {
    let cor: string;

    switch (props.ranking) {
        case 1:
            cor = '#FAE100';
            break;
        case 2:
            cor = '#6A6A6A';
            break;
        case 3:
            cor = '#FA9600';
            break;
        default:
            cor = '#F2F2F2';
    }

    return (
        <div className={styles.fundoRanking}>
            <div className={`${styles.fundo} ${styles.ranking}`} style={{
                backgroundColor: cor,
                color: props.ranking < 4 ? '#FFFFFF' : '#54265C'
            }}>
                {props.ranking}°
            </div>
            <PainelItem clickable={false} imagem={props.imagem} titulo={props.titulo} subtitulo={props.subtitulo} />
        </div>
    )
}

interface configPainelPS extends configPainelItem {
    onEdit?: Function;
    onDelete?: Function;
    aoSelecionar?: Function;
    selected?: boolean;
    select?: boolean;
}

export const PainelPS = (props: configPainelPS) => {

    let select = props.select === undefined ? false : props.select

    return (
        <div className={classNames({
            [styles.fundo]: true,
            [styles.container]: true,
        })}>
            <div style={{
                backgroundImage: `url(${props.imagem})`
            }} className={styles.foto} />
            <div className={styles.conteudo}>
                <p>{props.titulo}</p>
                <p>{props.subtitulo}</p>
            </div>
            <div className={styles.buttons}>
                {select ?
                <Opcao selecionado={props.selected} click={() => props.aoSelecionar()} />
                :
                <>
                    <span className={`material-icons ${styles.edit}`} onClick={e => props.onEdit()}>
                        edit
                    </span>
                    <span className={`material-icons ${styles.delete}`} onClick={e => props.onDelete()}>
                        delete
                    </span>
                </>
                }
            </div>
        </div>
    )
}