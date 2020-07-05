import React, { useCallback, useEffect, useState } from 'react';
import { css } from '@emotion/core';
import Dialog, { useDialog } from '.';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Dialog',
  component: Dialog,
};
const model = {
  zipCode: '12345',
  address: '서울시 강남구 강남대로',
  handleRemove: action('remove'),
  handleSetDefault: action('default set'),
};
export const Dialog_default_set = () => {
  const [init, setInit] = useState(false);
  const dialog = useDialog();
  const openDialog = useCallback(async () => {
    const confirm = await dialog.openConfirm(
      <>신청하신 투자를 취소하시겠습니까?</>,
    );
  }, [dialog, init]);
  useEffect(() => {
    if (!init) {
      setTimeout(() => {
        setInit(true);
      }, 500);
    }
  }, [init]);
  return (
    <Dialog.Provider>
      <div
        css={css`
          height: 700px;
        `}
      >
        <button onClick={openDialog}>open dialog</button>
      </div>
    </Dialog.Provider>
  );
};
