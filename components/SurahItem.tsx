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
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#f8f4ff',
    borderRadius: 10,
    marginVertical: 5,
    marginHorizontal: 10,
  },
  numberContainer: {
    backgroundColor: '#d1a7ff',
    padding: 10,
    borderRadius: 50,
  },
  surahInfo: {
    flex: 1,
    marginLeft: 10,
  },
  number: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
  },
  englishName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  translation: {
    fontSize: 14,
    color: '#666',
  },
  arabicName: {
    fontSize: 22,
    color: '#6f42c1',
    fontWeight: 'bold',
  },
  modalBackground: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.5)' },
  modalBox: { width: 300, padding: 20, backgroundColor: '#fff', borderRadius: 10, alignItems: 'center' },
  modalTitle: { fontSize: 18, fontWeight: 'bold', marginBottom: 10 },
  modalText: { fontSize: 16, marginBottom: 5 },
  closeButton: { color: 'blue', marginTop: 10, fontSize: 16 },
});

export default SurahItem;
