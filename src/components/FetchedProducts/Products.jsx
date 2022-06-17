import Header from 'components/Header'
import React from 'react'
import { TableHeader } from './FetchedProducts.styled'
import ProductCategories from 'localData/ProductCategories'

const DEFAULT_IMG_URL = 'https://thumbs.dreamstime.com/b/default-image-icon-vector-missing-picture-page-website-design-mobile-app-no-photo-available-236105299.jpg'

const Products = ({ currentProducts, productKeys, isPositionFix }) => {

  const changeToDefaultSrc = (e) => {
    e.target.src = DEFAULT_IMG_URL
  }
 
  return (
    <div>
      <table>
        <Header productKeys={productKeys} currentProducts={currentProducts} isPositionFix={isPositionFix} /> 
        <tbody>
          {currentProducts.map((product, idx) => {
            const { title, price, category, description, images } = product
            // cómo hacer para que si no hay url en la 1ra posición de las images, busque la siguiente ??
            images.filter(element => element)
            return (
              <tr key={idx}>
                <TableHeader>{title}</TableHeader>
                <TableHeader>{price}</TableHeader>
                <TableHeader>{description}</TableHeader>
                <TableHeader>{category?.name || category}</TableHeader>
                <TableHeader><img style={{ width: '30%', height: '30%' }} onError={changeToDefaultSrc} src={images?.[0]} alt='product' /></TableHeader>
              </tr>
            )  
          })}
        </tbody>
      </table>
    </div>
  )
}

export default Products