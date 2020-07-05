/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { useCallback } from 'react';
import cx from 'classnames';
import styled from '@emotion/styled';
import { Color } from '../../styles';
import AddressMoreActions from './AddressMoreActions';
import { useDialog } from '../Dialog';

interface AddressListItemProps {
  postnumber: number;
  address: string;
  className?: string;
  isDefault?: boolean;
  handleRemove: () => void;
  handleSetDefault: (id: number) => void;
}

export default function AddressListItem(props: AddressListItemProps) {
  const {
    postnumber,
    address,
    isDefault = false,
    className,
    handleRemove,
  } = props;
  const dialog = useDialog();
  const onClickRemoveItem = useCallback(async () => {
    const confirm = await dialog.openConfirm(<p>정말 삭제하시겠습니까?</p>);
    if (confirm) {
      handleRemove();
    }
  }, [dialog]);
  const openDialog = useCallback(async () => {
    console.log('abc');
    const confirm = await dialog.openConfirm(<p>정말 삭제하시겠습니까?</p>);
  }, [dialog]);

  return (
    <Item className={cx('AddressListItem', className)}>
      <Content>
        <h3>
          {`[${postnumber}]`} {isDefault && <span>기본</span>}
        </h3>
        <p>{address}</p>
      </Content>
      <AddressMoreActions>
        <AddressMoreActions.MenuItem>
          기본 배송지 설정
        </AddressMoreActions.MenuItem>
        <AddressMoreActions.MenuItem onClick={onClickRemoveItem}>
          삭제
        </AddressMoreActions.MenuItem>
      </AddressMoreActions>
    </Item>
  );
}

const Item = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;

  & + & {
    border-top: 1px solid ${Color.Grey8C};
  }
`;

const Content = styled.div`
  h3 {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: row;
    height: 28px;
    font-size: 16px;
    color: ${Color.Grey3E};

    span {
      background-color: ${Color.Red};
      border-radius: 5px;
      height: 22px;
      margin-left: 5px;
      font-size: 14px;
      color: ${Color.White};
      line-height: 1.6;
      padding: 3px 11px;
    }
  }
  p {
    margin-top: 6px;
    color: ${Color.Grey98};
    font-size: 14px;
  }
`;
