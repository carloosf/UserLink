import './App.css'
import { useEffect, useState } from 'react'

function App() {

  const [dados, setDados] = useState({})

  useEffect(() => {
    fetch('http://localhost:3333/')
      .then(response => response.json())
      .then(responseData => setDados(responseData))
      .catch(error => console.error('Erro: ', error))
  }, [])

  console.log(dados);

  return (
    <div/>
  )
}

export default App
