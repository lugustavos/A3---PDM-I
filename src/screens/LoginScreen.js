import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert, KeyboardAvoidingView, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function LoginScreen({ navigation }) {
  const [ra, setRa] = useState('');
  const [name, setName] = useState('');
  const [github, setGithub] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    if (!name.trim() || !ra.trim()) {
      Alert.alert('Erro', 'Nome e RA são obrigatórios.');
      return;
    }
    if (ra.length < 4) {
      Alert.alert('Erro', 'RA muito curto.');
      return;
    }

    try {
      setLoading(true);
      const user = { name: name.trim(), ra: ra.trim(), github: github.trim() };
      await AsyncStorage.setItem('user', JSON.stringify(user));
      navigation.reset({ index: 0, routes: [{ name: 'AppTabs' }] });
    } catch (err) {
      Alert.alert('Erro', 'Não foi possível salvar os dados.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView style={styles.safe}>
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : undefined} style={styles.container}>
        <Text style={styles.title}>SkillUpPlus2030+</Text>

        <TextInput
          style={styles.input}
          placeholder="Nome"
          value={name}
          onChangeText={setName}
          autoCapitalize="words"
        />

        <TextInput
          style={styles.input}
          placeholder="RA"
          value={ra}
          onChangeText={setRa}
        />

        <TextInput
          style={styles.input}
          placeholder="GitHub (link)"
          value={github}
          onChangeText={setGithub}
          autoCapitalize="none"
        />

        <View style={styles.buttonWrap}>
          <Button title={loading ? 'Salvando...' : 'Entrar / Salvar'} onPress={handleLogin} disabled={loading} />
        </View>
        
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1 },
  container: { flex: 1, padding: 20, justifyContent: 'center' },
  title: { fontSize: 24, fontWeight: '700', marginBottom: 20, textAlign: 'center' },
  input: { borderWidth: 1, borderColor: '#999', padding: 10, marginBottom: 12, borderRadius: 6 },
  buttonWrap: { marginTop: 8 },
  small: { marginTop: 12, fontSize: 12, color: '#666', textAlign: 'center' },
});
