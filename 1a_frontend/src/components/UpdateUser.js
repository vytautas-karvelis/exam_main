import React, {useEffect, useState} from 'react'
import axios from 'axios'

const ViewUsers = ({user}) => {

    const [userName, setUsername] = useState('')
    const [userAge, setUserAge] = useState('')
    const [userEmail, setUserEmail] = useState('')
    const [userPassword, setUserPassword] = useState('')
    const [userId, setUserId] = useState('')
    const [updateMessage, setUpdateMessage] = useState('')

    const updateUser = (e) => {
        e.preventDefault()
        
        axios.put('http://localhost:5000/api/users/'+ userId, {
            name:userName,
            age:userAge,
            email:userEmail,
            password:userPassword           
        })
            .then(response=>{     
               
               if(response.data.status === 'Failed'){
                setUpdateMessage('Vartotojo nepavyko atnaujinti')
               } else if (response.data.status === 'Success'){
                setUpdateMessage('Vartotojas sėkmingai atnaujintas')            
               }    


               setUserAge("")
               setUserEmail("")
               setUserPassword("")
               setUsername("")
               setUserId("")
            })
            .catch(err=>{
                setUpdateMessage('Įvyko klaida')
            })
        }

    return (
      <div className="container">
       <h2>Pakeisti vartotoją</h2>
            <form onSubmit={updateUser}>
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
                <label className="form-label" >Vardas</label>
                <input                            
                    type="text"
                    value={userName}
                    onChange={(e)=>setUsername(e.target.value)}
                    required                           
                />
                </div>
            <div className="form-control">
                <label className="form-label" >Amžius</label>
                <input                            
                    type="text"
                    value={userAge}
                    onChange={(e)=>setUserAge(e.target.value)}
                    required                           
                />
                </div>
            <div className="form-control">
            <label className="form-label">El. paštas</label>
                <input                           
                    type="email"
                    value={userEmail}
                    onChange={(e)=>setUserEmail(e.target.value)}
                    required
                />
            </div>

            <div className="form-control">
            <label className="form-label">Slaptažodis</label>
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
                value="Pakeisti vartotoją"               
            />
            </div>
            </form>
            <p>{updateMessage}</p>
      </div>
    )
}

export default ViewUsers