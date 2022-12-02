import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CancelBtn, ConfirmBtn, Head, Header2, InserirComRotulo, InserirImagem } from "../../shared/components";

import styles from './NovoServico.module.scss';

export default function NovoProduto() {

  const history = useNavigate();

  const [img, setImg] = useState('');
  const [nome, setNome] = useState('');
  const [cod, setCod] = useState('');
  const [valor, setValor] = useState<number | undefined>(undefined);

  const [erroNome, setErroNome] = useState(false);
  const [erroCod, setErroCod] = useState(false);
  const [erroValor, setErroValor] = useState(false);

  const voltar = () => {
    history('/servicos')
  }

  const verificar = () => {
    let retorno = true;
    if (!nome) { setErroNome(true); retorno = false; } else { setErroNome(false) }
    if (!cod) { setErroCod(true); retorno = false; } else { setErroCod(false) }
    if (!valor) { setErroValor(true); retorno = false; } else { setErroValor(false) }
    return retorno;
  }

  const cadastrar = () => {
    if (verificar()) {
      console.log({
        img,
        nome,
        valor,
        cod
      });
    }
  }

  return (
    <>
      <Head selecionado={3} />
      <Header2>Novo serviço</Header2>
      <div className={styles.container}>
        <div className={styles.fstSection}>
          <InserirImagem receberArquivo={setImg} className={styles.img} />
          <div className={styles.fstSectionCampos}>
            <InserirComRotulo rotulo="Nome:" receber={setNome} />
            {erroNome && <p className={styles.erro}>Por favor insira um nome.</p>}
            <div className={styles.campos}>
              <div className={styles.camposChildren}>
                <InserirComRotulo rotulo="Código:" receber={setCod} placeholder='ex.: 12345' />
                {erroCod && <p className={styles.erro}>Por favor insira um código.</p>}
              </div>
              <div className={styles.camposChildren}>
                <InserirComRotulo tipo="number" className={styles.camposChildren} rotulo="Valor (R$):" receber={setValor} placeholder='ex.: 24,50'/>
                {erroValor && <p className={styles.erro}>Por favor insira um valor.</p>}
              </div>
            </div>
          </div>
        </div>
        <div className={styles.btns}>
          <ConfirmBtn className={styles.btn} onClick={() => cadastrar()}>Cadastrar serviço</ConfirmBtn>
          <CancelBtn className={styles.btn} onClick={() => voltar()}>Cancelar cadastro</CancelBtn>
        </div>
      </div>
    </>
  )
}