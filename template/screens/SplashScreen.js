import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';

const SplashScreen = (props) => {
    const navigateForward = () => {
        props.navigation.replace('Content');
    }
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={navigateForward}>
                <Text style={styles.text}> Navigate to content</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text:{
        padding:20,
        color:'white',
        backgroundColor: 'brown'
    }
});

export default SplashScreen;
