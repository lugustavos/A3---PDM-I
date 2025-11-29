import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function CourseDetail({ route }) {
  const { course } = route.params || {};
  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.container}>
        <Text style={styles.title}>{course?.title ?? 'Detalhes do Curso'}</Text>
        <Text style={styles.desc}>Descrição: micro curso para requalificação rápida.</Text>
        <Button title="Iniciar/Continuar" onPress={() => {}} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1 },
  container: { flex: 1, padding: 16 },
  title: { fontSize: 18, fontWeight: '700', marginBottom: 8 },
  desc: { marginVertical: 12 },
});
