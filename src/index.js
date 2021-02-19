import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom';

const App = () => {

    const [posts, setPosts] = useState([])
    // const URL = 'https://roses-are-red.herokuapp.com/api/posts'
    const URL = 'http://localhost:4000/api/posts'

    async function fetchPosts() {
        try {
            console.log("starting to fetch")
            const data = await fetch(URL)
            console.log(data)
            const response = data.json();
            return response
        } catch (error) {
            console.error(error)
        }
    }

    useEffect( () =>{
        fetchPosts()
        .then(data => {
            setPosts(data.posts)
            console.log("what's the post", data)
        })
        .catch(error => {
            console.error(error)
        })
    },[])
    
    return (
           <div style={{"border": "1px solid black", "textAlign": "center", borderRadius: "5px"}}>
               <h1>Roses are <span style={{color: "red"}}>Red</span>, Violets are <span style={{color: "blue"}}>Blue</span></h1>
               <h2>Used items for free or sale</h2>
             {
                 posts && posts.map((post) => 
                    <div key={post.id} style={{display: "flex", flexDirection: "column",
                    border: "1px solid gray", minHeight: "200px", alignItems: "center"}}>
                        <h3>Item Name: {post.name}</h3>
                        <p>Item Description: {post.description}</p>
                    </div>
                )
            }
            </div>
    )
};


ReactDOM.render(
    <App/>,
    document.getElementById('root')
)