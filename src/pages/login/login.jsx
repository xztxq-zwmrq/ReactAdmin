import React, { Component } from 'react'
import './login.css'
import logo from '../../assets/images/logo.png'
export default class Login extends Component {
  render() {
    return (
      <div className="login">
        <header className="login-header">
          <img src={logo} alt="logo"></img>
          <h1>React项目：后台管理系统</h1>
        </header>
        <section className="login-content">
          <h2>用户登录</h2>
        </section>
      </div>
    )
  }
}
