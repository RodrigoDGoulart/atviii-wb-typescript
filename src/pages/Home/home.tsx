import { Head, PainelBtn } from "../../shared/components";
import produtos from '../../shared/images/produtos.jpg';
import servicos from '../../shared/images/servicos.jpg';
import relatorios from '../../shared/images/relatorios.jpg';
import clientes from '../../shared/images/clientes.jpg';
import { useNavigate } from "react-router-dom";
import styles from './Home.module.scss';

export default function Home() {

  const history = useNavigate();

  return (
    <>
      <Head selecionado={0}/>
      <div className={styles.container}>
        <PainelBtn imagem={clientes} onClick={() => history('/clientes')}>
          Clientes
        </PainelBtn>
        <PainelBtn imagem={produtos} onClick={() => history('/produtos')}>
          Produtos
        </PainelBtn>
        <PainelBtn imagem={servicos} onClick={() => history('/servicos')}>
          Serviços
        </PainelBtn>
        <PainelBtn imagem={relatorios} onClick={() => history('/menu-relatorio')}>
          Relatórios
        </PainelBtn>
      </div>
    </>
  );
}