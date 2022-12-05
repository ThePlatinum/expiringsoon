import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { MenuItem, ProfileCard, Stats, StatTable } from '../../style/dashboard';
import { Badge, Card, Col, Container, Flex, H3, H5, H6, P, PuiPressable, PuiPressableText, PuiSafeAreaView, Section, Seperator, Small } from '../../style/global';

export default function Dashboard({ navigation }) {

  return (
    <PuiSafeAreaView>
      <Container>
        <ScrollView showsVerticalScrollIndicator={false}>
          <ProfileCard>
            <Flex horizontal='center' vertical='center' direction='column' gap={5}>
              <Image style={styles.image} source={require('../../assets/avater.jpg')} />
              <P size={12}>Welcome</P>
              <H3 size={30}>Emmanuel Adesina</H3>
              <Badge size={12} color='white' >Business Plan</Badge>
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
                <MenuItem bg='#F3070710' onPress={() => navigation.navigate('ShopStack')} >
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

          <Section pt={20}>
            <Card rounded={5} >
              <H6 muted>Subscription Detail</H6>
              <Section>
                <H5>Business Plan</H5>
                <StatTable>
                  <P muted>Expires in</P>
                  <P>12 days</P>
                </StatTable>
                <StatTable>
                  <P muted>Auto Renewal</P>
                  <P>Disabled</P>
                </StatTable>
              </Section>
              <Flex>
                <PuiPressable outline>
                  <PuiPressableText outline size={14}>Subscribe</PuiPressableText>
                </PuiPressable>
              </Flex>
            </Card>
          </Section>

          <Seperator v={15} />
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
