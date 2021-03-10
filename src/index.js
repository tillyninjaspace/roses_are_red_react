import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css'
import Postform from './components/Form'
import Login from './components/Login'
import Loading from './components/Loading'
import Footer from './components/Footer'
import Contact from './components/Contact'
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {

    const [posts, setPosts] = useState([])
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
//FOR DEVELOPMENT
    const URL = 'https://roses-are-red.herokuapp.com/api/posts'
    // const URL = 'http://localhost:4000/api/posts'
//FOR DEPLOYMENT, change URL to line 12 and comment out line 13 and also swap line 54 for line 55

    async function fetchPosts() {
       
        try {
            setIsLoading(true)
            console.log("starting to fetch")
            const data = await fetch(URL)
            console.log(data)
            const response = data.json();
            return response
        } catch (error) {
            console.error(error)
        } finally {
            setIsLoading(false)
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
              
               <h1>Bulletin Board</h1>
               <h2>Used Items for Free &amp; Featured Listings</h2>

        {/* Loading feature */} 
        { isLoading? <Loading /> :  <p><a href="http://sanluisobispomom.com" target="_blank"> <img style={{maxWidth: "200px"}} src="/sanluisobispomom_logo.png"/></a></p>}
     

               {/* <Login isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/> */}
               <div className="itemList">
            {
                 posts && posts.map((post) => 
                    <div key={post.id} style={{display: "flex", flexDirection: "column", justifyContent: "space-between",
                    border: "1px solid gray", minHeight: "200px", width: "350px", alignItems: "center", padding: "23px", marginBottom: "5px"
                    }} className="postCard">
                        <h3 style={{textTransform: "capitalize"}}>{post.name}</h3>
                        <p>ID: {post.id}</p>
                        <p>Item Description: {post.description}</p>
                        { post.location? <p>Pick Up Location: {post.location}</p> : '' }
                        { post.contact? <p>Contact By: {post.contact}</p> : ''}
                        {/* { post.picture? <img src={post.picture}/> : <img src='/sanluisobispomom_logo.png'/> } */}
                        { post.productimage? <img src={post.productimage}/> : '' }
                        {/* { post.productimage? <img src={`https://roses-are-red.herokuapp.com/${post.productimage}`}/> : '' } */}

                    </div>
                )
            }
                </div>
            <Postform posts={posts} setPosts={setPosts}/>
            <Contact />
            <Footer />
            </div>
    )
};


ReactDOM.render(
    <App/>,
    document.getElementById('root')
)