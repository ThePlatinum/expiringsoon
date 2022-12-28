import { ScrollView, Image } from 'react-native';
import Header from '../../components/header';
import { Card, Col, Container, Flex, H5, H6, InputField, P, PuiSafeAreaView, Section, Seperator } from '../../style/global';

export default function Products({ navigation }) {
  const products = [
    {
      id: 1,
      name: 'Dell Laptop 15 Inches',
      image: require('../../assets/laptop.png'),
      price: 1140,
      publish: true,
      instock: 12,
      status: true,
    },
    {
      id: 2,
      name: 'HP 15 - 12 inches',
      image: require('../../assets/laptop.png'),
      price: 2140,
      publish: true,
      instock: 0,
      status: true,
    },
    {
      id: 3,
      name: 'HP 15 - 12 inches',
      image: require('../../assets/laptop.png'),
      price: 2140,
      publish: true,
      instock: 125,
      status: true,
    },
    {
      id: 4,
      name: 'HP 15 - 12 inches',
      image: require('../../assets/laptop.png'),
      price: 2140,
      publish: true,
      instock: 0,
      status: true,
    },
    {
      id: 5,
      name: 'HP 15 - 12 inches',
      image: require('../../assets/laptop.png'),
      price: 2140,
      publish: true,
      instock: 12,
      status: true,
    },
    {
      id: 6,
      name: 'HP 15 - 12 inches',
      image: require('../../assets/laptop.png'),
      price: 2140,
      publish: true,
      instock: 12,
      status: true,
    }
  ];

  return (
    <PuiSafeAreaView>
      <Container>
        <Header name='Products' navigation={navigation} />
        <Section pt={10} pb={15} >
          <InputField border='0005' placeholder='search' />
        </Section>

        <ScrollView showsVerticalScrollIndicator={false}>
          <Flex h='space-between' pt={10} wrap >
            {products.map(product => {
              return (
                <Col count={2} key={product.id} pb={10}>
                  <Card pad={10}>
                    <Image source={product.image} />
                    <H5>{product.name}</H5>
                    <H6>NGN {product.price}</H6>
                    <P>In-stock: {product.instock}</P>
                  </Card>
                </Col>
              )
            })}
          </Flex>
        </ScrollView>

        <Seperator v={10} />
      </Container>
    </PuiSafeAreaView>
  );
}