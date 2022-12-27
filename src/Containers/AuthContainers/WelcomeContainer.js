import { useTheme } from '@/Hooks'
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { View, Text, TouchableOpacity } from 'react-native'
import { Brand } from '@/Components'
import { navigate } from '@/Navigators/utils'

const WelcomeContainer = () => {
  const { Layout, Fonts, Gutters, Common, Colors } = useTheme()
  const { t } = useTranslation()

  return (
    <View style={[Layout.fill, Layout.fullWidth, Layout.colVCenter]}>
      <View style={[Layout.fill, Layout.colCenter]}>
        <Brand />
      </View>

      <View style={[Layout.fill, Layout.fullWidth, Gutters.largeHPadding]}>
        <TouchableOpacity
          style={[
            Layout.fullWidth,
            Common.button.rounded,
            Gutters.regularTMargin,
          ]}
          onPress={() => navigate('Login')}
        >
          <Text style={[Fonts.textRegular, Fonts.textDark]}>
            {t('auth.signIn')}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[Common.button.outlineRounded, Gutters.regularTMargin]}
          onPress={() => navigate('Register')}
        >
          <Text style={[Fonts.textRegular, Fonts.textPrimary]}>
            {t('auth.signUp')}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default WelcomeContainer
