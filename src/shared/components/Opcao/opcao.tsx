import classNames from 'classnames'
import { HTMLAttributes } from 'react';

import styles from './Opcao.module.scss';

interface Props extends HTMLAttributes<HTMLButtonElement>{
    selecionado: Boolean,
    click: Function
}

export const Opcao = (props: Props) => {
    return(
        <div className={classNames({
            [styles.container]: true,
            [props.className]: true
        })}>
            <span className={styles.opcao} onClick={() => props.click(props.children)}>
                <span className={classNames({
                    [styles.selecionado]: props.selecionado,
                    [styles.desSelecionado]: !props.selecionado
                })}></span>
            </span>
            <p>{props.children}</p>
        </div>
    )
}