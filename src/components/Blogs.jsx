import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import Spinner from "./Spinner";
import Card from "./Card";
const Blogs = ()=>{
    //Consuming from Context Api using useContext Hook
    const {posts,loading} = useContext(AppContext);

    return (
        <div>
            {
                loading ? (<Spinner/>):
                (
                    
                    posts.length === 0 

                    ?
                     
                    (  
                         <div>
                            <p>No Post Found</p>
                         </div>
                    ) 
                    
                    : 
                    
                    (
                        posts.map((post) => (<Card post ={post}/>))
                    )
                    
                ) 
            }
        </div>
    );
}
export default Blogs;
