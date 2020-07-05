import { useState, useEffect, useCallback } from 'react';
import { Address } from '../types';
import * as API from './apis';

export const useAddress = (): {
  addresses: Address[];
  defaultAddressId: number;
  setDefaultAddressId: (addressId: number) => void;
  removeAddress: (addressId: number) => void;
} => {
  const [originAddresses, setOriginAddresses] = useState<Address[]>([]);
  const [defaultAddressId, setDefaultAddressId] = useState<number>(-1);
  const [error, setError] = useState<string | null>(null);
  const removeAddress = useCallback(
    (addressId: number) => {
      setOriginAddresses(
        originAddresses.filter((address) => address.id !== addressId),
      );
    },
    [originAddresses, setOriginAddresses],
  );

  useEffect(() => {
    (async (): Promise<void> => {
      try {
        const {
          status,
          data: { data, message },
        } = await API.getAddress();
        if (status === 200) {
          setOriginAddresses(Object.values(data.addresses));
          setDefaultAddressId(data.default);
        } else {
          setError(message);
        }
      } catch (error) {
        setError(error);
      }
    })();
  }, []);

  return {
    addresses: originAddresses,
    defaultAddressId,
    setDefaultAddressId,
    removeAddress,
  };
};
