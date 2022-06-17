import axios from 'axios'
import Products from 'components/FetchedProducts/Products'
import React, { useState, useRef, useContext, useEffect } from 'react' 
import EcommerceProducts from 'context/EcommerceProducts'
import { StyledLink } from './Form.styled'
import ProductCategories from 'localData/ProductCategories'


const URL_POST = 'https://api.escuelajs.co/api/v1/products/'
const INITIAL_STATE_DATA = {  
      title: '',
      price: '',
      description: '',
      categoryId: '1',
      images: ['']
}

const INITIAL_STATE_INPUT = {  
      title: '',
      price: '',
      description: '',
      category: 'Clothes',
      images: ['']
}
 
const Form = () => {

   const [data, setData] = useState(INITIAL_STATE_DATA)
   const [inputProduct, setInputProduct] = useState([INITIAL_STATE_INPUT])
   
   const priceInput = useRef()
  
   const { productKeys } = useContext(EcommerceProducts)

   const inputHandler = (e) => {
      const {value} = e.target
      // no sé hacer el destructuring de esto
      const inputName = e.target.getAttribute('name')

      // otra forma de hacerlo
      // const newFormData = { ...data }
      // newFormData[inputName] = inputValue

      // setData(newFormData)
      setData({ ...data, [inputName]: value })
      setInputProduct([{...data, [inputName]: value, category: getSelectValue()}])
   }   

      // no sé tratar esto con la función de arriba
   const inputHandlerImages = (e) => {
      e.preventDefault()
      const {value} = e.target
      setData({ ...data, images: [value] })
      setInputProduct([{ ...data, images: [value], category: getSelectValue() }])
   }

   const handleSubmit = async (e) => {
      e.preventDefault();

      if (data.price < 0) {
         alert('Please add a positive price')
         priceInput.current.focus()
      }
      else {
         const request = {
            ...data
         }
         console.log(request);
         await axios.post(URL_POST, request)
            .then(() => {
               setData(INITIAL_STATE_DATA)
               alert('Product properly added')
            })
            .catch(err => {
               alert('Something went wrong, check the inspector')
               console.log('Data not created, error: ', err)
            })
      }
   };
   
   const selectHandler = (e) => {
      const { value } = e.target
      const categoryId = ProductCategories.find(option => String(option.name) === String(value))?.id
      setData({ ...data, categoryId: categoryId })
   }
   
   const getSelectValue = () => ProductCategories.find(option => String(option.id) === String(data.categoryId))?.name

   useEffect(() => {
      setInputProduct([{ ...data, category: getSelectValue() }])
   // eslint-disable-next-line
   }, [data.categoryId])
   


   return (
      <>
         <h1>Add new product</h1>
         <form onSubmit={handleSubmit} style={{ margin: '3rem 0'}}>
            <input name='title' onChange={inputHandler} value={data.title} type='text' required='required' placeholder='Enter a title' />
            <input name='price' onChange={inputHandler} value={data.price} type='number' required='required' placeholder='Enter a price' ref={priceInput} />
            <input name='description' onChange={inputHandler} value={data.description} type='text' required='required' placeholder='Enter a description' />
            <select name="category" value={getSelectValue()} onChange={selectHandler} required='required'>
               {ProductCategories.map((option, idx) => (
                  <option key={idx} value={option.name}>{option.name}</option>
               ))}
            </select>
            <input name='images' onChange={inputHandlerImages} value={data.images[0]} type='text' required='required' placeholder='Enter a image URL' />
            <button type='submit'>Add</button>
         </form >
         
         <Products currentProducts={inputProduct} productKeys={productKeys} />
         <StyledLink to={'/'}>Go to Home</StyledLink>
      </>
   )
 }
 
 export default Form