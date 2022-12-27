import { Fonts, Layout } from '@/Theme'
import React from 'react'
import { View, Text } from 'react-native'

const RegisterContainer = () => {
  return (
    <View style={[Layout.fill, Layout.colCenter]}>
      <Text style={[Fonts.textRegular]}>Registeerrr</Text>
    </View>
  )
}

export default RegisterContainer
