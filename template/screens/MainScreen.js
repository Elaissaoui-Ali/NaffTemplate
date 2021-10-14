import React from "react";
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {useSelector} from "react-redux";

const MainScreen = (props) => {
    const {admobInterstitialId, facebookInterstitialId} = useSelector((state) => (state.adsIdsReducer));
    const navigateForward = () => {
        console.log('Navigate to the next page');
    }
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => {
                navigateForward();
            }}>
                <Text style={{color: 'white', backgroundColor:'blue'}}>Navigates</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width:'100%',
        height:'100%',
        alignItems:'center',
        justifyContent: 'center'
    },
});

export default MainScreen;
