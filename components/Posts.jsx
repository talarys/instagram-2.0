import Post from './Post';

const posts = [
  {
    id: '123',
    username: 'yuno',
    userImg: '/dummy.jpg',
    img: '/dummy.jpg',
  },
  {
    id: '124',
    username: 'yuno',
    userImg: '/dummy.jpg',
    img: '/dummy.jpg',
  },
];

function Posts() {
  return (
    <div className="mt-8 flex flex-col space-y-4">
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
}

export default Posts;
