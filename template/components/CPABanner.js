import React, {useEffect, useState} from 'react';
import {Image, View, StyleSheet, Text, TouchableOpacity, Linking} from 'react-native';
import {useSelector} from "react-redux";
// {icon:'', title:'',subTitle:'', url:''}
const CPABanner = (props) => {
    const {cpaApiKey, cpaUserId} = useSelector(state => state.adsIdsReducer);
    const [data, setData] = useState([]);
    const [pointer, setPointer] = useState(0);
    useEffect(() => {
        if (cpaApiKey && cpaUserId) {
            // const url = `http://cpabuild.com/public/offers/feed.php?user_id=230548&api_key=409937e6bf08329698d1e4c92de78c59&s1=&s2=`
            const url = `http://cpabuild.com/public/offers/feed.php?user_id=${cpaUserId}&api_key=${cpaApiKey}&s1=&s2=`
            fetch(url)
                .then(r => {
                    return r.json();
                })
                .then(json => {
                    setData(
                        json.map(object => {
                            return {
                                name: object.name,
                                icon: object.network_icon,
                                conversion: object.conversion,
                                anchor: object.anchor,
                                url: object.url,
                            }
                        })
                    );

                })
                .catch((e => {
                    console.log('___________________ error');
                    console.log(e);
                }))
        }
    }, [cpaApiKey, cpaUserId]);

    return (
        <React.Fragment>
            {(data.length) ? (
                <View style={styles.container}>
                    <View style={styles.navigationContainer}>
                        {(pointer > 0) && <TouchableOpacity onPress={() => {
                            setPointer(previous => {
                                if (previous > 0) {
                                    return previous - 1;
                                }
                                return previous;
                            })
                        }}>
                            <Image source={require('../assets/arrow_left.png')}
                                   style={{width: '100%', height: '100%'}}/>
                        </TouchableOpacity>}
                    </View>
                    <View style={styles.bodyContainer}>

                        <View style={{
                            width: '100%',
                            flex: 1,
                            flexDirection: 'row',
                            alignItems: 'center',
                            padding: 20,
                            marginTop: 15,
                            marginBottom: 10,
                        }}>

                            <View style={styles.iconContainer}>
                                {/*network_icon*/}
                                <Image source={{uri: data[pointer].icon}}
                                       style={{width: '100%', height: '100%', resizeMode: 'contain'}}/>
                            </View>
                            <View style={styles.textContainer}>
                                <View style={styles.selfTextContainer}>
                                    <Text adjustsFontSizeToFit numberOfLines={2}
                                          style={{fontSize: 15, fontWeight: 'bold'}}>
                                        {data[pointer].name}
                                    </Text>
                                </View>
                                <View style={styles.selfTextContainer}>
                                    <Text adjustsFontSizeToFit numberOfLines={2} style={{fontSize: 13}}>
                                        {data[pointer].conversion}
                                    </Text>
                                </View>
                            </View>
                        </View>
                        <Text adjustsFontSizeToFit numberOfLines={2}
                              style={{marginBottom: 10, fontSize: 15, textAlign: 'center', marginHorizontal: 10}}>
                            {data[pointer].anchor}
                        </Text>

                        <View style={{width: '100%', height: 60, alignItems: 'center', justifyContent: 'center'}}>
                            <TouchableOpacity onPress={() => Linking.openURL(data[pointer].url)}>
                                <View style={styles.buttonContainer}>
                                    <Text style={{fontSize: 22, fontWeight: 'bold', color: '#fff', opacity: 1}}>
                                        Complete Offer
                                    </Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.navigationContainer}>
                        {(pointer !== data.length-1) && <TouchableOpacity onPress={() => {
                            setPointer(previous => {
                                if (previous < data.length - 1) {
                                    return previous + 1;
                                }
                                return previous;
                            })
                        }}>
                            <Image source={require('../assets/arrow_right.png')}
                                   style={{width: '100%', height: '100%'}}/>
                        </TouchableOpacity>}
                    </View>
                </View>
            ) : null}
        </React.Fragment>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 200,
        width: '100%',
        alignItems: 'center',
        flexDirection: 'row',
    },
    navigationContainer: {
        width: 30,
        height: 30,
        margin: 10,
    },
    bodyContainer: {
        flex: 1,
        height: '100%',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    iconContainer: {
        width: 60,
        height: 60,
    },
    textContainer: {
        flex: 1,
        height: 80,
        padding: 10,
    },
    selfTextContainer: {
        flex: 1,
        justifyContent: 'center'
    },
    buttonContainer: {
        backgroundColor: '#780000',
        alignItems: 'center',
        paddingTop: 10,
        paddingBottom: 12,
        paddingHorizontal: 40,
        borderRadius: 8
    }

});

export default CPABanner;
