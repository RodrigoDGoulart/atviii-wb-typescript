import { HTMLAttributes } from "react"

import styles from './header.module.scss';
import className from 'classnames';

interface headerConfig extends HTMLAttributes<HTMLElement> {}

export const Header1 = (props: headerConfig) => {
    return(
        // `${styles.header} ${styles.h1}`
        <h1 className={className({
            [styles.header]: true,
            [styles.h1]: true,
            [props.className]: true
        })}>
            {props.children}
        </h1>
    )
}

export const Header2 = (props: headerConfig) => {
    return(
        <h1 className={className({
            [styles.header]: true,
            [styles.h2]: true,
            [props.className]: true
        })}>
            {props.children}
        </h1>
    )
}

export const Header3 = (props: headerConfig) => {
    return(
        <h1 className={className({
            [styles.header]: true,
            [styles.h3]: true,
            [props.className]: true
        })}>
            {props.children}
        </h1>
    )
}