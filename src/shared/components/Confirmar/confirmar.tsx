import { HTMLAttributes, SetStateAction, useEffect, useState } from 'react';
import ReactModal from 'react-modal';
import { CancelBtn, ConfirmBtn } from '../Btn/btn';
import styles from './Confirmar.module.scss';

interface Props extends HTMLAttributes<HTMLDivElement> {
  ativo: boolean;
  onConfirm: Function;
  closeReturn: React.Dispatch<SetStateAction<boolean>>
}

export const Confirmar = (props: Props) => {

  return (
    <ReactModal
      isOpen={props.ativo}
      onRequestClose={() => props.closeReturn(false)}
      className={styles.modal}
    >
      <div className={styles.content}>
        {props.children}
        <div className={styles.btns}>
          {/* <button className={styles.btns__button} onClick={() => props.onConfirm()}>Confirmar</button>
          <button className={styles.btns__button} onClick={}>Cancelar</button> */}
          <ConfirmBtn className={styles.btns__btn} onClick={() => props.onConfirm()}>Confirmar</ConfirmBtn>
          <CancelBtn className={styles.btns__btn} onClick={() => props.closeReturn(false)}>Cancelar</CancelBtn>
        </div>
      </div>
    </ReactModal>
  )
}