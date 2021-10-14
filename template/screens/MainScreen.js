import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';

const MainScreen = (props) => {
    const navigateForward = () => {
        console.log('Navigate !!');
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
        backgroundColor: 'blue'
    }
});

export default MainScreen;
