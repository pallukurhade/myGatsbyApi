import React from "react"
import { Link } from "gatsby";


const Post = ({ title, body, path }) => (
  <div className="post">
    <h3 className="post-title" to={ path }>{ title }</h3>
    <p className="post-description">{ body }</p>
    <Link className="btn" to={ path }>Read more</Link>
  </div>
);

export default Post;