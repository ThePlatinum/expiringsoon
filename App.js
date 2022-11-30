import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import Login from './pages/login';

export default function App() {

  return (
    <>
      <Login />
      <StatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({
  scroll: {
  },
});
