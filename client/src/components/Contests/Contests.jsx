import React from "react";
import { Button } from "../index";
import PostCard from "../Post/PostCard";
import { useEffect, useState } from "react";

const Contests = () => {
  const [trendPosts, setTrendPosts] = useState(null);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch("/api/post/getPosts?category=contest&limit=3");
      const data = await res.json();
      setPosts(data.posts);
    };
    fetchPosts();
  }, []);
  useEffect(() => {
    try {
      const fetchTrendPosts = async () => {
        const res = await fetch(
          `/api/post/getposts?category=contest&limit=2`
        );
        const data = await res.json();
        if (res.ok) {
          setTrendPosts(data.posts);
        }
      };
      fetchTrendPosts();
    } catch (error) {
      console.log(error.message);
    }
  }, []);
  return (
    <>
      <div>
        <div className=" my-1 mx-auto sm:w-3/4 sm:mx-auto ">
          <div className="flex  my-6 flex-wrap flex-col sm:flex-row">
            <div
              className="  border sm:w-2/4
            flex-1 flex flex-col px-4  py-3 sm:px-2 sm:py-1  sm:rounded-xl  border-orange-50 bg-[url('https://i.pinimg.com/564x/d5/5c/28/d55c28b35d6d19ac53bc06dff4f2551d.jpg')] bg-cover sm:mx-1 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]"
            >
              <div className="py-1 px-2 text-blue-600 font-bold  text-2xl">
                <p>Trending Now </p>
              </div>
              <div className="flex flex-col md:w-11/12 md:ml-6 sm:flex-row gap-5 md:gap-10  ">
                {trendPosts &&
                  trendPosts.map((post) => (
                    <PostCard key={post._id} post={post} />
                  ))}
              </div>
            </div>
            <div className=" sm:w-1/3 flex  border border-blue-700 sm:mx-1 sm:rounded-xl">
              <div className="pt-52  bg-local sm:rounded-xl  bg-[url('https://i.pinimg.com/564x/90/23/80/902380c9468ab6caa1be63a3ed700689.jpg')] bg-cover  bg-no-repeat ">
                <h1 class=" px-3 text-4xl font-extrabold leading-none tracking-tight md:text-5xl lg:text-6xl text-blue-500">
                  Advertise Your<br/> Contest.
                </h1>
                <a href="https://discord.gg/rbgRYhqR">   <Button
                  text="Add Contest"
                  hoverColor="bg-blue-500"
                  btnTextColor="text-blue-600"
                  btnBorderColor="border-blue-600"
                /></a>
             
              </div>
            </div>
            {/* Newly added */}
            <div className="flex  sm:mt-6   ">
              <div className="flex flex-col mt-3 gap-3 px-3 sm:flex-row sm:gap-5 sm:w-5/6 ">
                {posts.map((post) => (
                  <PostCard key={post._id} post={post} />
                ))}
              </div>
            </div>
            {/* Most Liked */}
            <div className="sm:flex  sm:flex-wrap sm:my-8">
              <div className=" sm:w-1/3 flex  pt-2 sm:mx-1 rounded-xl">
                <div className=" pt-80 sm:pt-36 bg-local sm:rounded-xl  bg-[url('https://i.pinimg.com/564x/c3/40/ae/c340ae7b05e65a4e29d916b09f5f6f42.jpg')] bg-cover bg-no-repeat ">
                  <div className=" ">
                    <h1 class=" px-3 text-4xl font-extrabold leading-none tracking-tight md:text-5xl lg:text-6xl text-white  ">
                      Explore More Upcoming Contests.
                    </h1>
                    <a href="https://discord.gg/rbgRYhqR"><Button
                      text="Explore"
                      hoverColor="bg-black"
                      btnTextColor="text-white"
                      btnBorderColor="border-white"
                    /></a>
                    
                  </div>
                </div>
              </div>
              {/* Most Liked */}
              <div
                className=" border sm:w-1/2 flex-1 flex flex-col px-2  sm:py-1  sm:rounded-xl border-blue-50 bg-[url('https://i.pinimg.com/564x/78/38/e0/7838e0ba96b5e82a1fe516af74d329c4.jpg')] bg-cover sm:mx-1"
              >
                <div className="py-1 px-2 text-blue-500 font-bold  text-2xl">
                  <p>Upcoming Contests </p>
                </div>
                <div className="flex flex-col  md:w-11/12 md:ml-6 sm:flex-row gap-5 md:gap-10  ">
                  {trendPosts &&
                    trendPosts.map((post) => (
                      <PostCard key={post._id} post={post} />
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contests;
