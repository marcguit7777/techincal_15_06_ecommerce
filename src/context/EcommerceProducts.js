import { createContext, useState } from "react";

const EcommerceProducts = createContext();

export const EcommerceProductsProvider = ({children}) => {

  const [products, setProducts] = useState([])
  const [currentProducts, setCurrentProducts] = useState([])
  const [navbarHeight, setNavbarHeight] = useState([])

 
  return (
    <EcommerceProducts.Provider value={{ products, setProducts, currentProducts, setCurrentProducts, navbarHeight, setNavbarHeight }}>
      {children}
    </EcommerceProducts.Provider>
    
  )
}

export default EcommerceProducts