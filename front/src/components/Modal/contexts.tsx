import { createContext, ReactNode } from 'react';

const ModalContext = createContext({
  opened: false,
  title: '',
  content: '' as ReactNode,
  close: () => {},
  open: (title: string, content: ReactNode): Promise<unknown> =>
    Promise.resolve(content),
});

ModalContext.displayName = 'ModalContext';

export default ModalContext;
