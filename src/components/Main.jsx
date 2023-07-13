import { View } from "react-native";
import FlightsList from './FlightsList'
import AppBar from "./AppBar";
import StyledText from "./StyledText";

const Main = () => {
    return (
        <View style={{  flex: 1 }} >
            <AppBar/>
            <StyledText style={{ marginBottom: 20, margin: 10, fontSize: 30 }} > {'> '}Vuelos pendientes</StyledText>
            <FlightsList/>
        </View>
    )
}

export default Main