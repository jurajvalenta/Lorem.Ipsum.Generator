import data from "./data"
import { useState } from "react"


const App = () => {
  const [count, setCount] = useState (0)
  const [text, setText] = useState ([])

  const formSubmit = (event) => {
    event.preventDefault()
    const amount = parseInt(count)

    if (amount < 0 ){
      setText(data.slice(0, 1))
    }
    else{
      setText(data.slice(0, amount))
    }
    
        
  }
 
    return <div className="allForm">
      
      <form className="gen" onSubmit={formSubmit}>
      <h1>Lorem Ipsum generátor</h1>
      <label className="labelGen" htmlFor="paragraphs"> Počet odstavcov: </label>
      <input 
        id="paragraphs"
        className="number"
        type="number" 
        onChange={ (e) => {setCount(e.target.value)}}
        />

      <input type="submit" value="Vygenerovať"/>
      
      </form>
      <article>{text.map( (oneText, index) => {
        return <p key={index}>{oneText}</p>
      })}</article>
        
      

    </div>
}
export default App