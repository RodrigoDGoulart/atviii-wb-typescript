import styles from './ListaPS.module.scss';

import foto from '../../images/produtos.jpg';
import { PainelItem, PainelPS } from '../Painel/painel';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Confirmar } from '../Confirmar/confirmar';

interface configLista {
  busca: string;
  tipo: 'produto' | 'servico';
  select?: boolean;
  PsSelecionado?: Function;
}

export default function ListaClientes(props: configLista) {

  
  let itens = []
  
  let select = props.select === undefined ? false : props.select;
  
  if (props.tipo === 'produto') {
    // puxar lista produto
    itens = [{
      foto: foto,
      nome: 'pente',
      valor: 45.99,
      cod: '12345'
    }, {
      foto: foto,
      nome: 'creme',
      valor: 99.49,
      cod: '666'
    }]
  } else {
    // puxar lista serviços
    itens = [{
      foto: foto,
      nome: 'corte',
      valor: 45.99,
      cod: '12345'
    }, {
      foto: foto,
      nome: 'hidratação',
      valor: 99.49,
      cod: '666'
    }]
  }
  
  const [lista, setLista] = useState(itens);
  const [selecionado, setSelecionado] = useState(Object);

  const [confirm, setConfirm] = useState(false);
  
  const history = useNavigate();

  const testaBusca = (nome: string) => {
    const regex = new RegExp(props.busca, 'i');
    return regex.test(nome);
  }

  const deletar = (cod: number) => {
    console.log(`deletando ${cod}`);
    setConfirm(false)
  }

  const editar = (cod: number) => {
    history(`/editar-produto/${cod}`)
  }

  const chamarModal = (item: Object) => {
    setSelecionado(item)
    setConfirm(true);
  }

  const selecionar = (item: Object) => {
    setSelecionado(item);
    props.PsSelecionado(item);
  }

  useEffect(() => {
    const novaLista = itens.filter(item => {
      return testaBusca(item.nome)
    });
    setLista(novaLista);
    setSelecionado({cod: NaN})
  }, [props.busca, props.tipo])

  return (
    <div className={styles.container}>
      {lista.map(item => (
        <PainelPS select={select} selected={selecionado['cod'] === item['cod']} aoSelecionar={() => selecionar(item)} key={item.cod} titulo={item.nome} subtitulo={`Cod.: ${item.cod}  -  R$${item.valor}`} imagem={item.foto} onEdit={() => editar(item.cod)} onDelete={() => chamarModal(item)} />
      ))}
      <Confirmar
        ativo={confirm}
        onConfirm={() => deletar(selecionado['cod'])}
        closeReturn={setConfirm}
      >
        <p className={styles.confirmMsg}>Excluir {selecionado['nome']}?</p>
      </Confirmar>
    </div>
  )
}