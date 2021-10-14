export const SET_ADMOB_INTERSTITIAL_ID = 'SET_ADMOB_INTERSTITIAL_ID';
export const SET_ADMOB_BANNER_ID = 'SET_ADMOB_BANNER_ID';
export const SET_FACEBOOK_INTERSTITIAL_ID = 'SET_FACEBOOK_INTERSTITIAL_ID';
export const SET_FACEBOOK_BANNER_ID = 'SET_FACEBOOK_BANNER_ID';
export const SET_CPA_API_KEY = 'SET_CPA_API_KEY';
export const SET_CPA_USER_ID = 'SET_CPA_USER_ID';

export const setAdmobInterstitialId = id => dispatch => {
    dispatch({
        type: SET_ADMOB_INTERSTITIAL_ID,
        payload: id,
    })
}
export const setAdmobBannerId = id => dispatch => {
    dispatch({
        type: SET_ADMOB_BANNER_ID,
        payload: id,
    })
}

export const setFacebookInterstitialId = id => dispatch => {
    dispatch({
        type: SET_FACEBOOK_INTERSTITIAL_ID,
        payload: id,
    })
}

export const setFacebookBannerId = id => dispatch => {
    dispatch({
        type: SET_FACEBOOK_BANNER_ID,
        payload: id,
    })
}

export const setCPAApiKey = id => dispatch => {
    dispatch({
        type: SET_CPA_API_KEY,
        payload: id,
    })
}


export const setCPAUserId = id => dispatch => {
    dispatch({
        type: SET_CPA_USER_ID,
        payload: id,
    })
}

