import { createPortal } from 'react-dom';
import { useEffect } from 'react';
import { OverLay, ButtonClose, Modal, Svg } from '../Modal/Modal.styled';

const modalElement = document.getElementById('portal');

export const Modalca = ({ children, toggleModal, isOpen }) => {
  // if (isOpen) {
  //   document.body.style.overflow = 'hidden';
  // } else {
  //   document.body.style.overflow = 'auto';
  // }
  const onClickBackdrop = e => {
    if (e.target === e.currentTarget) {
      toggleModal();
    }
  };
  useEffect(() => {
    const onEscapeClick = e => {
      if (e.code === 'Escape') {
        toggleModal();
      }
    };
    window.addEventListener('keydown', onEscapeClick);
    return () => {
      window.removeEventListener('keydown', onEscapeClick);
    };
  }, [toggleModal]);

  return createPortal(
    <OverLay onClick={onClickBackdrop}>
      <Modal>
        <ButtonClose onClick={toggleModal} type="button">
          <Svg />
        </ButtonClose>
        {children}
      </Modal>
    </OverLay>,
    modalElement
  );
};
