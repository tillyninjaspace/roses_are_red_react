import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css'
import Loading from './components/Loading'
import Footer from './components/Footer'
import Contact from './components/Contact'
import Slide from './components/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css';
import { deletePost } from './api';
import Button from 'react-bootstrap/Button';

import Update from './components/Update';

const App = () => {

    const [posts, setPosts] = useState([])
    // const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [token, setToken] = useState('')
    const [isChanged, setIsChanged] = useState(false);
    const [isUpdating, setIsUpdating] = useState(false);
    const [idToUpdate, setIdToUpdate] = useState(0)

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
    },[isChanged])

    
    return (
        <div style={{textAlign: "center"}}>
        <p style={{backgroundColor: "darkgray",paddingTop: "5px", paddingBottom: "5px", margin: "0px"}}>Go to the <a href="http://sanluisobispomom.com/" alt="San Luis Obispo Mom homepage">Parent Site &#8594;</a> 
        <span style={{position: "absolute",
            right: "5px", top: "0px"}}>
            <a href="https://www.facebook.com/sanluisobispomom" target="_blank" alt="San Luis Obispo Mom facebook"><span style={{paddingTop: "5px"}} className="material-icons">
            facebook
            </span></a></span></p>
        
        <div className="topHeader" style={{padding: "70px", background: "linear-gradient(153deg, rgba(36,36,0,1) 0%, rgba(241,168,56,1) 0%, rgba(227,240,242,0.015625) 100%)"}}>
            <h1>San Luis Obispo Events</h1>
            <h4>Fun and Featured Events in SLO County</h4>
        </div>
            
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

                        {post.active? <p>Active/Available: yes</p> : <p>Active/Available: <span style={{color: 'red'}}>no</span></p>}
                        { post.location? <p>Location: {post.location}</p> : '' }
                        { post.link? <p>Link: <a href={post.link}>link to resource</a></p> : ''}
{/* UpdateButton */}
                        { token ? 
                            <p>
                                <Button variant="success"
                                onClick={ (event)=> { setIsUpdating(true)
                                setIdToUpdate(post.id)
                                }}
                                >Update</Button>
                            </p>
                            : ''
                        }
{/* End of Update Button */}
                        { post.productimage? <a href={post.link} target="_blank"><img className="imageSpot" src={post.productimage} /></a>: '' }
                        
                      

                        { token && post.active?  <Button variant="danger" type="submit" onClick={ async (event)=> { 
                        //  When it was real delete   
                            // const newList = [...posts]
                            // const index = newList.findIndex(postItem => postItem.id === post.id)
                            // if (index === -1) return;
                            // newList.splice(index,1)
                            // setPosts(newList)
                        //end When it was real delete
                                setIsChanged(false)
                            try {
                                
                                await deletePost(post.id)
                                console.log("Delete Worked")
                                setIsChanged(true)
                            } catch(error) {
                                console.log(error)
                            }
                        }}

                         style={{marginTop: "10px", marginBottom: "10px"}}
                          >Mark Unavailable</Button>  : ''}

                    </div>
                    </>
                )
            }
                </div>
            <Contact token={token} setToken={setToken} posts={posts} setPosts={setPosts}/> 
            { isLoading? <Loading /> :  ''}

            { isUpdating? <Update idToUpdate={idToUpdate} setIdToUpdate={setIdToUpdate} setIsChanged={setIsChanged} setIsUpdating={setIsUpdating}/> : ''}
            
            <Footer />

            </div>
    )
};


ReactDOM.render(
 
    <App/>,
    document.getElementById('root')
)