import { ScrollView, Text } from 'react-native';
import { Container, PuiSafeAreaView } from '../../style/global';

export default function Dashboard() {

  return (
    <PuiSafeAreaView>
      <Container>
        <ScrollView>
          <Text> User Dashboard </Text>
        </ScrollView>
      </Container>
    </PuiSafeAreaView>
  );
}