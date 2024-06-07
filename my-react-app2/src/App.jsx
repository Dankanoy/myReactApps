import RenderArray from './renderArray.jsx'

function App() {
  const fruits = [
    {id:1,name:"Apple", calories: 95},
    {id:2,name:"Orange", calories:80},
    {id:3,name:"Guava", calories:60}, 
    {id:4,name:"Mango", calories:100}, 
    {id:5,name:"PinupBery", calories: 30}, 
    {id:6,name:"Banana", calories: 90}];

    const vegetables = [
      {id:1,name:"Cabbage", calories: 20},
      {id:2,name:"Tomato", calories:30},
      {id:3,name:"Potato", calories:35}, 
      {id:4,name:"Kang Kong", calories:20}, 
      {id:5,name:"Latoy", calories: 40}, 
      {id:6,name:"Malungera", calories: 10}];

  return(
    <>
      {fruits.length > 0 && <RenderArray items={fruits} category="Fruits"/>},
      
      {vegetables.length > 0 && <RenderArray items={vegetables} category="Vegetibles"/>}
      
    </>
      
  )

}

export default App
