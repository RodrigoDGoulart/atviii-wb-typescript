import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CancelBtn, ConfirmBtn, Head, Header2, InserirComRotulo, InserirImagem } from "../../shared/components";
import { Lista } from "../../shared/components/Lista/lista";
import { Opcoes } from "../../shared/components/Opcoes/opcoes";

import styles from './NovoCliente.module.scss';

export default function NovoCliente() {

  const history = useNavigate();

  const [img, setImg] = useState('');
  const [sexo, setSexo] = useState('');
  const [nome, setNome] = useState('');
  const [nomeSocial, setNomeSocial] = useState('');

  const [cpfValor, setCpfValor] = useState('');
  const [cpfData, setCpfData] = useState('');

  const [rgValor, setRgValor] = useState('');
  const [rgData, setRgData] = useState('');
  const [rgList, setRgList] = useState([]);

  const [telefone, setTelefone] = useState('');
  const [telefoneList, setTelefoneList] = useState([]);

  const[erroSexo, setErroSexo] = useState(false);
  const[erroNome, setErroNome] = useState(false);
  const[erroNomeSocial, setErroNomeSocial] = useState(false);
  const[erroCpfValor, setErroCpfValor] = useState(false);
  const[erroCpfData, setErroCpfData] = useState(false);
  const[erroRgList, setErroRgList] = useState(false);
  const[erroTelefoneList, setErroTelefoneList] = useState(false);

  const voltar = () => {
    history('/clientes')
  }

  const verificar = () => {
    let retorno = true;
    if(!sexo) {setErroSexo(true); retorno = false;} else {setErroSexo(false)}
    if(!nome) {setErroNome(true); retorno = false;} else {setErroNome(false)}
    if(!nomeSocial) {setErroNomeSocial(true); retorno = false;} else {setErroNomeSocial(false)}
    if(!cpfValor) {setErroCpfValor(true); retorno = false;} else {setErroCpfValor(false)}
    if(!cpfData) {setErroCpfData(true); retorno = false;} else {setErroCpfData(false)}
    if(rgList.length == 0) {setErroRgList(true); retorno = false;} else {setErroRgList(false)}
    if(telefoneList.length == 0) {setErroTelefoneList(true); retorno = false;} else {setErroTelefoneList(false)} 
    return retorno;
  }

  const cadastrar = () => {
    if (verificar()) {
      console.log({
        img,
        sexo,
        nome,
        nomeSocial,
        cpfValor,
        cpfData,
        rgList,
        telefoneList
      });
    }
  }

  return (
    <>
      <Head selecionado={1} />
      <Header2>Novo cliente</Header2>
      <div className={styles.container}>
        <div className={styles.fstSection}>
          <InserirImagem receberArquivo={setImg} className={styles.img} />
          <div className={styles.fstSectionCampos}>
            <InserirComRotulo rotulo="Nome:" receber={setNome} />
            {erroNome && <p className={styles.erro}>Por favor insira um nome.</p>}
            <InserirComRotulo rotulo="Nome Social:" receber={setNomeSocial} />
            {erroNomeSocial && <p className={styles.erro}>Por favor insira um nome social.</p>}
            <Opcoes lista={['Masculino', 'Feminino', 'Outros']} onChange={setSexo} rotulo='Sexo:' />
            {erroSexo && <p className={styles.erro}>Por favor selecione um sexo.</p>}
          </div>
        </div>
        <div>
          <Header2>CPF</Header2>
          <div className={styles.containerCampos}>
            <div className={styles.campos}>
              <InserirComRotulo rotulo="Valor (ex.: 123.456.789-00)" placeholder="xxx.xxx.xxx-xx" className={styles.scndInput} receber={setCpfValor} />
              <InserirComRotulo tipo="date" rotulo="Data de emissão" className={styles.scndInput} receber={setCpfData} />
            </div>
              {(erroCpfData || erroCpfValor) && <p className={styles.erro}>Por favor insira um CPF válido e a data de emissão.</p>}
          </div>
          <Header2>RGs</Header2>
          <div className={styles.containerCampos}>
            <div className={styles.campos}>
              <InserirComRotulo rotulo="Valor (ex.: 12.345.678-9)" placeholder="xx.xxx.xxx-x" className={styles.scndInput} receber={setRgValor} value={rgValor} />
              <InserirComRotulo tipo="date" rotulo="Data de emissão" className={styles.scndInput} receber={setRgData} value={rgData} />
              <ConfirmBtn className={styles.addBtn} onClick={() => {
                if (!rgValor || !rgData) return
                let lista = [...rgList];
                lista.push({
                  valor: rgValor,
                  data: rgData
                });
                setRgList(lista);
                setRgValor('');
                setRgData('');
              }}>
                <FontAwesomeIcon icon={faPlus} />
              </ConfirmBtn>
            </div>
            {erroRgList && <p className={styles.erro}>Por favor insira ao menos um RG com data de emissão.</p>}
            <Lista className={styles.lista} lista={rgList.map(item => `${item.valor} - ${item.data}`)} setFunction={setRgList} />
          </div>
          <Header2>Telefones</Header2>
          <div className={styles.containerCampos}>
            <div className={styles.campos}>
              <InserirComRotulo rotulo="Telefone" placeholder="+xx (xx) xxxxx-xxxx" className={styles.scndInput} receber={setTelefone} value={telefone} />
              <ConfirmBtn className={styles.addBtn} onClick={() => {
                if (!telefone) return
                let lista = [...telefoneList];
                lista.push(telefone);
                setTelefoneList(lista);
                setTelefone('');
              }}>
                <FontAwesomeIcon icon={faPlus} />
              </ConfirmBtn>
            </div>
            {erroTelefoneList && <p className={styles.erro}>Por favor insira ao menos um telefone.</p>}
            <Lista className={styles.lista} lista={telefoneList} setFunction={setTelefoneList} />
          </div>
        </div>
        <div className={styles.btns}>
          <ConfirmBtn className={styles.btn} onClick={() => cadastrar()}>Cadastrar cliente</ConfirmBtn>
          <CancelBtn className={styles.btn} onClick={() => voltar()}>Cancelar cadastro</CancelBtn>
        </div>
      </div>
    </>
  )
}