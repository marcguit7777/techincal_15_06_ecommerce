import FetchedProducts from 'components/FetchedProducts';
import Form from 'components/Form';
import { EcommerceProductsProvider } from './context/EcommerceProducts'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {
  
  return (
    <div className="App" style={{ textAlign: 'center' }}>
      <EcommerceProductsProvider>
        <Router>
          <Routes>
            <Route exact path='/' element={<FetchedProducts />} />
            <Route exact path='/form' element={<Form />} />
          </Routes>
        </Router>
      </EcommerceProductsProvider>
    </div>
  );
}

export default App;
