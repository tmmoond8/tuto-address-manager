/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import styled from '@emotion/styled';
import { Color, tablet, desktop } from '../../styles';

export default function AddressEmpty() {
  return (
    <Empty>
      <span>!</span>
      <p>등록된 배송지가 없습니다.</p>
    </Empty>
  );
}

const Empty = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 320px;

  span {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 84px;
    height: 84px;
    border-radius: 84px;
    color: ${Color.GreyD3};
    font-size: 64px;
    border: 3px solid ${Color.GreyD3};
  }

  p {
    margin-top: 28px;
    color: ${Color.GreyD3};
    font-size: 22px;
    font-weight: 600;
  }
`;
