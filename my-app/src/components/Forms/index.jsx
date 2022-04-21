import React from 'react'
import { Fragment } from 'react'
import Login from './Login'
import Signup from './SignUp'

export default function index() {
    return (
       <Fragment>
           <Login></Login>
           <Signup></Signup>
       </Fragment>
    )
}
