/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { useState, useCallback } from 'react';
import styled from '@emotion/styled';
import Input from '../Input';
import CheckBox from '../CheckBox';

interface AddressFormProps {}

export default function AddressForm(props: AddressFormProps) {
  const {} = props;
  const [data, setData] = useState({
    name: '',
    postnumber: '',
    address: '',
    default: false,
  });

  const handleOnchange = useCallback(
    (key: string) => (value: string | boolean) => {
      setData({
        ...data,
        [key]: value,
      });
    },
    [data],
  );

  return (
    <div>
      <Form>
        <Input
          value={data.name}
          handleChange={handleOnchange('name')}
          placeholder="받는 사람"
        />
        <Input
          value={data.postnumber}
          handleChange={handleOnchange('postnumber')}
          placeholder="우편번호"
        />
        <Input
          value={data.address}
          handleChange={handleOnchange('address')}
          placeholder="주소"
          isFull={true}
        />
        <CheckBox checked={data.default} toggle={handleOnchange('default')}>
          기본 배송지로 등록
        </CheckBox>
      </Form>
    </div>
  );
}

const Form = styled.form``;
