import PropTypes from 'prop-types'


function Greetings(props){

  const loginTrue = <h1>
    Welcome to Mobile Legends Bang Bang {props.check} {props.name} 
  </h1>

  const loginFalse = <h1>
    You are not Welcome here Bitch Ass! {props.name}
  </h1>

  return(props.check ? loginTrue : loginFalse)
}

Greetings.propTypes = {
  name: PropTypes.string,
  check: PropTypes.bool
}

Greetings.defaultProps = {
  name : "",
  check: false
}

export default Greetings