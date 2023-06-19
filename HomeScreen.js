import {Text, View} from "react-native";
import Counter from "./Counter";
import AppStyles from "./AppStyles";

export default function HomeScreen() {
    const Styles = AppStyles();


    return (<View style={[Styles.container, {paddingTop: insets.top}]}>
        <Text style={Styles.text}>Home</Text>
        <Counter/>
    </View>)
}
