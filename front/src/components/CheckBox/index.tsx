/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { ReactNode, useMemo } from 'react';
import styled from '@emotion/styled';
import { Color } from '../../styles';

interface CheckBoxProps {
  checked: boolean;
  toggle: (value: string) => void;
  children: ReactNode;
}

export default function CheckBox(props: CheckBoxProps) {
  const { checked, toggle, children } = props;

  return (
    <CheckBoxWrapper>
      <Check checked={checked} />
      {children}
    </CheckBoxWrapper>
  );
}

const CheckBoxWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 7px 6px;
  color: ${Color.Grey3D};
  font-size: 14px;
`;

const Check = styled.div<{ checked: boolean }>`
  position: relative;
  width: 20px;
  height: 20px;
  border-radius: 4px;
  border: 1px solid
    ${(p) => (p.checked ? `${Color.Transparent}` : `${Color.Grey97}`)};
  margin-right: 8px;
  &::before {
    position: absolute;
    top: 3px;
    left: 4px;
    content: '';
    width: 10px;
    height: 7px;
    border-bottom: 2px solid ${Color.White};
    border-left: 2px solid ${Color.White};
    transform: rotate(-45deg);
    z-index: 4;
  }
  &::after {
    position: absolute;
    content: '';
    width: 20px;
    height: 20px;
    background-color: ${Color.Tomato};
    border-radius: 4px;
    transform: scale(${(p) => (p.checked ? '1' : '0')});
    transition: transform 0.5s;
  }
`;
