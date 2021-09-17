import React, {useEffect, useState} from 'react'

const ViewUsers = ({user}) => {

    
    return (
      <div>
       <h2>User details:</h2>
        <ul>
          <li>User name: {user.name}</li>
          <li>User email: {user.email}</li>
          <li>User password:{user.pasword}</li>
          <li>User age: {user.age}</li>
        </ul>
      </div>
    )
}

export default ViewUsers