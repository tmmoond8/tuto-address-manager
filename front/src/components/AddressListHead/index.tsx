/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import cx from 'classnames';
import styled from '@emotion/styled';
import { Color, tablet, desktop } from '../../styles';

interface AddressListHeadProps {
  handleAdd: () => void;
  className?: string;
}

export default function AddressListHead(props: AddressListHeadProps) {
  const { handleAdd, className } = props;
  return (
    <Head className={cx('AddressHead', className)}>
      <h3>등록된 배송지</h3>
      <Button onClick={handleAdd}>+ 추가</Button>
    </Head>
  );
}

const Head = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
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
