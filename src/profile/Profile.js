import React from 'react'

const Profile = (props) => {
    return (
        <div>
            <h1>{props.fullName}</h1>
            <p>{props.bio}</p>
            <p>{props.profession}</p>
{props.children}

<button onClick={()=>props.handlealert(props.fullName)}>alert name</button>



   </div>
    )
}

export default Profile
