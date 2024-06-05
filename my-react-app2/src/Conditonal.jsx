import PropTypes from 'prop-types'

const GengJe = (prop) => {
//Geng geng
const gengT =  <h1>Are you a Geng Geng? YES {prop.check1}</h1>
const gengF =  <h1>Are you a Geng Geng? NO {prop.check1}</h1>
//Jejemon
const jejeT = <h1>Are you a Jejemon?  YES{prop.check2}</h1>
const jejeF = <h1>Are you a Jejemon?  NO{prop.check2}</h1>

  return(
    <div>
     {prop.check1 ? gengT : gengF}
     {prop.check2 ? jejeT : jejeF}
    </div>

  )
}

GengJe.propTypes = {
  check1: PropTypes.bool,
  check2: PropTypes.bool
}

GengJe.defaultProps = {
check1: false,
check2: false
}

export default GengJe