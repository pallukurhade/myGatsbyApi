/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it
/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it

exports.createPages = async ({ actions, graphql, reporter }) => {
    const result = await graphql(`
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
    }
    `)
  
    if (result.errors) {
      reporter.panic("Error loading characters!", reporter.errors)
    }
  
    result.data.allposts.posts.data.forEach(post => {
      actions.createPage({
        path: `/posts/${post.id}`,
        component: require.resolve("./src/templates/blog-post.js"),
        context: {
          postID: post.id,
        },
      })
    })
  }

  
  
