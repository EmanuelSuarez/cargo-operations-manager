import React from 'react'
import { View, StyleSheet, Image, Platform } from 'react-native'
import StyledText from './StyledText'
import FlightStats from './FlightStats'

const FlightItemHeader = ( {name, status, image} ) => {
  return (
    <View style={styles.header} >
      <View style={{ }} >
        <Image source={{ uri: image }} style={styles.image} />
      </View>
      <View style={{paddingLeft: 6, flex: 1 }} >
        <StyledText fontSize='subheading' fontWeight='bold' >{name}</StyledText>
        <StyledText style={styles.status} color='primary' >Status: {status}</StyledText>
      </View>
    </View>
  )
}

const FlightItem = ( props ) => {
  return (
    <View key={props.id} style={styles.container} >
      <FlightItemHeader {...props} />
      <FlightStats {...props} />  
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingBottom: 5,
    paddingTop: 5,
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray',
    marginVertical: 5,
  },
  status: {
    backgroundColor: Platform.select({
      android: 'blue',
      ios: 'red',
      default: 'lightblue'
    }),
    padding: 5,
    borderRadius: 5,
    alignSelf: 'flex-start',
    color: 'white',
  },
  image: {
    width: 48,
    height: 48,
    alignSelf: 'center',
    resizeMode: 'contain'
  },
  header: {
    flexDirection: 'row',
    paddingBottom: 2,

  }
})


export default FlightItem