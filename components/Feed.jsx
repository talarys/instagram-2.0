import Posts from './Posts';
import Stories from './Stories';
import Suggestions from './Suggestions';
import MiniProfile from './MiniProfile';

function Feed() {
  return (
    <div className="flex justify-center">
      {/* Section */}
      <section className="">
        <Stories />
        <Posts />
      </section>

      {/* Section */}
      <section className="hidden lg:flex flex-col flex-grow max-w-xs mt-8 p-6">
        <MiniProfile />
        <Suggestions />
      </section>
    </div>
  );
}

export default Feed;
