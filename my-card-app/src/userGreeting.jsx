import PropTypes from 'prop-types'

function UserGreeting(prop){

  const welcomeMessage = <h1 className="login">Welcome {prop.username}</h1>;

  const continueMessage = <h1 className="notLogin">Please Log in to Continue..</h1>;


  return(prop.isLoggedIn ? welcomeMessage  : continueMessage);
}

UserGreeting.propTypes = {
  isLoggedIn: PropTypes.bool,
  username: PropTypes.string
};

UserGreeting.defaultProps = {
  isLoggedIn: false,
  username: "Guest"
}

export default UserGreeting