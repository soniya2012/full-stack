import Counter from './components/Counter'
import Navbar from './components/Navbar'
import Parent from './components/Parent'
import About from './Pages/About'
import Contacts from './Pages/Contacts'
import Home from './Pages/Home'
import Service from './Pages/Service'

const App = ()=>{
  return(
    <div>
      <Navbar/>
      <h1>hello world!!</h1>
      <h1>hello world!!</h1>
      <Home/>
      <Parent/>
      <Service/>
      <About/>
      <Contacts/>
      <Counter/>


    </div>
    
  )
}

export default App