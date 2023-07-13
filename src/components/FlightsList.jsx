import React from "react";
import { Text, FlatList } from 'react-native'
import flights from "../data/flights";
import FlightItem from "./FlightItem";

const FlightsList = () => {
    return (
        <FlatList
        data={flights}
        ItemSeparatorComponent={() => <Text> </Text>}
        renderItem={({ item: flight }) => (
            <FlightItem {...flight} />
        )}
        >
        </FlatList>
    )
}

export default FlightsList