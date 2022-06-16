import axios from 'axios'
import React, {useState, useEffect, useContext} from 'react'
import Products from './Products'
import PaginationButtons from 'components/PaginationButtons'
import SpinnerImage from 'assets/images/loading-icon-transparent-background-12.jpg'
import { SpinnerPositioned } from './FetchedProducts.styled'
import EcommerceProducts from 'context/EcommerceProducts'


const URL_FAKE_API = 'https://api.escuelajs.co/api/v1/products'
const PRODUCTS_PER_PAGE = 10 

const FetchedProducts = () => {

  const [productKeys, setProductKeys] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [isLoading, setIsLoading] = useState(true)

  const {products, setProducts, currentProducts, setCurrentProducts} = useContext(EcommerceProducts)

  const fetchProducts = async () => {
    await axios.get(URL_FAKE_API)
      .then(res => {
        const fetchedProducts = res.data
        setProducts(fetchedProducts)
        const arrayProductKeys = Object.keys(fetchedProducts[0])
        arrayProductKeys.shift()
        setProductKeys(arrayProductKeys);
        setIsLoading(false)
      })
      .catch(err => 
        console.log('Api error', err)
      )
  }

  //no sé quitar el warning de "has missing dependency"
  useEffect(() => {
    fetchProducts();
  }, [])

  const indexLastProductPaginated = currentPage * PRODUCTS_PER_PAGE;
  const indexFirstProductPaginated = indexLastProductPaginated - PRODUCTS_PER_PAGE;

  //no sé quitar el warning de "has missing dependency"
  useEffect(() => {
    setCurrentProducts(products.slice(indexFirstProductPaginated, indexLastProductPaginated))
  }, [products, currentPage])

  return (
    
    <div>
      {isLoading ? <SpinnerPositioned><img style={{width: '5%'}} src={SpinnerImage} alt='Spinner'/></SpinnerPositioned>
        :
        <div>
          <PaginationButtons
            totalProducts={products.length}
            productsPerPage={PRODUCTS_PER_PAGE}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
          <Products
            currentProducts={currentProducts}
            setProducts={setProducts}
            productKeys={productKeys} />
        </div>
        }
    </div>
  )
}

export default FetchedProducts