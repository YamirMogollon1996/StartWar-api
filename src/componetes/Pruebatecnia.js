import React, { useEffect, useState } from 'react'
import war  from "./assets/war.svg"
import { BrowserRouter , Route , Routes } from "react-router-dom"
import { Link } from 'react-router-dom'
import RuteroClick from './RuteroClick'
// import { Li } from "react-router-dom"
import "./Estilos.css"




const Pruebatecnia = () => {

    const [start, setstar]=  useState([])
    const [indivual , setidnvial ] = useState(false)
    const [render ,  setrender] =  useState("")
    const [encontrados, setencontrados]= useState([])
    const  [actual , setacual] = useState(1)
    const [modal  , setmodal] = useState(false)


    const ChanguClimas = ()=>{
            setacual(actual +1)

    }
    
    const retocerpage = ()=>{
        if (actual > 0){
            setacual(actual - 1)
        }
       
    }


    const handlekey = (e)=>{
            
            let data = []
            start.results?.map(item => {
                if (item.name.includes(e.target.value)){
                        data.push(item)
                }
            })

            setencontrados(data)
            
    }
    const handleCahgnue = (e)=>{
        setrender(e.target.value[0].toLowerCase())
    }

    const Traer = async ()=>{

        const reler =  await fetch(`https://swapi.dev/api/people/?page=${actual}`)
        const second=  await reler.json()
  
        setstar(second)


    }
    useEffect(()=>{

            Traer()
    },[actual])



  return (
    <>

        <div className='container-fluid text-center bg-dark bg-gradient  alto '>
        <img  className='mx-auto' width="100" height="100" src={`${war}`} ></img>
        </div>
        
        <div  className='container'>
        <form className=''>

<input   onKeyDown={handlekey } onChange={handleCahgnue}  placeholder='search character' className='form-control m-3'  ></input>

       
        </form>
  
        </div>         
{/* 
        {start && start.results?.map(  (item,index) => <h1 onClick={()=> HandleClick(item)} key={index} >{item.name}</h1>)} */}

 
        {  encontrados.length === 0  ? 
        
        <div  className='container' >

        <table className='table  table-striper table-hover table-bordered'>
            
<thead  className='bg-dark text-white'>
    <tr>
    <th scope="col">#</th>
      <th scope="col">Personaje</th>
    </tr>
  </thead>

        <tbody>

        
     {               start.results?.map(  (item,index) =>  <tr key={index} >    <th scope="row"> {index +1} </th> 
                    {/* <td onClick={()=> HandleClick(item)} key={index} >{item.name}</td> */}
                    <td> <Link to={`personaje/${item.name}/${index +1 }`} >{item.name}</Link>  </td>
                    </tr>)


}
</tbody>
        </table>
        </div>:
<div className='container'>
    
<table className='table  table-striper table-hover table-bordered'>
            
            <thead  className='bg-dark text-white'>
                <tr>
                <th scope="col">#</th>
                  <th scope="col">Personaje</th>
                </tr>
              </thead>
                    <tbody>
                    {encontrados.map( (item,index) => <tr>
                                <th scope='row'>{index +1}</th>
                                <td> <Link to={`personaje/${item.name}/${index +1 }`} >{item.name}</Link> </td>
            
            
                    </tr>)}
            
            
                    </tbody>
            
            
            
            
                    
                     
                  </table>
            
</div>
      }  

        
        <section  className='container'>
        {start.next != null  && <button  onClick={ ChanguClimas} className='btn btn-primary m-3 ' >Nexting</button>}
        {start.previous != null  && <button onClick={retocerpage}  className='btn btn-primary m-3' >  Previus  </button>}
        </section>
       

            {/* {start &&   <RuteroClick 
            
            Ledandioski={Ledandioski}
            start={ start } ></RuteroClick>}  */}


    </>

  )
}

export default Pruebatecnia