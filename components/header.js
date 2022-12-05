import { Pressable, StyleSheet } from 'react-native';
import { Flex, H5, Section } from '../style/global';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

export default function Header({ navigation, name, options }) {

  return (
    <Pressable onPress={()=>navigation.goBack(null)}>
      <Flex style={styles.header} h='space-between'>
        <Flex v='center'>
          <MaterialCommunityIcons name='arrow-left' style={styles.back} size={20} />
          <H5 style={styles.title} >{name}</H5>
        </Flex>
        {options ??
          <Pressable>
            <MaterialCommunityIcons name='dots-vertical' style={styles.options} size={20} />
          </Pressable>
        }
      </Flex>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  back: {
    marginRight: 10,
    padding: 10,
    borderRadius: 500,
    backgroundColor: '#00B20725',
    borderWidth: 1,
  },
  title: {
    fontWeight: '700',
    marginBottom: 0,
  },
  header: {
    marginBottom: 5,
    marginTop: 5,
  },
  options: {
    marginLeft: 10,
    padding: 10,
  },
});
