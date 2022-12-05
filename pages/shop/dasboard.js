import { Image, ScrollView, StyleSheet, } from 'react-native';
import { MenuItem, ProfileCard, Stats, StatTable } from '../../style/dashboard';
import { Card, Col, Container, Flex, H3, H6, P, PuiSafeAreaView, Section, Seperator, Small } from '../../style/global';

export default function Dashboard() {

  return (
    <PuiSafeAreaView>
      <Container>
        <ScrollView showsVerticalScrollIndicator={false}>
          <ProfileCard pad={0} >
            <Flex v='center'>
              <Image style={styles.image} source={require('../../assets/btn-icons/shop.png')} />
              <Section>
                <P size={14} color='#00B207' >Shop Dashoard</P>
                <H3 >Bisikit Store</H3>
                <P size={12} muted>#bisikit_store</P>
              </Section>
            </Flex>
          </ProfileCard>

          <Section pt={10}>
            <Stats bg='#00000010'>
              <H6>Balance</H6>
              <H6>N12000</H6>
            </Stats>
            <Stats bg='#00B20710'>
              <H6>Transactions</H6>
              <H6>2</H6>
            </Stats>
            <Stats bg='#F5151510'>
              <H6>Products</H6>
              <H6>N000</H6>
            </Stats>
          </Section>

          <Section pt={20}>
            <P>Menus</P>
            <Flex h='space-between' pt={10} wrap='wrap'>
              <Col count={4}>
                <MenuItem bg='#F3070710'>
                  <Flex h='center' v='center' direction='column'>
                    <Image style={styles.btn_icon} source={require('../../assets/btn-icons/shop.png')} />
                    <Small>Products</Small>
                  </Flex>
                </MenuItem>
              </Col>

              <Col count={4}>
                <MenuItem bg='#00B20710'>
                  <Flex h='center' v='center' direction='column'>
                    <Image style={styles.btn_icon} source={require('../../assets/btn-icons/transactions.png')} />
                    <Small>Orders</Small>
                  </Flex>
                </MenuItem>
              </Col>

              <Col count={4}>
                <MenuItem bg='#00000010'>
                  <Flex h='center' v='center' direction='column'>
                    <Image style={styles.btn_icon} source={require('../../assets/btn-icons/adverts.png')} />
                    <Small>Settings</Small>
                  </Flex>
                </MenuItem>
              </Col>

              <Col count={4}>
                <MenuItem bg='#F3070710'>
                  <Flex h='center' v='center' direction='column'>
                    <Image style={styles.btn_icon} source={require('../../assets/btn-icons/profile.png')} />
                    <Small>News</Small>
                  </Flex>
                </MenuItem>
              </Col>

              <Col count={4} pt={4}>
                <MenuItem bg='#00B20710'>
                  <Flex h='center' v='center' direction='column'>
                    <Image style={styles.btn_icon} source={require('../../assets/btn-icons/profile.png')} />
                    <Small>Earnings</Small>
                  </Flex>
                </MenuItem>
              </Col>

              <Col count={4} pt={4}>
                <MenuItem bg='#00000010'>
                  <Flex h='center' v='center' direction='column'>
                    <Image style={styles.btn_icon} source={require('../../assets/btn-icons/profile.png')} />
                    <Small>Payouts</Small>
                  </Flex>
                </MenuItem>
              </Col>

              <Col count={4} pt={4}></Col>
              <Col count={4} pt={4}></Col>
            </Flex>
          </Section>

          <Section pt={20}>
            <Card rounded={5} >
              <H6 muted>Contact Details</H6>
              <Section>
                <P>No 7, Agbada Road,Iju Ishaga, Lagos</P>
                <P>bisikits_shops@gmail.com</P>
                <P>+234704293954</P>
              </Section>
            </Card>
          </Section>

          <Section pt={20}>
            <Card rounded={5} >
              <H6 muted>Shop Status</H6>
              <Section>
                <StatTable>
                  <P muted>Shop Orders</P>
                  <P>$000</P>
                </StatTable>

                <StatTable>
                  <P muted>Shop Status</P>
                  <P>Active</P>
                </StatTable>

                <StatTable>
                  <P muted>Shop Visibility</P>
                  <P>Published</P>
                </StatTable>

                <StatTable>
                  <P muted>Shop Approval Status</P>
                  <P>Approved</P>
                </StatTable>
              </Section>
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
    height: 130,
    resizeMode: 'contain',
    width: 130,
    // backgroundColor: '#F3070710',
    marginRight: 10,
    borderRadius: 5,
  },
  btn_icon: {
    height: 45,
    width: 45,
    resizeMode: 'contain',
    marginBottom: 10,
  },
});
