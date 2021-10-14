import {
    SET_ADMOB_INTERSTITIAL_ID,
    SET_ADMOB_BANNER_ID,
    SET_FACEBOOK_BANNER_ID,
    SET_FACEBOOK_INTERSTITIAL_ID,
    SET_CPA_API_KEY,
    SET_CPA_USER_ID
} from "./actions";

const initialState = {
    admobInterstitialId: '',
    admobBannerId: '',
    facebookInterstitialId: '',
    facebookBannerId: '',
    cpaApiKey:'',
    cpaUserId:'',
}

const adsIdsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_ADMOB_INTERSTITIAL_ID:
            return {...state, admobInterstitialId: action.payload};
        case SET_ADMOB_BANNER_ID:
            return {...state, admobBannerId: action.payload};
        case SET_FACEBOOK_INTERSTITIAL_ID:
            return {...state, facebookInterstitialId: action.payload};
        case SET_FACEBOOK_BANNER_ID:
            return {...state, facebookBannerId: action.payload};
        case SET_CPA_API_KEY:
            return {...state, cpaApiKey: action.payload};
        case SET_CPA_USER_ID:
            return {...state, cpaUserId: action.payload};
        default:
            return state;
    }
}

export default adsIdsReducer;
