import {StyleSheet} from "react-native";
import customTheme from "./customTheme";
import {useSafeAreaInsets} from "react-native-safe-area-context";

export default () => {
    const Colors = customTheme();
    const insets = useSafeAreaInsets()

    const Styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: Colors.background,
        },
        centered: {
            alignItems: 'center',
            justifyContent: 'center',
        },
        safeArea: {
            paddingTop: insets.top,
            paddingRight: insets.right,
            paddingBottom: insets.bottom,
            paddingLeft: insets.left,
        },
        text: {
            color: Colors.text,
        }
    });

    return Styles
}
