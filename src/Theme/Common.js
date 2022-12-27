/**
 * This file defines the base application styles.
 *
 * Use it to define generic component styles (e.g. the default text styles, default button styles...).
 */
import { StyleSheet } from 'react-native'
import buttonStyles from './components/Buttons'
/**
 *
 * @param Theme can be spread like {Colors, NavigationColors, Gutters, Layout, Common, ...args}
 * @return {*}
 */
export default function ({ Colors, FontSize, ...args }) {
  return {
    button: buttonStyles({ Colors, FontSize, ...args }),
    ...StyleSheet.create({
      backgroundPrimary: {
        backgroundColor: Colors.primary,
      },
      backgroundReset: {
        backgroundColor: Colors.transparent,
      },
      textInput: {
        borderWidth: 3,
        borderColor: Colors.gray,
        borderRadius: 10,
        color: Colors.primary,
        minHeight: 50,
        marginVertical: 10,
        paddingLeft: 20,
        fontSize: FontSize.regular,
      },
    }),
  }
}
