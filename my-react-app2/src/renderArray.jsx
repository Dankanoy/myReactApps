import PropTypes from 'prop-types'


function toArrayList(prop){
 

//====> this is how you sort the name by ALPHABETACAL ORDER


  //fruits.sort((a, b)=> a.name.localeCompare(b.name))

  //===> for the Dicending order of name/list this is how:

  //fruits.sort((a, b) => b.name.localeCompare(a.name))

  //for sorting by a number here it is (Vise Versa)

  //fruits.sort((a,b) => a.calories - b.calories)


//filtering according to its condition using the filte method 

    //const lowCalFruits = fruits.filter(fruit => fruit.calories >= 50);

    

    const itemList = prop.items;
    const category = prop.category;

    itemList.sort((a,b)=> a.calories - b.calories);
    
  const listItems = itemList.map(item => <li key={item.id}> {item.name} kcal: <strong>{item.calories}</strong>
  </li>);

 
  return(
    <>
    <h1>{category}</h1>
    <ol>{listItems}</ol>
    </>
    

  );

}

toArrayList.defaultProps = {
  category: "Category",
  items: [],
  calories: 0,
}

toArrayList.propTypes = {
  category: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.shape({id: PropTypes.number,
    name: PropTypes.string,
    calories: PropTypes.number,
  })),
  calories:PropTypes.number,

}
export default toArrayList