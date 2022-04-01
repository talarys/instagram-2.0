import {
  DotsHorizontalIcon,
  HeartIcon,
  ChatIcon,
  PaperAirplaneIcon,
  BookmarkIcon,
} from '@heroicons/react/outline';

function Post({
  post: {
    username, userImg, img, id,
  },
}) {
  return (
    // Post
    <div className="flex flex-col border max-w-[600px] bg-white rounded">
      {/* Post Header */}
      <div className="flex justify-between p-3 items-center">
        {/* Left  */}
        <div className="flex space-x-2">
          {/* UserImage */}
          <div className="bg-gradient-to-bl from-[#B7318E] to-[#F99034] p-[2px] rounded-full object-contain">
            <img src={userImg} alt="userImg" className="w-8 h-8 object-cover rounded-full border-[2px] border-white" />
          </div>
          {/* Username */}
          <p className="font-mono font-semibold mt-1">{username}</p>
        </div>
        {/* Right */}
        <DotsHorizontalIcon className="h-5 text-gray-700 cursor-pointer" />
      </div>
      {/* MainImg */}
      <img src={img} alt="img" />
      {/* Footer */}
      <div>
        {/* Icons */}
        <div className="flex justify-between p-3 text-gray-700">
          <div className="flex space-x-4">
            <HeartIcon className="h-6 cursor-pointer" />
            <ChatIcon className="h-6 cursor-pointer" />
            <PaperAirplaneIcon className="h-6 cursor-pointer" />
          </div>
          <BookmarkIcon className="h-6 cursor-pointer" />
        </div>
      </div>

    </div>
  );
}

export default Post;
