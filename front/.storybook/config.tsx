/** @jsx jsx */
import { Fragment } from 'react';
import { jsx } from '@emotion/core';
import { addDecorator } from '@storybook/react';
import { Global } from '@emotion/core';
import resetStyles from '../src/resetCss';

addDecorator((story) => (
  <Fragment>
    <Global styles={resetStyles} />
    {story()}
  </Fragment>
));
