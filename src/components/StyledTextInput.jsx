import React from 'react'
import { TextInput, StyleSheet } from 'react-native'

const StyledTextInput = ({ style = {}, ...props }) => {
    const inputStyle = {
        ...styles.TextInput,
        ...style,
    }

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
    }
})

export default StyledTextInput