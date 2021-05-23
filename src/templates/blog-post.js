import React from 'react'
import Link from 'gatsby-link'

export default function Template({ data }) {
  const post = data.markdownRemark

  return (
    <div>
     <br/>
      <h1>{post.frontmatter.title}</h1>
      <h4>
        Posted by {post.frontmatter.author} on {post.frontmatter.date}
      </h4>
       <hr />
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
      <button className='btn btn-dark btn-sm'><Link to="/" style={{color:"white"}}>Go Back</Link></button>
    
    </div>
  )
}

export const postQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
        author
        date
        thumbnail
      }
    }
  }
`
