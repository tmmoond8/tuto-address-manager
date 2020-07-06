/** @jsx jsx */
/** @jsxFrag React.Fragment */
import { Fragment, useCallback } from 'react';
import { css, jsx } from '@emotion/core';
import styled from '@emotion/styled';
import AddressListHead from '../components/AddressListHead';
import AddressLitem from '../components/AddressListItem';
import AddressGuideBox from '../components/AddressGuideBox';
import AddressEmpty from '../components/AddressEmpty';
import { Color } from '../styles';
import { useAddress } from '../lib/hooks';
import * as APIs from '../lib/apis';
import { useToast } from '../components/Toast';

export default function AddressPage() {
  const {
    addresses,
    defaultAddressId,
    setDefaultAddressId,
    removeAddress,
    addAddress,
    loadMore,
    isEOP,
  } = useAddress();
  const toast = useToast();
  const handleSetDefaultAddress = useCallback(
    async (addressId: number) => {
      try {
        await APIs.setDefaultAddress(addressId);
        setDefaultAddressId(addressId);
        toast.message('기본 배송지가 변경되었습니다.');
      } finally {
      }
    },
    [setDefaultAddressId],
  );

  const handleRemoveAddress = useCallback(
    async (addressId: number) => {
      try {
        await APIs.removeAddress(addressId);
        removeAddress(addressId);
      } finally {
      }
    },
    [removeAddress],
  );

  const handleAddAddress = useCallback(
    async (data: {
      postnumber: number;
      address: string;
      name: string;
      isSetDefault: boolean;
    }) => {
      const { postnumber, address, name, isSetDefault } = data;
      try {
        const {
          data: { data },
        } = await APIs.addAddress({
          postnumber,
          address,
          name,
        });
        addAddress(data);
        if (isSetDefault) {
          setDefaultAddressId(data.id);
        }
      } finally {
      }
    },
    [],
  );

  return (
    <Fragment>
      <AddressListHead handleAdd={handleAddAddress} />
      <List>
        {addresses.length === 0 ? (
          <AddressEmpty />
        ) : (
          addresses.map((address) => (
            <AddressLitem
              key={address.id}
              {...address}
              handleRemove={() => handleRemoveAddress(address.id)}
              handleSetDefault={() => handleSetDefaultAddress(address.id)}
              isDefault={address.id === defaultAddressId}
            />
          ))
        )}
      </List>
      {!isEOP && <LoadMore onClick={loadMore}>더보기</LoadMore>}
      <Footer>
        <AddressGuideBox />
      </Footer>
    </Fragment>
  );
}

const List = styled.ul`
  border-top: 1px solid ${Color.Grey8C};
  border-bottom: 1px solid ${Color.Grey8C};
`;

const Footer = styled.footer`
  margin: 30px 20px 71px 20px;
`;

const LoadMore = styled.button`
  height: 50px;
  width: 100%;
  font-size: 16px;
  color: ${Color.Grey25};
  background-color: ${Color.Transparent};
  border: none;
  border-bottom: 1px solid ${Color.Grey8C};
`;
