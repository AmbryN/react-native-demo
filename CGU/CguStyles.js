import customTheme from "../customTheme";
import {useSafeAreaInsets} from "react-native-safe-area-context";
import {StyleSheet} from "react-native";

export default () => {
    const Colors = customTheme();
    const insets = useSafeAreaInsets()

    return StyleSheet.create({})
}
