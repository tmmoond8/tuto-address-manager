import { createContext, ReactNode } from 'react';

const DialogContext = createContext({
  opened: false,
  content: '' as ReactNode,
  close: (confirmed: any) => {},
  openConfirm: (content: ReactNode): Promise<unknown> =>
    Promise.resolve(content),
});

DialogContext.displayName = 'DialogContext';

export default DialogContext;
