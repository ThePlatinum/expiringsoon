import { FlatList, Image, Pressable, ScrollView, StyleSheet } from 'react-native';
import Header from '../../components/header';
import { Card, Container, Flex, H4, H6, P, PuiPressable, PuiPressableText, PuiSafeAreaView, Section, Seperator } from '../../style/global';
import { ShopListCard } from '../../style/shop';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

export default function ShopList({ navigation }) {

  const Shops = [
    {
      id: 1,
      name: 'Bisikit Store',
      image: 'bisikit_tore',
      product: 69,
      balance: 45000,
    },
    {
      id: 2,
      name: 'Platinum Store',
      image: 'platinum_tore',
      product: 104,
      balance: 145000,
    },
    {
      id: 3,
      name: 'Bisikit Store',
      image: 'bisikit_tore',
      product: 69,
      balance: 45000,
    },
    {
      id: 4,
      name: 'Platinum Store',
      image: 'platinum_tore',
      product: 104,
      balance: 145000,
    },
    {
      id: 5,
      name: 'Bisikit Store',
      image: 'bisikit_tore',
      product: 69,
      balance: 45000,
    },
    {
      id: 6,
      name: 'Platinum Store',
      image: 'platinum_tore',
      product: 104,
      balance: 145000,
    },
  ];

  const ShopView = ({ shop }) => {
    return (
      <ShopListCard>
        <Flex v='center' style={styles.list} >
          <Image style={styles.image} source={require('../../assets/btn-icons/shop.png')} />
          <Section>
            <H4>{shop.name}</H4>
            <P muted>{shop.product} products</P>
            <P muted>{shop.balance} in wallet</P>
          </Section>
          <Pressable onPress={() => navigation.navigate('ShopStack')} style={styles.absolute}>
            <MaterialCommunityIcons name='arrow-right' style={styles.select} size={20} />
          </Pressable>
        </Flex>
      </ShopListCard>
    )
  }

  return (
    <PuiSafeAreaView>
      <Container>
        <Header name='My Shops' navigation={navigation} />

        <FlatList
          data={Shops}
          renderItem={({ item }) => <ShopView shop={item} />}
          keyExtractor={shop => shop.id}
        />

        <PuiPressable>
          <PuiPressableText >Create New Shop</PuiPressableText>
        </PuiPressable>

        <Seperator v={5} />
      </Container>
    </PuiSafeAreaView>
  );
}

const styles = StyleSheet.create({
  image: {
    height: 120,
    resizeMode: 'contain',
    width: 120,
    backgroundColor: '#F3070710',
    marginRight: 15,
    borderRadius: 5,
  },
  select: {
    padding: 8,
    backgroundColor: '#F3070705',
    // borderWidth: 1,
    borderRadius: 500,
  },
  list: {
    position: 'relative',
  },
  absolute: {
    borderRadius: 500,
    position: 'absolute',
    right: 8,
    top: 8,
  },
});
