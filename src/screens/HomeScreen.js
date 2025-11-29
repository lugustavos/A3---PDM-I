import React, { useEffect, useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ProgressBar from '../shared/ProgressBar';

export default function HomeScreen({ navigation }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    (async () => {
      const u = await AsyncStorage.getItem('user');
      setUser(u ? JSON.parse(u) : null);
    })();
  }, []);

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.container}>
        <Text style={styles.hi}>Olá{user ? `, ${user.name}` : ''}!</Text>
        <Text style={styles.sub}>Progresso das trilhas</Text>

        <ProgressBar progress={0.42} showLabel />

        <View style={styles.buttonWrap}>
          <Button title="Abrir Cursos" onPress={() => navigation.navigate('Cursos')} />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1 },
  container: { flex: 1, padding: 16 },
  hi: { fontSize: 20, fontWeight: '600', marginBottom: 8 },
  sub: { marginBottom: 10, color: '#333' },
  buttonWrap: { marginTop: 16 },
});
