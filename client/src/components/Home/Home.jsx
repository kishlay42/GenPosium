import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import LotusCanvas from "../canvas/Lotus";
import LotusMobileCanvas from "../canvas/LotusMobile";
import FlipCard from "../Usables/FlipCard";
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
      <div className="flex flex-col  lg:gap-12 pb-28 px-3 max-w-6xl mx-auto  ">
        <div className="flex flex-row  items-center">
          <div>
            <h1 className="text-6xl font-bold lg:text-6xl">Welcome to</h1>
            <h1 className="  text-6xl font-bold lg:text-7xl bg-gradient-to-r from-violet-600 to-pink-600 bg-clip-text text-transparent">
              GenPosium
            </h1>
          </div>
          <div className="hidden md:block lg:block">
            <LotusCanvas />
          </div>
        </div>
        <div className="lg:hidden md:hidden block">
          <LotusMobileCanvas />
        </div>
      </div>
      <div className="mb-16"> <FlipCard /> </div>
      
      
    </div>
  );
}
