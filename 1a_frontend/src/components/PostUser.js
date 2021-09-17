import React, {useState} from 'react'
import axios from 'axios'
const PostUser = () => {

    const [userName, setUsername] = useState('')
    const [userAge, setUserAge] = useState('')
    const [userEmail, setUserEmail] = useState('')
    const [userPassword, setUserPassword] = useState('')

    const postUser = (e) => {
        e.preventDefault()
        
        axios.post('http://localhost:5000/api/users', {
            name:userName,
            age:userAge,
            email:userEmail,
            password:userPassword
        })
            .then(response=>{               
                console.log(response)               
               
            })
            .catch(err=>{
                console.log(err)     
            })
        }

    return (
        <div>
                <form id="logInForm" onSubmit={postUser}>
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
                        value="Add new User"
                        className="btn-primary btn-primary-submit"
                    />
                    </div>
            </form>
        </div>
    )
}

export default PostUser
