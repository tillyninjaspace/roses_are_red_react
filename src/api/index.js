const BASE_API = 'http://localhost:4000'

export async function newPost(name, description, location, contact) {
    try {
        const response = await fetch(`${BASE_API}/api/post`, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({name, description, location, contact})
        })
        const post = await response.json()
        console.log("What's React API data for new Post", post)
        return post
    } catch (error) {
        throw error
    }
}