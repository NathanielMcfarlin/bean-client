import { useRef, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { loginUser } from "/home/nathanielmcfarlin/workspace/loop-client/loop-client/src/managers/AuthManager.js"
import "./login.css";


export const Login = ({ setToken }) => {
  const username = useRef()
  const password = useRef()
  const navigate = useNavigate()
  const [isUnsuccessful, setisUnsuccessful] = useState(false)

  const handleLogin = (e) => {
    e.preventDefault()

    const user = {
      username: username.current.value,
      password: password.current.value
    }

    loginUser(user).then(res => {
      if ("token" in res && res.token) {
        setToken(res.token)
        navigate("/")
      }
      else {
        setisUnsuccessful(true)
      }
    })
  }

  return (
    <section className="auth-container">
      <form className="auth-form" onSubmit={handleLogin}>
        <h1 className="title">THE BEAN</h1>
        <p className="subtitle">Please sign in</p>

        <div className="field">
          <label className="label">Username</label>
          <div className="control">
            <input className="input" type="text" ref={username} />
          </div>
        </div>

        <div className="field">
          <label className="label">Password</label>
          <div className="control">
            <input className="input" type="password" ref={password} />
          </div>
        </div>

        <div className="submit-btn">
          <div className="control">
            <button className="button" type="submit" >Submit</button>
          </div>

        </div>
        {
          isUnsuccessful ? <p className="help">Username or password not valid</p> : ''
        }
      </form>
    </section>
  )
}
