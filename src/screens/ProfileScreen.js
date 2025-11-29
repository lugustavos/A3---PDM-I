import React, { useEffect, useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function ProfileScreen({ navigation }) {
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
        <Text style={styles.header}>Perfil</Text>
        {user ? (
          <>
            <Text>Nome: {user.name}</Text>
            <Text>RA: {user.ra}</Text>
            <Text>GitHub: {user.github}</Text>
            <View style={styles.buttonWrap}>
              <Button
                title="Limpar dados (logout)"
                onPress={async () => {
                  await AsyncStorage.removeItem('user');
                  navigation.reset({ index: 0, routes: [{ name: 'Login' }] });
                }}
              />
            </View>
          </>
        ) : (
          <Text>Sem usuário.</Text>
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1 },
  container: { flex: 1, padding: 12 },
  header: { fontSize: 18, fontWeight: '700', marginBottom: 8 },
  buttonWrap: { marginTop: 12 },
});
