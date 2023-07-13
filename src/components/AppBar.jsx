import React from 'react'
import { View, StyleSheet, ScrollView } from 'react-native'
import Constants from 'expo-constants'
import StyledText from './StyledText'
import theme from '../theme'
import { Link, useLocation } from 'react-router-native'

const AppBarTab = ({active, children, to}) => {
    const textStyles = [
        styles.text,
        active && styles.active,
    ]

    return (
        <Link to={to}>
            <StyledText fontWeight='bold' style={textStyles} >
                {children}
            </StyledText>
        </Link>
    )
} 

const AppBar = () => {
    const { pathname } = useLocation()
  return (
    <View style={styles.appBar} >
        <ScrollView horizontal style={styles.scroll} >
            <AppBarTab active={pathname == '/'} to={'/'} >Flights</AppBarTab>
            <AppBarTab active={pathname == '/radar'} to={'/radar'} >Flight Radar</AppBarTab>
            <AppBarTab active={pathname == '/signin'} to={'/signin'} >Sign in</AppBarTab>
        </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    appBar: {
        flexDirection: 'row',
        backgroundColor: theme.appBar.primary,
        paddingTop: Constants.statusBarHeight + 10,
        paddingLeft: 10,
    },
    text: {
        color: theme.appBar.secondaryText,
        paddingHorizontal: 10,
        fontSize: 22,
    },
    scroll: {
        paddingBottom: 15,
    },
    active: {
        color: theme.appBar.primaryText,
    }
})

export default AppBar