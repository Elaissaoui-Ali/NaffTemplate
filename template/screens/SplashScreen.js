import React from "react";
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {useSelector} from "react-redux";

const SplashScreen = (props) => {
    const {admobInterstitialId, facebookInterstitialId} = useSelector((state) => (state.adsIdsReducer));
    const navigateForward = () => {
        props.navigation.replace('Main');
    }
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => {
                navigateForward();
            }}>
                <Text style={{color: 'white', backgroundColor: 'blue'}}>Go to main page</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
});

export default SplashScreen;
