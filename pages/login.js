import { useState } from 'react';
import { ScrollView } from 'react-native';
import { FootNote } from '../components/auths';
import { AuthLogo } from '../components/auths';
import Loader from '../components/loader';
import {
  Container, Flex, InputField, InputGroup,
  InputLabel, PuiPressable, PuiPressableText,
  PuiSafeAreaView, Seperator
} from '../style/global';
import axios from '../utils/axios';
import securestore from '../utils/securestore';

export default function Login({ navigation }) {

  const [values, setValues] = useState({
    email: '',
    password: '',
  })

  const [loading, setLoading] = useState(false)
  const valueChange = (name, val) => setValues({ ...values, [name]: val })

  const handleSubmit = async () => {
    setLoading(true)
    await axios.post('re-issue-token', values)
      .then(response => {
        if (response.data.status) {
          securestore.save('user_session', response.data.token)
          navigation.navigate('UserStack')
          setLoading(false)
        }
      })
      .catch(error => setLoading(false));
  }

  return (
    loading ?
      <Loader /> :
      <PuiSafeAreaView>
        <Container pr={30} pl={30} bg={'#FFF'}>
          <ScrollView showsVerticalScrollIndicator={false}>
            {/* TODO: keyboardDismissMode, centerContent */}

            <Seperator v={100} />

            <Flex h='center' v='center' direction='column' >
              <AuthLogo auth='Login' />
            </Flex>

            <InputGroup>
              <InputLabel>Email Address</InputLabel>
              <InputField autoComplete='email' placeholder='e.g agoodperson@gmail.com' keyboardType='email-address' textContentType='emailAddress' onChangeText={change => valueChange('email', change)} />
            </InputGroup>

            <InputGroup>
              <InputLabel>Password</InputLabel>
              <InputField secureTextEntry={true} textContentType='password' placeholder='********' onChangeText={change => valueChange('password', change)} />
            </InputGroup>

            <Seperator v={20} />

            <PuiPressable onPress={handleSubmit} >
              <PuiPressableText>Login</PuiPressableText>
            </PuiPressable>

            <Flex h='center' v='center' direction='column' >
              <FootNote auth='login' navigation={navigation} />
            </Flex>

            <Seperator v={100} />

          </ScrollView>
        </Container>
      </PuiSafeAreaView>
  );
}
