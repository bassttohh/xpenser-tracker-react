// import { useState } from 'react'
import './App.css'
import { Categories } from './componentes/categories'

const Bills = ({time}) => {
  return (
    <div className='bills-container' >
      <p>
        Total gastado en el {time}
      </p>
      <span>
        1212
      </span>
    </div>
  )
}

const App = () => {
  return (
    <main className='app'>
      <h3 className='title'>
        LIBRO DE GASTOS
      </h3>

      <Bills />

      <Categories/>
    </main>
   )
}

 export default App
