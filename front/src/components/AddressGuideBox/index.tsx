/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import cx from 'classnames';
import styled from '@emotion/styled';
import { Color, tablet, desktop } from '../../styles';

interface AddressGuideBoxProps {
  className?: string;
}

export default function AddressGuideBox(props: AddressGuideBoxProps) {
  const { className } = props;
  return (
    <Box className={cx('AddressBox', className)}>
      <h3>배송지를 삭제하면 예약된 후원의 배송지 정보도 삭제되나요?</h3>
      <p>
        현재 후원하신 프로젝트에 등록된 배송지가 삭제되거나 변경되지 않습니다.
        이를 변경하시려면 후원현황에서 변경해주세요. <a>내 후원현황 바로가기</a>
      </p>
    </Box>
  );
}

const Box = styled.div`
  border: 1px solid ${Color.Grey97};
  border-radius: 8px;
  padding: 20px;
  h3 {
    line-height: normal;
    font-size: 17px;
    font-weight: 600;
  }
  p {
    margin-top: 14px;
    font-size: 13px;
    line-height: 20px;
    color: ${Color.Grey98};
    a {
      color: ${Color.Sky};
      text-decoration: underline;
    }
  }
`;
