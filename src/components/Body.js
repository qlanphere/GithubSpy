import React, { useState, useEffect, useContext } from 'react'
import { Context } from './Context'
import Repo from './Repo'
import Screen from 'react-dom'

const Body = () => {

    const [repos, setRepos] = useState([])
    const {username, setUsername} = useContext(Context)

    console.log(username)

    useEffect(() => {

        const fetchRepos = async () => {
            try {
                let get = await fetch(`https://api.github.com/users/${username}/repos`)
                const repoData = await get.json()
                console.log(repoData)
                setRepos(repoData)

                for (let i = 0; i < repos.length; i++) {
                    const div = document.getElementById('repos')
                    div.appendChild(<Repo name = {repos[i].name} language = {repos[i].language} stars = {repos[i].stargzers_count} updated = {repos[i].updated_at}/>)
                }
            } catch {

            }
        }
        fetchRepos()
    }, [username])

    return (
        <>
            <Context.Provider value={{ username, setUsername }}>
                <h1>{`${username}'s repositories'`}</h1>
                <div id = "repos"></div>
            </Context.Provider>
        </>
    )
}

export default Body
