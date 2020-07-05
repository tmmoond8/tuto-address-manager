import React, { createRef } from 'react';
import styled from '@emotion/styled';
import { Color } from '../../styles';
import ModalContext from './contexts';
import ModalProvider from './ModalProvider';

export function useModal(): {
  open: any;
  opened: boolean;
} {
  const { open, opened } = React.useContext(ModalContext);
  return { open, opened };
}

function Modal(): JSX.Element {
  const { opened, title, content, close } = React.useContext(ModalContext);
  const [modalVisible, setModalVisible] = React.useState(opened);
  const modalWrapper = React.useRef<HTMLDivElement>();

  React.useEffect(() => {
    let timeout: number;
    if (opened) {
      timeout = window.setTimeout(() => {
        setModalVisible(true);
      }, 50);
    }
    return (): void => clearTimeout(timeout);
  }, [opened]);

  const handleClose = React.useCallback(() => {
    setModalVisible(false);
    setTimeout(() => {
      close();
    }, 300);
  }, [close]);

  const handlePreventPropagation = React.useCallback((e) => {
    e.stopPropagation();
  }, []);

  return opened ? (
    <ModalWrapper ref={ModalWrapper as any} open={modalVisible}>
      <ModalBox open={modalVisible}>
        <Title>{title}</Title>
        <CloseButton onClick={handleClose}>&times;</CloseButton>
        <Body>{content}</Body>
      </ModalBox>
    </ModalWrapper>
  ) : (
    <></>
  );
}

const ModalWrapper = styled.div<{ open: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  z-index: 100;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  background-color: ${(p) =>
    p.open ? 'rgba(0, 0, 0, 0.5)' : 'rgba(0, 0, 0, 0.0)'};
  transition: all 0.4s;
`;

const ModalBox = styled.div<{ open: boolean }>`
  width: 100%;
  height: 100%;
  max-width: 510px;
  margin: auto;
  background-color: white;
  transform: translateY(${(p) => (p.open ? '0' : '100vh')});
  transition: all 0.3s;
`;

const Title = styled.div`
  padding: 30px 20px 10px;
  font-size: 22px;
  font-weight: bold;
  color: ${Color.Grey3D};
`;

const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 10px;
  padding: 0;
  font-size: 40px;
  font-weight: 700;
  background-color: transparent;
  border: none;
  font-family: serif;
`;

const Body = styled.div`
  border: 0 20px;
`;

Modal.Provider = ModalProvider;
Modal.Context = ModalContext;

export default Modal;
