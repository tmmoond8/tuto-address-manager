/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import {
  Fragment,
  useEffect,
  useContext,
  useRef,
  useState,
  useCallback,
} from 'react';
import styled from '@emotion/styled';
import { Color } from '../../styles';
import ToastContext from './contexts';
import ToastProvider from './ToastProvider';

export function useToast(): {
  opened: boolean;
  message: (message: string) => void;
} {
  const { message, opened } = useContext(ToastContext);
  return { message, opened };
}

function Toast(): JSX.Element {
  const { opened, content, hide } = useContext(ToastContext);
  const [toastVisible, setToastVisible] = useState(true);
  const toastWrapper = useRef<HTMLDivElement>();

  useEffect(() => {
    let startTimeout: number;
    let endTimeout: number;
    startTimeout = window.setTimeout(() => {
      setToastVisible(false);
    }, 1500);
    endTimeout = window.setTimeout(() => {
      hide();
      setToastVisible(true);
    }, 3000);
    return (): void => {
      clearTimeout(startTimeout);
      clearTimeout(endTimeout);
    };
  }, [opened]);

  const handlePreventPropagation = useCallback((e) => {
    e.stopPropagation();
  }, []);

  return opened ? (
    <ToastWrapper ref={toastWrapper as any} open={toastVisible}>
      <ToastBox open={toastVisible}>{content}</ToastBox>
    </ToastWrapper>
  ) : (
    <Fragment></Fragment>
  );
}

const ToastWrapper = styled.div<{ open: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  z-index: 100;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  max-width: 400px;
  width: 100%;
  height: 60px;
  margin: auto;
`;

const ToastBox = styled.div<{ open: boolean }>`
  width: 100%;
  height: 100%;
  border-radius: 6px;
  text-align: center;
  line-height: 60px;
  font-size: 22px;
  background-color: ${Color.GreyA70};
  color: ${Color.White};
  opacity: ${(p) => (p.open ? '1' : '0')};
  transition: all 1.5s;
`;

Toast.Provider = ToastProvider;
Toast.Context = ToastContext;

export default Toast;
