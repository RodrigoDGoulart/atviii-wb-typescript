import { HTMLAttributes } from "react";
import classNames from 'classnames';
import styles from './HPage.module.scss';
import { Link } from "react-router-dom";

interface Props extends HTMLAttributes<HTMLButtonElement> {
    selected: boolean,
}

export const HPage = (props: Props) => {
    return (
        <button className={classNames({
            [styles.font]: true,
            [styles.selected]: props.selected
        })} onClick={props.onClick}>
            {props.children}
        </button>
    )
}