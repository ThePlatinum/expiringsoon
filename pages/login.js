import { useState } from 'react';
import { ScrollView } from 'react-native';
import { FootNote } from '../components/auths';
import {AuthLogo} from '../components/auths';
import { 
  Container, Flex, InputField, InputGroup,
  InputLabel, PuiPressable, PuiPressableText,
  PuiSafeAreaView } from '../style/global';

export default function Login() {

  const [values, setValues] = useState({
    email: '',
    password: '',
  })

  const valueChange = (name, val) => setValues({ ...values, [name]: val})

  const handleSubmit =()=>{
    console.log(values);
  }

  return (
    <PuiSafeAreaView>
      <Container>
        <ScrollView>
          {/* TODO: keyboardDismissMode, centerContent */}

          <Flex horizontal='center' vertical='center' direction='column' >
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

          <PuiPressable onPress={handleSubmit} >
            <PuiPressableText>Login</PuiPressableText>
          </PuiPressable>

          <Flex horizontal='center' vertical='center' direction='column' >
            <FootNote auth='login' />
          </Flex>

        </ScrollView>
      </Container>
    </PuiSafeAreaView>
  );
}
