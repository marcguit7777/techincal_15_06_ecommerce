import React, {useRef, useContext, useEffect, useState} from 'react'
import { PageTag, StyledLinkNewProduct } from './PaginationButtons.styled'
import EcommerceProducts from 'context/EcommerceProducts'


const PaginationButtons = ({ totalProducts, productsPerPage, currentPage, setCurrentPage }) => {

  const navRef = useRef()

  const { setNavbarHeight } = useContext(EcommerceProducts)

  const totalNumberOfButtons = Math.ceil(totalProducts / productsPerPage)
  const arrayWithNumberOfButtons = [...Array(totalNumberOfButtons).keys()]

  const getProductsInPage = selectedPage => setCurrentPage(selectedPage)
  const increasePagination = () => currentPage < arrayWithNumberOfButtons.length && setCurrentPage(currentPage + 1)
  const decreasePagination = () => currentPage > 1 && setCurrentPage(currentPage - 1)

  function handleWindowResize() {
    setNavbarHeight(navRef.current?.scrollHeight);
  }

  window.addEventListener('resize', handleWindowResize);


  return (
    <nav ref={navRef} style={{ paddingTop: '0.5rem', position: 'sticky', top: '0', backgroundColor: '#fff' }}>
      <StyledLinkNewProduct to={'/form'}>Add new product</StyledLinkNewProduct>
      <ul style={{ display: 'inline-block' }}>
        <li style={{ display: 'inline-block' }}>
          <PageTag forbidden={currentPage === 1} onClick={decreasePagination}>
            {`<`}
          </PageTag>
        </li>
        {arrayWithNumberOfButtons.map((number, idx) => (
          <li key={idx} style={{display: 'inline-block'}}>
            <PageTag isActive={currentPage===number+1} onClick={() => getProductsInPage(number + 1)}>{number + 1}</PageTag >
          </li>
        ))}
        <li style={{ display: 'inline-block' }}>
          <PageTag forbidden={currentPage === arrayWithNumberOfButtons.length} onClick={increasePagination}>
            {`>`}
          </PageTag>
        </li>
      </ul>
    </nav>
  )
}

export default PaginationButtons