import { css, SerializedStyles } from '@emotion/core';

export const Color = {
  Black: '#000000',
  Grey25: '#252525',
  Grey2F: '#2f2f2f',
  Grey36: '#363636',
  Grey3D: '#3d3d3d',
  Grey3E: '#3e3e3e',
  Grey8C: '#8c8c8c',
  Grey97: '#979797',
  Grey98: '#989898',
  Grey99: '#999999',
  GreyAA: '#aaaaaa',
  GreyAD: '#adadad',
  GreyCD: '#cdcdcd',
  GreyCE: '#cecece',
  GreyD3: '#d3d3d3',
  GreyE1: '#e1e1e1',
  GreyF4: '#f4f4f4',
  White: '#ffffff',
  GreyA50: 'rgba(47, 46, 46, 0.5)',
  GreyA70: 'rgba(107, 107, 107, 0.7)',
  GreyA80: 'rgba(118, 118, 118, 0.8)',
  Sky: '#4ea3f8',
  Red: '#ff5b5c',
  Tomato: '#ed635e',
  Transparent: 'transparent',
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
