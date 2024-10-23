import { useFetchProduct } from "@/components/useFetchProduct";
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from "react-native";

import LastRead from "@/components/LastRead";
import SurahItem from "@/components/SurahItem";

interface Surah {
  "number": number,
  "name": string,
  "englishName": string,
  "englishNameTransliteration": string,
  "numberOfAyahs": number,
  "revelationType": string
};

import { useEffect } from "react";





const showProducts = () => {
  const { products, loading, error } = useFetchProduct();

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  if (error) {
    return <Text style={{ backgroundColor: 'red' }} >{error}</Text>;
  }

  // console.log("Products at line 21:", products);

  return (
    <View style={styles.container}>
      <LastRead />
      <FlatList
        data={products}
        renderItem={({ item }) => <SurahItem surahData={item} />}
        keyExtractor={(item) => item.number.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
    flex: 1,
    backgroundColor: '#fff',
  },
});



export default showProducts;
