import classNames from "classnames";
import { HTMLAttributes, useState } from "react"
import { Aba } from "./Aba/aba"
import styles from './Abas.module.scss';

interface Props extends HTMLAttributes<HTMLElement> {
  abas: string[],
  clique: Function
}

export const Abas = (props: Props) => {

  const [selecionado, setSelecionado] = useState(0)

  const clique = (index: number) => {
    setSelecionado(index);
    props.clique(index);
  }

  return (
    <div className={classNames({
      [styles.container]: true,
      [props.className]: true
    })}>
      {props.abas.map((aba, index) => (
        <Aba key={index} className={styles.children}  selecionado={index === selecionado} titulo={aba} onClick={() => clique(index)}/>
      ))}
    </div>
  )
}