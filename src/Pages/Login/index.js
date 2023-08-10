import { useNavigate } from 'react-router-dom'
import './loginStyles.css'

const Login = () => {
  const navigate = useNavigate()
  return (
    <>
      <div className="wrapper-login">
        <div className="wrapper-login-card">
          <div className="header-login">Login</div>
        </div>
        <div className="wrapper-form">
          <div className="wrapper-part">
            <label className="wrapper-label">Email</label>
            <input
              placeholder="Type your email..."
              type="email"
              className="wrapper-input"
            />
          </div>
          <div className="wrapper-part">
            <label className="wrapper-label">Password</label>
            <input
              placeholder="Type your password..."
              type="password"
              className="wrapper-input"
            />
          </div>
        </div>
        <div className="wrapper-btn">
          <button type="submit" className="btn-login">Sign In</button>
        </div>
      </div>
    </>
  )
}
export default Login