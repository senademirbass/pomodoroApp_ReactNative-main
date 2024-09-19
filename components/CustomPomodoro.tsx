import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Animated } from 'react-native';
import Slider from '@react-native-community/slider';
import { Ionicons } from '@expo/vector-icons';

const CustomPomodoro = () => {
    const [workTime, setWorkTime] = useState(25);
    const [breakTime, setBreakTime] = useState(5);
    const fadeAnim = new Animated.Value(0);

    React.useEffect(() => {
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 1000,
            useNativeDriver: true,
        }).start();
    }, []);

    const startPomodoro = () => {
        console.log(`Özel Pomodoro başlatıldı: ${workTime} dk çalışma, ${breakTime} dk mola`);
        // Pomodoro başlatma mantığını buraya ekleyin
    };

    return (
        <Animated.View style={[styles.container, { opacity: fadeAnim }]}>
            <Text style={styles.title}>Özel Pomodoro Oluştur</Text>

            <View style={styles.sliderContainer}>
                <Text style={styles.sliderLabel}>Çalışma Süresi: {workTime} dk</Text>
                <Slider
                    style={styles.slider}
                    minimumValue={1}
                    maximumValue={60}
                    step={1}
                    value={workTime}
                    onValueChange={setWorkTime}
                    minimumTrackTintColor="#FF6347"
                    maximumTrackTintColor="#000000"
                />
            </View>

            <View style={styles.sliderContainer}>
                <Text style={styles.sliderLabel}>Mola Süresi: {breakTime} dk</Text>
                <Slider
                    style={styles.slider}
                    minimumValue={1}
                    maximumValue={30}
                    step={1}
                    value={breakTime}
                    onValueChange={setBreakTime}
                    minimumTrackTintColor="#4682B4"
                    maximumTrackTintColor="#000000"
                />
            </View>

            <TouchableOpacity style={styles.startButton} onPress={startPomodoro}>
                <Ionicons name="play" size={24} color="white" />
                <Text style={styles.startButtonText}>Başlat</Text>
            </TouchableOpacity>
        </Animated.View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#F5F5F5',
        justifyContent: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 30,
        textAlign: 'center',
        color: '#333',
    },
    sliderContainer: {
        marginBottom: 30,
    },
    sliderLabel: {
        fontSize: 18,
        marginBottom: 10,
        color: '#333',
    },
    slider: {
        width: '100%',
        height: 40,
    },
    startButton: {
        backgroundColor: '#32CD32',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 15,
        borderRadius: 10,
        marginTop: 20,
    },
    startButtonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 10,
    },
});

export default CustomPomodoro;
