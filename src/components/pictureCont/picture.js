import React from 'react'
import play from './assets/play.svg'
import tick from './assets/tick.svg'
import add from './assets/add.svg'

const Picture = ({ posts, setPosts }) => {
  return (
    <div className='marginCont'>
      <main className='contentsCont unset'>
        {
          posts.map((post, index) => <Post key={index} {...{ index, post, posts, setPosts }} />)
        }
      </main>
    </div>
  )
}

const Post = ({ index, post, posts, setPosts }) => {
  return (
    <div className='imageCont gradient'>

      <img className='imgPost' src={post.imgUrl} alt='img' />

      <button
        className='tickBtn'
        onClick={() => {
          const temp = [...posts];
          temp[index].selectedImg = !(temp[index].selectedImg);
          setPosts(temp);
        }} >
        <img src={post.selectedImg ? tick : add} alt='button' />
      </button>

      {
        post.isVideo ?
          <div className='playBtn'>
            <img src={play} alt='play' />
          </div>
          : null
      }

    </div>
  )
}

export default Picture