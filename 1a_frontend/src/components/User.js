import React, {useEffect, useState} from 'react'

const ViewUsers = ({user}) => {

    
    return (
      <div>      
        <ul>
        <li>User name: {user.name}</li>
        <li>User age: {user.age}</li>
        <li>User email: {user.email}</li>
        <li>User password: {user.password}</li>
        <li>User id: {user._id}</li>
        </ul>
      </div>
    )
}

export default ViewUsers