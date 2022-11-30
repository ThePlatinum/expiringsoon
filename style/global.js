import styled from 'styled-components/native';

// Consts
const input_font_size = 16

// Colors
const color_primary = '00B207'
const color_secondary = 'F51515'
const color_black = '000000'
const color_white = 'FFFFFF'

// Base Texts
// TODO: Allow custom font
const BasePuiText = styled.Text`
  font-family: 'merriweather-Light';
`
const BasePuiTextInput = styled.TextInput`
  font-family: 'merriweather-Light';
`


// Layout
export const Container = styled.View`
  flex: 1;
  background-color: #fff;
  padding-left: 20px;
  padding-right: 20px;
`;

export const PuiSafeAreaView = styled.SafeAreaView`
  height: 100%;
  padding-top: 25px;
`;
// TODO: Use device statusbar height in android

// Displays
export const Flex = styled.View`
  display; flex;
  justify-content: ${props => props.horizontal ?? 'left'};
  align-items: ${props => props.vertical ?? 'left'};
  flex-direction: ${props => props.direction ?? 'row'};
  gap: ${props => props.gap ?? 0};
`;


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
  font-size: ${props => props.size ?? input_font_size+2}px;
  text-align: center;
`;



// Headers
// Heights and Widths