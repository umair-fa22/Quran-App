import { useState, useEffect } from "react";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface Surah {
  number: number;
  name: string;
  englishName: string;
  englishNameTransliteration: string;
  numberOfAyahs: number;
  revelationType: string;
}

interface Response {
  code: number;
  status: string;
  data: Surah[];
}

const api: string = "https://api.alquran.cloud/v1/surah";
const false_api: string = "https://api.alquran.clouds/v1/surah";

export const useFetchProduct = () => {
  const [surah, setSurah] = useState<Surah[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      try {
        const response = await fetch(api);
        const fetched: Response = await response.json();
        const data: Surah[] = fetched.data;

        // console.log(data);

        await AsyncStorage.setItem("surah", JSON.stringify(data));

        console.log("Fetched data online");

        setSurah(data);
      } catch (error) {
        console.log("Error fetching data online");

        console.log("Fetched data offline");

        const storedProducts = await AsyncStorage.getItem("surah");
        if (storedProducts) {
          console.log("Fetched Stored data for offline");
          // console.log(storedProducts);
          // console.log(JSON.parse(storedProducts)); // showing offline data but not loading into setProducts
          setSurah(JSON.parse(storedProducts));
        }
      } finally {
        setLoading(false);
      }
      
    };
    fetchProduct();
  }, []);

  return { surah, loading };
};
