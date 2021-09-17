import React, {useEffect, useState} from 'react'
import axios from 'axios'
import User from './User'
const ViewUsers = () => {

    const [users, setUsers] = useState([])
    const [isLoading, setIisLoading] = useState(true)

    useEffect(()=>{
        axios.get('http://localhost:5000/api/users')
            .then(response=>{
                setUsers(response.data)
                console.log(response.data)
                setIisLoading(false)
            })
    }, [])

    useEffect(() => {
       console.log(users)
    }, [users])

    return (
        <div>
        { isLoading ? (
            <p>Loading...</p>
        ) : (
        users.map((singleUser) => <User user={singleUser} key={singleUser._id}/>)
        )}
        </div>
    )
}

export default ViewUsers
