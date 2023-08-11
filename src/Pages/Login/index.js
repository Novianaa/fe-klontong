import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { LoginAuth } from '../../Store/Actions/auth'
import './loginStyles.css'

const Login = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [formData, setFormData] = useState({ email: '', password: '' })
  const { isLogin } = useSelector((s) => s.auth)

  console.log('isLogin', isLogin)
  const handleLogin = (e) => {
    e.preventDefault()
    dispatch(LoginAuth(formData))

  }
  const handleInput = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  useEffect(() => {
    if (isLogin === true) {
      navigate('/');

    } else {
      navigate('/login');
    }
  }, [isLogin, navigate])

  return (
    <>
      <div className="wrapper-login">
        <div className="wrapper-login-card">
          <div className="wrapper-login-header">
            <div className="header-login">Login</div>
          </div>
          <div className="wrapper-form">
            <div className="wrapper-part">
              <label className="wrapper-label">Email</label>
              <input
                placeholder="Type your email..."
                name="email"
                type="email"
                className="wrapper-input"
                onChange={handleInput}
              />
            </div>
            <div className="wrapper-part">
              <label className="wrapper-label">Password</label>
              <input
                placeholder="Type your password..."
                name="password"
                type="password"
                className="wrapper-input"
                onChange={handleInput}
              />
            </div>
          </div>
          <div className="wrapper-btn">
            <button type="submit" className="btn-login" onClick={handleLogin}>Sign In</button>
          </div>
        </div>
      </div>
    </>
  )
}
export default Login