import AppStyles from "../AppStyles";
import {View, Text, TextInput, TouchableOpacity, Image, Button} from "react-native";
import React, {useState} from "react";
import DemandFormStyles from "./DemandFormStyles";
import * as ImagePicker from "expo-image-picker";
import {launchCameraAsync} from "expo-image-picker";
import {Ionicons} from "@expo/vector-icons";
import {CheckBox, Icon} from "react-native-elements";
import {Picker} from "@react-native-picker/picker";
import DateTimePickerModal from "react-native-modal-datetime-picker";

export default () => {
    const styles = {...AppStyles(), ...DemandFormStyles()};

    const [photo, setPhoto] = useState(null);

    const [date, setDate] = useState(new Date());
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [severity, setSeverity] = useState("faible");
    const [asap, setAsap] = useState(false);

    const onSubmit = (data) => console.log(data);

    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const handleConfirm = (pickedDate) => {
        setDate(pickedDate);
        hideDatePicker();
    };

    const onClicPhoto = async () => {
        const cameraPermission = await ImagePicker.requestCameraPermissionsAsync();

        if (cameraPermission.granted === false) {
            return;
        }

        const result = await launchCameraAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: false,
            aspect: [4, 3],
            quality: 1,
        });

        if (!result.canceled) {
            const { assets } = result;
            if (assets && assets.length > 0) {
                setPhoto(assets[0].uri);
            }
        }
    };

    return (
        <View style={[styles.container, styles.centered, {padding: 5}]}>
            { photo && <Image source={{uri: photo}} style={{width: 300, height: 300}}/> }
            <TextInput placeholder="Titre"
               style={{
                height: 40,
                backgroundColor: "#fbfbfb",
                marginBottom: 16,
                paddingHorizontal: 8,
                borderBottomWidth: 1,
                width: "100%",
                marginHorizontal: 8,
            }}
            />
            <TextInput placeholder="Description"
                        multiline
                       style={{
                           height: 40,
                           backgroundColor: "#fbfbfb",
                           marginBottom: 16,
                           paddingHorizontal: 8,
                           borderBottomWidth: 1,
                           width: "100%",
                           marginHorizontal: 8,
                       }}
            />

            <Text style={styles.label}>Sévérité</Text>
            <Picker
                selectedValue={severity}
                onValueChange={(itemValue) => setSeverity(itemValue)}
            >
                <Picker.Item label="Faible" value="faible" />
                <Picker.Item label="Moyenne" value="moyenne" />
                <Picker.Item label="Importante" value="importante" />
            </Picker>

            <Text style={styles.label}>A.S.A.P</Text>
            <CheckBox title="" checked={asap} onPress={() => setAsap(!asap)} />

            <Text style={styles.label}>Date de début du problème</Text>
            <View style={styles.datePicker}>
                <Text style={{ marginRight: 10 }}>{date.toLocaleDateString()}</Text>
                <Icon name="calendar" type="font-awesome" onPress={showDatePicker} />
            </View>
            <DateTimePickerModal
                isVisible={isDatePickerVisible}
                mode="date"
                onConfirm={handleConfirm}
                onCancel={hideDatePicker}
            />

            <Button title="Envoyer" />

            <TouchableOpacity
                onPress={onClicPhoto}
            >
                <Ionicons name="camera" size={24} color="#000" />
            </TouchableOpacity>
        </View>
    )
}
