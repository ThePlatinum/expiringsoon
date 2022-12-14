import { BackHandler, Image, Pressable, ScrollView, StyleSheet } from 'react-native';
import { MenuItem, ProfileCard, Stats, StatTable } from '../../style/dashboard';
import { Badge, Card, Col, Container, Flex, H3, H5, H6, P, PuiPressable, PuiPressableText, PuiSafeAreaView, Section, Seperator, Small } from '../../style/global';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { useEffect, useState } from 'react';
import securestore from '../../utils/securestore';
import Loader from '../../components/loader';
import axios from '../../utils/axios';

export default function Dashboard({ navigation }) {

  const [loading, setLoading] = useState(false)
  const [user, setUser] = useState(null)

  useEffect(() => {
    const backHandler = BackHandler.addEventListener('hardwareBackPress', () => true)
    return () => backHandler.remove()
  }, [])

  const loadUser = async () => {
    setLoading(true)
    try {
      await axios.get('user', { headers: { Authorization: `Bearer ${await securestore.get('user_session')}` } })
        .then(res => {
          if (res) {
            securestore.save('user', JSON.stringify(res.data))
            setLoading(false)
          }
        })
        .catch(e => { console.log('e', e) });
    } catch (e) {
      setLoading(false)
    }
  }
  useEffect(() => {
    async function load() {
      const users = JSON.parse(await securestore.get('user'))
      if (users) loadUser()
      setUser(users)
    }
    load()
  }, [])

  return (
    loading ?
      <Loader /> :
      <PuiSafeAreaView>
        <Container>
          <ScrollView showsVerticalScrollIndicator={false}>
            <ProfileCard pad={25} style={styles.relative} >
              <Flex h='center' v='center' direction='column' gap={5}>
                <Image style={styles.image} source={require('../../assets/avater.jpg')} />
                <P size={12}>Welcome</P>
                <H3 size={30}>{user?.lname} {user?.fname}</H3>
                <Badge size={12} color='white' >Business Plan</Badge>
              </Flex>
              <Pressable onPress={() => navigation.navigate('notifications')} style={styles.absolute}>
                <MaterialCommunityIcons name='bell' style={styles.icon} size={24} />
              </Pressable>
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
              <Flex h='space-between' pt={10}>
                <Col count={4}>
                  <MenuItem bg='#F3070710' onPress={() => navigation.navigate('shop_list')} >
                    <Flex h='center' v='center' direction='column'>
                      <Image style={styles.btn_icon} source={require('../../assets/btn-icons/shop.png')} />
                      <Small>My Shops</Small>
                    </Flex>
                  </MenuItem>
                </Col>

                <Col count={4}>
                  <MenuItem bg='#00B20710' onPress={() => navigation.navigate('transactions')}>
                    <Flex h='center' v='center' direction='column'>
                      <Image style={styles.btn_icon} source={require('../../assets/btn-icons/transactions.png')} />
                      <Small>Deals</Small>
                    </Flex>
                  </MenuItem>
                </Col>

                <Col count={4}>
                  <MenuItem bg='#00000010' onPress={() => navigation.navigate('adverts')}>
                    <Flex h='center' v='center' direction='column'>
                      <Image style={styles.btn_icon} source={require('../../assets/btn-icons/adverts.png')} />
                      <Small>Adverts</Small>
                    </Flex>
                  </MenuItem>
                </Col>

                <Col count={4}>
                  <MenuItem bg='#F3070710' onPress={() => navigation.navigate('profile')}>
                    <Flex h='center' v='center' direction='column'>
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
                  <PuiPressable outline onPress={() => navigation.navigate('subscriptions')}>
                    <PuiPressableText outline size={14}>Subscribe</PuiPressableText>
                  </PuiPressable>
                </Flex>
              </Card>
            </Section>

            <Seperator v={20} />
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
  relative: {
    position: 'relative'
  },
  absolute: {
    borderRadius: 500,
    position: 'absolute',
    right: 20,
    top: 20,
  },
  icon: {
    padding: 8,
    backgroundColor: '#F3070705',
    borderRadius: 500,
  },
  card: {
    shadowOffset: {
      width: 100,
      height: 100,
    },
    shadowColor: 'gray',
  }
});
