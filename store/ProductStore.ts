import { create } from 'zustand'; 
import axios from 'axios';
import { Product } from '../types/Types';

interface ProductStore {
  products: Product[];
  totalProducts: number;
  getProducts: () => Promise<void>; 
  setTotalProducts: (totalProducts: number) => void;
}

const useProductStore = create<ProductStore>((set) => ({
  products: [],
  totalProducts: 0,
  getProducts: async () => {
    try {
      const { data } = await axios.get("https://dummyjson.com/products");
      set({ products: data.products, totalProducts: data.total }); 
    } catch (error) {
      console.error("Error al obtener productos:", error); 
    }
  },
  setTotalProducts: (totalProducts: number) => set({ totalProducts }),
}));

export default useProductStore;


