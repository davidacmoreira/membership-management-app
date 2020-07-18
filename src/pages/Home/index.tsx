import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'

import Members from '../Members'
import Payments from '../Payments'

const Drawer = createDrawerNavigator()

const Home = () => {
  return (
    <NavigationContainer independent={true}>
      <Drawer.Navigator initialRouteName="Members">
        <Drawer.Screen name="Members" component={Members} />
        <Drawer.Screen name="Payments" component={Payments} />
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

export default Home
