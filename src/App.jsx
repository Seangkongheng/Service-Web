import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import Service from './components/Service/Service'
import Programming from './components/Programming/Programming'
import Collabration from './components/Collabration/Collabration'
import Footer from './components/Footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
        
      <Navbar />
      <Home />
      <Service />
      <Programming />
      <Collabration />
      <Footer />
    </div>
    
    
  )
}

export default App
