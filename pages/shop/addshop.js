import { useState } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import Header from '../../components/header';
import {
  Card, Container, Flex, InputField, InputGroup,
  InputLabel, PuiPressable, PuiPressableText,
  PuiSafeAreaView, Seperator
} from '../../style/global';
import SelectDropdown from 'react-native-select-dropdown'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

export default function AddShop({ navigation }) {

  const [values, setValues] = useState({
    shopname: '',
    phone_number: '',
    email: '',
    address: '',
    city: '',
    state: '',
  })

  const [city, setCity] = useState([
    'Abuja', 'Oyo', 'Akure', 'Lagos'
  ])

  const [state, setState] = useState([
    'Abuja', 'Oyo', 'Akure', 'Lagos'
  ])

  const valueChange = (name, val) => setValues({ ...values, [name]: val })

  const handleSubmit = (draft) => {
    navigation.navigate('shop_list')
  }

  return (
    <PuiSafeAreaView>
      <Container>
        <Header name='Add New Shop' navigation={navigation} />
        <ScrollView showsVerticalScrollIndicator={false}>

          <Seperator v={15} />

          <Card borderless pad={20}>
            <InputGroup>
              <InputLabel>Shop Name</InputLabel>
              <InputField placeholder='e.g John' onChangeText={change => valueChange('shopname', change)} />
            </InputGroup>

            <InputGroup>
              <InputLabel>Shop Email</InputLabel>
              <InputField autoComplete='email' placeholder='e.g agoodcompanyemail@gmail.com' keyboardType='email-address' textContentType='emailAddress' onChangeText={change => valueChange('email', change)} />
            </InputGroup>

            <InputGroup>
              <InputLabel>Phone Number</InputLabel>
              <InputField placeholder='Local Format e.g 08012345678' keyboardType='number-pad' onChangeText={change => valueChange('phone_number', change)} />
            </InputGroup>

            <InputGroup>
              <InputLabel>Street Address</InputLabel>
              <InputField placeholder='e.g No 7, Somewhere on Earth' onChangeText={change => valueChange('address', change)}
                multiline numberOfLines={3} autoComplete='street-address' />
            </InputGroup>

            <InputGroup>
              <InputLabel>Street Address</InputLabel>
              <SelectDropdown
                data={city} onSelect={(item, index) => valueChange('city', item)}
                defaultButtonText='Select City'
                buttonStyle={styles.dropdown_btn}
                buttonTextStyle={styles.dropdown_btn_text}
                renderDropdownIcon={isOpened => {
                  return <MaterialCommunityIcons name={isOpened ? 'chevron-up' : 'chevron-down'} color={'#444'} size={18} />;
                }}
                dropdownIconPosition={'right'}
              />
            </InputGroup>

            <InputGroup>
              <InputLabel>State</InputLabel>
              <SelectDropdown
                data={state} onSelect={(item, i) => valueChange('state', item)}
                defaultButtonText='Select State'
                buttonStyle={styles.dropdown_btn}
                buttonTextStyle={styles.dropdown_btn_text}
                renderDropdownIcon={isOpened => {
                  return <MaterialCommunityIcons name={isOpened ? 'chevron-up' : 'chevron-down'} color={'#444'} size={18} />;
                }}
                dropdownIconPosition={'right'}
              />
            </InputGroup>

          </Card>

          <Seperator v={15} />

          <Flex h='center' >
            <PuiPressable onPress={() => handleSubmit(true)} outline>
              <PuiPressableText outline> Save as draft </PuiPressableText>
            </PuiPressable>

            <Seperator h={15} />

            <PuiPressable onPress={() => handleSubmit(false)} >
              <PuiPressableText> Save & Publish </PuiPressableText>
            </PuiPressable>
          </Flex>

          <Seperator v={15} />
        </ScrollView>
      </Container>
    </PuiSafeAreaView>
  );
}

const styles = StyleSheet.create({
  dropdown_btn: {
    backgroundColor: '#FFF',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#00B20725',
    width: '100%',
    padding: 10,
  },
  dropdown_btn_text: {
    color: '#444',
    textAlign: 'left'
  }
});