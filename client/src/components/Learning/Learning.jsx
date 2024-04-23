import {  Button } from "../index";
import PostCard from "../Post/PostCard";
import React, { useEffect, useState } from "react";
import {Spinner} from "flowbite-react";

const Learning = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [trendPosts, setTrendPosts] = useState(null);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch("/api/post/getPosts?category=learning&limit=3");
      const data = await res.json();
      setPosts(data.posts);
      setIsLoading(false); // Set isLoading to false after fetching posts

    };
    fetchPosts();
  }, []);
  useEffect(() => {
    try {
      const fetchTrendPosts = async () => {
        const res = await fetch(
          `/api/post/getposts?category=learning&limit=2`
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
  if(isLoading){
    return <div><Spinner size="xl" /></div>

  }
  return (
    <>
      <div>
        <div className=" my-1 mx-auto sm:w-3/4 sm:mx-auto ">
          <div className="flex  my-6 flex-wrap flex-col sm:flex-row">
            <div
              className="  border sm:w-2/4
              flex-1 flex flex-col px-4  py-3 sm:px-2 sm:py-1  sm:rounded-xl  border-green-50 bg-[url('https://i.pinimg.com/564x/59/9c/95/599c9531a3f66248ae7b0a7d096a1f26.jpg')] sm:mx-1 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] "
            >
              <div className="py-1 px-2 text-indigo-600 font-bold  text-2xl">
                <p>Trending Now </p>
              </div>
              <div className="flex flex-col md:w-11/12 md:ml-6 sm:flex-row gap-5 md:gap-10  ">
                {trendPosts &&
                  trendPosts.map((post) => (
                    <PostCard key={post._id} post={post} />
                  ))}
              </div>
            </div>
            <div className=" sm:w-1/3 flex  border border-green-700 sm:mx-1 sm:rounded-xl">
              <div className="pt-52  w-full bg-local sm:rounded-xl  bg-[url('https://i.pinimg.com/564x/dd/b3/56/ddb3565b5e999324f0b01ddd2eaedeb6.jpg')] bg-cover bg-no-repeat ">
                <h1 class=" px-3  text-4xl font-extrabold leading-none tracking-tight md:text-5xl lg:text-6xl text-purple-600">
                  Add <br /> Courses For<br/> Others.
                </h1>
                <a href="https://discord.gg/rbgRYhqR"><Button
                  text="Add Course"
                  hoverColor="bg-purple-800"
                  btnTextColor="text-purple-800"
                  btnBorderColor="border-purple-200"
                /></a>
                
              </div>
            </div>
            {/* Newly added */}
            <div className="flex  sm:mt-6">
              <div className="flex flex-col mt-3 gap-3 px-3 sm:flex-row sm:gap-5 sm:w-5/6 ">
                {posts.map((post) => (
                  <PostCard key={post._id} post={post} />
                ))}
              </div>
            </div>
            <div className="sm:flex  sm:flex-wrap sm:my-8">
              <div className=" sm:w-1/3 flex  border border-green-700 sm:mx-1 rounded-xl">
                <div className=" pt-80  sm:pt-24 bg-local sm:rounded-xl bg-[url('https://i.pinimg.com/564x/85/ad/44/85ad4499e4d4949defcb09b8678ed506.jpg')] bg-cover bg-no-repeat ">
                  <div className=" ">
                    <h1 class=" px-3 text-4xl font-extrabold leading-none tracking-tight md:text-5xl lg:text-6xl text-gray-200  ">
                      Explore Most Popular Courses for Free.
                    </h1>
                    <a href="https://discord.gg/rbgRYhqR"> <Button
                      text="Explore"
                      hoverColor="bg-yellow-800"
                      btnTextColor="text-gray-50"
                      btnBorderColor="border-gray-50"
                    /></a>
                   
                  </div>
                </div>
              </div>
              {/* Most Liked */}
              <div
                className="  border sm:w-1/2 flex-1 flex flex-col px-2 py-3sm:px-2 sm:py-1  sm:rounded-xl border-orange-50 bg-[url('https://i.pinimg.com/564x/51/f4/54/51f454981ff3801b733a045979ea19ed.jpg')]  sm:mx-1"
              >
                <div className="py-1 px-2 text-indigo-600 font-bold  text-2xl">
                  <p>Most Popular </p>
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

export default Learning;
