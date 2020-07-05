import React from 'react';
import AddressListItem from '.';
import { action } from '@storybook/addon-actions';

export default {
  title: 'AddressListItem',
  component: AddressListItem,
};
const model = {
  zipCode: '12345',
  address: '서울시 강남구 강남대로',
  handleRemove: action('remove'),
  handleSetDefault: action('default set'),
};
// export const AddressListItem_default = () => <AddressListItem {...models.default} />;
export const AddressListItem_default_set = () => (
  <ul>
    <AddressListItem {...model} isDefault={true} />
    <AddressListItem {...model} />
    <AddressListItem {...model} />
  </ul>
);
