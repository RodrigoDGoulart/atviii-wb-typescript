import classNames from "classnames";
import { HTMLAttributes } from "react"
import styles from './Aba.module.scss';

interface Props extends HTMLAttributes<HTMLElement> {
  titulo: string,
  selecionado: boolean
}

export const Aba = (props: Props) => {
  return (
    <button className={classNames({
      [styles.container]: true,
      [props.className]: true,
      [styles.selecionado]: props.selecionado
    })}
      onClick={props.onClick}
    >
      {props.titulo}
    </button>
  )
}