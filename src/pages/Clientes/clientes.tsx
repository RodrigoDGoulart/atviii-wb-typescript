import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { ConfirmBtn, Head, Header2, Pesquisar } from "../../shared/components";
import ListaClientes from "../../shared/components/ListaClientes/listaClientes";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import styles from './Clientes.module.scss';

export default function Clientes() {

  const [busca, setBusca] = useState('');

  const history = useNavigate();

  return (
    <>
      <Head selecionado={1} />
      <Header2>Clientes</Header2>
      <div className={styles.container}>
        <div className={styles.div}>
          <ConfirmBtn onClick={() => history('/novo-cliente')}>
            <FontAwesomeIcon icon={faPlus} className={styles.addIcon} />
            Novo cliente
          </ConfirmBtn>
        </div>
        <div className={styles.div2}>
          <Pesquisar placeholder="Pesquisar cliente..." setPesquisa={setBusca} />
        </div>
        <div>
          <ListaClientes busca={busca}/>
        </div>
      </div>
    </>
  )
}