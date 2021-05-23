import React from 'react'
import Link from 'gatsby-link'

const BlogPage = ({ data }) => (
  <div>
    <br/>
    <h2>Latest Posts</h2>
  <div className="row"> 
  {data.allMarkdownRemark.edges.map(post => {
    return (
      <div className="col-4">
        <div key={post.node.id} className='card ' style={{ boxShadow: '3px 3px 8px hsl(0, 0%, 70%)' }}>
          <img class="card-img-top" src={post.node.frontmatter.thumbnail} alt="Card image cap" />
          <div class="card-body" style={{padding:"10%"}}>
            <h4 class="card-title">{post.node.frontmatter.title}</h4>
            <small>
              Posted by {post.node.frontmatter.author} on{' '}
              {post.node.frontmatter.date}
            </small>
            <br/>
            <p class="card-text" style={{fontSize:'15px'}}>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <button className='btn btn-dark btn-sm'>  <Link to={post.node.frontmatter.path} style={{color:"white"}}>Read More</Link></button>

          </div>
        </div>
      </div>
    )
  })}
  </div>
  </div>
)

export const pageQuery = graphql`
  query BlogIndexQuery {
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            path
            title
            date
            author
            thumbnail
          }
        }
      }
    }
  }
`

export default BlogPage
