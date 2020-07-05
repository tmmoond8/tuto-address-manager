/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { useCallback, ReactNode, useState } from 'react';
import cx from 'classnames';
import styled from '@emotion/styled';
import { Color } from '../../styles';

interface AddressMoreActionsProps {
  children: ReactNode;
}

function AddressMoreActions(props: AddressMoreActionsProps) {
  const { children } = props;
  const [open, setOpen] = useState(false);
  const handleToggleOpenActions = useCallback(() => {
    setOpen(!open);
  }, [open]);
  return (
    <MoreActions onClick={handleToggleOpenActions}>
      {open && <MoreActionsMenus>{children}</MoreActionsMenus>}
    </MoreActions>
  );
}

const MoreActions = styled.div`
  position: relative;
  width: 26px;
  height: 26px;
  border: 1px solid ${Color.GreyE1};
  border-radius: 13px;
  background: #ffffff;
  cursor: pointer;
  ::before {
    content: '···';
    position: absolute;
    left: 2px;
    top: 2px;
    font-size: 24px;
    font-weight: 900;
    color: ${Color.Grey8C};
  }
`;

const MoreActionsMenus = styled.ul`
  position: absolute;
  top: 30px;
  right: 0;
  width: 164px;
  padding: 10px 0;
  background-color: ${Color.White};
  border-radius: 4px;
  box-shadow: 2px 2px 3px 0 rgba(122, 122, 122, 0.5);
  border: solid 1px #cdcdcd;
  z-index: 1;
`;

AddressMoreActions.MenuItem = styled.li`
  height: 40px;
  line-height: 40px;
  padding: 0 20px;
  cursor: pointer;
  &:hover {
    background-color: ${Color.GreyF4};
  }
`;

export default AddressMoreActions;
