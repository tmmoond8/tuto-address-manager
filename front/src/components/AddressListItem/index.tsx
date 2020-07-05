/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import cx from 'classnames';
import styled from '@emotion/styled';
import { Color, tablet, desktop } from '../../styles';

interface AddressListItemProps {
  postnumber: number;
  address: string;
  className?: string;
  isDefault?: boolean;
  handleRemove: (id: number) => void;
  handleSetDefault: (id: number) => void;
}

export default function AddressListItem(props: AddressListItemProps) {
  const { postnumber, address, isDefault = false, className } = props;
  return (
    <Item className={cx('AddressListItem', className)}>
      <Content>
        <h3>
          {`[${postnumber}]`} {isDefault && <span>기본</span>}
        </h3>
        <p>{address}</p>
      </Content>
      <MoreActions />
    </Item>
  );
}

const Item = styled.li`
  display: flex;
  justify-content: space-between;
  padding: 20px;

  & + & {
    border-top: 1px solid ${Color.Grey8C};
  }
`;

const MoreActions = styled.div`
  position: relative;
  width: 26px;
  height: 26px;
  border: 1px solid ${Color.GreyE1};
  border-radius: 13px;
  background: #ffffff;
  ::before {
    content: '···';
    position: absolute;
    left: 3px;
    top: 4px;
    font-size: 24px;
    font-weight: 900;
    color: ${Color.Grey8C};
  }
`;

const Content = styled.div`
  h3 {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: row;
    height: 28px;
    font-size: 16px;
    color: ${Color.Grey3E};

    span {
      background-color: ${Color.Red};
      border-radius: 5px;
      height: 22px;
      margin-left: 5px;
      font-size: 14px;
      color: ${Color.White};
      line-height: 1.6;
      padding: 3px 11px;
    }
  }
  p {
    margin-top: 6px;
    color: ${Color.Grey98};
    font-size: 14px;
  }
`;
