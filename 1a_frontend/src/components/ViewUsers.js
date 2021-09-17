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
        <div className="container">
        <h2>Vartotojų duomenys</h2>
        { isLoading ? (
            <p>Kraunama...</p>
        ) : (
        users.map((singleUser) => <User user={singleUser} key={singleUser._id}/>)
        )}
        <Button text="Įkrauti vartotojus" action={loadUsers}/>
        </div>
    )
}

export default ViewUsers
