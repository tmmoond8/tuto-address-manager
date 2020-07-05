/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { Fragment, useCallback } from 'react';
import cx from 'classnames';
import styled from '@emotion/styled';
import { Color, tablet, desktop } from '../../styles';
import AddressForm from '../AddressForm';
import { useModal } from '../Modal';

interface AddressListHeadProps {
  handleAdd: (data: {
    postnumber: number;
    address: string;
    name: string;
    isSetDefault: boolean;
  }) => void;
  className?: string;
}

export default function AddressListHead(props: AddressListHeadProps) {
  const { handleAdd, className } = props;
  const modal = useModal();
  const handleOpenAddressForm = useCallback(() => {
    modal.open('배송지 추가', <AddressForm handleAdd={handleAdd} />);
  }, [modal]);
  return (
    <Head className={cx('AddressHead', className)}>
      <h3>등록된 배송지</h3>
      <Button onClick={handleOpenAddressForm}>+ 추가</Button>
    </Head>
  );
}

const Head = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 25px;
  padding: 20px;
  h3 {
    font-size: 20px;
    color: ${Color.Grey3E};
    font-weight: 600;
  }
`;

const Button = styled.button`
  font-size: 16px;
  color: ${Color.Sky};
  text-decoration: underline;
  font-weight: normal;
  background-color: ${Color.Transparent};
  border: none;
`;
