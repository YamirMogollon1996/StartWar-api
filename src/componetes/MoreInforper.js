import React from 'react'
import { BrowserRouter , Route , Routes } from "react-router-dom"
import Pruebatecnia from './Pruebatecnia'
import RuteroClick from './RuteroClick'


const MoreInforper = () => {
  
  return (

        <>
                <BrowserRouter>
                    <Routes>

                        <Route path='/' element={<Pruebatecnia></Pruebatecnia>} ></Route>
                        <Route path='personaje/:id/:index' element={<RuteroClick></RuteroClick>} ></Route>


                    </Routes>
                
                
                </BrowserRouter>
        
        
        
        </>
  )
}

export default MoreInforper