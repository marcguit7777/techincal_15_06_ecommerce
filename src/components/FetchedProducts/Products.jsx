import Header from 'components/Header'
import React from 'react'
import {TableHeader} from './FetchedProducts.styled'

const Products = ({ currentProducts, productKeys }) => {
   
  return (
    <div>
      <table>
        <Header productKeys={productKeys} currentProducts={currentProducts} /> 
        <tbody>
          {currentProducts.map((product, idx) => {
            const { title, price, category, description, images } = product
            // cómo hacer para que si no hay url en la 1ra posición de las images, busque la siguiente ??
            return(
              <tr key={idx}>
                <TableHeader>{title}</TableHeader>
                <TableHeader>{price}</TableHeader>
                <TableHeader>{description}</TableHeader>
                <TableHeader>{category.name}</TableHeader>
                <TableHeader><img style={{width:'30%', height: '30%'}} src={images?.[0]} /></TableHeader>
              </tr>
            )  
          })}
        </tbody>
      </table>
    </div>
  )
}

export default Products