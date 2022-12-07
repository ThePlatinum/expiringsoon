import Header from '../../components/header';
import { Container, PuiSafeAreaView, Seperator } from '../../style/global';

export default function Products({ navigation }) {
  return (
    <PuiSafeAreaView>
      <Container>
        <Header name='Products' navigation={navigation} />
        <Seperator v={10} />
      </Container>
    </PuiSafeAreaView>
  );
}