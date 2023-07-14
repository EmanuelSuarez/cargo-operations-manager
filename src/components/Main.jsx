import { View } from "react-native";
import FlightsList from './FlightsList'
import AppBar from "./AppBar";
import StyledText from "./StyledText";
import { Route, Routes } from "react-router-native"
import LogIn from "./LogIn";

const Main = () => {
    return (
        <View style={{  flex: 1 }} >
            <AppBar/>
            <Routes>
                <Route path='/' element={<FlightsList/>} />
                <Route path="/signin" element={<LogIn/>} />
            </Routes>
        </View>
    )
}

export default Main