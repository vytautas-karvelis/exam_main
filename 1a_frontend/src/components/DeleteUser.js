import React from 'react'

const DeleteUser = () => {
    return (
        <div>
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
        </div>
    )
}

export default DeleteUser
