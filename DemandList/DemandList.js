import AppStyles from "../AppStyles";
import {FlatList, Image, Text, TouchableOpacity, View} from "react-native";
import React from "react";
import DemandListStyles from "./DemandListStyles";
import CustomTheme from "../customTheme";
import {Icon} from "react-native-elements";

export default ({navigation}) => {
    const styles = {...AppStyles(), ...DemandListStyles()};
    const Colors = CustomTheme();

    const demands = [
        { id: 1, title: "Titre 1", description: "blablabla 1", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/A_small_cup_of_coffee.JPG/1200px-A_small_cup_of_coffee.JPG"},
        { id: 2, title: "Titre 2", description: "blablabla 2", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/A_small_cup_of_coffee.JPG/1200px-A_small_cup_of_coffee.JPG"},
        { id: 3, title: "Titre 3", description: "blablabla 3", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/A_small_cup_of_coffee.JPG/1200px-A_small_cup_of_coffee.JPG"},
    ]

    const onAddDemand = () => {
        navigation.navigate("DemandForm");
    }

    return (
        <View style={[styles.container, styles.centered, { padding: 5 }]}>
            <FlatList
                style={{ width: "100%" }}
                data={demands} renderItem={({item}) =>
                (
                    <TouchableOpacity
                        style={{
                            backgroundColor: "#f2f2f2",
                            padding: 16,
                            marginBottom: 16,
                            borderRadius: 5,
                            flexDirection: "row", // Aligner l'image et le texte horizontalement
                            alignItems: "center", // Centrer verticalement l'image et le texte
                        }}
                    >
                        <Image source={{ uri: item.image }}
                                style={{
                                    width: 50,
                                    height: 50,
                                    borderRadius: 25,
                                    marginRight: 16,
                                }}
                        />
                        <Text style={{
                            color: Colors.text,
                            backgroundColor: "#f2f2f2",
                            padding: 16,
                            marginBottom: 16,
                            borderRadius: 5,
                            flexDirection: "row", // Aligner l'image et le texte horizontalement
                            alignItems: "center", // Centrer verticalement l'image et le texte
                        }}>
                            {item.title}
                        </Text>
                    </TouchableOpacity>
                )}/>

            <TouchableOpacity
                style={{
                    position: "absolute",
                    bottom: 16,
                    right: 16,
                    width: 56,
                    height: 56,
                    borderRadius: 28,
                    backgroundColor: "#007BFF",
                    alignItems: "center",
                    justifyContent: "center",
                    elevation: 4,
                }}
                onPress={onAddDemand}
            ><Icon name="add" size={24} color={Colors.white}/></TouchableOpacity>
        </View>
    )
}
