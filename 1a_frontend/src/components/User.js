import React, {useEffect, useState} from 'react'

const User = ({user}) => {

    
    return (
      <div>      
        <ul>
        <li>Vartotojo vardas: {user.name}</li>
        <li>Vartotojo amžius: {user.age}</li>
        <li>Vartotojo el.paštas: {user.email}</li>
        <li>Vartotojo slaptažodis: {user.password}</li>
        <li>Vartotojo id: {user._id}</li>
        </ul>
      </div>
    )
}

export default User