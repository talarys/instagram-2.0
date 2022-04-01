import Posts from './Posts';
import Stories from './Stories';

function Feed() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 max-w-[975px] mx-auto ">
      {/* Section */}
      <section className="md:col-span-2 sm:mx-auto">
        <Stories />
        <Posts />
      </section>

      {/* Section */}
      <section>
        {/* MiniProfile */}
        {/* Suggestions */}
      </section>
    </div>
  );
}

export default Feed;
