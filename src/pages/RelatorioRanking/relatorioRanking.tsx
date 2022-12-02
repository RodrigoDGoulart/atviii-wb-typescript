import { useState } from "react";
import { useParams } from "react-router-dom";

import { Head, Header2, Pesquisar } from "../../shared/components";
import styles from './RelatorioRanking.module.scss';
import ListaRanking from "../../shared/components/ListaRanking/listaRanking";
import { Abas } from "../../shared/components/Abas/abas";

export default function RelatorioRanking() {

  const [busca, setBusca] = useState('');
  const [aba, setAba] = useState(0);

  const { id } = useParams();

  const titulos = [
    '10 Clientes que mais consumiram produtos/serviços',
    '',
    'Serviços e produtos mais consumidos',
    'Serviços e produtos mais consumidos por gênero',
    '10 clientes que menos consumiram produtos/serviços',
    '5 clientes que mais consumiram em valor'
  ]

  let searchPlaceholder = aba == 0 ? 'Pesquisar produto...' : 'Pesquisar serviço...'

  return (
    <>
      <Head selecionado={1} />
      <Header2>{titulos[Number(id) - 1]}</Header2>
      <div className={styles.container}>
        <div className={styles.div2}>
          <Pesquisar placeholder={searchPlaceholder} setPesquisa={setBusca} />
          {(Number(id) !== 6) &&<Abas className={styles.aba} abas={['Produtos', 'Serviços']} clique={(n: number) => setAba(n)}/>}
        </div>
        <div>
          <ListaRanking relatorio={Number(id)} tipo={aba == 0 ? 'produto' : 'servico'} busca={busca} />
        </div>
      </div>
    </>
  )
}