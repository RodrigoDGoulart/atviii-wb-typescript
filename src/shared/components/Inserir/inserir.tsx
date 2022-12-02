import { faCamera, faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Dispatch, HTMLAttributes, SetStateAction, useEffect, useState } from 'react';

import classNames from 'classnames';
import styles from './inserir.module.scss';

interface configInserir extends HTMLAttributes<HTMLInputElement> {
    tipo?: undefined | 'text' | 'number' | 'date';
    receber?: React.Dispatch<React.SetStateAction<any>>;
    value?: any;
    editable?: boolean;
    min?:number;
 }

export const Inserir = (props: configInserir) => {

    let editavel = props.editable === undefined ? true : props.editable;
    let minimo = props.min === undefined ? 0.01 : props.min;
    let tipo = props.tipo === undefined ? 'text' : props.tipo
 
    return (
        <>
            {editavel ? 
                tipo === 'number' ?
                    <input className={`${styles.input} ${styles.lg}`} placeholder={props.placeholder} onChange={(e) => props.receber(e.target.value)} type={tipo} min={minimo} value={props.value}/>
                    :
                    <input className={`${styles.input} ${styles.lg}`} placeholder={props.placeholder} onChange={(e) => props.receber(e.target.value)} type={tipo} defaultValue={props.value}/>
                :
                <p className={styles.ineditavel}>{props.value}</p>
            }
        </>
    )
}

interface configInserirRotulo extends configInserir {
    rotulo: string
}

export const InserirComRotulo = (props: configInserirRotulo) => {
    return (
        <label className={classNames({
            [styles.label]: true,
            [props.className]: true
        })}>
            <h5 className={styles.rotulo}>{props.rotulo}</h5>
            <Inserir min={props.min} editable={props.editable} placeholder={props.placeholder} receber={props.receber} tipo={props.tipo} value={props.value} />
        </label>
    )
}

interface configPesquisa extends configInserir {
    setPesquisa: Dispatch<SetStateAction<string>>
}

export const Pesquisar = (props: configPesquisa) => {
    return (
        <span className={`${styles.input} ${styles.align}`}>
            <FontAwesomeIcon icon={faSearch} />
            <input placeholder={props.placeholder} className={styles.pesquisa} onChange={e => props.setPesquisa(e.target.value)} />
        </span>
    )
}

import img from '../../images/sem-foto.png';
interface configInserirImg extends HTMLAttributes<HTMLInputElement> {
    receberArquivo?: Function,
    tamanho?: 'md' | 'lg',
    editable?: boolean,
    value?: string
}

export const InserirImagem = (props: configInserirImg) => {

    let foto = props.value === undefined ? img : props.value;
    const [imagem, setImagem] = useState(foto);

    let editavel: boolean;
    props.editable === undefined ? editavel = true : editavel = false

    const trocarImg = (img) => {
        if(img){
            props.receberArquivo(img);
            setImagem(URL.createObjectURL(img));
        }
    }
    
    return (
        <>
        <div className={`${styles.img} ${props.className}`} style={{
            backgroundImage: `url(${imagem})`
        }}>
            <label className={classNames({
                [styles.addImgBtn]: true,
                [styles.invisible]: !editavel
            })}>
                <FontAwesomeIcon icon={faCamera} />
                <input type='file' accept="image/png, image/jpeg" name="upload" className={styles.addImgInput} onChange={e => trocarImg(e.target.files[0])}></input>
            </label>
        </div>
        </>
    )
}