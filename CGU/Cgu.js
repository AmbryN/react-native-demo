import React from "react";
import {View, Text} from "react-native";
import AppStyles from "../AppStyles";
import CguStyles from "./CguStyles";

export default () => {
    const styles = {...AppStyles(), ...CguStyles()};
    return (
        <View style={[styles.container, styles.centered]}>
            <Text>Conditions Générales d'Utilisation</Text>
        </View>
    )
}
