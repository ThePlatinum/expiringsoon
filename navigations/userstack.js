import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ShopStack from './shopstack';
import Dashboard from '../pages/user/dasboard';
import Transactions from '../pages/user/transactions';
import ShopList from '../pages/shop/shoplist';

const Stack = createNativeStackNavigator();

const UserStack = () => {
  return (
    <Stack.Navigator
      initialRouteName='Dashboard'
      screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Dashboard" component={Dashboard} />
      <Stack.Screen name="transactions" component={Transactions} />
      <Stack.Screen name="shop_list" component={ShopList} />
      <Stack.Screen name="ShopStack" component={ShopStack} />
    </Stack.Navigator>
  );
};

export default UserStack;