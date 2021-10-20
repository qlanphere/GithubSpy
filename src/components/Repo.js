import React from 'react'

const Repo = (props) => {
    return (
        <div className='div'>
            <hr></hr>
            <h3>{props.name}</h3>
            <div className="repo_format">
            <p>Language: {props.language}</p>
            <p>⭐: {props.stars}</p>
            <p>Last Updated: {props.updated}</p>
            </div>

        </div>
    )
}

Repo.defaultProps = {
    language: "none",
}

export default Repo 
