import PropTypes from 'prop-types'

function Student(props){
  
  return(
    <div className="student">
      <p>Name: {props.name}</p>
      <p>Age: {props.age}</p>
      <p>Student {props.isStudent ? "Yes" : "No"}</p>
    </div>
    
  );
}
//this object is checking if the value is a rigt property
Student.propTypes =  {
  name: PropTypes.string,
  age: PropTypes.number,
  isStudent: PropTypes.bool
}

//this object is about the default mode
Student.defaultProps = {
  name: "Guess",
  age: "none",
  isStudent: false 
}

export default Student