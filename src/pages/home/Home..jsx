import Posts from '../../components/posts/Posts'
import Stories from '../../components/stories/Stories'
import ShareStatus from '../../components/shareStatus/ShareStatus'
import './home.scss'

const Home = () => {
  return (
    <div className='home'>
      <Stories />
      <ShareStatus />
      <Posts />
    </div>
  )
}

export default Home