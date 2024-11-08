import useProductStore from '../store/ProductStore';

export default async function getProducts({
  limit,
  page,
  categories, 
}: {
  limit: number;
  page: number;
  categories?: string[];
}) {
  const { products, totalProducts } = useProductStore.getState();

  if (products.length === 0) {
    await useProductStore.getState().getProducts(); 
  }

  // Filtra los productos por categorías si se proporciona un arreglo
  const filteredProducts = categories && categories.length > 0
    ? products.filter((product) => categories.includes(product.category))
    : products;

  const paginatedProducts = filteredProducts.slice((page - 1) * limit, page * limit);

  return { products: paginatedProducts, total: filteredProducts.length };
}




