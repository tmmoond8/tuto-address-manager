import styled from '@emotion/styled';
import React from 'react';
import CheckBox from '.';
import { action } from '@storybook/addon-actions';

export default {
  title: 'CheckBox',
  component: CheckBox,
};
export const CheckBox_default_set = () => (
  <Wrapper>
    <CheckBox checked={true} toggle={action('toggle')}>
      기본 배송지로 등록
    </CheckBox>
    <CheckBox checked={false} toggle={action('onChange')}>
      기본 배송지로 등록
    </CheckBox>
  </Wrapper>
);

const Wrapper = styled.div`
  padding: 16px;
`;
