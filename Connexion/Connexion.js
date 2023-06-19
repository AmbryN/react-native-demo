import AppStyles from "../AppStyles";
import ConnextionStyle from "./ConnextionStyles";
import {Button, Text, View} from "react-native";

export default ({onLogin}) => {
    const Styles = {...AppStyles(), ...ConnextionStyle()}
    return (
        <View style={[Styles.container, Styles.centered]}>
            <Button title={"Se connecter"} onPress={onLogin}/>
        </View>
    )
}
