import Prop1 from './Props/props.jsx';
import Prop2 from './Props/props2.jsx';
import Prop3 from './Props/props3.jsx';


function App() {

  return (
    <>
    <Prop1 name="Flores" age= {45}/>
    <Prop1 name="Bob" age= {23}/>
    <Prop1/>

    <hr></hr>
    <Prop2 model="Cherry Mobile" test="No"/> 
    <hr></hr>
    <Prop2/>
    <Prop3/>
    <Prop3 car="Red" house="Blue" />

    </>
  
  );
}

export default App
