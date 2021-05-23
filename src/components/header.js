import React from 'react'


const Header = ({ siteTitle }) => {
  return (
    <div className='text-center'
      style={{
        background: '#333',
        padding: '3%',
      }}
    >
       <h1 style={{color:"white"}}>
          {siteTitle}
        </h1>
      <img src="https://user-images.githubusercontent.com/43414928/119258473-58684500-bbe7-11eb-99f6-2ff5209ef89d.png" width='300' />
    </div>
  )
}

export default Header
