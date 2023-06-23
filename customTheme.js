import {useColorScheme} from "react-native";

const commonColors = {
    "primary": "#4ecca3",
    "white": "#fff",
    "black": "#000",
    "accent": "#ff6b6b",
    "error": "#cb2222",
}

const Colors = {
    light: {
        ...commonColors,
        background: commonColors.white,
        text: commonColors.black,
    },
    dark: {
        ...commonColors,
        background: commonColors.black,
        text: commonColors.white,
    }
}

export default () => {
    const customTheme = useColorScheme();

    return {
        ...Colors[customTheme],
    }
}
