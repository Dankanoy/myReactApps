import Login from './Login.jsx'
import GengJe from './Conditonal.jsx'
import Greetings from './conditional2.jsx'
function App() {
 
  return(
    <>
      <Login/>
      <Login name="tawil" password={true}/>
      <Login name ={1} password={true}/>
      <hr />
      <GengJe/>

      <GengJe check1={true} check2={true}/>
      <hr />

      <Greetings name = "Ethan" check = {true}/>
      <Greetings />

    </>
      
  )

}

export default App
