import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ConfirmBtn, Head, Header2, Pesquisar } from "../../shared/components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import styles from './Servicos.module.scss';
import ListaPS from "../../shared/components/ListaPS/listaPS";

export default function Servicos() {

  const [busca, setBusca] = useState('');

  const history = useNavigate();

  return (
    <>
      <Head selecionado={3} />
      <Header2>Serviços</Header2>
      <div className={styles.container}>
        <div className={styles.div}>
          <ConfirmBtn onClick={() => history('/novo-servico')}>
            <FontAwesomeIcon icon={faPlus} className={styles.addIcon} />
            Novo serviço
          </ConfirmBtn>
        </div>
        <div className={styles.div2}>
          <Pesquisar placeholder="Pesquisar serviço..." setPesquisa={setBusca} />
        </div>
        <div>
          <ListaPS busca={busca} tipo='servico'/>
        </div>
      </div>
    </>
  )
}