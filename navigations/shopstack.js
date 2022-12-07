import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Dashboard from '../pages/shop/dasboard';
import AddShop from '../pages/shop/addshop';
import ShopList from '../pages/shop/shoplist';

const Stack = createNativeStackNavigator();

const ShopStack = () => {
  return (
    <Stack.Navigator
      initialRouteName='Dashboard'
      screenOptions={{ headerShown: false }}>
      <Stack.Screen name="add_shop" component={AddShop} />
      <Stack.Screen name="Dashboard" component={Dashboard} />
    </Stack.Navigator>
  );
};

export default ShopStack;