import {
  DotsHorizontalIcon,
  HeartIcon,
  ChatIcon,
  PaperAirplaneIcon,
  BookmarkIcon,
  EmojiHappyIcon,
} from '@heroicons/react/outline';

function Post({
  post: {
    username, userImg, img, caption, id,
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
          <div className="bg-gradient-to-bl from-[#B7318E] to-[#F99034] p-[2px] rounded-full object-contain cursor-pointer">
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
      <div className="px-3">
        {/* Icons */}
        <div className="flex justify-between py-3 text-gray-700">
          <div className="flex space-x-4">
            <HeartIcon className="h-6 cursor-pointer" />
            <ChatIcon className="h-6 cursor-pointer" />
            <PaperAirplaneIcon className="h-6 cursor-pointer" />
          </div>
          <BookmarkIcon className="h-6 cursor-pointer" />
        </div>
        {/* Likes */}
        <p className="font-semibold">
          {/* {Math.floor((Math.random() * 20000 + 10000))} */}
          {' '}
          likes
        </p>
        <p>{caption}</p>
      </div>
      {/* Comments Section */}
      <div className="mt-1 mx-3 border-t h-12 flex items-center">
        <EmojiHappyIcon className="h-7 text-gray-700 cursor-pointer" />
        <input
          className="border-none outline-none ring-0 focus:border-none focus:outline-none focus:ring-0 flex-grow"
          type="text"
          placeholder="Add a comment..."
        />
        <p className="text-cyan-200 cursor-pointer">Post</p>
      </div>
    </div>
  );
}

export default Post;
