import { useState } from 'react';
import { ScrollView, StyleSheet, Image, Pressable } from 'react-native';
import Header from '../../components/header';
import {
  Card, Col, Container, Flex, H6, InputField, InputGroup,
  InputLabel, P, PuiPressable, PuiPressableText, PuiSafeAreaView,
  Seperator
} from '../../style/global';
import * as ImagePicker from "expo-image-picker";
import placeholder from '../../assets/avater.jpg'
import SelectDropdown from 'react-native-select-dropdown'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import DatePicker from '@react-native-community/datetimepicker';
import { InputText } from '../../style/shop';

export default function AddProduct({ navigation }) {

  const [values, setValues] = useState({
    date: new Date()
  })
  const [showdatepicker, setShow] = useState(false);
  const [image, setImage] = useState(Image.resolveAssetSource(placeholder).uri)

  const [category, setCategory] = useState([
    'Abuja', 'Oyo', 'Akure', 'Lagos'
  ])

  const selectDate = (e, date) => {
    setShow(false)
    valueChange('date', date)
  }

  const handleSubmit = () => {
  }

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
    }
  }

  const valueChange = (name, val) => setValues({ ...values, [name]: val })

  return (
    <PuiSafeAreaView>
      <Container>
        <Header name='Add New Product' navigation={navigation} />

        <ScrollView showsVerticalScrollIndicator={false}>
          <Card>
            <Flex h='center' v='center' direction='column' >
              <Image style={styles.upload_image} source={{ uri: image }} />
              <PuiPressable outline radius={15} onPress={pickImage}>
                <PuiPressableText outline size={10}>Select Product Image</PuiPressableText>
              </PuiPressable>
            </Flex>

            <InputGroup>
              <InputLabel>Product Name</InputLabel>
              <InputField placeholder='Product Name' onChangeText={change => valueChange('productname', change)} />
            </InputGroup>

            <InputGroup>
              <InputLabel>Product Description</InputLabel>
              <InputField placeholder='Product Description' onChangeText={change => valueChange('description', change)}
                multiline numberOfLines={4} autoComplete='street-address' />
            </InputGroup>

            <InputGroup>
              <InputLabel>No. in Stock</InputLabel>
              <InputField placeholder='0' keyboardType='number-pad' onChangeText={change => valueChange('instock', change)} />
            </InputGroup>

            <InputGroup>
              <InputLabel>Category</InputLabel>
              <SelectDropdown
                data={category} onSelect={(item, i) => valueChange('category', item)}
                defaultButtonText='Select Category'
                buttonStyle={styles.dropdown_btn}
                buttonTextStyle={styles.dropdown_btn_text}
                renderDropdownIcon={isOpened => {
                  return <MaterialCommunityIcons name={isOpened ? 'chevron-up' : 'chevron-down'} color={'#444'} size={18} />;
                }}
                dropdownIconPosition={'right'}
              />
            </InputGroup>

            <InputGroup>
              <InputLabel>Sub Category</InputLabel>
              <SelectDropdown
                data={category} onSelect={(item, i) => valueChange('category', item)}
                defaultButtonText='Select Sub Category'
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
          <Card>
            <H6>Pricing Details</H6>

            <InputGroup>
              <InputLabel>Unit Price</InputLabel>
              <InputField placeholder='Price for each' keyboardType='number-pad' onChangeText={change => valueChange('price', change)} />
            </InputGroup>

            <InputGroup>
              <InputLabel>Expiry Date</InputLabel>
              <Pressable onPress={() => { setShow(true) }} >
                <InputText >{String(values.date.toDateString())}</InputText>
              </Pressable>
              {showdatepicker && <DatePicker
                value={values.date}
                onChange={selectDate}
                mode='date'
              />}
            </InputGroup>

            <Seperator v={25} />
            <P muted>Discount Prices</P>
            <Flex h='space-between' pt={0} wrap>
              {[1, 2].map(j => {
                return (
                  <Col count={2} pb={0} key={j}>
                    <InputGroup>
                      <InputLabel>Below {j} months</InputLabel>
                      <InputField placeholder='Price for each' keyboardType='number-pad' onChangeText={change => valueChange('price'+{j}, change)} />
                    </InputGroup>
                  </Col>
                )
              })}
            </Flex>
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
          <Seperator v={20} />
        </ScrollView>
      </Container>
    </PuiSafeAreaView>
  );
}

const styles = StyleSheet.create({
  upload_image: {
    height: 130,
    width: 130,
    resizeMode: 'contain',
    marginBottom: 5,
  },
  dropdown_btn: {
    backgroundColor: '#FFF',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#00B20725',
    width: '100%',
    padding: 10,
    fontSize: 14
  },
  dropdown_btn_text: {
    color: '#444',
    textAlign: 'left',
    fontSize: 14
  }
});