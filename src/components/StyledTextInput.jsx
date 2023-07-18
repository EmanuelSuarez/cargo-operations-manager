import React from 'react'
import { TextInput, StyleSheet } from 'react-native'

const StyledTextInput = ({ style = {}, error, ...props }) => {
    const inputStyle = [
        styles.TextInput,
        style,
        error && styles.error,
    ]

    return (
        <TextInput style={inputStyle} {...props} />
    )
}

const styles = StyleSheet.create({
    TextInput: {
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 5,
        padding: 5,
        margin: 5,
    },
    error: {
        borderColor: 'red',
    }
})

export default StyledTextInput