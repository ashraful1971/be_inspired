import React from 'react';
import { View, Text, StatusBar, Button } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useFonts } from 'expo-font';
import styles from './style';

function Quote(props) {
    const [loaded] = useFonts({
        Oswald_Bold: require('../../fonts/Oswald-Bold.ttf'),
        Oswald_Regular: require('../../fonts/Oswald-Regular.ttf'),
    });
    if (!loaded) {
        return null;
    }
    return (
        <View style={styles.container}>
            <FontAwesome name="quote-left" color="#fff" />
            <Text style={styles.text}>{props.content}</Text>
            <Text style={styles.author}>{props.author}</Text>
            <StatusBar hidden style="auto" />
        </View>
    )
}

export default Quote;