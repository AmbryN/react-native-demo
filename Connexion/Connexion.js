import AppStyles from "../AppStyles";
import ConnexionStyle from "./ConnexionStyles";
import {Button, View} from "react-native";
import InputText from "../InputText/InputText";
import {useForm} from "react-hook-form";

export default ({onLogin}) => {
    const Styles = {...AppStyles(), ...ConnexionStyle()}

    const  { control,
        handleSubmit,
        formState: {errors} } = useForm();

    const onValidForm = (data) => {
        onLogin(data);
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
            <Button title={"Connexion"} onPress={handleSubmit(onValidForm)}/>
        </View>
    )
}
