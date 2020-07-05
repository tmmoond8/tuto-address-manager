import React, { ReactNode, ReactElement, useContext, useState } from 'react';
import ModalContext from './contexts';
import Modal from '.';

interface ModalProviderProps {
  children: ReactNode;
}

export default function ModalProvider(props: ModalProviderProps): JSX.Element {
  const { children } = props;
  const context = useContext(ModalContext);
  const [data, setData] = useState(context);

  const open = (title: string, content: ReactNode) => {
    return new Promise((resolve) => {
      setData({
        ...data,
        opened: true,
        title,
        content,
        close: () => {
          setData({
            ...data,
            title: '',
            opened: false,
          });
          resolve();
        },
      });
    });
  };

  return (
    <ModalContext.Provider
      value={{
        ...data,
        open,
      }}
    >
      {children}
      <Modal />
    </ModalContext.Provider>
  );
}
