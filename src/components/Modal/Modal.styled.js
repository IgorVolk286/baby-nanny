import styled from 'styled-components';
import { ReactComponent as IconX } from '../../img/x.svg';
export const OverLay = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(18, 20, 23, 0.5);
  padding: 40px 0;
  z-index: 500;
`;
export const ButtonClose = styled.button`
  display: block;
  position: absolute;
  top: 16px;
  right: 16px;
  padding: 0;
  background: transparent;
`;

export const Modal = styled.div`
  width: 300px;
  height: 650px;
  height: auto;
  padding: 15px;
  position: relative;
  border-radius: 15px;
  background: #ffffff;
  overflow-y: auto;

  @media (min-width: 768px) {
    width: 620px;
    height: 700px;
    padding: 64px;
    border-radius: 24px;
  }
  @media (min-width: 1440px) {
    width: 620px;
    height: 700px;
    padding: 64px;
    border-radius: 24px;
  }
`;
export const Svg = styled(IconX)`
  width: 16px;
  height: 16px;
`;
