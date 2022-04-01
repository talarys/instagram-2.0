import { XCircleIcon } from '@heroicons/react/solid';
import { SearchIcon } from '@heroicons/react/outline';
import { useRef } from 'react';

function Header() {
  const inputRef = useRef('');

  return (
    // Header Container
    <div className="h-[60px] border-b flex align-middle shadow-sm sticky top-0 z-50 bg-white">
      {/* Header */}
      <div className="flex flex-auto justify-between items-center mx-[20px] lg:mx-auto max-w-[975px]">
        {/* Left Logo */}
        <img src="/instagramLogo.svg" alt="logo" className="h-10" />
        {/* Middle input */}
        <div className="sm:flex h-10 items-center bg-[#efefef] rounded-lg p-2 group hidden">
          <SearchIcon className="h-5 text-gray-400" />
          <input
            className="placeholder:text-gray-400 focus:ring-0 border-none bg-transparent"
            placeholder="Search"
            type="text"
            ref={inputRef}
            value={inputRef.current.value}
          />
          <XCircleIcon
            className="h-6 text-gray-400 invisible group-hover:visible cursor-pointer"
            onClick={() => { inputRef.current.value = ''; }}
          />
        </div>
        {/* Right Icons */}
        <div className="flex space-x-3">
          <button type="button" className="bg-[#0095F6] py-1 px-2 rounded text-white">Log In</button>
          <button className="text-[#0095f6]" type="button">Sign Up</button>
        </div>
      </div>
    </div>
  );
}

export default Header;
