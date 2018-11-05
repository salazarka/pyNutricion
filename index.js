// CÓDIGO BASADO EN EL TUTORIAL
import React from 'react';
import { AppRegistry } from 'react-native';
import App from './App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise';

import reducers from './Store/reducers';

const createStoreWithMiddleware = applyMiddleware(promiseMiddleware)(createStore)
const appRedux = () => ( <
    Provider store = { createStoreWithMiddleware(reducers) } >
    <
    App / >
    <
    /Provider>
)

AppRegistry.registerComponent('projectThree', () => appRedux);