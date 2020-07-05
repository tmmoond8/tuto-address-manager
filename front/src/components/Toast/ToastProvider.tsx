import React, { ReactNode, ReactElement, useContext, useState } from 'react';
import ToastContext from './contexts';
import Toast from '.';

interface ToastProviderProps {
  children: ReactNode;
}

export default function ToastProvider(props: ToastProviderProps): JSX.Element {
  const { children } = props;
  const context = useContext(ToastContext);
  const [data, setData] = useState(context);

  const message = (content: string) => {
    setData({
      ...data,
      opened: true,
      content,
    });
  };

  const hide = () => {
    setData({
      ...data,
      opened: false,
    });
  };

  return (
    <ToastContext.Provider
      value={{
        ...data,
        message,
        hide,
      }}
    >
      {children}
      <Toast />
    </ToastContext.Provider>
  );
}
