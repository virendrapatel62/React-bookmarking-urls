import React, { useEffect, useState } from 'react'
import Input from './Input'

export default function Signup() {
    const [formValues , setFormValues] = useState({
        email : '' , 
        password : ''
    })

    useEffect(()=>{
        console.log(formValues)
    } , [formValues])

    
    return (
        <div>
            <h1>Signup  Form</h1>
            <hr />
            <Input/>
            <Input/>
        </div>
    )
}
