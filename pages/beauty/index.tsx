import { GetStaticProps } from 'next'
import { Layout, Page } from '@vercel/examples-ui'
import getProducts from '../../lib/getProducts'
import { PER_PAGE } from './[page]'
import PaginationPage from '../../components/PaginatedPage'
import { useEffect, useState } from 'react'

function Category({ products, totalProducts, currentPage }: any) {

  const [productsPage, setProductsPage] = useState(products)

  console.log("productsPage", productsPage);

  useEffect(() => {
    if (productsPage.length === 0) {
      getProducts({ limit: PER_PAGE, page: currentPage, categories: ["beauty", "fragrances"] })
        .then(({ products }) => setProductsPage(products))
        .catch(console.error);
    }
  }, [productsPage, currentPage]);


  return (
    <Page>
      <PaginationPage
        products={productsPage}
        currentPage={currentPage}
        totalProducts={totalProducts}
        perPage={PER_PAGE}
        category={["beauty", "fragrances"]}
      />
    </Page>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const { products, total } = await getProducts({ limit: PER_PAGE, page: 1, categories: ["beauty", "fragrances"] });

  return {
    props: {
      products,
      totalProducts: total,
      currentPage: 1,
    },
  }
}

Category.Layout = Layout

export default Category
