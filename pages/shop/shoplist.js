import { FlatList, Image, Pressable, ScrollView, StyleSheet } from 'react-native';
import Header from '../../components/header';
import { Container, Flex, H4, P, PuiPressable, PuiPressableText, PuiSafeAreaView, Section } from '../../style/global';
import { ShopListCard } from '../../style/shop';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { useState } from 'react';
import Empty from '../../components/empty';

export default function ShopList({ navigation }) {

  const [shops, setShops] = useState()

  const ShopView = ({ shop }) => {
    return (
      <ShopListCard rounded={1}>
        <Flex v='center' style={styles.list} >
          <Image style={styles.image} source={require('../../assets/btn-icons/shop.png')} />
          <Section>
            <H4>{shop?.name}</H4>
            <P muted>{shop?.product} products</P>
            <P muted>{shop?.balance} in wallet</P>
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
          data={shops}
          renderItem={({ item }) => <ShopView shop={item} />}
          keyExtractor={shop => shop.id}
          showsVerticalScrollIndicator={false}
          ListFooterComponent=<Empty text={'Empty Shop List'} />
        />

        <PuiPressable onPress={() => navigation.navigate('add_shop')}>
          <PuiPressableText>Create New Shop</PuiPressableText>
        </PuiPressable>
      </Container>
    </PuiSafeAreaView>
  )
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
