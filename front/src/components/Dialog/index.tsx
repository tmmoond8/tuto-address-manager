import React, { createRef } from 'react';
import styled from '@emotion/styled';
import { Color } from '../../styles';
import DialogContext from './contexts';
import DialogProvider from './DialogProvider';

export function useDialog(): {
  openConfirm: any;
  opened: boolean;
} {
  const { openConfirm, opened } = React.useContext(DialogContext);
  return { openConfirm, opened };
}

function Dialog(): JSX.Element {
  const { opened, content, close } = React.useContext(DialogContext);
  const [dialogVisible, setDialogVisible] = React.useState(opened);
  const dialogWrapper = React.useRef<HTMLDivElement>();

  React.useEffect(() => {
    let timeout: number;
    if (opened) {
      timeout = window.setTimeout(() => {
        setDialogVisible(true);
      }, 50);
    }
    return (): void => clearTimeout(timeout);
  }, [opened]);

  const handleClose = React.useCallback(
    (confirmed) => {
      setDialogVisible(false);
      setTimeout(() => {
        close(confirmed);
      }, 300);
    },
    [close],
  );

  const handlePreventPropagation = React.useCallback((e) => {
    e.stopPropagation();
  }, []);

  return opened ? (
    <DialogWrapper
      ref={dialogWrapper as any}
      onClick={handleClose}
      open={dialogVisible}
    >
      <DialogBox open={dialogVisible} onClick={handlePreventPropagation}>
        <Body>{content}</Body>
        <Actions>
          <Button primary onClick={() => handleClose(true)}>
            확인
          </Button>
          <Button onClick={(): void => handleClose(false)}>취소</Button>
        </Actions>
      </DialogBox>
    </DialogWrapper>
  ) : (
    <></>
  );
}

const DialogWrapper = styled.div<{ open: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  z-index: 100;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: ${(p) =>
    p.open ? 'rgba(0, 0, 0, 0.5)' : 'rgba(0, 0, 0, 0.0)'};
  transition: all 0.4s;
`;

const DialogBox = styled.div<{ open: boolean }>`
  width: 100%;
  max-width: 312px;
  margin: auto;
  border-radius: 6px;
  background-color: ${Color.White};
  transform: scale(${(p) => (p.open ? '1' : '0.85')});
  opacity: ${(p) => (p.open ? '1' : '0.1')};
  transition: all 0.3s;
`;

const Body = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 112px;
  padding: 24px 20px;
  overflow-y: auto;
  font-weight: 600;
  font-size: 18px;
  line-height: 1.5;
  color: ${Color.Grey2F};
`;

const Actions = styled.div`
  width: 100%;
  height: 68px;
  display: flex;
  flex-direction: row;
  button {
    border-radius: 6px;
  }
  button + button {
    border-left: 1px solid ${Color.GreyA50};
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
  border-top: 1px solid ${Color.GreyA50};
`;

const Button = styled.button<{ primary?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  padding: 16px 20px;
  border: none;
  background-color: ${Color.White};
  color: ${(p) => (p.primary ? `${Color.Tomato}` : `${Color.Grey36}`)};
`;

Dialog.Provider = DialogProvider;

export default Dialog;
