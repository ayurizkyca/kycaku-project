import { useEffect, useState } from 'react'
import { getProducts } from '../services/api';

interface Product {
  id: string;
  name: string;
  quantity: number;
  price: number;
  image: string;
}

const useProduct = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const data = await getProducts();
        setProducts(data);
      } catch (error) {
        setError(error as Error);
      } finally{
        setLoading(false);
      }
    }

    fetchProduct();
  }, []);
  return {products, loading, error};
}

export default useProduct;