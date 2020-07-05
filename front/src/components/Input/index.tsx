/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { useMemo } from 'react';
import styled from '@emotion/styled';
import { Color } from '../../styles';

interface InputProps {
  value: string;
  placeholder?: string;
  handleChange: (value: string) => void;
  isFull?: boolean;
  errorMessage?: string;
}

export default function Input(props: InputProps) {
  const {
    value,
    handleChange,
    placeholder,
    isFull = false,
    errorMessage = '',
  } = props;
  const error = useMemo(() => !!errorMessage, [errorMessage]);

  return (
    <InputWrapper>
      <BaseInput
        value={value}
        onChange={(e) => handleChange(e.target.value)}
        placeholder={placeholder}
        error={error}
        isFull={isFull}
      />
      <ErrorMessage>{`${errorMessage} `}</ErrorMessage>
    </InputWrapper>
  );
}
const InputWrapper = styled.div`
  margin-top: 23px;
`;

const BaseInput = styled.input<{ error: boolean; isFull: boolean }>`
  max-width: ${(p) => (p.isFull ? '320px' : '228px')};
  width: 100%;
  padding: 13px 14px;
  border-radius: 4px;
  border: 1px solid ${(p) => (p.error ? `${Color.Tomato}` : `${Color.Grey97}`)};
  &::placeholder {
    color: ${Color.GreyAD};
  }
`;

const ErrorMessage = styled.p`
  height: 17px;
  margin-top: 10px;
  font-size: 14px;
  color: ${Color.Tomato};
`;
