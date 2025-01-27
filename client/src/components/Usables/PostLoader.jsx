
const PostLoader = () => {
  return (
    <span className="relative w-36 h-36 bg-orange-600 rounded-full shadow-inner overflow-hidden">
      <span className="absolute w-full h-full rounded-[45%] top-[-40%] bg-white animate-wave"></span>
      <span className="absolute w-full h-full rounded-[30%] top-[-40%] bg-white opacity-40 animate-wave"></span>
    </span>
  );
};

export default PostLoader;