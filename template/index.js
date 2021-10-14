import React from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {Provider} from "react-redux";
import {Store} from "./redux/store";

const WrappedApp = (props) => {
    return (<Provider store={Store}>
        <App/>
    </Provider>);
}
AppRegistry.registerComponent(
    appName,
    () => WrappedApp,
    false);
