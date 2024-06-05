import PropTypes from 'prop-types'

function login (prop){

  const correct = <h1 >Passwords: <span className='correct'>Correct</span>{prop.password}</h1>;

  const incorrect = <h1 >Passwords: <span className='incorrect'>Incorrect</span>{prop.password}</h1>;

  return(

<div>
      <h1> Welcome: {prop.name}</h1>

      {prop.password ? correct : incorrect}
</div>
  )
}

login.propTypes = {
  name: PropTypes.string,
  password:PropTypes.bool
}

login.defaultProps = {
  name:"Stranger",
  password: false
}

export default login