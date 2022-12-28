import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../pages/login';
import Register from '../pages/register';
import UserStack from './userstack';
import * as SecureStore from 'expo-secure-store';

const Stack = createNativeStackNavigator();

export default AuthStack = () => {
  const [initial, setInitial] = React.useState(null)

  React.useEffect(() => {
    async function run() {
      const session = await SecureStore.getItemAsync("user_session");
      if (session) setInitial('UserStack')
    }
    run()
  }, [])

  return (
    <Stack.Navigator
      initialRouteName={initial}
      screenOptions={{ headerShown: false }}>
      <Stack.Screen name="login" component={Login} />
      <Stack.Screen name="register" component={Register} />
      <Stack.Screen name="UserStack" component={UserStack} />
    </Stack.Navigator>
  );
};