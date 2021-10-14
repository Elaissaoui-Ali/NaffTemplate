import React from "react";
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {useSelector} from "react-redux";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import MainScreen from "./MainScreen";


const Stack = createNativeStackNavigator();

const ContentScreen = (props) => {
    const {admobInterstitialId} = useSelector((state) => (state.adsIdsReducer));
    const navigateForward = () => {
        props.navigation.replace('Main');
    }
    return (
        <View style={styles.container}>
            <View style={{
                height: 200,
                width: '100%',
                alignItems: 'center',
                flexDirection: 'row',
            }}/>
            <View style={{flex: 1, width: '100%'}}>
                <Stack.Navigator initialRouteName={'Main'}>
                    <Stack.Screen name={'Main'} component={MainScreen} options={{headerShown: false}}/>
                </Stack.Navigator>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width:'100%',
        height:'100%',
    },
});

export default ContentScreen;
