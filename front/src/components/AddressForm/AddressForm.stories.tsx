import React from 'react';
import AddressForm from '.';
import { action } from '@storybook/addon-actions';

export default {
  title: 'AddressForm',
  component: AddressForm,
};
export const AddressForm_default_set = () => (
  <AddressForm handleAdd={action('send form')} />
);
