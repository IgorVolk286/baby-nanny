import { createPortal } from 'react-dom';
import { useEffect } from 'react';
import { OverLay, ButtonClose, Modal, Svg } from '../Modal/Modal.styled';

const modalElement = document.getElementById('portal');

export const Modalca = ({ children, toggleModal }) => {
  const onClickBackdrop = e => {
    if (e.target === e.currentTarget) {
      toggleModal();
      document.body.style.overflow = '';
    }
  };
  useEffect(() => {
    const onEscapeClick = e => {
      if (e.code === 'Escape') {
        toggleModal();
        document.body.style.overflow = '';
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
