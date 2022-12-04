import styled from 'styled-components/native';

// Consts
const input_font_size = 16
const p_font_size = 14;

// Colors
const color_primary = '00B207'
const color_secondary = 'F51515'
const color_black = '000000'
const color_white = 'FFFFFF'

// Base Texts
// TODO: Allow custom font
const BasePuiText = styled.Text`
  font-family: 'merriweather-Light';
  color: ${props => props.color ?? 'black'};
`
const BasePuiTextInput = styled.TextInput`
  font-family: 'merriweather-Light';
`

// Layout
export const Container = styled.View`
  flex: 1;
  background-color: #fff;
  padding-left: 10px;
  padding-right: 10px;
`;

export const PuiSafeAreaView = styled.SafeAreaView`
  height: 100%;
  padding-top: 25px;
`;
// TODO: Use device statusbar height in android

// TODO: Use as row and col
export const Col = styled.View`
  width: ${props => props.count ? (100/props.count)-1 : 100}%;
`
export const Section = styled.View`
  padding-top: ${props => props.pt ?? 0}px;
  padding-bottom: ${props => props.pb ?? 0}px;
  ${'' /* padding-left: ${props => props.pl ?? 0}px;
  padding-right: ${props => props.pr ?? 0}px; */}
`
// TODO: What if it was not set at all

// Displays
export const Flex = styled(Section)`
  display; flex;
  justify-content: ${props => props.horizontal ?? 'flex-start'};
  align-items: ${props => props.vertical ?? 'flex-start'};
  flex-direction: ${props => props.direction ?? 'row'};
  gap: ${props => props.gap ?? 0}px;
  flex-wrap: ${props => props.wrap ?? 'nowrap'};
`;
// TODO: Fix 'gap'


// Form and Inputs
export const InputField = styled(BasePuiTextInput)`
  border: 1px #${color_primary}25 solid;
  border-radius: 5px;
  width: 100%;
  padding: 10px;
  font-size: ${props => props.size ?? input_font_size}px;
`;

export const InputLabel = styled(BasePuiText)`
  padding-bottom: 5px;
  font-size: ${props => props.size ?? input_font_size}px;
`;

export const InputGroup = styled.View`
  padding-bottom: 20px;
`;


// Buttons
export const PuiPressable = styled.Pressable`
  padding: 10px;
  margin: 10px 0;
  color: #${color_primary};
  border: 1px #${color_primary}25 solid;
  border-radius: 5px;
  background-color: #${props => props.outline ?? color_primary};
`;

export const PuiPressableText = styled(BasePuiText)`
  color: #${props => props.outline ? color_primary : color_white};
  font-size: ${props => props.size ?? input_font_size + 2}px;
  text-align: center;
`;


// Components
export const Card = styled.View`
  border: 1px #${color_black}25 solid;
  padding: 15px 10px;
`;
export const Badge = styled(BasePuiText)`
  border-radius: 20px;
  padding: 5px 15px;
  font-size: ${props => props.size ?? input_font_size - 2}px;
  background-color: #${props => props.bg ?? color_primary};
`;


// Fonts
const Header = styled(BasePuiText)`
  margin-top: 2px;
  margin-bottom: 4px;
`
export const H1 = styled(Header)`
  font-size: ${props => props.size ?? p_font_size + 12}px;
  font-weight: 800;
`
export const H2 = styled(Header)`
  font-size: ${props => props.size ?? p_font_size + 10}px;
  font-weight: 800;
`
export const H3 = styled(Header)`
  font-size: ${props => props.size ?? p_font_size + 8}px;
  font-weight: 600;
`
export const H4 = styled(Header)`
  font-size: ${props => props.size ?? p_font_size + 6}px;
  font-weight: 600;
`
export const H5 = styled(Header)`
  font-size: ${props => props.size ?? p_font_size + 4}px;
  font-weight: 500;
`
export const H6 = styled(Header)`
  font-size: ${props => props.size ?? p_font_size + 2}px;
  font-weight: 500;
`
export const P = styled(BasePuiText)`
  font-size: ${props => props.size ?? p_font_size}px;
  font-weight: 400;
`
export const Small = styled(BasePuiText)`
  font-size: ${props => props.size ?? p_font_size - 2}px;
  font-weight: 400;
`
// ${props => props.forEach(element => { })}
// TODO: Fetch other props


// Heights and Widths


// Modal