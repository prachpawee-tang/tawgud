import { useTheme } from '@/Hooks'
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { View, Text, TouchableOpacity, TextInput } from 'react-native'

const LoginContainer = () => {
  const [email, setEmail] = useState(null)
  const [password, setPassword] = useState(null)

  const { Layout, Fonts, Gutters, Common, Colors } = useTheme()
  const { t } = useTranslation()

  return (
    <View style={[Layout.fill, Gutters.regularHPadding, Gutters.largeVPadding]}>
      <Text style={[Fonts.titleRegular, Gutters.largeBMargin]}>
        {t('auth.signIn')}
      </Text>

      <TextInput
        onChangeText={setEmail}
        placeholder={t('auth.email')}
        placeholderTextColor={Colors.gray}
        keyboardType={'email-address'}
        value={email}
        selectTextOnFocus
        style={[Common.textInput]}
      />
      <TextInput
        onChangeText={setPassword}
        placeholder={t('auth.password')}
        placeholderTextColor={Colors.gray}
        value={password}
        selectTextOnFocus
        style={[Common.textInput]}
      />

      <TouchableOpacity
        style={[Common.button.rounded, Gutters.regularTMargin]}
        // onPress={() => onChangeTheme({ darkMode: null })}
      >
        <Text style={[Fonts.textRegular, Fonts.textDark]}>
          {t('auth.signIn')}
        </Text>
      </TouchableOpacity>
    </View>
  )
}

export default LoginContainer
