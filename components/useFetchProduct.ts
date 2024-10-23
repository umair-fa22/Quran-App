import { useState, useEffect } from "react";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface Data {
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
  data: Data[];
}

const api: string = "https://api.alquran.cloud/v1/surah";
const false_api: string = "https://api.alquran.clouds/v1/surah";

export const useFetchProduct = () => {
  const [products, setProducts] = useState<Data[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      try {
        const response = await fetch(api);
        const fetched: Response = await response.json();
        const data: Data[] = fetched.data;

        // console.log(data);

        await AsyncStorage.setItem("surah", JSON.stringify(data));

        console.log("Fetched data online");

        setProducts(data);
      } catch (error) {
        console.log("Error fetching data online");

        console.log("Fetched data offline");

        const storedProducts = await AsyncStorage.getItem("surah");
        if (storedProducts) {
          console.log("Fetched Stored data for offline");
          // console.log(storedProducts);
          // console.log(JSON.parse(storedProducts)); // showing offline data but not loading into setProducts
          setProducts(JSON.parse(storedProducts));
        }
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, []);

  return { products, loading, error };
};
