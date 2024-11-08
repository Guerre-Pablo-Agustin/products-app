import React from 'react'
import { Text } from '@vercel/examples-ui'
import Pagination from './Pagination'
import Image from 'next/image'

type PageProps = {
  products: any[]
  currentPage: number
  totalProducts: number
  perPage: number
  category: string[]
}

const ProductCard = ({ title, images, price }: any) => (
  <div className="flex flex-col my-10 border-2 border-sky-500 p-3 text-center justify-center items-center">
    <p className="text-2xl font-bold">{title}</p>
    <Text variant="smallText" className="my-3">
      ${price}
    </Text>
    <Image src={images[0]} alt={title} width={100} height={100} className='rounded-md flex justify-center items-center' />
  </div>
)

const PaginationPage = ({
  currentPage,
  totalProducts,
  perPage,
  products,
  category,
}: PageProps): JSX.Element => {
  const mainCategory = category[0];
  return (
    <div>
      <Text variant="h1">{mainCategory.charAt(0).toUpperCase() + mainCategory.slice(1)} Page {currentPage}</Text>
      <Pagination
        totalItems={totalProducts}
        currentPage={currentPage}
        itemsPerPage={perPage}
        renderPageLink={(page) => `/${mainCategory}/${page}`} 
      />
      <div className="grid md:grid-cols-3 grid-cols-2 gap-8">
        {products.map((product, i) => (
          <ProductCard key={i} {...product} />
        ))}
      </div>
    </div>
  );
}

export default PaginationPage
