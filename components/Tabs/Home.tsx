import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import styles from '../../styles/home';
import CustomPomodoro from '../CustomPomodoro';

const Stack = createStackNavigator();

const HomeScreen = () => {
    const navigation = useNavigation<NavigationProp<any>>();

    const startPomodoro = (workTime: number, breakTime: number) => {
        console.log(`Pomodoro başlatıldı: ${workTime} dk çalışma, ${breakTime} dk mola`);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Pomodoro Seçenekleri</Text>
            
            <TouchableOpacity 
                style={styles.option} 
                onPress={() => startPomodoro(25, 5)}
            >
                <Ionicons name="timer-outline" size={40} color="#FF6347" />
                <View style={styles.optionTextContainer}>
                    <Text style={styles.optionTitle}>Klasik Pomodoro</Text>
                    <Text style={styles.optionDescription}>25 dk çalışma, 5 dk mola</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity 
                style={styles.option} 
                onPress={() => startPomodoro(50, 10)}
            >
                <Ionicons name="hourglass-outline" size={40} color="#4682B4" />
                <View style={styles.optionTextContainer}>
                    <Text style={styles.optionTitle}>Uzun Pomodoro</Text>
                    <Text style={styles.optionDescription}>50 dk çalışma, 10 dk mola</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity 
                style={styles.option} 
                onPress={() => navigation.navigate('CustomPomodoro')}
            >
                <Ionicons name="create-outline" size={40} color="#32CD32" />
                <View style={styles.optionTextContainer}>
                    <Text style={styles.optionTitle}>Kendin Oluştur</Text>
                    <Text style={styles.optionDescription}>Özel süre ve mola ayarla</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
};

const Home = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }} />
            <Stack.Screen name="CustomPomodoro" component={CustomPomodoro} />
        </Stack.Navigator>
    );
};

export default Home;
