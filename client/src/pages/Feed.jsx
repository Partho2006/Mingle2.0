import React, { useEffect, useState } from 'react'
import Loading from '../components/Loading';
import { assets, dummyPostsData } from '../assets/assets'
import StoriesBar from '../components/StoriesBar';
import PostCard from '../components/PostCard';
import RecentMessages from '../components/RecentMessages';

const Feed = () => {
  const [feeds, setFeeds] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchFeeds = async () => {
    setFeeds(dummyPostsData);
    setLoading(false);
  }

  useEffect(() => {
    fetchFeeds();
  }, []);

  return !loading ? (
    <div className="h-full overflow-y-scroll py-8 xl:pr-4 flex items-start justify-center xl:gap-8">
      {/* Stories and Posts */}
      <div>
        <StoriesBar />
        <div className="p-4 space-y-4">
          {feeds.map(post => (
            <PostCard key={post._id} post={post} />
          ))}
        </div>
      </div>

      {/* Right side bar */}
      <div className='max-xl:hidden sticky top-0'>
        <a
          href="https://portfolio-1-0-git-main-partho221s-projects.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className='max-w-xs bg-white text-xs p-4 rounded-md inline-flex flex-col gap-2 shadow'>
            <h3 className='text-slate-800 font-semibold'>Sponsored</h3>
            <img src={assets.sponsored_img} alt="" className='w-75 h-50 rounded-md' />
            <p className='text-slate-600'>Parthojoty RoyChowdhury</p>
            <p className="text-slate-400">Open for work and freelancing..</p>
          </div>
        </a>

        <RecentMessages />
      </div>
    </div>
  ) : <Loading />
}

export default Feed

