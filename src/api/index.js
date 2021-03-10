//NOTE TO SELF: Currently not using this right now but saving it

import { Next } from "react-bootstrap/esm/PageItem"

const BASE_API = 'http://localhost:4000'
// const BASE_API = 'https://roses-are-red.herokuapp.com'

export async function logIn(username, password) {
    try {
        const response = await fetch(`${BASE_API}/api/login`, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            // headers: {"Content-Type": "multipart/form-data"},
            body: JSON.stringify({username, password})
        })
        const user = await response.json()
        console.log("What's React API data for LOGIN", user)
        return user
       
        // return user
    } catch (error) {
        throw error
    }
}