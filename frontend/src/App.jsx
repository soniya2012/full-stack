import Counter from './components/Counter'
import Effect from './components/Effect'
import Navbar from './components/Navbar'
import Parent from './components/Parent'
import About from './Pages/About'
import Contacts from './Pages/Contacts'
import Home from './Pages/Home'
import Service from './Pages/Service'
import { Routes,Route } from 'react-router-dom'

const App = ()=>{
  return(
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about'element={<About/>}/>
        <Route path='/service' element={<Service/>}/>
        <Route path='/Contacts' element={<Contacts/>}/>
        <Route path='/Parent' element={<Parent/>}/>
         <Route path='/useEffect' element={<Effect/>}/>
      
        

      </Routes>
    </>
    
  )
}

export default App