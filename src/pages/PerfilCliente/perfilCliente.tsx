import { useNavigate, useParams } from "react-router-dom";
import { BlueBtn, CancelBtn, ConfirmBtn, Head, Header2, InserirComRotulo, InserirImagem } from "../../shared/components";
import { Lista } from "../../shared/components/Lista/lista";
import styles from './PerfilCliente.module.scss';
import foto from '../../shared/images/clientes.jpg';
import { useState } from "react";
import { Confirmar } from "../../shared/components/Confirmar/confirmar";

export default function PerfilCliente() {

  const history = useNavigate();

  const { id } = useParams();

  const cliente = {
    foto: foto,
    nome: 'juriscleide',
    nomeSocial: 'juriscleide',
    sexo: 'Feminino',
    cpf: {
      valor: '12345678900',
      data: '12/12/2012'
    },
    rgs: [
      { valor: '12345678900', data: '12/12/2012' },
      { valor: '1234131231235678900', data: '12/12/2012' }
    ],
    telefones: ['123456', '123123123']
  }

  const [confirm, setConfirm] = useState(false);

  const voltar = () => {
    history('/clientes')
  }

  const deletar = (id: string) => {
    console.log(`deletando ${id}`);
    setConfirm(false);
    voltar();
  }

  const chamarModal = () => {
    setConfirm(true);
  }


  return (
    <>
      <Head selecionado={1} />
      <Header2>Perfil de cliente: {cliente.nome}</Header2>
      <div className={styles.container}>
        <div className={styles.fstSection}>
          <InserirImagem editable={false} value={cliente.foto} className={styles.img} />
        </div>
        <div className={styles.infoContainer}>
          <div className={styles.containerCampos}>
            <Header2 className={styles.header}> Informação padrão</Header2>
            <InserirComRotulo rotulo="Nome:" value={cliente.nome} editable={false} />
            <InserirComRotulo rotulo="Nome social:" value={cliente.nomeSocial} editable={false} />
            <InserirComRotulo rotulo="Sexo:" value={cliente.sexo} editable={false} />
          </div>
          <div className={styles.containerCampos}>
            <Header2 className={styles.header}>CPF</Header2>
            <div className={styles.campos}>
              <InserirComRotulo editable={false} rotulo="Valor" className={styles.scndInput} value={cliente.cpf.valor} />
              <InserirComRotulo editable={false} rotulo="Data de emissão" className={styles.scndInput} value={cliente.cpf.data} />
            </div>
          </div>
          <div className={styles.containerCampos}>
            <Header2 className={styles.header}>RGs</Header2>
            <Lista editable={false} lista={cliente.rgs.map(item => `${item.valor} - ${item.data}`)} />
          </div>
          <div className={styles.containerCampos}>
            <Header2 className={styles.header}>Telefones</Header2>
            <Lista editable={false} lista={cliente.telefones} />
          </div>
        </div>
      </div>
      <div className={styles.btns}>
        <CancelBtn className={styles.btn} onClick={() => chamarModal()}>Deletar {cliente.nome}</CancelBtn>
        <ConfirmBtn className={styles.btn} onClick={() => history(`/editar-cliente/${id}`)}>Editar {cliente.nome}</ConfirmBtn>
      </div>
      <div className={styles.btns}>
        <span></span>
        <BlueBtn className={styles.btnFS} onClick={() => history(`/consumo-cliente/${id}`)}>Consumo de {cliente.nome}</BlueBtn>
      </div>
      <Confirmar
        ativo={confirm}
        onConfirm={() => deletar(id)}
        closeReturn={setConfirm}
      >
        <p className={styles.confirmMsg}>Excluir {cliente.nome}?</p>
      </Confirmar>
    </>
  )
}