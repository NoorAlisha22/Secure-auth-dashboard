import { useState } from 'react'
import {BrowserRouter} from 'react-router-dom'
import RouterCom from './components/RouterCom'
function App() {

  return (
    <>
      <BrowserRouter>
     <RouterCom/>
     </BrowserRouter> 
    </>
  )
}

export default App
