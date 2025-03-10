import { getProducts } from '../services/api';
import { useFetch } from './useFetch';

interface Product {
  id: string;
  name: string;
  quantity: number;
  price: number;
  image: string;
}

const useProduct = () => useFetch<Product[]>(getProducts);

export default useProduct;
