import PropTypes from 'prop-types'

function props2(prop){

  return(
    <div>

      <h1>Your Mobile phones : {prop.model} </h1>

      <h2> Original: {prop.test} </h2>

    </div>
  )
}

props2.propTypes = {
  model: PropTypes.string,
  test: PropTypes.string
}

props2.defaultProps = {
  model: "Unknown",
  test: "Lokal!"
}

export default props2