import React, {useState} from 'react'
import axios from 'axios'

const DeleteUser = () => {

    const [userId, setUserId] = useState('')

    const deleteUser = (e) => {
        e.preventDefault()        

        axios.delete('http://localhost:5000/api/users/'+ userId)
            .then(response=>{               
                console.log(response)               
               
            })
            .catch(err=>{
                console.log(err)     
            })
        }


    return (
        <div>
            <h2>Delete User</h2>
                <form id="logInForm" onSubmit={deleteUser}>
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
                    <input
                        type="submit"
                        value="Delete specified User"
                        className="btn-primary btn-primary-submit"
                    />
                    </div>
                </form>
        </div>
    )
}

export default DeleteUser
