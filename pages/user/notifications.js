import Header from '../../components/header';
import { Container, PuiSafeAreaView, Seperator } from '../../style/global';

export default function Notifications({ navigation }) {
  return (
    <PuiSafeAreaView>
      <Container>
        <Header name='Notifications' navigation={navigation} />
        <Seperator v={10} />
      </Container>
    </PuiSafeAreaView>
  );
}