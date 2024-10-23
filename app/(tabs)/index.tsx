import { useFetchProduct } from "@/components/useFetchSurah";
import {
    ActivityIndicator,
    FlatList,
    StyleSheet,
    Text,
    View,
} from "react-native";


interface Surah  {
    "number" : number,
    "name" : string,
    "englishName" : string,
    "englishNameTransliteration" : string,
    "numberOfAyahs" : number,
    "revelationType" : string
};

import { useEffect } from "react";


const SurahItem = ({ item }: { item: Surah }) => {
    return (
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
    );
  };


const showSurah = () => {
    const { surah, loading } = useFetchProduct();

    if (loading) {
        return <ActivityIndicator size="large" color="#0000ff" />;
    }

   

    // console.log("Products at line 21:", products);

    return (
        <FlatList
            data={surah}
            
            keyExtractor={(item) => item.number.toString()}
            renderItem={({ item }) => <SurahItem item={item} />}
        />
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
    number: {
      color: '#fff',
      fontWeight: 'bold',
      fontSize: 18,
    },
    surahInfo: {
      flex: 1,
      marginLeft: 10,
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
  });
  
export default showSurah;
