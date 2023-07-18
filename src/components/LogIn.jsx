import React from 'react'
import { Formik, useField } from 'formik'
import { View, Text, StyleSheet, Button } from 'react-native'
import StyledTextInput from './StyledTextInput'
import StyledText from './StyledText'
import { loginValidationSchema } from '../validationSchemas/login'

const initialValues = {
    email: '',
    password: '',
}

const FormikInputValue = ({ name, ...props}) => {
    const [ field, meta, helpers ] = useField(name)
    return (
        <>
            <StyledTextInput
            error = {meta.error}
            value={field.value}
            onChangeText={value => helpers.setValue(value)}
            {...props}
            />
            {meta.error && <StyledText style={styles.error} >{meta.error}</StyledText>}
        </>
    )
}



const LogIn = () => {
  return (
    <Formik validationSchema={loginValidationSchema} initialValues={initialValues} onSubmit={values => console.log(values)} >
        {({ handleSubmit, handleChange, values }) => (
            <View style={styles.form} >
                <Text>Log in</Text>
                <FormikInputValue
                placeholder='Email'
                name='email'
                />
                <FormikInputValue
                placeholder='Password'
                name='password'
                secureTextEntry
                />
                <Button onPress={handleSubmit} title='Log in' />
            </View>
        )}
    </Formik>
  )
}

const styles = StyleSheet.create({
    form: {
        padding: 20,
        paddingBottom: 5,
        paddingTop: 5,
        borderBottomWidth: 1,
        borderBottomColor: 'lightgray',
        marginVertical: 5,
    },
    error: {
        color: 'red',
        paddingLeft: 5,
    }
})

export default LogIn 