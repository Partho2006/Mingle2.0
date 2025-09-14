import React, { useEffect, useState } from 'react'
import Loading from '../components/Loading'; 
import {dummyPostsData} from '../assets/assets'
import StoriesBar from '../components/StoriesBar';

const Feed = () => {
  const [feeds, setfeeds] = useState([]);
  const [loading, setloading] = useState(true);

  const fetchFeeds = async() => {
    setfeeds(dummyPostsData)
    setloading(false)
  }
  useEffect(()=>{
    fetchFeeds()
  },[]);

  return !loading ? (
    <div className='h-full overflow-y-scroll no-scrollbar py-8 xl:pr-4 flex items-start justify-center xl:gap-8'>
      {/* Stories and Posts */}
      <div>
        <StoriesBar />
        <div className="p-4 space-y-4">
          List of posts
        </div>
      </div>

      {/* Right side bar */}
      <div className="">
        <div className="">
          <h1>Sponsored</h1>
        </div>
        <h1>Recent Messages</h1>
      </div>
    </div>
  ) : <Loading />
}

export default Feed
