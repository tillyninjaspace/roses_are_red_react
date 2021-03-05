//NOTE TO SELF: Currently not using this right now but saving it

const BASE_API = 'http://localhost:4000'
// const BASE_API = 'https://roses-are-red.herokuapp.com'

export async function newPost(name, description, location, contact, picture, productimage) {
    try {
        const response = await fetch(`${BASE_API}/api/post`, {
            method: "POST",
            // headers: {"Content-Type": "application/json"},
            // headers: {"Content-Type": "multipart/form-data"},
            body: JSON.stringify({name, description, location, contact, picture, productimage})
        })
        const post = await response.json()
        console.log("What's React API data for new Post", post)
        console.log("post error?", post.name)
        return post
    } catch (error) {
        throw error
    }
}