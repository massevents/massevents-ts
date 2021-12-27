import { create } from '@storybook/theming';
import logo from './logo.svg'

export default create({
  base: 'light',
  brandTitle: 'Mass Events',
  brandImage: logo,

  appBg: '#F5F3ED',
  appContentBg: '#fff',
  barBg: '#F5F3ED',
  appBorderColor: '#F5F3ED',
  appBorderRadius: 4,

  barTextColor: '#001871',
  barSelectedColor: '#001871',

  textColor: '#000722',

  fontBase: '"Assistant", Helvetica, sans-serif',
});