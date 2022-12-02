import classNames from "classnames";
import { HTMLAttributes, HtmlHTMLAttributes } from "react"
import styles from './btn.module.scss';

interface propsPainelBtn extends HtmlHTMLAttributes<HTMLButtonElement> {
    imagem: string,
}

export const PainelBtn = (props: propsPainelBtn) => {

    return (
        <>
            <button style={{ backgroundImage: `url(${props.imagem})` }} className={styles.fundo} onClick={props.onClick}>
                {props.children}
            </button>
        </>
    )
}

interface configBtn extends HTMLAttributes<HTMLButtonElement> { }

export const ConfirmBtn = (props: configBtn) => {
    return (
        <span className={classNames({
            [styles.btn]: true,
            [styles.confirm]: true,
            [props.className]: true
        })} onClick={props.onClick}>
            {props.children}
        </span>
    )
}

export const CancelBtn = (props: configBtn) => {
    return (
        <span className={classNames({
            [styles.btn]: true,
            [styles.cancel]: true,
            [props.className]: true
        })} onClick={props.onClick}>
            {props.children}
        </span>
    )
}

export const BlueBtn = (props: configBtn) => {
    return (
        <span className={classNames({
            [styles.btn]: true,
            [styles.blue]: true,
            [props.className]: true
        })} onClick={props.onClick}>
            {props.children}
        </span>
    )
}

interface selectBtn extends HTMLAttributes<HTMLButtonElement> {
    status: 'enable' | 'disable'
}

export const SelectBtn = (props: selectBtn) => {
    return (
        <div className={styles.SCompContainer}>
            <span className={`${styles.selectContainer} ${styles[props.status]}`}>
                {props.children}
            </span>
        </div>
    )
}