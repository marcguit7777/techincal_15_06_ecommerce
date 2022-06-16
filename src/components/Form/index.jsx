import axios from 'axios'
import React, { useState, useRef } from 'react' 
// import EcommerceProducts from 'context/EcommerceProducts'
// import Products from 'components/FetchedProducts/Products'
import {StyledLink} from './Form.styled'

const URL_POST = 'https://api.escuelajs.co/api/v1/products/'
const INITIAL_STATE = {  
      title: '',
      price: '',
      description: '',
      categoryId: '',
      images: ['']
   }
 
const Form = () => {

   const [data, setData] = useState(INITIAL_STATE)
   
   const categoryInput = useRef()
   const priceInput = useRef()
  
   // en el caso que el formulario estuviera en la misma página que la tabla,
   // al hacer el submit añadiría el nuevo producto a "products" de forma manual
   // para ver los resultados al momento. También establecería la paginación 
   // a la última página
   // const { products, setProducts } = useContext(EcommerceProducts)

   const inputHandler = (e) => {
      const {value} = e.target
      // no sé hacer el destructuring de esto
      const inputName = e.target.getAttribute('name')
      const inputValue = value

      // otra forma de hacerlo
      // const newFormData = { ...data }
      // newFormData[inputName] = inputValue

      // setData(newFormData)
      setData({...data, [inputName]: inputValue})
   }   

      // no sé tratar esto con la función de arriba
   const inputHandlerImages = (e) => {
      e.preventDefault()
      const {value} = e.target
      setData({...data, images: [value]})
   }

   const handleSubmit = async (e) => {
      e.preventDefault();

      if (data.price < 0) {
         alert('Please add a positive price')
         priceInput.current.focus()
      }
      // se podría calcular el número de categorías haciendo un fetch de la url:
      // https://api.escuelajs.co/api/v1/categories y calcular la length del array
      else if (data.categoryId < 1 || data.categoryId > 7) {
         alert('Please add a category number between 1 and 7')
         categoryInput.current.focus()
      }
      else {
         const request = {
            ...data
         }
         await axios.post(URL_POST, request)
            .then(() => {
               setData(INITIAL_STATE)
               alert('Product properly added')
               // setProducts({ ...products, request })
            })
            .catch(err => {
               alert('Something went wrong, check the inspector')
               console.log('Data not created, error: ', err)
            })
      }
  };
      
   return (
      <>
         <h1>Add new product</h1>
         <form onSubmit={handleSubmit} style={{ position: 'sticky', backgroundColor: '#fff'}}>
            <input name='title' onChange={inputHandler} value={data.title} type='text' required='required' placeholder='Enter a title' />
            <input name='price' onChange={inputHandler} value={data.price} type='number' required='required' placeholder='Enter a price' ref={priceInput} />
            <input name='description' onChange={inputHandler} value={data.description} type='text' required='required' placeholder='Enter a description' />
            <input name='categoryId' onChange={inputHandler} value={data.categoryId} type='number' required='required' placeholder='Enter a category Id' ref={categoryInput}/>
            <input name='images' onChange={inputHandlerImages} value={data.images[0]} type='text' required='required' placeholder='Enter a image URL' />
            <button type='submit'>Add</button>
         </form >
         <StyledLink to={'/'}>Go to Home</StyledLink>
      </>
   )
 }
 
 export default Form