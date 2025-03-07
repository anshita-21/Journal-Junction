import React, { useEffect, useState } from 'react';
import Post from '../post.jsx';


function HomePage(props) {
    const[posts,setPosts] = useState([]);
    console.log(posts);


    // useEffect(()=>{
    //     async function getPosts(params) {
    //         try {
    //             const res = await fetch('/api/user/allposts');
    //             const data = await res.json();
    //             setPosts(data);
    //         } catch (error) {
    //             console.log(error);
    //         }    
    //     }

    //     getPosts();
        
    // },[])
     useEffect(() => {
        const fetchPosts = async () => {
          try {
            const response = await fetch(`/api/user/allposts?_=${new Date().getTime()}`);
            if (!response.ok) {
              const text = await response.text();
              throw new Error(`HTTP error! Status: ${response.status} - ${text}`);
            }
            const data = await response.json();
            setPosts(data);
          } catch (error) {
            console.error('Error fetching posts:', error);
            setError(error);
          }
        };
        fetchPosts();
      }, []);


    return (
        <div>

        {
            posts && posts.length>0 && posts.map((post)=>(
                <Post key={post._id} post={post} />
            ))
        }

        </div>
    );
}

export default HomePage;
