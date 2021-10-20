import React from 'react'

const Repo = (props) => {
    return (
        <div>
            <hr></hr>
            <h3>{props.name}</h3>
            <p>Language: {props.language}</p>
            <p>Stars: {props.stars}</p>
            <p>Last Updated {props.updated}</p>


        </div>
    )
}

export default Repo
