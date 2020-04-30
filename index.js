'use strict';

const backgroundColor = '#282828';
const foregroundColor = '#eeeeee';
const borderColor = '#282828';
const cursorColor = '#eeeeee';
const colors = {
  black: '#282828',
  red: '#f43753',
  green: '#c9d05c',
  yellow: '#ffc24b',
  blue: '#bd93f9',
  magenta: '#ff79c6',
  cyan: '#8be9fd',
  white: 'bfbfbf',
  lightBlack: '#4c4c4c',
  lightRed: '#f43753',
  lightGreen: '#c9d05c',
  lightYellow: '#ffc24b',
  lightBlue: '#b3deef',
  lightMagenta: '#d3b987',
  lightCyan: '#73cef4',
  lightWhite: '#feffff'
};

exports.decorateConfig = config => {
  return Object.assign({}, config, {
    backgroundColor,
    foregroundColor,
    borderColor,
    cursorColor,
    colors,
    termCSS: `
      ${config.termCSS || ''}
    `,
    css: `
      ${config.css || ''}
      .tabs_list .tab_tab.tab_active .tab_text  {
	      background: ${backgroundColor};
      }
      .tab_active:before {
	      border-color: ${borderColor};
      }
    `
  });
};
