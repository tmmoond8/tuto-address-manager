/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { useState, useCallback } from 'react';
import styled from '@emotion/styled';
import Input from '../Input';
import CheckBox from '../CheckBox';
import { Color } from '../../styles';

interface AddressFormProps {
  handleAdd: (data: {
    postnumber: number;
    address: string;
    name: string;
    isSetDefault: boolean;
  }) => void;
}

export default function AddressForm(props: AddressFormProps) {
  const { handleAdd } = props;
  const [data, setData] = useState({
    name: '',
    postnumber: '',
    address: '',
    isSetDefault: false,
  });
  const [errors, setErrors] = useState({
    name: '',
    postnumber: '',
    address: '',
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

  const handleClickCTA = useCallback(() => {
    setErrors({
      name: data.name === '' ? '받는 분 이름을 입력해주세요.' : '',
      postnumber: data.postnumber === '' ? '우편번호를 입력해주세요.' : '',
      address: data.address === '' ? '주소를 입력해 주세요.' : '',
    });
    if (data.name !== '' && data.postnumber !== '' && data.address !== '') {
      handleAdd({
        ...data,
        postnumber: Number.parseInt(data.postnumber),
      });
    }
  }, [data]);

  return (
    <FromWrapper>
      <Form>
        <Input
          value={data.name}
          handleChange={handleOnchange('name')}
          placeholder="받는 사람"
          errorMessage={errors.name}
        />
        <Input
          value={data.postnumber}
          handleChange={handleOnchange('postnumber')}
          placeholder="우편번호"
          errorMessage={errors.postnumber}
        />
        <Input
          value={data.address}
          handleChange={handleOnchange('address')}
          placeholder="주소"
          isFull={true}
          errorMessage={errors.address}
        />
        <CheckBox
          checked={data.isSetDefault}
          toggle={handleOnchange('default')}
        >
          기본 배송지로 등록
        </CheckBox>
      </Form>
      <Button onClick={handleClickCTA}>등록 완료</Button>
    </FromWrapper>
  );
}

const FromWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;
const Form = styled.form`
  flex: 1;
`;
const Button = styled.button`
  height: 48px;
  width: 100%;
  border-radius: 4px;
  background-color: ${Color.Tomato};
  font-size: 16px;
  font-weight: 600;
  border: none;
  color: ${Color.White};
  margin-bottom: 20px;
`;
