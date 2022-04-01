function Story({ avatarImg, name }) {
  return (
    <div>
      <div className="bg-gradient-to-bl from-[#B7318E] to-[#F99034] p-[2px] rounded-full object-contain">
        <img className="h-18 w-18 rounded-full border-[2px] object-contain cursor-pointer" src={avatarImg} alt="" />
      </div>
      <p className="w-16 text-center text-xs truncate">{name}</p>
    </div>
  );
}

export default Story;
