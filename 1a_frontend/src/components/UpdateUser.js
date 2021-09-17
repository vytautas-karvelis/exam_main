import React, {useEffect, useState} from 'react'
import axios from 'axios'

const ViewUsers = ({user}) => {

    const [userName, setUsername] = useState('')
    const [userAge, setUserAge] = useState('')
    const [userEmail, setUserEmail] = useState('')
    const [userPassword, setUserPassword] = useState('')
    const [userId, setUserId] = useState('')
    const [updateMessage, setUpdateMessage] = useState('')

    const postUser = (e) => {
        e.preventDefault()
        
        axios.put('http://localhost:5000/api/users/'+ userId, {
            name:userName,
            age:userAge,
            email:userEmail,
            password:userPassword           
        })
            .then(response=>{               
                console.log(response)               
               setUpdateMessage('user successfully updated')
               setUserAge("")
               setUserEmail("")
               setUserPassword("")
               setUsername("")
               setUserId("")
            })
            .catch(err=>{
                setUpdateMessage('an error occurred')
            })
        }

    return (
      <div className="container">
       <h2>Update user</h2>
            <form id="logInForm" onSubmit={postUser}>
            <div className="form-control">
            <label className="form-label" >Id</label>
            <input                            
                type="text"
                value={userId}
                onChange={(e)=>setUserId(e.target.value)}
                required                           
            />
            </div>
            <div className="form-control">
                <label className="form-label" >Name</label>
                <input                            
                    type="text"
                    value={userName}
                    onChange={(e)=>setUsername(e.target.value)}
                    required                           
                />
                </div>
            <div className="form-control">
                <label className="form-label" >Age</label>
                <input                            
                    type="text"
                    value={userAge}
                    onChange={(e)=>setUserAge(e.target.value)}
                    required                           
                />
                </div>
            <div className="form-control">
            <label className="form-label">Email</label>
                <input                           
                    type="email"
                    value={userEmail}
                    onChange={(e)=>setUserEmail(e.target.value)}
                    required
                />
            </div>

            <div className="form-control">
            <label className="form-label">Password</label>
            <input                        
                type="password"
                value={userPassword}
                onChange={(e)=>setUserPassword(e.target.value)}                        
                required
            />
            </div>

            <div className="form-control">
            <input
                type="submit"
                value="Update specified user"
                className="btn-primary btn-primary-submit"
            />
            </div>
            </form>
            <p>{updateMessage}</p>
      </div>
    )
}

export default ViewUsers