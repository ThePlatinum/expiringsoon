import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { MenuItem, ProfileCard, Stats } from '../../style/dashboard';
import { Badge, Col, Container, Flex, H3, H6, P, PuiSafeAreaView, Section, Small } from '../../style/global';

export default function Dashboard({navigation}) {

  return (
    <PuiSafeAreaView>
      <Container>
        <ScrollView showsVerticalScrollIndicator={false}>
          <ProfileCard>
            <Flex horizontal='center' vertical='center' direction='column' gap={5}>
              <Image style={styles.image} source={require('../../assets/avater.jpg')} />
              <P size={12}>Welcome</P>
              <H3 size={30}>Emmanuel Adesina</H3>
              <Badge size={12} color='white' >Free Package</Badge>
            </Flex>
          </ProfileCard>

          <Section pt={10}>
            <Stats bg='#F51515'>
              <H6 color='white'>Your Balance</H6>
              <H6 color='white'>N000</H6>
            </Stats>
            <Stats>
              <H6 color='white' >Your Shops</H6>
              <H6 color='white'>2</H6>
            </Stats>
          </Section>

          <Section pt={20}>
            <P>Menus</P>
            <Flex horizontal='space-between' pt={10}>
              <Col count={4}>
                <MenuItem bg='#F3070710' onPress={()=>navigation.navigate('ShopStack')} >
                  <Flex horizontal='center' vertical='center' direction='column'>
                    <Image style={styles.btn_icon} source={require('../../assets/btn-icons/shop.png')} />
                    <Small>My Shops</Small>
                  </Flex>
                </MenuItem>
              </Col>

              <Col count={4}>
                <MenuItem bg='#00B20710'>
                  <Flex horizontal='center' vertical='center' direction='column'>
                    <Image style={styles.btn_icon} source={require('../../assets/btn-icons/transactions.png')} />
                    <Small>Deals</Small>
                  </Flex>
                </MenuItem>
              </Col>

              <Col count={4}>
                <MenuItem bg='#00000010'>
                  <Flex horizontal='center' vertical='center' direction='column'>
                    <Image style={styles.btn_icon} source={require('../../assets/btn-icons/adverts.png')} />
                    <Small>Adverts</Small>
                  </Flex>
                </MenuItem>
              </Col>

              <Col count={4}>
                <MenuItem bg='#F3070710'>
                  <Flex horizontal='center' vertical='center' direction='column'>
                    <Image style={styles.btn_icon} source={require('../../assets/btn-icons/profile.png')} />
                    <Small>Profile</Small>
                  </Flex>
                </MenuItem>
              </Col>
            </Flex>
          </Section>

        </ScrollView>
      </Container>
    </PuiSafeAreaView>
  );
}

const styles = StyleSheet.create({
  image: {
    height: 120,
    resizeMode: 'contain',
    width: 120,
    borderRadius: 1000,
    marginBottom: 20,
  },
  btn_icon: {
    height: 45,
    width: 45,
    resizeMode: 'contain',
    marginBottom: 10,
  },
});
