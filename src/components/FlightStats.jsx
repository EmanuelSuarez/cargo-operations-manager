import React from 'react'
import { View } from 'react-native'
import StyledText from './StyledText'

const FlightStats = props => {
    return (
      <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 15 }} >
        <View>
          <StyledText color='secondary' >Airline: </StyledText>
          <StyledText align='center' color='secondary' fontWeight='bold' >{props.airline}</StyledText>
        </View>
        <View>
          <StyledText color='secondary' >Origin: </StyledText>
          <StyledText align='center' color='secondary' fontWeight='bold' >{props.origin}</StyledText>
        </View>
        <View>
          <StyledText color='secondary' >Destination: </StyledText>
          <StyledText align='center' color='secondary' fontWeight='bold' >{props.destination}</StyledText>
        </View>
      </View>
    )
  }

export default FlightStats