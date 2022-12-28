import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Dashboard from '../pages/shop/dasboard';
import AddShop from '../pages/shop/addshop';
import AddProduct from '../pages/shop/addproduct';
import Products from '../pages/shop/products';

const Stack = createNativeStackNavigator();

const ShopStack = () => {
  return (
    <Stack.Navigator
      initialRouteName='Dashboard'
      screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Dashboard" component={Dashboard} />
      <Stack.Screen name="products" component={Products} />
      <Stack.Screen name="add_shop" component={AddShop} />
      <Stack.Screen name="add_product" component={AddProduct} />
    </Stack.Navigator>
  );
};

export default ShopStack;