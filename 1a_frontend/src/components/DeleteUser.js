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
                     
               if(response.data.status === 'Failed'){
                setDeleteMessage("Vartotojo nepavyko ištrinti")  
               } else if (response.data.status === 'Success'){
                setDeleteMessage("Vartotojas sėkmingai ištrintas")                
               }      
               
               setUserId("")
            })
            .catch(err=>{
                console.log(err)                  
            })
        }


    return (
        <div className="container">
            <h2>Ištrinti vartotoją</h2>
                <form onSubmit={deleteUser}>
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
                        value="Ištrinti vartotoją"                     
                    />
                    </div>
                    <p>{deleteMessage}</p>
                </form>
        </div>
    )
}

export default DeleteUser
