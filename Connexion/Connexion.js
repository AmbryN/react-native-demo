import AppStyles from "../AppStyles";
import ConnexionStyle from "./ConnexionStyles";
import {Button, View, Text} from "react-native";
import InputText from "../InputText/InputText";
import {useForm} from "react-hook-form";
import CustomTheme from "../customTheme";

export default ({onLogin, loginError}) => {
    const Styles = {...AppStyles(), ...ConnexionStyle()}
    const Colors = CustomTheme();

    const  { control,
        handleSubmit,
        formState: {errors} } = useForm();

    const onValidForm = (data) => {
        onLogin(data);
    }

    const ErrorText = () => {
        return loginError !== '' && <Text style={{color: Colors.error}}>{loginError}</Text>
    }

    return (
        <View style={[Styles.container, Styles.centered]}>
            <InputText defaultValue=""
                       label="Email"
                       name="email"
                       control={control}
                       errors={errors}
                       rules={{required: true}}
                       errorMessage="Ce champ est requis."
            />
            <InputText defaultValue=""
                       label="Mot de passe"
                       name="password"
                       control={control}
                       errors={errors}
                       rules={{required: true, minLength: 8}}
                       errorMessage="Ce champ est requis et nécessite au moins 8 caractères."
            />
            <ErrorText/>
            <Button title={"Connexion"} onPress={handleSubmit(onValidForm)}/>
        </View>
    )
}
