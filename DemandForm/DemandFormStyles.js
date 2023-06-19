import customTheme from "../customTheme";
import {useSafeAreaInsets} from "react-native-safe-area-context";
import {StyleSheet} from "react-native";

export default () => {
    const Colors = customTheme();
    const insets = useSafeAreaInsets()

    return StyleSheet.create({
        datePicker: {
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 20,
            padding: 10,
        },
        label: {
            fontSize: 16,
            color: "#86939e",
            fontWeight: "bold",
            marginBottom: 5,
            marginLeft: 10,
        },})
}
