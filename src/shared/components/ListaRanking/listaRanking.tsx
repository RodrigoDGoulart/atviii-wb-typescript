import styles from './ListaRanking.module.scss';
import fotoProduto from '../../images/produtos.jpg';
import fotoServico from '../../images/servicos.jpg';
import fotoCliente from '../../images/clientes.jpg';
import { PainelRankingItem } from '../Painel/painel';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Header3 } from '../Header/header';

interface configLista {
  busca: string;
  tipo: 'produto' | 'servico';
  relatorio: number;
}

export default function ListaRanking(props: configLista) {

  let porGenero = props.relatorio === 4

  let clientesProdutos = [
    {
      nome: 'rose',
      foto: fotoCliente,
      desc: '25 produtos consumidos',
      rank: 1
    },
    {
      nome: 'mariana',
      foto: fotoCliente,
      desc: '15 produtos consumidos',
      rank: 2
    }
  ]

  let clientesServicos = [
    {
      nome: 'rose',
      foto: fotoCliente,
      desc: '44 serviços consumidos',
      rank: 1
    },
    {
      nome: 'mariana',
      foto: fotoCliente,
      desc: '19 serviços consumidos',
      rank: 2
    }
  ]

  let servicos = [
    {
      nome: 'corte',
      foto: fotoServico,
      desc: 'Consumido 29 vezes',
      genero: 'Masculino',
      rank: 1
    },
    {
      nome: 'hidratação',
      foto: fotoServico,
      desc: 'Consumido 14 vezes',
      genero: 'Masculino',
      rank: 2
    },
    {
      nome: 'corte',
      foto: fotoServico,
      desc: 'Consumido 19 vezes',
      genero: 'Feminino',
      rank: 1
    },
    {
      nome: 'hidratação',
      foto: fotoServico,
      desc: 'Consumido 4 vezes',
      genero: 'Feminino',
      rank: 2
    },
    {
      nome: 'corte',
      foto: fotoServico,
      desc: 'Consumido 11 vezes',
      genero: 'Outro',
      rank: 1
    },
    {
      nome: 'hidratação',
      foto: fotoServico,
      desc: 'Consumido 33 vezes',
      genero: 'Outro',
      rank: 2
    }
  ]

  let produtos = [
    {
      nome: 'Creme',
      foto: fotoProduto,
      desc: 'Comprado 24 vezes',
      genero: 'Masculino',
      rank: 1
    },
    {
      nome: 'Barbeador',
      foto: fotoProduto,
      desc: 'Comprado 12 vezes',
      genero: 'Masculino',
      rank: 2
    },
    {
      nome: 'Creme',
      foto: fotoProduto,
      desc: 'Comprado 12 vezes',
      genero: 'Feminino',
      rank: 1
    },
    {
      nome: 'Barbeador',
      foto: fotoProduto,
      desc: 'Comprado 3 vezes',
      genero: 'Feminino',
      rank: 2
    },
    {
      nome: 'Creme',
      foto: fotoProduto,
      desc: 'Comprado 18 vezes',
      genero: 'Outro',
      rank: 1
    },
    {
      nome: 'Barbeador',
      foto: fotoProduto,
      desc: 'Comprado 9 vezes',
      genero: 'Outro',
      rank: 2
    },
  ]

  const [lista, setLista] = useState(clientesProdutos);
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
    if (porGenero) {
      const listaItem = props.tipo === 'produto' ? produtos : servicos;
      const novaListaItem = listaItem.filter(item => {
        return (testaBusca(item.nome));
      });
      separar(novaListaItem);
    } else {
      const list = props.tipo === 'produto' ? clientesProdutos : clientesServicos
      const novaLista = list.filter(cliente => {
        return testaBusca(cliente.nome)
      });
      setLista(novaLista);
    }
  }, [props.busca, props.tipo])
  
  return (
    <div className={styles.container}>
      {porGenero
      ?
      <>
        <Header3 className={styles.left}>Masculino</Header3>
        {listaMasc.map((item, index) => (
          <PainelRankingItem ranking={item['rank']} key={index} titulo={item.nome} subtitulo={item['desc']} imagem={item.foto} />
        ))}
        <Header3 className={styles.left}>Feminino</Header3>
        {listaFem.map((item, index) => (
          <PainelRankingItem ranking={item['rank']} key={index} titulo={item.nome} subtitulo={item['desc']} imagem={item.foto} />
        ))}
        <Header3 className={styles.left}>Outros</Header3>
        {listaOutros.map((item, index) => (
          <PainelRankingItem ranking={item['rank']} key={index} titulo={item.nome} subtitulo={item['desc']} imagem={item.foto} />
        ))}
      </>
      :
      lista.map((cliente, index) => (
        <PainelRankingItem ranking={cliente.rank} key={index} titulo={cliente.nome} subtitulo={cliente.desc} imagem={cliente.foto} onClick={() => history(`/cliente/${index}`)} />
      ))}
    </div>
  )
}