import React, {useState, useRef} from 'react'
import axios from 'axios'

const DeleteUser = () => {

    const inputRef = useRef()
    const [userId, setUserId] = useState('')
    const [deleteMessage, setDeleteMessage] = useState('')

    const deleteUser = (e) => {
        e.preventDefault()        

        axios.delete('http://localhost:5000/api/users/'+ userId)
            .then(response=>{               
                console.log(response)               
               setDeleteMessage("User successfully deleted")
               setUserId("")
            })
            .catch(err=>{
                console.log(err) 
                setDeleteMessage("An error occurred")    
            })
        }


    return (
        <div className="container">
            <h2>Delete User</h2>
                <form id="logInForm" onSubmit={deleteUser}>
                    <div className="form-control">
                    <label className="form-label" >Id</label>
                    <input                            
                        type="text"
                        value={userId}
                        onChange={(e)=>setUserId(e.target.value)}
                        required
                        ref = {inputRef}                           
                    />
                    </div>

                    <div className="form-control">
                    <input
                        type="submit"
                        value="Delete specified User"
                        className="btn-primary btn-primary-submit"
                    />
                    </div>
                    <p>{deleteMessage}</p>
                </form>
        </div>
    )
}

export default DeleteUser
