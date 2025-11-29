import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const DATA = [
  { id: '1', title: 'Introdução à IA - micro curso', progress: 0.2 },
  { id: '2', title: 'Sustentabilidade Digital', progress: 0.6 },
  { id: '3', title: 'Soft Skills para o século 21', progress: 0.1 },
];

export default function CoursesScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.container}>
        <FlatList
          data={DATA}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('CourseDetail', { course: item })}>
              <Text style={styles.title}>{item.title}</Text>
              <Text>Progresso: {(item.progress * 100).toFixed(0)}%</Text>
            </TouchableOpacity>
          )}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1 },
  container: { flex: 1, padding: 12 },
  card: { padding: 12, borderWidth: 1, borderRadius: 8, marginBottom: 10, borderColor: '#ddd' },
  title: { fontWeight: '600', marginBottom: 6 },
});
