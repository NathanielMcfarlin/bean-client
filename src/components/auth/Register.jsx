import { useRef, useState } from "react"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import { registerUser } from "/home/nathanielmcfarlin/workspace/loop-client/loop-client/src/managers/AuthManager.js"
import "./login.css";


export const Register = ({ setToken }) => {
  const username = useRef()
  const password = useRef()
  const verifyPassword = useRef()
  const passwordDialog = useRef()
  const navigate = useNavigate()

  const handleRegister = (e) => {
    e.preventDefault()

    if (password.current.value === verifyPassword.current.value) {
      const newUser = {
        username: username.current.value,
        password: password.current.value,
      }

      registerUser(newUser)
        .then(res => {
          if ("token" in res && res.token) {
            setToken(res.token)
            navigate("/")
          }
        })
    } else {
      passwordDialog.current.showModal()
    }
  }

  return (
    <section className="auth-container">
      <form className="auth-form" onSubmit={handleRegister}>
        <h1 className="title">THE BEAN</h1>
        <p className="subtitle">Create an account</p>

        <div className="field">
          <label className="label">Username</label>
          <div className="control">
            <input className="input" type="text" ref={username} />
          </div>
        </div>

        <div className="field">
          <label className="label">Password</label>
          <div className="field-body">
            <div className="field">
              <p className="control is-expanded">
                <input className="input" type="password" placeholder="Password" ref={password} />
              </p>
            </div>

            <div className="field">
              <p className="control is-expanded">
                <input className="input" type="password" placeholder="Verify Password" ref={verifyPassword} />
              </p>
            </div>
          </div>
        </div>

        <div className="submit-btn">
          <div className="control">
            <button className="button" type="submit">Submit</button>
          </div>

        </div>

      </form>
    </section>
  )
}
