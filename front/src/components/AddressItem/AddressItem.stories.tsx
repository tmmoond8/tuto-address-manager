import React from 'react';
import AddressItem from '.';
import { action } from '@storybook/addon-actions';

export default {
  title: 'AddressItem',
  component: AddressItem,
};
const models = {
  default: {
    zipCode: '12345',
    address: '서울시 강남구 강남대로',
    handleRemove: action('remove'),
    handleSetDefault: action('default set'),
    isDefault: true,
  },
};
// export const AddressItem_default = () => <AddressItem {...models.default} />;
export const AddressItem_default_set = () => (
  <ul>
    <AddressItem {...models.default} />
    <AddressItem {...models.default} />
    <AddressItem {...models.default} />
  </ul>
);
