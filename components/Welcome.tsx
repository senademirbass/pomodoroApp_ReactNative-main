import styles from "../styles/welcomePageStyle";

import { DrawerNavigationProp } from '@react-navigation/drawer';
import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, Animated } from 'react-native';

type RootDrawerParamList = {
  Main: undefined;
  Welcome: undefined;
  Profile: undefined;
  Settings: undefined;
};

type WelcomeProps = {
  navigation: DrawerNavigationProp<RootDrawerParamList, 'Welcome'>;
};

function Welcome({ navigation }: WelcomeProps) {
    const [quote, setQuote] = useState("");
    const fadeAnim = new Animated.Value(0);
    
    useEffect(() => {
        fetchQuote();
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 2000,
            useNativeDriver: true,
        }).start();

        // 10 saniye sonra ana sayfaya yönlendir
        const timer = setTimeout(() => {
            navigation.navigate('Main');
        }, 10000);

        // Component unmount olduğunda timer'ı temizle
        return () => clearTimeout(timer);
    }, [navigation]);

    const fetchQuote = async () => {
        // Burada bir API'den alıntı çekebilirsiniz
        // Örnek olarak sabit bir alıntı kullanıyoruz
        setQuote("Zamanınızı yönetin, hayatınızı yönetin!");
    };

    return (
        <Animated.View style={[styles.container, { opacity: fadeAnim }]}>
            <Image style={styles.logo} source={require('../assets/Pomodoro.gif')}/>
            <Text style={styles.title}>PomodoroApp</Text>
            <Text style={styles.quote}>{quote}</Text>
        </Animated.View>
    );
}

export default Welcome;