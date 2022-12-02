import { useEffect, useState } from 'react';
import { Linha } from './Linha/linha';
import styles from './TabelaPS.module.scss';

interface Props {
  itens: Object[],
  tipo: number,
  busca: string
}

export const TabelaPS = (props: Props) => {

  const [lista, setLista] = useState(props.itens);

  const testaBusca = (nome: string) => {
    const regex = new RegExp(props.busca, 'i');
    return regex.test(nome);
  }

  useEffect(() => {
    const novaLista = props.itens.filter(item => {
      return testaBusca(item['produto']['nome'])
    });
    setLista(novaLista);
  }, [props.busca, props.itens])

  return (
    <table className={styles.tabela}>
      <thead>
        <tr className={styles.titulo}>
          <th>Data</th>
          <th>{props.tipo == 0 ? 'Produto' : 'Serviço'}</th>
          <th>Quantidade</th>
          <th>Valor unitário</th>
          <th>Valor total</th>
        </tr>
      </thead>
      <tbody>
        {lista.map((item, index) => (
          <Linha  
            key={index}
            data={item['data']}
            titulo={item['produto']['nome']}
            quant={item['quant']}
            unid={item['produto']['valor']}
          />
        ))}
      </tbody>
    </table>
  )
}