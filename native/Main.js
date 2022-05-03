import React from 'react';
import { Block, GalioProvider } from 'galio-framework';
import { Provider } from 'react-redux';
import store from './../libs/flux/store';
import { Text } from 'react-native';
import LandingPage from './businesslogic/landingpage/LandingPage';

export default function Main() {
    return (
        <GalioProvider>
            <Provider store={store}>
                    <LandingPage />
            </Provider>
        </GalioProvider>
    );
}