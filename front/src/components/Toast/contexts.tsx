import { createContext, ReactNode } from 'react';

const ToastContext = createContext({
  opened: false,
  content: '' as ReactNode,
  message: (content: string) => {},
  hide: () => {},
});

ToastContext.displayName = 'ToastContext';

export default ToastContext;
