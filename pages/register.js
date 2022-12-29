import { useState } from 'react';
import { ScrollView } from 'react-native';
import { FootNote } from '../components/auths';
import { AuthLogo } from '../components/auths';
import {
  Container, Flex, InputField, InputGroup,
  InputLabel, PuiPressable, PuiPressableText,
  PuiSafeAreaView,
  Seperator
} from '../style/global';
import axios from '../utils/axios';
import securestore from '../utils/securestore';

export default function Register({ navigation }) {

  const [values, setValues] = useState({
    // firstname: '',
    // lastname: '',
    // phone_number: '',
    // email: '',
    // password: '',
    // confirm_password: '',
  })

  const [loading, setLoading] = useState(false)
  const valueChange = (name, val) => setValues({ ...values, [name]: val })

  const handleSubmit = async () => {
    setLoading(true)

    if (values.password != values.confirm_password) return;
    try {
      await axios.post('get-started', values)
        .then(res => {
          if (res.data.status) {
            securestore.save('user_session', res.data.token)
            navigation.navigate('UserStack')
            setLoading(false)
          }
        })
        .catch(e => { });
    } catch (e) {
      setLoading(false)
    }
  }


  return (
    loading ?
      <Loader /> :
      <PuiSafeAreaView>
        <Container pr={30} pl={30} bg={'#FFF'}>
          <ScrollView showsVerticalScrollIndicator={false}>

            <Flex h='center' v='center' direction='column' >
              <AuthLogo auth='Register' />
            </Flex>

            <InputGroup>
              <InputLabel>First Name</InputLabel>
              <InputField placeholder='e.g John' onChangeText={change => valueChange('fname', change)} />
            </InputGroup>

            <InputGroup>
              <InputLabel>Last Name</InputLabel>
              <InputField placeholder='e.g Doe' onChangeText={change => valueChange('lname', change)} />
            </InputGroup>

            <InputGroup>
              <InputLabel>Phone Number</InputLabel>
              <InputField placeholder='Local Format e.g 08012345678' keyboardType='number-pad' onChangeText={change => valueChange('phone', change)} />
            </InputGroup>

            <InputGroup>
              <InputLabel>Email Address</InputLabel>
              <InputField autoComplete='email' placeholder='e.g agoodperson@gmail.com' keyboardType='email-address' textContentType='emailAddress' onChangeText={change => valueChange('email', change)} />
            </InputGroup>

            <InputGroup>
              <InputLabel>Password</InputLabel>
              <InputField secureTextEntry={true} textContentType='password' placeholder='********' onChangeText={change => valueChange('password', change)} />
            </InputGroup>

            <InputGroup>
              <InputLabel>Confirm Password</InputLabel>
              <InputField secureTextEntry={true} textContentType='password' placeholder='********' onChangeText={change => valueChange('confirm_password', change)} />
            </InputGroup>

            <Seperator v={20} />

            <PuiPressable onPress={handleSubmit} >
              <PuiPressableText>Register</PuiPressableText>
            </PuiPressable>

            <Flex h='center' v='center' direction='column' >
              <FootNote auth='register' navigation={navigation} />
            </Flex>

          </ScrollView>
        </Container>
      </PuiSafeAreaView>
  );
}
