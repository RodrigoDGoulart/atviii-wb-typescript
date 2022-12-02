import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { CancelBtn, ConfirmBtn, Head, Header2, InserirComRotulo, InserirImagem } from "../../shared/components";
import foto from '../../shared/images/produtos.jpg';
import styles from './EditarServico.module.scss';

export default function EditarServico() {

  const { id } = useParams();

  let servico = {
    foto: foto,
    nome: 'hidratação',
    valor: 99.49,
    cod: '666'
  }

  const history = useNavigate();

  const [img, setImg] = useState(servico.foto);
  const [nome, setNome] = useState(servico.nome);
  const [valor, setValor] = useState<number | undefined>(servico.valor);

  const [erroNome, setErroNome] = useState(false);
  const [erroValor, setErroValor] = useState(false);

  const voltar = () => {
    history('/servicos');
  }

  const verificar = () => {
    let retorno = true;
    if (!nome) { setErroNome(true); retorno = false; } else { setErroNome(false) }
    if (!valor) { setErroValor(true); retorno = false; } else { setErroValor(false) }
    return retorno;
  }

  const cadastrar = () => {
    if (verificar()) {
      console.log({
        img,
        nome,
        valor,
        cod: id
      });
    }
  }

  return (
    <>
      <Head selecionado={2} />
      <Header2>Editando {servico.nome}</Header2>
      <div className={styles.container}>
        <div className={styles.fstSection}>
          <InserirImagem receberArquivo={setImg} className={styles.img} value={img}/>
          <div className={styles.fstSectionCampos}>
            <InserirComRotulo rotulo="Nome:" receber={setNome} value={nome}/>
            {erroNome && <p className={styles.erro}>Por favor insira um nome.</p>}
            <div className={styles.campos}>
              <div className={styles.camposChildren}>
                <InserirComRotulo tipo="number" className={styles.camposChildren} rotulo="Valor (R$):" receber={setValor} placeholder='ex.: 24,50' value={valor}/>
                {erroValor && <p className={styles.erro}>Por favor insira um valor.</p>}
              </div>
            </div>
          </div>
        </div>
        <div className={styles.btns}>
          <CancelBtn className={styles.btn} onClick={() => voltar()}>Cancelar edição</CancelBtn>
          <ConfirmBtn className={styles.btn} onClick={() => cadastrar()}>Editar {servico.nome}</ConfirmBtn>
        </div>
      </div>
    </>
  )
}