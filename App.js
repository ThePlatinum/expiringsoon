import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Container, InputField } from './style/global';

export default function App() {
  return (
    <Container>

      <Text>Heyy</Text>
      <InputField />
      <StatusBar style="auto" />
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
