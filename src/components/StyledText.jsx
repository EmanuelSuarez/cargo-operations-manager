import React from 'react'
import { Text, StyleSheet } from 'react-native'
import theme from '../theme'

const styles = StyleSheet.create({
    text: {
        fontSize: theme.fontSizes.body,
        color: theme.colors.textPrimary,
        fontFamily: theme.fonts.main,
        fontWeight: theme.fontWeights.normal
    },
    bold: {
        fontWeight: theme.fontWeights.bold
    },
    subheading: {
        fontSize: theme.fontSizes.subheading,
    },
    primary: {
        color: theme.colors.textPrimary
    },
    secondary: {
        color: theme.colors.textSecondary
    },
    textAlignCenter: {
        textAlign: 'center'
    }
})


const StyledText = ({ children, color, fontSize, fontWeight, align, style, ...restOfProps }) => {
    const textStyles = [
        styles.text,
        align === 'center' && styles.textAlignCenter,
        color === 'primary' && styles.primary,
        color === 'secondary' && styles.secondary,
        fontSize === 'subheading' && styles.subheading,
        fontWeight === 'bold' && styles.bold,
        style,
    ]

  return (
    <Text style={textStyles}>
        {children}
    </Text>

  )
}

export default StyledText