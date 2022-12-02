import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ConfirmBtn, Head, Header2, Pesquisar } from "../../shared/components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import styles from './Produtos.module.scss';
import ListaPS from "../../shared/components/ListaPS/listaPS";

export default function Produtos() {

  const [busca, setBusca] = useState('');

  const history = useNavigate();

  return (
    <>
      <Head selecionado={2} />
      <Header2>Produtos</Header2>
      <div className={styles.container}>
        <div className={styles.div}>
          <ConfirmBtn onClick={() => history('/novo-produto')}>
            <FontAwesomeIcon icon={faPlus} className={styles.addIcon} />
            Novo produto
          </ConfirmBtn>
        </div>
        <div className={styles.div2}>
          <Pesquisar placeholder="Pesquisar produto..." setPesquisa={setBusca} />
        </div>
        <div>
          <ListaPS busca={busca} tipo='produto'/>
        </div>
      </div>
    </>
  )
}