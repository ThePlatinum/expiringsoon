import { useState } from 'react';
import { ScrollView, StyleSheet, Image } from 'react-native';
import Header from '../../components/header';
import { Card, Container, Flex, H5, InputField, InputGroup, InputLabel, PuiPressable, PuiPressableText, PuiSafeAreaView, Seperator } from '../../style/global';
import * as ImagePicker from "expo-image-picker";

export default function Profile({ navigation }) {

  const [values, setValues] = useState({})
  const [image, setImage] = useState('../../assets/avater.jpg')

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library  require()
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 4],
      quality: 1,
    })
    
    if (!result.canceled) {
      setImage(result.assets[0].uri);
      console.log('result.assets[0].uri: ', result.assets[0].uri);
    }
  }

  const valueChange = (name, val) => setValues({ ...values, [name]: val })

  return (
    <PuiSafeAreaView>
      <Container>
        <Header name='My Profile' navigation={navigation} />
        <Seperator v={10} />

        <ScrollView showsVerticalScrollIndicator={false}>
          <Card>
            <Flex h='center' v='center' direction='column' >
              <Image style={styles.upload_image} source={{ uri: image }} />
              <PuiPressable outline radius={15} onPress={pickImage}>
                <PuiPressableText outline size={10}>Upload your picture</PuiPressableText>
              </PuiPressable>
            </Flex>

            <InputGroup>
              <InputLabel>First Name</InputLabel>
              <InputField placeholder='e.g John' disabled onChangeText={change => valueChange('firstname', change)} />
            </InputGroup>

            <InputGroup>
              <InputLabel>Last Name</InputLabel>
              <InputField placeholder='e.g Doe' onChangeText={change => valueChange('lastname', change)} />
            </InputGroup>

            <InputGroup bottom={5}>
              <InputLabel>Phone Number</InputLabel>
              <InputField placeholder='e.g 2347024394963' onChangeText={change => valueChange('phonr', change)} />
            </InputGroup>
          </Card>

          <Seperator v={25} />
          <Card>
            <H5>Change Password</H5>
            <InputGroup>
              <InputLabel>Current Password</InputLabel>
              <InputField secureTextEntry={true} textContentType='password' placeholder='********' onChangeText={change => valueChange('oldpassword', change)} />
            </InputGroup>

            <InputGroup>
              <InputLabel>New Password</InputLabel>
              <InputField secureTextEntry={true} textContentType='password' placeholder='********' onChangeText={change => valueChange('newpassword', change)} />
            </InputGroup>

            <InputGroup bottom={5}>
              <InputLabel>Confirm New Password</InputLabel>
              <InputField secureTextEntry={true} textContentType='password' placeholder='********' onChangeText={change => valueChange('confirmpassword', change)} />
            </InputGroup>

            <Flex>
              <PuiPressable >
                <PuiPressableText size={14}>Save New Password</PuiPressableText>
              </PuiPressable>
            </Flex>
          </Card>

          <Seperator v={25} />
          <Card>
            <H5>Change Access Pin</H5>
            <InputGroup>
              <InputLabel>New Pin</InputLabel>
              <InputField secureTextEntry={true} textContentType='password' placeholder='********' onChangeText={change => valueChange('oldpassword', change)} />
            </InputGroup>

            <InputGroup>
              <InputLabel>Confirm New Pin</InputLabel>
              <InputField secureTextEntry={true} textContentType='password' placeholder='********' onChangeText={change => valueChange('confirmpassword', change)} />
            </InputGroup>

            <InputGroup bottom={5}>
              <InputLabel>OTP</InputLabel>
              <Flex v='center' h='space-between' >
                <InputGroup top={0}>
                  <InputField secureTextEntry={true} textContentType='password' placeholder='********' onChangeText={change => valueChange('confirmpassword', change)} />
                </InputGroup>

                <PuiPressable outline >
                  <PuiPressableText outline size={14}>Send OTP</PuiPressableText>
                </PuiPressable>
              </Flex>
            </InputGroup>

            <Flex>
              <PuiPressable >
                <PuiPressableText size={14}>Save New Pin</PuiPressableText>
              </PuiPressable>
            </Flex>
          </Card>
          <Seperator v={20} />
        </ScrollView>
      </Container>
    </PuiSafeAreaView>
  );
}

const styles = StyleSheet.create({
  card: {
    shadowOffset: {
      width: 100,
      height: -10,
    },
    elevation: 1,
  },
  upload_image: {
    height: 130,
    width: 130,
    resizeMode: 'contain',
    borderRadius: 1000,
    marginBottom: 5,
  }
});