import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ShopStack from './shopstack';
import Dashboard from '../pages/user/dasboard';
import Transactions from '../pages/user/transactions';
import ShopList from '../pages/shop/shoplist';
import Profile from '../pages/user/profile';
import Subscriptions from '../pages/user/subscribtion';
import Adverts from '../pages/user/adverts';
import Notifications from '../pages/user/notifications';
import AddShop from '../pages/shop/addshop';

const Stack = createNativeStackNavigator();

const UserStack = () => {
  return (
    <Stack.Navigator
      initialRouteName='Dashboard'
      screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Dashboard" component={Dashboard} />
      <Stack.Screen name="transactions" component={Transactions} />
      <Stack.Screen name="profile" component={Profile} />
      <Stack.Screen name="subscriptions" component={Subscriptions} />
      <Stack.Screen name="notifications" component={Notifications} />
      <Stack.Screen name="adverts" component={Adverts} />

      <Stack.Screen name="shop_list" component={ShopList} />
      <Stack.Screen name="add_shop" component={AddShop} />
      <Stack.Screen name="ShopStack" component={ShopStack} />
    </Stack.Navigator>
  );
};

export default UserStack;