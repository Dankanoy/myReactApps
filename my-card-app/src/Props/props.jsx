import PropTypes from 'prop-types'


function prop1(prop){

return (
<div>

<h1>Hello: {prop.name}</h1>
<h1>Your age is: {prop.age}</h1>
</div>
)
}

prop1.propTypes = {
  name: PropTypes.string,
  age: PropTypes.age
}

prop1.defaultProps = {
  name: "Guest",
  age: ""
}

export default prop1