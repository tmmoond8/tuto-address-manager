import { css, SerializedStyles } from '@emotion/core';

export const Color = {
  Black: '#000000',
  Grey2f: '#2f2f2f',
  Grey36: '#363636',
  Grey3d: '#3d3d3d',
  Grey3e: '#3e3e3e',
  Grey8c: '#8c8c8c',
  Grey97: '#979797',
  Grey98: '#989898',
  Grey99: '#999999',
  Greyaa: '#aaaaaa',
  Greyad: '#adadad',
  Greycd: '#cdcdcd',
  Greyd3: '#d3d3d3',
  Greye1: '#e1e1e1',
  Greyf4: '#f4f4f4',
  White: '#ffffff',
  GreyA70: 'grba(107, 107, 107, 0.7',
  GreyA80: 'grba(118, 118, 118, 0.8',
  Sky: '#4ea3f8',
  Red: '#ff5b5c',
  Tomato: '#ed635e',
};

export const tablet = (style: SerializedStyles): SerializedStyles => css`
  @media (min-width: ${786}px) {
    ${style};
  }
`;

export const desktop = (style: SerializedStyles): SerializedStyles => css`
  @media (min-width: ${1024}px) {
    ${style};
  }
`;
