import React from 'react';
import {StyleSheet, View} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MainScreen from "./MainScreen";
import CPABanner from "../components/CPABanner";


const Stack = createNativeStackNavigator();

const ContentScreen = (props) => {

    return (
        <View style={styles.container}>
            <CPABanner/>
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
        width: '100%',
        height: '100%'
    }
})

export default ContentScreen;
