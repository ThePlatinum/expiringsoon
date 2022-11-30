import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import Register from './pages/register';

export default function App() {

  return (
    <>
      <Register />
      <StatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({
  scroll: {
  },
});
