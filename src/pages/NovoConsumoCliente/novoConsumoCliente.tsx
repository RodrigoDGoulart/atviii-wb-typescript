import { CancelBtn, ConfirmBtn, Head, Header2, InserirComRotulo, InserirImagem, Pesquisar } from "../../shared/components";
import styles from './NovoConsumoCliente.module.scss';
import foto from '../../shared/images/clientes.jpg';
import { useNavigate, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { Abas } from "../../shared/components/Abas/abas";
import { useState } from "react";
import ListaPS from "../../shared/components/ListaPS/listaPS";

export default function NovoConsumoCliente() {

  const { id } = useParams();

  const history = useNavigate();

  const [busca, setBusca] = useState('');
  const [aba, setAba] = useState(0);

  const [itemSelecionado, setItemSelecionado] = useState({});
  const [data, setData] = useState('');
  const [quant, setQuant] = useState(NaN);

  const [erroItem, setErroItem] = useState(false);
  const [erroData, setErroData] = useState(false);
  const [erroQuant, setErroQuant] = useState(false);

  const cliente = {
    foto,
    nome: 'juriscleide',
    consumoProduto: [],
    consumoServico: []
  }

  let searchPlaceholder = aba == 0 ? 'Pesquisar produto consumido...' : 'Pesquisar serviço consumido...'

  const verificar = () => {
    let retorno = true;
    if (itemSelecionado['cod'] === undefined) {setErroItem(true); retorno = false} else {setErroItem(false)};
    if (!data) {setErroData(true); retorno = false} else {setErroData(false)};
    if (Number.isNaN(quant)) {setErroQuant(true); retorno = false} else {setErroQuant(false)};
    return retorno;
  }

  const cadastrar = () => {
    if (verificar()) {
      let consumo = {
        tipo: aba == 0 ? 'produto' : 'servico',
        item: itemSelecionado,
        quant,
        data,
        cliente: id
      }
      console.log(consumo);
    }
  }

  return (
    <>
      <Head selecionado={1} />
      <div className={styles.title}>
        <InserirImagem editable={false} value={cliente.foto} className={styles.img} />
        <Header2 className={styles.header}>Novo consumo para {cliente.nome}</Header2>
      </div>
      <div className={styles.container}>
          <div className={styles.div}>
            <div className={styles.campos}>
              <CancelBtn className={styles.campos__children} onClick={() => history(`/consumo-cliente/${id}`)} >
                Cancelar cadastro
              </CancelBtn>
              <ConfirmBtn className={styles.campos__children} onClick={() => cadastrar()}>
                Cadastrar consumo
              </ConfirmBtn>
            </div>
            <div className={styles.campos}>
              <div className={styles.campos__children}>
                <InserirComRotulo receber={setData} rotulo="Data de consumo" tipo="date" />
                {erroData && <p className={styles.erro}>Por favor, insira a data de consumo</p>}
              </div>
              <div className={styles.campos__children}>
                <InserirComRotulo receber={setQuant} rotulo="Quantidade" tipo="number" />
                {erroQuant && <p className={styles.erro}>Por favor, insira a quantidade</p>}
              </div>
            </div>
          </div>
          <div className={styles.div2}>
            <Pesquisar placeholder={searchPlaceholder} setPesquisa={setBusca} />
            {erroItem && <p className={styles.erro}>Por favor, selecione um {aba === 0 ? 'produto' : 'serviço'}</p>}
            <Abas className={styles.aba} abas={['Produtos', 'Serviços']} clique={(n: number) => {setAba(n); setItemSelecionado({})}}/>
          </div>
          <div>
            <ListaPS PsSelecionado={(item: Object) => setItemSelecionado(item)} select={true} busca={busca} tipo={aba == 0 ? 'produto' : 'servico'}/>
          </div>
        </div>
    </>
  )
}