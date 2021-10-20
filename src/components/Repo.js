import React from 'react'

const Repo = (props) => {
    return (
        <div>
            <hr></hr>
            <h3>{props.name}</h3>
            <p>{props.language}</p>
            <p>{props.stars}</p>
            <p>{props.updated}</p>


        </div>
    )
}

export default Repo
