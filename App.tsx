import { View, Text, StyleSheet } from 'react-native';

export default function App() {
  const etudiants = [
    { id: 1, nom: 'Amine', note: 16 },
    { id: 2, nom: 'Youssef', note: 8 },
    { id: 3, nom: 'Salma', note: 14 },
    { id: 4, nom: 'Omar', note: 12 },
  ];

  const total = etudiants.reduce((s, e) => s + e.note, 0);
  const moyenne = total / etudiants.length;

  return (
    <View style={styles.ecran}>
      <Text style={styles.title}>Notes des étudiants</Text>
      <Text style={styles.moyenne}>Moyenne : {moyenne}/20</Text>
      {etudiants.map((e) => (
        <Text key={e.id} style={styles.ligne}>
          {e.nom} : {e.note}/20
        </Text>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  ecran: { flex: 1, justifyContent: 'center', padding: 26, backgroundColor: '#fff' },
  title: { fontSize: 22, fontWeight: 'bold', color: '#000', marginBottom: 10 },
  moyenne: { fontSize: 18, marginBottom: 15 },
  ligne: { fontSize: 16, marginBottom: 5 },
});