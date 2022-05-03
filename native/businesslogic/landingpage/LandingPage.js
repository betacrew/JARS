import React, { useEffect } from "react";
import { Block, Text } from 'galio-framework';
import { Image } from 'react-native';
import JarsLogo from './../../../assets/jars_logo.png';
import { useSelector, useDispatch } from 'react-redux';
import { componentKey } from './LandingPageSlice';
import { genRandomString } from './LandingPageSaga';
import styles from './LandingPage.style';

export default function LandingPage() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(genRandomString());
    }, []);
    const { randomString } = useSelector((state) => state[componentKey])

    return (
        <Block row={false} flex style={styles.mainContainer}>
            <Block flex={2}></Block>
            <Block middle flex={1}>
                <Text style={styles.welcomeText}>Welcome to JARS</Text>
            </Block>
            <Block flex={2} center>
                <Image 
                    source={JarsLogo}
                    style={styles.imgStyle}
                />
            </Block>
            
            <Block flex={1} style={styles.randomStringBox}>
                {randomString && 
                    <Text style={styles.randomStringText}>
                        Here is a random string: {randomString}
                    </Text>}
            </Block>
            <Block flex={1}></Block>
        </Block>);
}