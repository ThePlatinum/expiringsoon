import { useState } from 'react';
import { ScrollView } from 'react-native';
import { FootNote } from '../components/auths';
import { AuthLogo } from '../components/auths';
import { 
  Container, Flex, InputField, InputGroup,
  InputLabel, PuiPressable, PuiPressableText,
  PuiSafeAreaView } from '../style/global';

export default function Register({ navigation }) {

  const [values, setValues] = useState({
    firstname: '',
    lastname: '',
    phone_number: '',
    email: '',
    password: '',
    confirm_password: '',
  })

  const valueChange = (name, val) => setValues({ ...values, [name]: val})

  const handleSubmit =()=>{
    navigation.navigate('UserStack')
  }

  return (
    <PuiSafeAreaView>
      <Container>
        <ScrollView showsVerticalScrollIndicator={false}>
          {/* TODO: keyboardDismissMode, centerContent */}

          <Flex h='center' v='center' direction='column' >
            <AuthLogo auth='Register' />
          </Flex>

          <InputGroup>
            <InputLabel>First Name</InputLabel>
            <InputField placeholder='e.g John' onChangeText={change => valueChange('firstname', change)} />
          </InputGroup>

          <InputGroup>
            <InputLabel>Last Name</InputLabel>
            <InputField placeholder='e.g Doe' onChangeText={change => valueChange('lastname', change)} />
          </InputGroup>

          <InputGroup>
            <InputLabel>Phone Number</InputLabel>
            <InputField placeholder='Local Format e.g 08012345678' keyboardType='number-pad' onChangeText={change => valueChange('phone_number', change)} />
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

          <PuiPressable onPress={handleSubmit} >
            <PuiPressableText>Register</PuiPressableText>
          </PuiPressable>

          <Flex h='center' v='center' direction='column' >
            <FootNote auth='register' navigation={navigation}/>
          </Flex>

        </ScrollView>
      </Container>
    </PuiSafeAreaView>
  );
}
