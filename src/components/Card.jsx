import React from "react";

const Card = (props)=>{

    return (
        <div>
            <p>{props.post.title}</p>
            <p>
                By <span>{props.post.author}</span> on <span>{props.post.category}</span>
            </p>
            <p>
                Posted on {props.post.date}
            </p>
            <p>
                {props.post.content}
            </p>
            <div>
                {props.post.tags.map((tag) =>{
                    return <span>{`#${tag}`}</span>
                })}
            </div>
        </div>
    )
}

export default Card;