import {NavigationContainer} from "@react-navigation/native";
import AppStyles from "./AppStyles";
import CustomTheme from "./customTheme";
import React, {useEffect, useState} from "react";
import {StatusBar} from "react-native";
import 'react-native-gesture-handler';
import Connexion from "./Connexion/Connexion";
import Drawer from "@react-navigation/drawer/src/views/modern/Drawer";
import demandList from "./DemandList/DemandList";
import Cgu from "./CGU/Cgu";
import {createDrawerNavigator, DrawerContentScrollView, DrawerItem, DrawerItemList} from "@react-navigation/drawer";
import {createStackNavigator} from "@react-navigation/stack";
import demandForm from "./DemandForm/DemandForm";
import {Header, Icon, SearchBar} from "react-native-elements";
import {SafeAreaProvider} from "react-native-safe-area-context";
import {validateLogin} from "./services/LoginService";


export default function App() {
    const App = () => {
        const Styles = AppStyles();
        const Colors = CustomTheme();

        const [connected, setConnected] = useState(false);
        const [loginError, setLoginError] = useState('');

        const onLogin = (data) => {
            if (validateLogin(data)) {
                setLoginError('')
                setConnected(true);
            } else {
                setLoginError("Identifiants incorrects.")
            }
        }

        const onLogout = () => {
            setConnected(null);
        }

        const LoginNavigation = () => {
            return (
                <Connexion onLogin={onLogin} loginError={loginError}/>
            )
        }

        const Drawer = createDrawerNavigator()

        const CustomDrawerContent = (props) => {
            return (
                <DrawerContentScrollView {...props}>
                    <DrawerItemList {...props} />
                    <DrawerItem label="Deconnexion" onPress={() => onLogout()}/>
                </DrawerContentScrollView>
            );
        };

        const Stack = createStackNavigator();
        const DemandStack = () => {
            return (
                <Stack.Navigator>
                    <Stack.Screen
                        name="DemandList"
                        component={demandList}
                        options={{headerShown: false}}
                    />
                    <Stack.Screen
                        name="DemandForm"
                        component={demandForm}
                        options={{headerShown: false}}
                    />
                </Stack.Navigator>
            );
        }

        const [searchTerm, setSearchTerm] = useState("");

        const SearchHeader = ({navigation}) => {
            const [text, setText] = useState(searchTerm);

            return (
                <Header
                    leftComponent={<Icon name="menu" onPress={() => navigation.openDrawer()}/>}
                    centerComponent={<SearchBar placeholder="Recherche..."
                                                value={text}
                                                onChangeText={text => setText(text)}
                                                onSubmitEditing={event => setSearchTerm(event.nativeEvent.text)}
                                                containerStyle={{
                                                    backgroundColor: "transparent",
                                                    borderTopWidth: 0,
                                                    borderBottomWidth: 0,
                                                    flex: 1,
                                                    width: "100%",
                                                    justifyContent: "center",
                                                    alignItems: "flex-start",
                                                    padding: 0,
                                                    margin: 0,
                                                }}
                                                inputContainerStyle={{
                                                    backgroundColor: "transparent",
                                                }}
                                                style={{color: Colors.text}}
                                                placeholderTextColor={{color: Colors.text}}
                                                searchIcon={{color: Colors.text}}
                                                clearIcon={{color: Colors.text}}
                    />}
                ></Header>
            )
        }

        const AppNavigation = () => {
            return (
                <Drawer.Navigator
                    drawerContent={props => <CustomDrawerContent {...props} />}
                >
                    <Drawer.Screen name="Liste des demandes"
                                   component={DemandStack}
                                   options={{header: (props => <SearchHeader {...props} />)}}
                    >
                    </Drawer.Screen>
                    <Drawer.Screen
                        name="CGU"
                        component={Cgu}
                    ></Drawer.Screen>
                </Drawer.Navigator>
            )
        }

        return connected ? <AppNavigation/> : <LoginNavigation onLogin={onLogin}/>;
    }

    return (
        <SafeAreaProvider>
            <NavigationContainer>
                <App />
                <StatusBar style="auto"/>
            </NavigationContainer>
        </SafeAreaProvider>
    )
}


