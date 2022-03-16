import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'


const RuteroClick = ({ start  ,  Ledandioski}) => {

    const [encontrado , setencotrado]  =  useState()
    const {id , index} =  useParams()
    const SingleFecht = async ()=>{
          const primero =  await  fetch(`https://swapi.dev/api/people/${index}`)
          const secunod =  await primero.json()

        setencotrado(secunod)
    }
    useEffect(()=>{
        SingleFecht()

    })


   


  
  return (
    <>
        <h1 className='text-center text-muted  alto'>{id}</h1>
        <hr></hr>
        {encontrado  && <div  className='container border rounded bg-dark bg-gradient  text-white  text-center p-4'>
              <h2> color cabello:  {encontrado.hair_color}</h2>
              <h2> genero :  <span> {encontrado.gender}</span></h2>
              <h2> altura : {encontrado.height}</h2>
              <h2> fehca-nac: {encontrado.birth_year}</h2>
              <h2> color:ojos:{encontrado.eye_color}</h2>
              


        </div> }
        <br></br>
        <br></br>
        <br></br>
        <div  className='container bg-warning  bg-gradient'  >Lorem</div>
    </>
    // <div>RuteroClick</div>
  )

}

export default RuteroClick