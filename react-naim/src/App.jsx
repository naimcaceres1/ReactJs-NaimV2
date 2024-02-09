import './App.css'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import Footer from './components/Footer/Footer'
import Error from './components/Error/Error'
import { BrowserRouter,Routes,Route } from 'react-router-dom'

function App() {

  return (
    <div>
      <BrowserRouter>
        <NavBar/>

        <Routes> 
          <Route path='/' element= {<ItemListContainer/>}/>

          <Route path='/categories/:categoryId' element={<ItemListContainer/>}/>

          <Route path='/trademark/:trademarkId' element={<ItemListContainer/>}/>

          <Route path='/detail/:id' element={<ItemDetailContainer/>}/>
          
          
          <Route path='*' element={<Error/>}/>

        </Routes>

        <Footer/>
      </BrowserRouter>
        
    </div>
  )
}

export default App
