
import { useState } from 'react'
import './App.css'

function App() {

  const [n1, setn1] = useState(0)
  const [n2, setn2] = useState(0)

  let calculoimc = Number(n2) / Number(n1 ** 2)

  const [calcbutton, setcalcbutton] = useState(false)



  return (
    <>
      <h1>CALCULE SEU IMC</h1>
      <form>
        <label>Digite sua altura:</label>
        <input type='number' autocomplete="off" onBlur={(e) => setn1(e.target.value)} ></input>
        <label>Digite seu peso:</label>
        <input type='number' autocomplete="off" onBlur={(e) => setn2(e.target.value)}></input>

        <button onClick={(e) => setcalcbutton(!calcbutton)} >CALCULAR</button>
        <button className={'apagar'} type='reset' onClick={(e) => setcalcbutton(false)}   >APAGAR</button>

        {calcbutton && (<>

          <h2 className={'resultado'}>{isNaN(calculoimc) ? alert('Número invalido') : calculoimc.toFixed(2)}</h2>

        </>)}
      </form>
      <br />


    </>
  )
}

export default App
