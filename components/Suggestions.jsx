import faker from '@faker-js/faker';
import { useEffect, useState } from 'react';

function Suggestions() {
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    setSuggestions([...Array(5)].map((_, i) => ({
      id: i,
      avatar: faker.image.avatar(),
      name: faker.name.firstName(),
    })));
  }, []);

  return (
    <div className="mt-6">
      <div className="flex justify-between items-center">
        <p className="text-[#8c8c8c] font-semibold">
          Suggestions For You
        </p>
        <p className="font-semibold cursor-pointer text-sm">See All</p>
      </div>
      {/* Miniprofiles */}
      <div className="mt-4 space-y-3">
        { suggestions.map((profile) => (
          <div key={profile.id} className="flex justify-between items-center">
            <div className="flex space-x-2 items-center">
              <img className="w-8 h-8 rounded-full cursor-pointer" src={profile.avatar} alt="" />
              <div>
                <p className="font-semibold cursor-pointer text-sm">{profile.name}</p>
                <p className="text-sm text-[#8c8c8c]">follow me or something</p>
              </div>
            </div>
            <p className="text-[#1693f2] text-xs font-semibold cursor-pointer">Follow</p>
          </div>
        )) }
      </div>
    </div>
  );
}

export default Suggestions;
