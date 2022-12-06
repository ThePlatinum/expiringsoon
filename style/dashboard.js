import styled from "styled-components";
import { Card, Flex } from "./global";

// Colors
const color_primary = '00B207'
const color_secondary = 'F51515'
const color_black = '000000'
const color_white = 'FFFFFF'

export const ProfileCard = styled(Card)`
  border-radius: 5px;
  background-color: #${color_primary}50;
  border: 0;
`

export const Stats = styled(Flex)`
  border-radius: 5px;
  background-color: ${props => props.bg ?? 'black'};
  padding: 10px 15px;
  margin: 5px 0px;
  justify-content: space-between;
`

export const MenuItem = styled.Pressable`
  border-radius: 5px;
  background-color: ${props => props.bg ?? 'black'};
  padding: 10px;
  width: 100%;
`

export const StatTable = styled(Flex)`
  padding: 10px 0;
  justify-content: space-between;
  border-bottom-width: 1px;
  border-bottom-color: #${color_black}25;
`