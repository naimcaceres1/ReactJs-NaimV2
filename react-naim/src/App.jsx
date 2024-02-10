import {useState, useEffect} from 'react';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Footer from './components/Footer/Footer';
import Error from './components/Error/Error';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  const [cartCount, setCartCount] = useState(0);

  return (
    <div>
      <BrowserRouter>
        <NavBar cartCount={cartCount} />

        <Routes> 
          <Route path='/' element= {<ItemListContainer setCartCount={setCartCount} />}/>

          <Route path='/categories/:categoryId' element={<ItemListContainer setCartCount={setCartCount} />}/>

          <Route path='/trademark/:trademarkId' element={<ItemListContainer setCartCount={setCartCount} />}/>

          <Route path='/detail/:id' element={<ItemDetailContainer setCartCount={setCartCount} />}/>
          
          
          <Route path='*' element={<Error/>}/>

        </Routes>

        <Footer/>
      </BrowserRouter>
        
    </div>
  )
}

export default App;
