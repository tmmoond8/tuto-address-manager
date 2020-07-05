import { useState, useEffect } from 'react';
import { Address } from '../types';
import * as API from './apis';

export const useAddress = (): {
  addresses: Address[];
  defaultAddressId: number;
} => {
  const [originAddresses, setOriginAddresses] = useState<Address[]>([]);
  const [defaultAddressId, setDefaultAddressId] = useState<number>(-1);
  useEffect(() => {
    (async (): Promise<void> => {
      const {
        data: { data },
      } = await API.getAddress();
      setOriginAddresses(Object.values(data.addresses));
      setDefaultAddressId(data.default);
    })();
  }, []);

  return {
    addresses: originAddresses,
    defaultAddressId,
  };
};
