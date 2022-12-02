import { useState } from "react";
import { Head, Header2, Pesquisar } from "../../shared/components";
import ListaClientes from "../../shared/components/ListaClientes/listaClientes";
import styles from './RelatorioGenero.module.scss';

export default function RelatorioGenero() {

  const [busca, setBusca] = useState('');

  return (
    <>
      <Head selecionado={1} />
      <Header2>Clientes separados por gênero</Header2>
      <div className={styles.container}>
        <div className={styles.div2}>
          <Pesquisar placeholder="Pesquisar cliente..." setPesquisa={setBusca} />
        </div>
        <div>
          <ListaClientes separarPorGenero={true} busca={busca}/>
        </div>
      </div>
    </>
  )
}