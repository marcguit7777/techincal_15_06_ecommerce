import { createContext, useState } from "react";

const EcommerceProducts = createContext();

export const EcommerceProductsProvider = ({children}) => {

  const [products, setProducts] = useState([])
  const [currentProducts, setCurrentProducts] = useState([])
  const [navbarHeight, setNavbarHeight] = useState([])
  const [productKeys, setProductKeys] = useState([])
 
  return (
    <EcommerceProducts.Provider value={{ products, setProducts, currentProducts, setCurrentProducts, navbarHeight, setNavbarHeight, productKeys, setProductKeys }}>
      {children}
    </EcommerceProducts.Provider>
    
  )
}

export default EcommerceProducts