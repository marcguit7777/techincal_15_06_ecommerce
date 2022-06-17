import React, { useState, useContext } from 'react'
import { BiSortAlt2 } from 'react-icons/bi'
import EcommerceProducts from 'context/EcommerceProducts'
import {HeaderTable} from './Header.styled'

const Header = ({ productKeys, currentProducts, isPositionFix }) => {

  const [order, setOrder] = useState('ASC')

  const { setCurrentProducts, navbarHeight } = useContext(EcommerceProducts)

  //se está modificando la estructura del array que traemos de la API
  const convertCategoryToString = [...currentProducts].map(el => {
    if (el.category.name) return { ...el, category: el.category.name }
    else return el
  })

  const sortingProductsBy = column => {
    if (order === 'ASC') {
      const sorted = convertCategoryToString.sort((a, b) =>
        a[column] > b[column] ? 1 : -1
      )
      setCurrentProducts(sorted)
      setOrder('DES')
    }
    else {
      const sorted = convertCategoryToString.sort((a, b) =>
        a[column] < b[column] ? 1 : -1
      )
      setCurrentProducts(sorted)
      setOrder('ASC')
    }
  }

  return (
    <HeaderTable isPositionFix={isPositionFix} navbarHeight={navbarHeight}>
      <tr>
        {productKeys.map((productKey, idx) =>
          //cómo hacer para que tengan diferente width??
          <th style={{ cursor: 'pointer', width: `calc(100% / ${productKeys.length}` }} key={idx} onClick={() => sortingProductsBy(productKey)}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.25rem' }}>
              {productKey.toUpperCase()} <BiSortAlt2 size={25} />
            </div>
          </th>
        )}
      </tr>
    </HeaderTable>
  )
}

export default Header