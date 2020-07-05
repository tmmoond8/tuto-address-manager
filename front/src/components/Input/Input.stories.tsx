import styled from '@emotion/styled';
import React from 'react';
import Input from '.';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Input',
  component: Input,
};
export const Input_default_set = () => (
  <Wrapper>
    <Input value="" handleChange={action('onChange')} placeholder="받는 사람" />
    <Input value="값 123" handleChange={action('onChange')} />
    <Input
      value=""
      placeholder="받는 사람"
      handleChange={action('onChange')}
      errorMessage="받는 분 이름을 입력해주세요."
    />
    <Input value="값 123" handleChange={action('onChange')} isFull={true} />
  </Wrapper>
);

const Wrapper = styled.div`
  padding: 16px;
`;
