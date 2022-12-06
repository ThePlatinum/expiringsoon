import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ShopStack from './shopstack';
import ShopList from '../pages/user/shoplist';
import Dashboard from '../pages/user/dasboard';
import AddShop from '../pages/shop/addshop';

const Stack = createNativeStackNavigator();

const UserStack = () => {
  return (
    <Stack.Navigator
      initialRouteName='Dashboard'
      screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Dashboard" component={Dashboard} />
      <Stack.Screen name="add_shop" component={AddShop} />
      <Stack.Screen name="shop_list" component={ShopList} />
      <Stack.Screen name="ShopStack" component={ShopStack} />
    </Stack.Navigator>
  );
};

export default UserStack;