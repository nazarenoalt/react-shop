import { useEffect, useState } from "react";
import axios from 'axios';


const useGetProducts = (API) => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);

  useEffect(async () => {
    const response = await axios(API);
    setProducts(response.data);
    setLoading(false);
  }, []);

  return [loading, products];
}

export { useGetProducts };