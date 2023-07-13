import { View } from "react-native";
import FlightsList from './FlightsList'
import AppBar from "./AppBar";
import StyledText from "./StyledText";
import { Route, Routes } from "react-router-native"

const Main = () => {
    return (
        <View style={{  flex: 1 }} >
            <AppBar/>
            <Routes>
                <Route path='/' element={<FlightsList/>} />
                <Route path="/signin" element={<StyledText>Working on it</StyledText>} />
            </Routes>
        </View>
    )
}

export default Main