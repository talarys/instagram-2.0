import { useEffect, useState } from 'react';
import { faker } from '@faker-js/faker';
import Story from './Story';

function Stories() {
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    setSuggestions([...Array(20)].map((_, i) => ({
      id: i,
      avatar: faker.image.avatar(),
      name: faker.name.firstName(),
    })));
  }, []);

  return (
    <div className="flex space-x-2 p-6 bg-white mt-8 border border-gray-200 rounded-sm overflow-x-scroll scrollbar-thin">
      {suggestions.map((profile) => (
        <Story key={profile.id} avatarImg={profile.avatar} name={profile.name} />
      ))}
    </div>
  );
}

export default Stories;
