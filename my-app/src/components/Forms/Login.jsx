import React, { useEffect, useState } from 'react'
import Input from './Input'

export default function Login() {
    const [formValues , setFormValues] = useState({
        email : 'email@gmail.com' , 
        password : '***123234'
    })

    useEffect(()=>{
        console.log(formValues)
    } , [formValues])

    const inputChangeHandler = ({target  : {name , value}})=>{
        console.log({name , value})
        setFormValues({
            ...formValues, 
            [name] : value
        })
    }
    return (
        <div>
            <h1>Login Form</h1>
            <hr />
            <Input value={formValues.email} name={'email'} onChange={inputChangeHandler}/>
            <Input value={formValues.password} name={'password'} onChange={inputChangeHandler}/>
        </div>
    )
}
