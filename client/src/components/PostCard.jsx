import { BadgeCheck, Heart, MessageCircle, ShareIcon } from 'lucide-react'
import moment from 'moment'
import React, { useState } from 'react'
import {dummyUserData} from '../assets/assets'
import { useNavigate } from 'react-router-dom';

const PostCard = ({ post }) => {
  if (!post || !post.user) return null; 
  const postWithHastags = post.content.replace(/(#\w+)/g, '<span class="text-indigo-600">$1</span>')

  const [likes, setLikes] = useState(post.likes_count)
  const currentUser = dummyUserData

  const handleLike = async (params) => {

  }
  const navigate = useNavigate()

  return (
    <div className="bg-white rounded-xl shadow p-4 space-y-4 w-full max-w-2xl">

      {/* User Info */}
      <div onClick={()=> navigate(`/profile/` + post.user._id)} className="flex items-center gap-3 cursor-pointer">
        <img
          src={post.user.profile_picture}
          alt={post.user.full_name}
          className="w-10 h-10 rounded-full shadow object-cover"
        />
        <div>
          <div className="flex items-center space-x-1">
            <span className="font-medium">{post.user.full_name}</span>
            <BadgeCheck className="w-4 h-4 text-blue-500" />
          </div>
          <div className="text-gray-500 text-sm">
            @{post.user.username} • {moment(post.createdAt).fromNow()}
          </div>
        </div>
      </div>

       {/* Content */}
       {post.content && <div className='text-gray-800 text-sm whitespace-pre-line' dangerouslySetInnerHTML={{__html: postWithHastags}}/>}

       {/* Images */}
       <div className="grid grid-cols-2 gap-2">
        {post.image_urls.map((img, index)=> (
            <img src={img} key={index} className={`w-full h-48 object-cover rounded-lg ${post.image_urls.length === 1 && 'col-span-2 h-auto'}`}/> 
        ))}
       </div>

       {/* actions */}
       <div className="flex items-center gap-4 text-gray-600 justify-between text-sm pt-2 border-t border-gray-300">
        <div className="flex items-center gap-1">
            <Heart className={`w-4 h-4 cursor-pointer ${likes.includes(currentUser._id) && 'fill-red-500'}`} onClick={handleLike}/>
            <span>{likes.length}</span>
        </div>
        <div className="flex items-center gap-1">
            <MessageCircle className={`w-4 h-4 cursor-pointer`}/>
            <span>{7}</span>
        </div>
        <div className="flex items-center gap-1">
            <ShareIcon className={`w-4 h-4 cursor-pointer `}/>
        </div>
       </div>
    </div>
  );
};

export default PostCard;
