import PropTypes from 'prop-types'

function props3 (prop){

  return(
    <div>
      <h1>What color is your buggatte? Answer: {prop.car}</h1>

      <h2>
        What color is your House? 
        Answer:{prop.house}
      </h2>
    </div>
  )
}

props3.propTypes = {
  car: PropTypes.string,
  house:PropTypes.string
}

props3.defaultProps= {
  car: "None",
  house: "None"
}

export default props3