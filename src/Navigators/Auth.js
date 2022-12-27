import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import {
  LoginContainer,
  RegisterContainer,
  WelcomeContainer,
} from '@/Containers/AuthContainers'

const Stack = createStackNavigator()

// @refresh reset
const AuthNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Welcome" component={WelcomeContainer} />
      <Stack.Screen name="Login" component={LoginContainer} />
      <Stack.Screen name="Register" component={RegisterContainer} />
    </Stack.Navigator>
  )
}

export default AuthNavigator
