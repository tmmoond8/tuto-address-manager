import React from 'react';
import AddressListHead from '.';
import { action } from '@storybook/addon-actions';

export default {
  title: 'AddressListHead',
  component: AddressListHead,
};
export const AddressListHead_default_set = () => (
  <AddressListHead handleAdd={action('아이템 추가')} />
);
