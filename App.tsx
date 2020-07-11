import React from 'react'
import { AppLoading } from 'expo'

// eslint-disable-next-line
import { Ubuntu_700Bold, useFonts } from '@expo-google-fonts/ubuntu'
// eslint-disable-next-line
import { Roboto_400Regular, Roboto_500Medium } from '@expo-google-fonts/roboto'

import Routes from './src/routes'

export default function App () {
  const [fontsLoaded] = useFonts({
    Ubuntu_700Bold,
    Roboto_400Regular,
    Roboto_500Medium
  })

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <Routes />
  )
}
