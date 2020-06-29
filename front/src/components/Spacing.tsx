/** @jsx jsx */
import { css, jsx } from '@emotion/core';

interface SpacingProps {
  size: number;
}

export default function Spacing(props: SpacingProps) {
  const { size } = props;
  return (
    <div
      css={css`
        display: inline-block;
        width: 100%;
        height: 0;
        border: none;
        margin-top: ${size}px;
      `}
    />
  );
}
