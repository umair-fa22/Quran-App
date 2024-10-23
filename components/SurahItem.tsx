import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal, StyleSheet } from 'react-native';

interface Surah {
  number: number;
  name: string;
  englishName: string;
  numberOfAyahs: number;
  revelationType: string;
}


const SurahItem = ({ item }: { item: Surah }) => {
  const [modalVisible, setModalVisible] = useState(false);

  const handlePress = () => {
    setModalVisible(true);
  };

  const handleClose = () => {
    setModalVisible(false);
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      <View style={styles.itemContainer}>
        <View style={styles.numberContainer}>
          <Text style={styles.number}>{item.number}</Text>
        </View>
        <View style={styles.surahInfo}>
          <Text style={styles.englishName}>{item.englishName}</Text>
          <Text style={styles.translation}>
            {item.revelationType} - {item.numberOfAyahs} Verses
          </Text>
        </View>
        <Text style={styles.arabicName}>{item.name}</Text>
      </View>

      {/* Modal for showing the additional data */}
      <Modal
        transparent={true}
        visible={modalVisible}
        animationType="fade"
        onRequestClose={handleClose}
      >
        <View style={styles.modalBackground}>
          <View style={styles.modalBox}>
            <Text style={styles.modalTitle}>{item.englishName}</Text>
            <Text style={styles.modalText}>Revelation Type: {item.revelationType}</Text>
            <Text style={styles.modalText}>Ayahs: {item.numberOfAyahs}</Text>
            <Text style={styles.modalText}>Arabic Name: {item.name}</Text>

            <TouchableOpacity onPress={handleClose}>
              <Text style={styles.closeButton}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  itemContainer: { padding: 10, borderBottomWidth: 1, borderColor: '#ddd' },
  numberContainer: { marginRight: 10 },
  surahInfo: { flex: 1 },
  number: { fontSize: 18, fontWeight: 'bold' },
  englishName: { fontSize: 16 },
  translation: { fontSize: 14, color: '#888' },
  arabicName: { fontSize: 20, fontWeight: 'bold', color: '#333' },
  modalBackground: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.5)' },
  modalBox: { width: 300, padding: 20, backgroundColor: '#fff', borderRadius: 10, alignItems: 'center' },
  modalTitle: { fontSize: 18, fontWeight: 'bold', marginBottom: 10 },
  modalText: { fontSize: 16, marginBottom: 5 },
  closeButton: { color: 'blue', marginTop: 10, fontSize: 16 },
});

export default SurahItem;
