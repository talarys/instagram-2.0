import Posts from './Posts';
import Stories from './Stories';

function Feed() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 md:max-w-[975px] lg:grid-col-3 mx-auto ">
      {/* Section */}
      <section className="col-span-2 mx-auto lg:mx-0">
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
