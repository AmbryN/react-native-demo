import AppStyles from "../AppStyles";
import {Controller} from "react-hook-form";
import {Input} from "react-native-elements";
import InputStyles from "./InputStyles";

export default ({label, defaultValue, rules, errorMessage, control, errors, name}) => {
    const Styles = {...AppStyles(), ...InputStyles()}

    return (
        <Controller
            control={control}
            render={({field: {onChange, onBlur, value}}) => (
                <Input
                    onBlur={onBlur}
                    onChangeText={value => onChange(value)}
                    value={value}
                    label={label}
                    errorStyle={{color: "red"}}
                    errorMessage={errors[name] ? errorMessage : ""}

                />
            )}
            name={name}
            rules={rules}
            defaultValue={defaultValue}
        />
    )
}
