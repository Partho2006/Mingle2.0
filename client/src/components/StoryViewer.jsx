import { BadgeCheck, X } from 'lucide-react'
import React from 'react'

const StoryViewer = ({ viewStory, setViewStory }) => {

  const handleClose = () => {
    setViewStory(null)
  }
  const renderContent = () => {
    switch (viewStory.media_type) {
      case "image":
        return (
          <img
            src={viewStory.media_url}
            alt="story"
            className="max-w-screen max-h-screen object-contain"
          />
        );
      case "video":
        return (
          <video
            src={viewStory.media_url}
            onEnded={() => setViewStory(null)}
            className="max-h-screen"
            controls
            autoPlay
          />
        );
      case "text":
        return (
          <div className="w-full h-full flex items-center justify-center p-8 text-white text-2xl text-center">
            {viewStory.content}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className='fixed inset-0 h-screen bg-black bg-opacity-90 z-110 flex items-center justify-center' style={{ backgroundColor: viewStory.media_type === 'text' ? viewStory.background_color : '#000000' }}>

      {/* Progress Bar */}
      <div className="absolute top-0 left-0
       h-2 bg-gray-700 ">
        <div className="h-fit bg-white transition-all duration-100 linear" style={{ width: '50' }}>

        </div>
        {/* User info - top left */}
        <div className="absolute top-4 left-4 flex items-center justify-between w-50 space-x-3 p-2 px-4 sm:p-4 sm:px-8 backdrop-blur-2xl rounded bg-black/50">
          <img src={viewStory.user?.profile_picture} alt="" className='size-8 rounded-full object-cover border border-white' />
          <div className="flex justify-around w-fit items-center gap-2">
            <span className="text-white font-medium flex items-center ">
              {viewStory.user?.full_name}
            </span>
            <BadgeCheck size={22} className='text-white' />
          </div>
        </div>
      </div>

      {/* Close button */}
      <button onClick={handleClose} className='absolute top-4 right-4 text-white text-3xl font-bold focus:outline-none'>
        <X className='w-8 h-8 hover:scale-110 transition cursor-pointer' />
      </button>

      {/* Content wrapper */}
      <div className="max-w-[90vw] max-h-[90vh] flex items-center justify-center">
        {renderContent()}
      </div>
    </div>
  )
}

export default StoryViewer
