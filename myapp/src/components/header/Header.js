import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'


export default function Header() {
  return (
    <div className='header'>
        <h1 className='Logo'><b>Todo</b><b>List</b></h1>

        <div>
            <Link className='login' to='/login'><b>Login</b></Link><hr/>
            <Link className='register' to='/register'><b>Register</b></Link>
        </div>
    </div>
  )
}
