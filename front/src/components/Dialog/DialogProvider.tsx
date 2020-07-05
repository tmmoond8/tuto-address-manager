import React, { ReactNode, ReactElement, useContext, useState } from 'react';
import DialogContext from './contexts';
import Dialog from '.';

interface DialogProviderProps {
  children: ReactNode;
}

export default function DialogProvider(
  props: DialogProviderProps,
): JSX.Element {
  const { children } = props;
  const context = useContext(DialogContext);
  const [data, setData] = useState(context);

  const openConfirm = (content: ReactNode) => {
    return new Promise((resolve) => {
      setData({
        ...data,
        opened: true,
        content,
        close: (confirmed) => {
          setData({
            ...data,
            opened: false,
          });
          resolve(confirmed);
        },
      });
    });
  };

  return (
    <DialogContext.Provider
      value={{
        ...data,
        openConfirm,
      }}
    >
      {children}
      <Dialog />
    </DialogContext.Provider>
  );
}
