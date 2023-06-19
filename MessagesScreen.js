import React from "react";
import {Text, View} from "react-native";
import AppStyles from "./AppStyles";


export default function MessagesScreen() {
    const Styles = AppStyles();

    return (<View style={Styles.container}>
        <Text style={Styles.text}>Home</Text>
    </View>)
}
