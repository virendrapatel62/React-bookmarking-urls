import React from 'react'

export default function Input({value , onChange , name}) {

    return (
        <div className='border border-success p-2'>
            <input type="text" value={value} name={name} onChange={onChange} />
        </div>
    )
}
