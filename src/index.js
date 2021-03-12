import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css'
// import Postform from './components/Form'
import Loading from './components/Loading'
import Footer from './components/Footer'
import Contact from './components/Contact'
import Slide from './components/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css';
import { deletePost } from './api';

const App = () => {

    const [posts, setPosts] = useState([])
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [token, setToken] = useState('')
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
    console.log("GLOBAL token", token)
    
    return (
        <div style={{textAlign: "center"}}>
        <p style={{backgroundColor: "darkgray", paddingTop: "5px", paddingBottom: "5px"}}>Go to the <a href="http://sanluisobispomom.com/" alt="San Luis Obispo Mom homepage">homepage &#8594;</a> <span style={{position: "fixed",
        right: "10px", top: "0px"}}>
            <a href="https://www.facebook.com/sanluisobispomom" target="_blank" alt="San Luis Obispo Mom facebook"><span style={{paddingTop: "5px"}} className="material-icons">
facebook
</span></a></span></p>
        { isLoading? <Loading /> :  <p><a href="http://sanluisobispomom.com" target="_blank" alt="sanluisobispomom.com"> <img style={{maxWidth: "200px"}} src="/sanluisobispomom_logo.png"/></a></p>}
        <h1>Bulletin Board</h1>
        <h2>Free Things &amp; Featured Listings</h2>
            {/* <Switch> */}
               {/* <Route path='/login'> */}
               {/* <Login isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} token={token} setToken={setToken}/>  */}
                   {/* </Route> */}
        { !isLoading ? <Slide/> : ''}
               <div className="itemList">
            {
                 posts && posts.map((post) => 
                    <>
                    <div key={post.id} style={{display: "flex", flexDirection: "column", justifyContent: "space-between",
                    border: "1px solid gray", width: "300px", alignItems: "center", paddingTop: "10px", paddingLeft: "10px", paddingRight: "10px", margin: "5px"
                    }} className="postCard">
                        <h3 style={{textTransform: "capitalize", marginTop: "20px"}}>{post.name}</h3>
                       
                        <p>ID: {post.id}</p>
                        <p>Item Description: {post.description}</p>
                        { post.location? <p>Pick Up Location: {post.location}</p> : '' }
                        { post.contact? <p>Contact By: {post.contact}</p> : ''}
                        { post.productimage? <img className="imageSpot" src={post.productimage} /> : '' }

                       { token?  <button onClick={ async (event)=> { 
                            const newList = [...posts]
                            const index = newList.findIndex(postItem => postItem.id === post.id)
                            if (index === -1) return;
                            newList.splice(index,1)
                            setPosts(newList)
                            try {
                                await deletePost(post.id)
                                console.log("Delete Worked")
                            } catch(error) {
                                console.log(error)
                            }
                        }}

                         style={{marginTop: "15px", backgroundColor: "red", color: "white"}}>Delete</button>  : ''}

                        {/* { post.productimage? <img src={`https://roses-are-red.herokuapp.com/${post.productimage}`}/> : '' } */}

                    </div>
                    </>
                )
            }
                </div>
            {/* { token ? <Postform token={token} posts={posts} setPosts={setPosts}/> : '' } */}
            {/* <Postform posts={posts} setPosts={setPosts}/>  */}
            { !isLoading ? <Contact token={token} setToken={setToken} posts={posts} setPosts={setPosts}/>  : ''}
            {/* <Contact token={token} setToken={setToken} posts={posts} setPosts={setPosts}/>  */}
            {/* </Switch> */}
            <Footer />

            </div>
    )
};


ReactDOM.render(
 
    <App/>,
    document.getElementById('root')
)