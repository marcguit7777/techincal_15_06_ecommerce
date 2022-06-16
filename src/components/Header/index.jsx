import React, { useState, useContext } from 'react'
import { BiSortAlt2 } from 'react-icons/bi'
import EcommerceProducts from 'context/EcommerceProducts'


const Header = ({ productKeys, currentProducts }) => {

  const [order, setOrder] = useState('ASC')

  const { setCurrentProducts, navbarHeight } = useContext(EcommerceProducts)

  const sortingProductsBy = column => {
    if (order === 'ASC') {
      const sorted = [...currentProducts].sort((a, b) =>
        a[column].toLowerCase() > b[column].toLowerCase() ? 1 : -1
      )
      setCurrentProducts(sorted)
      setOrder('DES')
      console.log(sorted);
    }
    else {
      const sorted = [...currentProducts].sort((a, b) =>
        a[column].toLowerCase() < b[column].toLowerCase() ? 1 : -1
      )
      setCurrentProducts(sorted)

      setOrder('ASC')
    }

    // return 'currentProducts[column].sort()'
  }

  return (
    <thead style={{position: 'sticky', top: navbarHeight, backgroundColor: '#fff '}}>
      <tr >
        {productKeys.map((productKey, idx) =>
          <th style={{ cursor: 'pointer' }} key={idx} onClick={() => sortingProductsBy(productKey)}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.25rem' }}>
              {productKey.toUpperCase()} <BiSortAlt2 size={25} />
            </div>
          </th>
        )}
      </tr>
    </thead>
  )
}

export default Header