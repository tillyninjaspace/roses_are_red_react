// const BASE_API = 'http://localhost:4000'
const BASE_API = 'https://roses-are-red.herokuapp.com'

export async function logIn(username, password) {
    try {
        const response = await fetch(`${BASE_API}/api/login`, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({username, password})
        })
        const user = await response.json()
        return user
    } catch (error) {
        throw error
    }
}

export async function deletePost(id) {
    try {
        await fetch(`${BASE_API}/user/post/${id}`, {
            method: "DELETE",
            headers: {'Content-Type': 'application/json'}
        })
    } catch (error) {
        console.error(error)
    }
}

export async function updatingPost(id, name, description, location, link, active) {
    try {
        const response = await fetch(`${BASE_API}/user/post/${id}`, {
            method: "PATCH",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({name, description, location, link, active})
        })
        const post = await response.json();
        console.log("Update Post Response JSON: ", post)
        return post;
    } catch (error) {
        throw error
    }
};