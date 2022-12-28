import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import { color_primary, P, Seperator } from '../style/global';

export default Loader = ({text}) => (
  <View style={{
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#CCC5',
    alignItems: 'center'
    }}>
    <ActivityIndicator size="small" color={'#'+color_primary} />
    <Seperator v={15} />
    <P size={10}>{text ?? 'Loading'}</P>
  </View>
);