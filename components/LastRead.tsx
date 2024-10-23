import { StyleSheet, Text,View } from "react-native";

const LastRead = () => {
    return (
      <View style={styles.lastReadContainer}>
        <Text style={styles.greeting}>Asslamualaikum</Text>
        <Text style={styles.name}>Tanvir Ahassan</Text>
  
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Last Read</Text>
          
            <Text style={styles.surahName}>Al-Fatiah</Text>
            <Text style={styles.ayah}>Ayah No: 1</Text>
          
        </View>
      </View>
    );
  };


  const styles = StyleSheet.create({
    lastReadContainer: {
        padding: 20,
        backgroundColor: '#f3f1fe',
      },
      greeting: {
        fontSize: 18,
        color: '#6f42c1',
      },
      name: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#333',
      },
      card: {
        backgroundColor: '#9262ff',
        borderRadius: 10,
        padding: 15,
        marginTop: 10,
        
      },
      cardTitle: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
      },
      cardContent: {
        flex: 1,
      },
      surahName: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
      },
      ayah: {
        color: '#fff',
        fontSize: 16,
      }
  })


  export default LastRead;