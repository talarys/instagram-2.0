import Stories from './Stories';

function Feed() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 md:max-w-3xl xl:grid-col-3 xl:max-w-6xl mx-auto">
      {/* Section */}
      <section className="col-span-2">
        <Stories />
        {/* Posts */}
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
