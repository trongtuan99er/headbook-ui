import React, { useContext } from 'react'
import './stories.scss'
import { AuthContext } from '../../context/authContext';

const Stories = () => {
  const { currentUser } = React.useContext(AuthContext);
  // dummy data
  const dummy = [
    {
      id: 1,
      userName: "trong Tuan",
      imgUrl: 'https://images.freeimages.com/images/previews/54c/random-photography-3-1143357.jpg'
    },
    {
      id: 2,
      userName: "trong Tuan",
      imgUrl: 'https://images.freeimages.com/images/previews/54c/random-photography-3-1143357.jpg'
    },
    {
      id: 3,
      userName: "trong Tuan",
      imgUrl: 'https://images.freeimages.com/images/previews/54c/random-photography-3-1143357.jpg'
    },
    {
      id: 4,
      userName: "trong Tuan",
      imgUrl: 'https://images.freeimages.com/images/previews/54c/random-photography-3-1143357.jpg'
    },
  ]
  return (
    <div className='stories'>
        <div className='story'>
            <img src={currentUser.profilePic} alt="story" />
            <span>{currentUser.userName}</span>
            <button>+</button>
          </div>
      {
        dummy.map(img => (
          <div className='story' key={img.id}>
            <img src={img.imgUrl} alt="story" />
            <span>{img.userName}</span>
          </div>
        ))
      }
    </div>
  )
}

export default Stories