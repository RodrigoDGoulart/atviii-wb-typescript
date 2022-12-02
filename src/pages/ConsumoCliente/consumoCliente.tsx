import { useNavigate, useParams } from "react-router-dom"
import { BlueBtn, ConfirmBtn, Head, Header2, InserirImagem, Pesquisar } from "../../shared/components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import styles from './ConsumoCliente.module.scss';
import { useState } from "react";
import foto from '../../shared/images/clientes.jpg';
import { Abas } from "../../shared/components/Abas/abas";
import { TabelaPS } from "../../shared/components/TabelaPS/tabelaPS";

export default function ConsumoCliente() {

  const [busca, setBusca] = useState('');
  const [aba, setAba] = useState(0);

  const history = useNavigate();

  const { id } = useParams();

  const cliente = {
    foto,
    nome: 'juriscleide',
    consumoProduto: [{
      quant: 5,
      data: '21/01/2022',
      produto: {
        nome: 'cuscuz',
        valor: 49.99,
        cod: '123312'
      }
    }, {
      quant: 5,
      data: '21/01/2022',
      produto: {
        nome: 'beterraba',
        valor: 49.99,
        cod: '123312'
      }
    }],
    consumoServico: [{
      quant: 2,
      data: '21/12/2020',
      produto: {
        nome: 'massagem',
        valor: 299.99,
        cod: '333'
      }
    }, {
      quant: 1,
      data: '21/12/2021',
      produto: {
        nome: 'hidratação',
        valor: 49.99,
        cod: '4444'
      }
    }]
  }

  let searchPlaceholder = aba == 0 ? 'Pesquisar produto consumido...' : 'Pesquisar serviço consumido...'

  return (
    <>
      <>
        <Head selecionado={1} />
        <div className={styles.title}>
          <InserirImagem editable={false} value={cliente.foto} className={styles.img} />
          <Header2 className={styles.header}>Consumo de {cliente.nome}</Header2>
        </div>
        <div className={styles.container}>
          <div className={styles.div}>
            <BlueBtn className={styles.div__minor} onClick={() => history(`/cliente/${id}`)}>
              Voltar
            </BlueBtn>
            <ConfirmBtn className={styles.div__dominant} onClick={() => history(`/add-consumo/${id}`)}>
              <FontAwesomeIcon icon={faPlus} className={styles.addIcon} />
              Novo consumo
            </ConfirmBtn>
          </div>
          <div className={styles.div2}>
            <Pesquisar placeholder={searchPlaceholder} setPesquisa={setBusca} />
            <Abas className={styles.aba} abas={['Produtos', 'Serviços']} clique={(n: number) => setAba(n)}/>
          </div>
          <div>
            <TabelaPS busca={busca} tipo={aba} itens={aba == 0 ? cliente.consumoProduto : cliente.consumoServico} />
          </div>
        </div>
      </>
    </>
  )
}