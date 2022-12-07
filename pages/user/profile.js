import Header from '../../components/header';
import { Container, PuiSafeAreaView, Seperator } from '../../style/global';

export default function Profile({ navigation }) {
  return (
    <PuiSafeAreaView>
      <Container>
        <Header name='My Profile' navigation={navigation} />
        <Seperator v={10} />
      </Container>
    </PuiSafeAreaView>
  );
}