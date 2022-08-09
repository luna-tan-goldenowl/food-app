import './App.css';
import facebookLogo from './assets/Facebook_logo.png';
import googleLogo from './assets/Google_logo.png';

function App() {
  return (
    <div className="container grid">
      <div className="header">
        <p className="logo-name">TBayEAT</p>
      </div>
      <div className="content">
        <p className="title">Sign in</p>
        <p className="small-title">Sign up and hop on the food journey!</p>
        <form action="">
          <input className="input" type="text" name="user" id="user" placeholder="User name" />
          <br />
          <input className="input" type="password" name="password" id="password" placeholder="Password" />
          <br />
          <input
            className="input"
            type="password"
            name="confirm-password"
            id="confirm-password"
            placeholder="Confirm Password"
          />
          <br />
          <input className="input" type="text" name="email" id="email" placeholder="Email" />
          <br />
          <input className="input" type="number" name="phone-number" id="phone-number" placeholder="Phone Number" />
          <br />
          <button className="button" type="submit">
            Sign up
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

export default App;
