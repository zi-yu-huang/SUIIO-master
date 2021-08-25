import React from 'react'
import { Link } from "react-router-dom";
import '../styles/Login.css';

export default function Login() {
    return (
        <div className="login">
      <h2 className="text">登入</h2>
      <p>帳號</p>
      <input placeholder="請輸入學號"/>
      <p>密碼</p>
      <input type="password" ></input>
      <br/><br/>
      
      <button className="btn">
          <Link to="/Login">登入</Link>
        </button>
      
    </div>
    )
}
