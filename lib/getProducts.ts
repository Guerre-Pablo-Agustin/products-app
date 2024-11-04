import useProductStore from '../store/ProductStore';

export default async function getProducts({
  limit,
  page,
  category, 
}: {
  limit: number;
  page: number;
  category?: string; 
}) {
  const { products, totalProducts } = useProductStore.getState();

  if (products.length === 0) {
    await useProductStore.getState().getProducts(); 
  }

  // Filtra los productos por categoría si se proporciona
  const filteredProducts = category
    ? products.filter((product) => product.category === category)
    : products;

  const paginatedProducts = filteredProducts.slice((page - 1) * limit, page * limit);

  return { products: paginatedProducts, total: filteredProducts.length };
}




