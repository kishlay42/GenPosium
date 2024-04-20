import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import LotusCanvas from "../canvas/Lotus";
// import BallCanvas from "../canvas/Ball";
export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    
    const fetchPosts = async () => {
      const res = await fetch("/api/post/getPosts?");
      const data = await res.json();
      setPosts(data.posts);
    };
    fetchPosts();
  }, []);
  return (
    <div>
      <div className="flex flex-col gap-12 pb-28 px-3 max-w-6xl mx-auto  ">
        <div className="flex flex-row  items-center">
          <div>
            <h1 className="text-3xl font-bold lg:text-6xl">Welcome to</h1>
            <h1 className=" md:ml-8 text-3xl font-bold lg:text-7xl bg-gradient-to-r from-violet-600 to-pink-600 bg-clip-text text-transparent">
              GenPosium
            </h1>
          </div>
          <div className="">
            <LotusCanvas />
          </div>
        </div>

        <p className="text-gray-500 text-xs sm:text-sm">
          Here you'll find a variety of articles and tutorials on topics such as
          web development, software engineering, and programming languages.
        </p>
        {/* <Link
          to="/search"
          className="text-xs sm:text-sm text-blue-500 font-bold hover:underline"
        >
          View all posts
        </Link> */}
      </div>
      <div className="px-4 w-3/4 pl-10 gap-24 mx-auto rounded-xl  flex flex-row  bg-red-100 dark:bg-slate-700">
       
        </div>
        {/* <BallCanvas /> */}
      </div>
    
  );
}
