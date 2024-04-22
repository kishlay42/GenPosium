import React from "react";
import { Button } from "../index";
import PostCard from "../Post/PostCard";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const UniSocial = () => {
  const [trendPosts, setTrendPosts] = useState(null);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch("/api/post/getPosts?category=uniSocial&limit=3");
      const data = await res.json();
      setPosts(data.posts);
    };
    fetchPosts();
  }, []);
  useEffect(() => {
    try {
      const fetchTrendPosts = async () => {
        const res = await fetch(
          `/api/post/getposts?category=uniSocial&likes.length()>=2&limit=2`
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
      <div >
        <div className=" my-1 mx-auto sm:w-3/4 sm:mx-auto ">
          <div className="flex  my-6 flex-wrap flex-col sm:flex-row ">
            <div
              className="  border sm:w-2/4
              flex-1 flex flex-col px-4  py-3 sm:px-2 sm:py-1  sm:rounded-xl border-orange-500 bg-[url('https://i.pinimg.com/564x/b8/23/78/b82378b03a3911cfaef8a050e7191c0c.jpg')] sm:mx-1 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] "
              
            >
              <div className="py-1 px-2  text-red-500 font-bold  text-2xl">
                <p>Trending Now </p>
              </div>

              <div className="flex flex-col lg:w-11/12 lg:ml-6 sm:flex-row gap-5 lg:gap-10  ">
                {trendPosts &&
                  trendPosts.map((post) => (
                    <PostCard key={post._id} post={post}  />
                  ))}
              </div>
            </div>
            <div className=" sm:w-1/3   flex  border border-red-700 sm:mx-1 sm:rounded-xl ">
              <div className="pt-52 bg-local sm:rounded-xl  bg-[url('https://i.pinimg.com/564x/ee/fb/4c/eefb4c411e380b70cd31234aa16d9b82.jpg')] bg-cover bg-no-repeat ">
                <h1 className=" px-3  text-4xl font-extrabold leading-none tracking-tight md:text-5xl lg:text-6xl text-orange-700">
                  Help Us Connect Universities.
                </h1>
                <a href="https://discord.gg/rbgRYhqR" >
                <Button text="Contribute" />
                </a>
              </div>
            </div>
            {/* Newly added */}
            <div className="flex  sm:mt-6">
            <div className="flex flex-col mt-3 gap-3 px-3 sm:flex-row sm:gap-5 sm:w-5/6 ">
                {posts && posts.map((post) => (
                  <PostCard key={post._id} post={post}   />
                ))}
              </div>
            </div>
            {/* Most Liked */}
            <div className="sm:flex   sm:flex-wrap sm:my-8  ">
              <div className=" sm:w-1/3 flex  pt-2 sm:mx-1 rounded-xl  ">
                <div className="pt-80 sm:pt-36 bg-local sm:rounded-xl  bg-[url('https://i.pinimg.com/736x/f3/13/19/f3131994c82fcfe30d9d5b46557f5966.jpg')] bg-cover bg-no-repeat  ">
                  <div >
                    <h1 className=" px-3 text-4xl font-extrabold leading-none tracking-tight md:text-5xl lg:text-6xl text-gray-100  ">
                      Explore your Favourite Universities.
                    </h1>
                    <a href="https://discord.gg/rbgRYhqR"> <Button
                      text="Explore"
                      hoverColor="bg-red-300"
                      btnTextColor="text-gray-50"
                      btnBorderColor="border-gray-50"
                    /></a>
                   
                  </div>
                </div>
              </div>
              {/* Most Liked */}
              <div
                className="  border sm:w-1/2 flex-1 flex flex-col px-2  sm:py-1  sm:rounded-xl border-orange-50 bg-[url('https://i.pinimg.com/564x/fd/56/14/fd5614595406677abc551972860b2180.jpg')]
             sm:mx-1 "
              >
                <div className="py-1 px-2 text-red-500 font-bold  text-2xl">
                  <p>Most liked </p>
                </div>
                <div className="flex flex-col  md:w-11/12 md:ml-6 sm:flex-row gap-5 md:gap-10 ">
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
