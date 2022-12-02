import styles from './ListaCliente.module.scss';
import fotoCliente from '../../images/clientes.jpg';
import { PainelItem } from '../Painel/painel';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Header3 } from '../Header/header';

interface configLista {
  busca: string;
  separarPorGenero?: boolean;
}

export default function ListaClientes(props: configLista) {

  let separarPorGenero = props.separarPorGenero === undefined ? false : props.separarPorGenero;

  let clientes = [
    {
      nome: 'rose',
      cadastro: '12/12/2012',
      foto: fotoCliente,
      genero: 'Feminino'
    },
    {
      nome: 'Carlos',
      cadastro: '13/09/2013',
      foto: fotoCliente,
      genero: 'Masculino'
    }, {
      nome: 'Fernandete',
      cadastro: '13/12/2012',
      foto: fotoCliente,
      genero: 'Outro'
    }
  ]

  const [lista, setLista] = useState(clientes);
  const [listaFem, setListaFem] = useState([]);
  const [listaMasc, setListaMasc] = useState([]);
  const [listaOutros, setListaOutros] = useState([]);

  const history = useNavigate();

  const testaBusca = (nome: string) => {
    const regex = new RegExp(props.busca, 'i');
    return regex.test(nome);
  }

  const separar = (lista: Object[]) => {
    setListaMasc(lista.filter(cliente => cliente['genero'] == 'Masculino'));
    setListaFem(lista.filter(cliente => cliente['genero'] == 'Feminino'));
    setListaOutros(lista.filter(cliente => cliente['genero'] == 'Outro'));
  }

  useEffect(() => {
    const novaLista = clientes.filter(cliente => {
      return testaBusca(cliente.nome)
    });
    if (separarPorGenero) {
      separar(novaLista)
    } else {
      setLista(novaLista);
    }

  }, [props.busca])
  
  return (
    <div className={styles.container}>
      {separarPorGenero ?
      <>
        <Header3 className={styles.left}>Masculino</Header3>
        {listaMasc.map((cliente, index) => (
          <PainelItem key={index} titulo={cliente.nome} subtitulo={`Cadastrado(a) em ${cliente.cadastro}`} imagem={cliente.foto} onClick={() => history(`/cliente/${index}`)} />
        ))}
        <Header3 className={styles.left}>Feminino</Header3>
        {listaFem.map((cliente, index) => (
          <PainelItem key={index} titulo={cliente.nome} subtitulo={`Cadastrado(a) em ${cliente.cadastro}`} imagem={cliente.foto} onClick={() => history(`/cliente/${index}`)} />
        ))}
        <Header3 className={styles.left}>Outros</Header3>
        {listaOutros.map((cliente, index) => (
          <PainelItem key={index} titulo={cliente.nome} subtitulo={`Cadastrado(a) em ${cliente.cadastro}`} imagem={cliente.foto} onClick={() => history(`/cliente/${index}`)} />
        ))}
      </>
      :
      lista.map((cliente, index) => (
        <PainelItem key={index} titulo={cliente.nome} subtitulo={`Cadastrado(a) em ${cliente.cadastro}`} imagem={cliente.foto} onClick={() => history(`/cliente/${index}`)} />
      ))}
    </div>
  )
}