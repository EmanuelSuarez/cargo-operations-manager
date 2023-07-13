import React from 'react'
import { View, StyleSheet } from 'react-native'
import Constants from 'expo-constants'
import StyledText from './StyledText'
import theme from '../theme'

const AppBar = () => {
  return (
    <View style={styles.appBar} >
        <StyledText fontWeight='bold' style={styles.text} >
            Flights
        </StyledText>
    </View>
  )
}

const styles = StyleSheet.create({
    appBar: {
        backgroundColor: theme.appBar.primary,
        paddingTop: Constants.statusBarHeight + 10,
        paddingBottom: 10,
        paddingLeft: 10,
    },
    text: {
        color: theme.appBar.primaryText,
    }
})

export default AppBar