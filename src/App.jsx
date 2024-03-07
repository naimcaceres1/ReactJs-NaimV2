import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Footer from './components/Footer/Footer';
import Error from './components/Error/Error';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cart from './components/Cart/Cart';
import Contacts from './components/Contacts/Contacts';
import Us from './components/Us/Us';
import CartProvider from './context/CartContext';
import './App.css'
import Checkout from './components/Checkout/Checkout';




function App() {

return (
<div className='appContainer'>
        <BrowserRouter>
                <CartProvider>
                <NavBar/>
                        <Routes>
                        <Route path='/' element = {<ItemListContainer/>}/>
                        <Route path='/categories/:categoryId' element = {<ItemListContainer/>}/>
                        <Route path='/trademark/:trademarkId' element = {<ItemListContainer/>}/>
                        <Route path='/detail/:id' element = {<ItemDetailContainer/>}/>   
                        <Route path='/contacts' element = {<Contacts/>}/>   
                        <Route path='/us' element = {<Us/>}/>  
                        <Route path='/cart' element = {<Cart/>}/>
                        <Route path='/checkout' element={<Checkout/>}/>  
                        <Route path='*' element = {<Error/>}/>  
                </Routes>
                <Footer/>
                </CartProvider>
        </BrowserRouter>
</div>
)
}

export default App;
