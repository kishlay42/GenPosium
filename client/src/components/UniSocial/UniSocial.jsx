import { Button } from "../index";
import PostCard from "../Post/PostCard";
import  { useEffect, useState } from "react";
import {Spinner} from "flowbite-react";

const UniSocial = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [trendPosts, setTrendPosts] = useState(null);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch("/api/post/getPosts?category=uniSocial&limit=3");
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
          `/api/post/getposts?category=uniSocial&likes.length()>=2&limit=2&numberOfLikes=4 `
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
    return (
      <div className="flex justify-center items-center h-screen">
        <Spinner color="pink" aria-label="Extra large spinner example" size="xl" />
      </div>
    );

  }

  return (
    <>
      <div >
        <div className=" md:ml-20 lg:mx-auto my-1 mx-auto  lg:w-3/4 animate-y ">
          <div className="flex  my-6 flex-wrap flex-col  lg:flex-row ">
            <div
              className=" border lg:w-2/4 md:w-11/12
              flex-1 flex flex-col px-4  py-3 md:rounded-xl border-orange-500 bg-[url('https://i.pinimg.com/564x/b8/23/78/b82378b03a3911cfaef8a050e7191c0c.jpg')] sm:mx-1 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] "
              
            >
              <div className="py-1 px-2  text-red-500 font-bold  text-2xl">
                <p>Trending Now </p>
              </div>

              <div className="flex flex-col lg:w-11/12 lg:ml-6 md:flex-row gap-5 lg:gap-10  ">
                {trendPosts &&
                  trendPosts.map((post) => (
                    <PostCard key={post._id} post={post}  />
                  ))}
              </div>
            </div>
            <div className=" md:mt-2 lg:mt-0 md:w-11/12 lg:w-1/3 flex  border border-red-700 sm:mx-1 sm:rounded-xl ">
              <div className="pt-52 bg-local sm:rounded-xl  bg-[url('https://i.pinimg.com/564x/ee/fb/4c/eefb4c411e380b70cd31234aa16d9b82.jpg')] bg-cover bg-no-repeat ">
                <h1 className=" px-3 text-4xl lg:text-4xl md:pr-56 lg:pr-0 font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl text-orange-700">
                  Help Us Connect Universities.
                </h1>
                <a href="https://discord.gg/kKAsgsUuXe" target="_blank">
                <Button text="Contribute" />
                </a>
              </div>
            </div>
            {/* Newly added */}
            <div className="flex md:mt-6 md:px-28 lg:px-0 lg:w-full">
            <div className="flex flex-col lg:flex-row   mt-3 gap-3 px-3 lg:px-0 md:flex-col md:gap-5 lg:w-full">
                {posts && posts.map((post) => (
                  <PostCard key={post._id} post={post}   />
                ))}
              </div>
            </div>
            {/* Most Liked */}
            <div className="md:flex  md:flex-wrap md:my-8 md:flex-col lg:flex-row lg:w-full  ">
              <div className=" lg:w-1/3 md:w-4/6 flex  pt-2 md:pt-0 md:mx-1 rounded-xl">
                <div className="pt-80 sm:pt-36 bg-local sm:rounded-xl  bg-[url('https://i.pinimg.com/736x/f3/13/19/f3131994c82fcfe30d9d5b46557f5966.jpg')] bg-cover bg-no-repeat  ">
                  <div >
                    <h1 className=" px-3 text-4xl lg:text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl  text-gray-100  ">
                      Explore<br/> your Favourite Universities.
                    </h1>
                    <a href="https://discord.gg/kKAsgsUuXe" target="_blank"> <Button
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
                className=" md:mt-2 lg:mt-0 md:w-4/6 lg:w-1/2 flex-1 flex flex-col px-2  md:py-1  md:rounded-xl border-orange-50 bg-[url('https://i.pinimg.com/564x/fd/56/14/fd5614595406677abc551972860b2180.jpg')]
             sm:mx-1 "
              >
                <div className="py-1 px-2 text-red-500 font-bold  text-2xl">
                  <p>Most liked </p>
                </div>
                <div className="flex flex-col  md:w-11/12 md:ml-6 md:flex-row gap-5 md:gap-10  ">
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
