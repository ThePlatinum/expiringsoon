import { Image } from "react-native"
import { P, Flex } from "../style/global"

export default Empty = ({ text }) => {
  return (
    <Flex direction={'column'} v={'center'}>
      <Image source={require('../assets/nodata.png')} style={{
        height: 500,
        width: 300,
        resizeMode: 'contain',
        marginBottom: 15,
      }} />
      <P align='center'> {text} </P>
    </Flex>
  )
}