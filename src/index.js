import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css'
import Postform from './components/Form'
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {

    const [posts, setPosts] = useState([])
    // const URL = 'https://roses-are-red.herokuapp.com/api/posts'
    const URL = 'http://localhost:4000/api/posts'
//FOR DEPLOYMENT, change URL to line 10 and comment out line 11 and also swap line 54 for line 55

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
        })
        .catch(error => {
            console.error(error)
        })
    },[])

    console.log("What are the posts", posts)
    
    return (
           <div style={{"border": "1px solid black", borderRadius: "5px", padding: "10px", margin: "10px",textAlign: "center"}}>
               <p><a href="http://sanluisobispomom.com" target="_blank"> <img src="/sanluisobispomom_logo.png"/></a></p>
               <h1>Bulletin Board</h1>
               <h2>Used items for free</h2>
               <div className="itemList">
            {
                 posts && posts.map((post) => 
                    <div key={post.id} style={{display: "flex", flexDirection: "column", justifyContent: "space-between",
                    border: "1px solid gray", minHeight: "200px", width: "350px", alignItems: "center", padding: "15px", marginBottom: "5px"}}>
                        <h3 style={{textTransform: "capitalize"}}>{post.name}</h3>
                        <p>ID: {post.id}</p>
                        <p>Item Description: {post.description}</p>
                        { post.location? <p>Pick Up Location: {post.location}</p> : '' }
                        { post.contact? <p>Contact By: {post.contact}</p> : ''}
                        {/* { post.picture? <img src={post.picture}/> : <img src='/sanluisobispomom_logo.png'/> } */}
                        { post.productimage? <img src={`http://localhost:4000/${post.productimage}`}/> : '' }
                        {/* { post.productimage? <img src={`https://roses-are-red.herokuapp.com/${post.productimage}`}/> : '' } */}

                    </div>
                )
            }
                </div>
            <Postform posts={posts} setPosts={setPosts}/>
            </div>
    )
};


ReactDOM.render(
    <App/>,
    document.getElementById('root')
)