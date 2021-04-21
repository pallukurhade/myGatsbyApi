import React from "react"
import Layout from "../components/layout"
import { graphql} from "gatsby"
import Post from "../components/post"
import pageImage from "../images/blog-img.jpeg"
import Banner from "../components/Banner"



const BlogPage = ({ data }) => (
  
  <Layout>
  <section >
   <Banner 
  style={{ backgroundImage: `url(${pageImage})`,
  backgroundPosition: 'top',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat'
  
  }} 
  pageTitle="Our Blog"
   />
  <div className="hero our-blog-container" >
  <div className="our-blog-content">
  { 
      
      data.allposts.posts.data.map(post => {
         const { title, id, body} = post;
         const path = `/posts/${id}`;
        return (
          <Post
            title={title}
            id={id}
            body={body}
            key={id}
            path={path}
          />
        )
      })
    }
    </div>
    </div>
    </section>
  </Layout>
);

  export default BlogPage


export const query = graphql `
query {
  allposts {
    posts {
      data {
        body
        id
        title
      }
    }
  }
}`