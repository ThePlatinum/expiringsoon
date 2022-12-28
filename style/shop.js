import styled from 'styled-components/native';
import { Section } from './global';

// Consts
const input_font_size = 16
const p_font_size = 14;

// Colors
const color_primary = '00B207'
const color_secondary = 'F51515'
const color_black = '000000'
const color_white = 'FFFFFF'
const color_primary_light = '00B20750'

export const ShopListCard = styled(Section)`
  border-right-width: 2px;
  padding: 0px;
  margin-top: 10px;
  elevation: 0.1;
`

export const InputText = styled.Text`
  font-family: 'merriweather-Light';
  border: 1px #${color_primary_light} solid;
  border-radius: 10px;
  width: 100%;
  padding: 10px;
  font-size: ${props => props.size ?? input_font_size}px;
`;