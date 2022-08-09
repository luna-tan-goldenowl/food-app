import '../style/login.scss';
import facebookLogo from '../assets/Facebook_logo.png';
import googleLogo from '../assets/Google_logo.png';

function Login() {
  return (
    <div className="container grid">
      <div className="header">
        <p className="logo-name">TBayEAT</p>
      </div>
      <div className="content">
        <p className="title">Sign in</p>
        <p className="small-title">Sign in and start your food adventure!</p>
        <form action="">
          <input className="input" type="text" name="email" id="email" placeholder="Email" />
          <br />
          <input className="input" type="password" name="password" id="password" placeholder="Password" />
          <div className="verify-user">
            <div className="remember-user">
              <input className="input-checkbox" type="checkbox" name="remember " id="remember" />
              <p className="remember-title">Remember me</p>
            </div>
            <p className="remember-title">Forgot password?</p>
          </div>
          <button className="button" type="submit">
            Log in
          </button>
        </form>
        <p className="title-or">Or</p>
        <div>
          <img className="social-logo" src={googleLogo} alt="Logo facebook" />
          <img className="social-logo" src={facebookLogo} alt="Logo facebook" />
        </div>
      </div>
    </div>
  );
}

export default Login;
