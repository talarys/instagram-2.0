// import { UserCircleIcon } from '@heroicons/react/outline';

function MiniProfile() {
  return (
    <div className="flex justify-between items-center mt-[5px]">
      <div className="flex items-center">
        {/* <UserCircleIcon className="h-14" /> */}
        <img className="rounded-full object-cover w-14 h-14 border cursor-pointer" src="/dummy.jpg" alt="" />
        <div className="pl-4">
          <p className="font-semibold font-mono cursor-pointer text-sm">username</p>
          <p className="text-sm text-[#8c8c8c]">follow me</p>
        </div>
      </div>
      <p className="text-[#1693f2] text-xs font-semibold cursor-pointer">Switch</p>
    </div>
  );
}

export default MiniProfile;
