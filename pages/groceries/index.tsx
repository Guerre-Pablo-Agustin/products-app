

import { GetStaticProps } from 'next'
import { Layout, Page } from '@vercel/examples-ui'
import getProducts from '../../lib/getProducts'
import PaginationPage from '../../components/PaginatedPage'
import { useEffect, useState } from 'react'

const PER_PAGE = 6

function Groceries({ products, totalProducts, currentPage }: any) {

  
  const [productsPage, setProductsPage] = useState(products)

  useEffect(() => {
    if (productsPage.length === 0) {
      getProducts({ limit: PER_PAGE, page: currentPage, categories: ["beauty", "fragrances"] })
        .then(({ products }) => setProductsPage(products))
        .catch(console.error);
    }
  }, [productsPage, currentPage]);

  console.log("productsPage", productsPage);


  return (
    <Page>
      <PaginationPage
        products={productsPage}
        currentPage={currentPage}
        totalProducts={totalProducts}
        perPage={PER_PAGE}
        category={["groceries"]}
      />
    </Page>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const { products, total } = await getProducts({ limit: PER_PAGE, page: 1 , categories: ["groceries"] });

  console.log("products", products);

  return {
    props: {
      products,
      totalProducts: total,
      currentPage: 1,
    },
  }
}

Groceries.Layout = Layout

export default Groceries
