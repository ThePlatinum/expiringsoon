import Header from '../../components/header';
import { Container, PuiSafeAreaView, Seperator } from '../../style/global';

export default function Subscriptions({ navigation }) {
  return (
    <PuiSafeAreaView>
      <Container>
        <Header name='Subscriptions' navigation={navigation} />
        <Seperator v={10} />
      </Container>
    </PuiSafeAreaView>
  );
}