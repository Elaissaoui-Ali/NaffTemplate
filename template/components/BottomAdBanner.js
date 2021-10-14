import React, {useState} from 'react';
import {Text, View} from "react-native";
import {BannerAd, BannerAdSize} from '@react-native-firebase/admob';
import {useSelector} from "react-redux";

const BottomAdBanner = (props) => {

    const {admobBannerId, facebookBannerId} = useSelector(state => state.adsIdsReducer);

    return (
        <View style={{
            width: '100%',
            position: 'absolute',
            bottom: 0,
            left: 0,
            alignItems: 'center',
            justifyContent: 'center',
        }}>
            <BannerAd
                unitId={admobBannerId === '' ? 'wrong_id' : admobBannerId}
                size={BannerAdSize.ADAPTIVE_BANNER}
                onAdFailedToLoad={(error) => {
                    console.log('admob banner: Failed to load');
                    console.log(error);
                }}
                onAdLoaded={() => {
                    console.log('admob banner: Loaded');
                }}
            />

        </View>
    );
}

export default BottomAdBanner;
