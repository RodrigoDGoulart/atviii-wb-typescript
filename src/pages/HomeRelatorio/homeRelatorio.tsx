import { Head, PainelBtn } from "../../shared/components";
import r1 from '../../shared/images/relatorios/1.png';
import r2 from '../../shared/images/relatorios/2.png';
import r3 from '../../shared/images/relatorios/3.png';
import r4 from '../../shared/images/relatorios/4.png';
import r5 from '../../shared/images/relatorios/5.png';
import r6 from '../../shared/images/relatorios/6.png';
import { useNavigate } from "react-router-dom";
import styles from './HomeRelatorio.module.scss';

export default function HomeRelaorio() {

  const history = useNavigate();

  return (
    <>
      <Head selecionado={0}/>
      <div className={styles.container}>
        <PainelBtn imagem={r1} onClick={() => history('/relatorio/ranking/1')}>
          Clientes que mais consumiram produtos ou serviços
        </PainelBtn>
        <PainelBtn imagem={r2} onClick={() => history('/relatorio/genero')}>
          Listagem de clientes por gênero
        </PainelBtn>
        <PainelBtn imagem={r3} onClick={() => history('/relatorio/ranking/3')}>
          Serviços e produtos mais consumidos
        </PainelBtn>
        <PainelBtn imagem={r4} onClick={() => history('/relatorio/ranking/4')}>
          Serviços e produtos mais consumidos por gênero
        </PainelBtn>
        <PainelBtn imagem={r5} onClick={() => history('/relatorio/ranking/5')}>
          Clientes que menos consumiram produtos ou serviços
        </PainelBtn>
        <PainelBtn imagem={r6} onClick={() => history('/relatorio/ranking/6')}>
          Clientes que mais consumiram em VALOR
        </PainelBtn>
      </div>
    </>
  );
}