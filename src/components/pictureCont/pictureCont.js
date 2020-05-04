import React,{useState} from 'react'
import Picture from './picture'
import './pictureCont.scss'

const PictureCont = (props) => {
 const { h, sH, myPosts } = props

 const [posts,setPosts] = useState([...myPosts])
 
  return (
    <div className='box'>
    <section className='header'>
      <aside>
        <h2 className='heading'>
          {h}
        </h2>
        <p className='subHeading'>
          {sH}
        </p>
      </aside> 
      <button className='PrimaryBtn'>
          Next
      </button>
    </section>

      <Picture {...{posts,setPosts}}/>
      
    </div>
  )
}

export default PictureCont
