
import { useState } from 'react'
import './App.css'

function App() {

  const [n1, setn1] = useState(0)
  const [n2, setn2] = useState(0)


  let calculoimc = Number(n2) / Number(n1 ** 2)

  const [calcbutton, setcalcbutton] = useState(false)

  const mensagem = (resultado) => {
    if (resultado < 18.5) {
      return 'ABAIXO DO PESO'
    } else if (resultado >= 18.5 && resultado < 25) {
      return 'PESO IDEAL'
    } else if (resultado >= 25 && resultado < 30) {
      return 'SOBREPESO'
    } else if (resultado >= 30 && resultado < 35) {
      return 'OBESIDADE GRAU I'
    } else if (resultado >= 35 && resultado < 40) {
      return 'OBESIDADE GRAU II'
    } else {
      return 'OBESIDADE GRAU III ou MÓRBIDA'
    }

  }

  const tabela = mensagem(calculoimc)




  return (
    <>
      <h1>CALCULE SEU IMC</h1>
      <form>
        <label>Digite sua altura:</label>
        <input type='number' onBlur={(e) => setn1(e.target.value)} ></input>
        <label>Digite seu peso:</label>
        <input type='number' onBlur={(e) => setn2(e.target.value)}></input>

        <button type='subtmit' onClick={(e) => setcalcbutton(true)} >CALCULAR</button>
        <button className={'apagar'} type='reset' onClick={(e) => setcalcbutton(false)}   >APAGAR</button>

        {calcbutton && (<>

          <h2 className={'resultado'}>{isNaN(calculoimc) ? <span>Número Invalido</span> : calculoimc.toFixed(2)}</h2>
          <h2>{isNaN(calculoimc) ? <span>---</span> : tabela}</h2>

        </>)}

      </form>
      <br />


    </>
  )
}

export default App
