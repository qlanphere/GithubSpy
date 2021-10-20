import React, { useState, useEffect, useContext } from 'react'
import { Context } from './Context'
import Repo from './Repo'

const Body = () => {

    const [repos, setRepos] = useState([])
    const { username, setUsername } = useContext(Context)

    useEffect(() => {
        if (!username) {
            return
        }
        fetch(`https://api.github.com/users/${username}/repos`)
            .then(data => data.json())
            .then(data => setRepos(data))
            .catch(error => console.error(error))
    }, [username])

    return (
        <>
            <Context.Provider value={{ username, setUsername }}>
                <h1 className='title'>{`${username} repositories`}</h1>
                <div id="repos" className = "align">{repos.map(repos => <Repo name={repos.name} language={repos.language ? repos.language:'none'} stars={repos.stargazers_count} updated={repos.updated_at} key={repos.id} />)}</div>
            </Context.Provider>
        </>
    )
}

export default Body
