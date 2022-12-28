import { Pressable, StyleSheet } from 'react-native';
import { Flex, H6 } from '../style/global';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

export default function Header({ navigation, name, options }) {

  return (
    <Flex style={styles.header} h='space-between'>
      <Flex v='center'>
        <Pressable onPress={() => navigation.goBack(null)}>
          <MaterialCommunityIcons name='arrow-left' style={styles.back} size={18} />
        </Pressable>
        <H6 style={styles.title} >{name}</H6>
      </Flex>
      {options &&
        <Pressable>
          <MaterialCommunityIcons name='dots-vertical' style={styles.options} size={20} />
        </Pressable>}
    </Flex>
  );
}

const styles = StyleSheet.create({
  back: {
    marginRight: 10,
    padding: 8,
    borderRadius: 500,
    backgroundColor: '#00B20725',
    borderWidth: 1,
  },
  title: {
    fontWeight: '700',
    marginBottom: 0,
  },
  header: {
    marginBottom: 10,
    marginTop: 5,
  },
  options: {
    marginLeft: 10,
    padding: 10,
  },
});
