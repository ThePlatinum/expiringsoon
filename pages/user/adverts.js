import Header from '../../components/header';
import { Container, PuiSafeAreaView, Seperator } from '../../style/global';

export default function Adverts({ navigation }) {
  return (
    <PuiSafeAreaView>
      <Container>
        <Header name='Adverts' navigation={navigation} />
        <Seperator v={10} />
      </Container>
    </PuiSafeAreaView>
  );
}