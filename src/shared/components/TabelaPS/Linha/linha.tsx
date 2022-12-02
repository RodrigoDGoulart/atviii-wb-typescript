import styles from './Linha.module.scss';

interface Props {
    data: string,
    titulo: string,
    quant: number,
    unid: number
}

export const Linha = (props: Props) => {
    return (
        <tr className={styles.linha}>
            <td>{props.data}</td>
            <td>{props.titulo}</td>
            <td>{props.quant}</td>
            <td>R${props.unid}</td>
            <td>R${(props.unid * props.quant).toFixed(2)}</td>
        </tr>
    )
}