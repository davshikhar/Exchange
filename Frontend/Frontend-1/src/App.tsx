import './App.css'
import { OrderEntryForm } from './assets/EntryForm'

function App() {


  return (
    <>
    <h1>Matching Engine Simulator</h1>
    <OrderEntryForm sendOrder={sendOrder}/>
    </>
  )
}

export default App
