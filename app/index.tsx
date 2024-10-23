import { useFetchProduct } from "@/components/useFetchSurah";
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
  const { surah, loading } = useFetchProduct();

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  // console.log("Products at line 21:", products);

  return (
    <View style={styles.container}>
      <LastRead />
      <FlatList
        data={surah}
        renderItem={({ item }) => <SurahItem item={item} />}
        keyExtractor={(surah) => surah.number.toString()}
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
