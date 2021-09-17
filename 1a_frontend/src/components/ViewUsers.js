import React, {useEffect, useState} from 'react'
import axios from 'axios'
import User from './User'
import Button from './Button'
const ViewUsers = () => {

    const [users, setUsers] = useState([])
    const [isLoading, setIisLoading] = useState(true)

    useEffect(()=>{
        loadUsers()
    }, [])

    //custom functions

    const loadUsers = () => {
        axios.get('http://localhost:5000/api/users')
        .then(response=>{
            setUsers(response.data)
            console.log(response.data)
            setIisLoading(false)
        })
    }
    return (
        <div>
        <h2>User details</h2>
        { isLoading ? (
            <p>Loading...</p>
        ) : (
        users.map((singleUser) => <User user={singleUser} key={singleUser._id}/>)
        )}
        <Button text="load users" action={loadUsers}/>
        </div>
    )
}

export default ViewUsers
