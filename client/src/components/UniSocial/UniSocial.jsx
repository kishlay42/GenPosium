import React from "react";
import { Search, Cards, Button } from "../index";
import PostCard from "../Post/PostCard";
import { useEffect, useState } from "react";

const UniSocial = () => {
  const [trendPosts, setTrendPosts] = useState(null);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch('/api/post/getPosts?category=uniSocial&limit=3');
      const data = await res.json();
      setPosts(data.posts);
    };
    fetchPosts();
  }, []);
  useEffect(() => {
    try {
      const fetchTrendPosts = async () => {
        const res = await fetch(`/api/post/getposts?category=uniSocial&limit=2`);
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
        {/* <Search /> */}
        <div className=" my-1 w-3/4 mx-auto ">
          <div className="flex  my-6 flex-wrap">
            <div
              className="  border w-2/4
              flex-1 flex flex-col px-2 py-1  rounded-xl border-orange-50 bg-orange-200
            -200 mx-1 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]"
            >
              <div className="py-1 px-2 text-red-500 font-bold  text-2xl">
                <p>Trending Now </p>
              </div>
              <div>
                <div className="flex flex-row gap-3 ">
                  {trendPosts &&
                    trendPosts.map((post) => (
                      <PostCard key={post._id} post={post} />
                    ))}
                </div>
              </div>
            </div>
            <div className=" w-1/3 flex  border border-red-700 mx-1 rounded-xl">
              <div className="pt-52 bg-local rounded-xl  bg-[url('https://i.pinimg.com/564x/ee/fb/4c/eefb4c411e380b70cd31234aa16d9b82.jpg')] bg-cover bg-no-repeat ">
                <h1 className=" px-3 text-4xl font-extrabold leading-none tracking-tight md:text-5xl lg:text-6xl text-orange-700">
                  Help Us Connect Universities.
                </h1>
                <Button text="Contribute" />
              </div>
            </div>
            {/* Newly added */}
            <div className="flex  mt-6  ">
            <div className='flex flex-row gap-5 w-5/6 '>
              {posts.map((post) => (
                <PostCard key={post._id} post={post} />
              ))}
            </div>
            </div>
            <div className="flex  flex-wrap my-8">
              <div className=" w-1/3 flex  border border-red-700 mx-1 rounded-xl">
                <div className=" pt-40 bg-local rounded-xl  bg-[url('https://i.pinimg.com/736x/f3/13/19/f3131994c82fcfe30d9d5b46557f5966.jpg')] bg-cover bg-no-repeat ">
                  <div className="">
                    <h1 className=" px-3 text-4xl font-extrabold leading-none tracking-tight md:text-5xl lg:text-6xl text-gray-100  ">
                      Explore your Favourite Universities.
                    </h1>
                    <Button
                      text="Explore"
                      hoverColor="bg-red-300"
                      btnTextColor="text-gray-50"
                      btnBorderColor="border-gray-50"
                    />
                  </div>
                </div>
              </div>
              {/* Most Liked */}
              <div
                className="  border w-1/2 flex-1 flex flex-col px-2 py-1  rounded-xl border-orange-50 bg-red-200
            -200 mx-1"
              >
                <div className="py-1 px-2 text-red-500 font-bold  text-2xl">
                  <p>Most liked </p>
                </div>
                <div className="flex flex-row gap-3 ">
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

export default UniSocial;
