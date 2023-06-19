import React, {useState} from 'react';
import {Button, Text, View} from 'react-native';
import CustomTheme from "./customTheme";
import AppStyles from "./AppStyles";


export default function Counter() {
    const Colors = CustomTheme();
    const Styles = AppStyles()

    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    }

    const decrement = () => {
        if (count > 0) setCount(count - 1);
    }

    const reset = () => {
        setCount(0);
    }

    return (
        <View>
            <Text style={Styles.text}>{count}</Text>
            <View>
                <Button color={Colors.accent} onPress={increment} title="Increment"/>
                <Button color={Colors.accent} title={"Reset"} onPress={reset}/>
                <Button color={Colors.accent} onPress={decrement} title="Decrement"/>
            </View>
        </View>
    )
}


