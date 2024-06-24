import { Button, Spinner } from "flowbite-react";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import CommentSection from "./CommentSection";
import PostCard from "./PostCard";
import { FaHeart } from "react-icons/fa";
import { useSelector } from "react-redux";


export default function PostPage() {
  const { postSlug } = useParams();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [post, setPost] = useState(null);
  const [recentPosts, setRecentPosts] = useState(null);
  const { currentUser } = useSelector((state) => state.user);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        setLoading(true);
        const res = await fetch(`/api/post/getposts?slug=${postSlug}`);
        const data = await res.json();
        if (!res.ok) {
          setError(true);
          setLoading(false);
          return;
        }
        if (res.ok) {
          setPost(data.posts[0]);
          setLoading(false);
          setError(false);
        }
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };
    fetchPost();
  }, [postSlug]);
  useEffect(() => {
    try {
      const fetchRecentPosts = async () => {
        const res = await fetch(`/api/post/getposts?limit=3`);
        const data = await res.json();
        if (res.ok) {
          setRecentPosts(data.posts);
        }
      };
      fetchRecentPosts();
    } catch (error) {
      console.log(error.message);
    }
  }, []);
  const handleLike = async (postId) => {
    try {
      if (!currentUser) {
        navigate("/sign-in");
        return;
      }
      const res = await fetch(`/api/post/likepost/${postId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      if (res.ok) {
        setPost(data);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  if (loading)
    return (
      <div className="flex justify-center items-center min-h-screen">
        <Spinner size="xl" />
      </div>
    );
  return (
    <div className="flex flex-row">
      <main className="p-3  flex flex-col max-w-6xl  min-h-screen">
        <h1 className="text-3xl mt-10 p-3 text-center font-serif max-w-2xl mx-auto lg:text-4xl">
          {post && post.title}
        </h1>
        <div className="flex flex-row gap-3 mx-auto">
          <Link
            to={`/search?category=${post && post.category}`}
            className="self-center mt-5"
          >
            <Button color="gray" pill size="xs">
              {post && post.category}
            </Button>
          </Link>
          <div className="flex items-center justify-center gap-2 mt-5">
            {/* <span>{post && post.numberOfLikes}</span> */}
            <Button
              color="gray"
              pill
              size="xs"
              onClick={() => handleLike(post._id)}
              className={`text-gray-400 hover:text-red-500 ${
                currentUser &&
                post.likes.includes(currentUser._id) &&
                "!text-red-500"
              }`}
            >
              <FaHeart />
            </Button>
            <p className="text-gray-400">
              {post.numberOfLikes > 0 &&
                post.numberOfLikes +
                  " " +
                  (post.numberOfLikes === 1 ? "like" : "likes")}
            </p>
          </div>
        </div>
        <img
          src={post && post.image}
          alt={post && post.title}
          className="mt-10 p-3 max-h-[600px] w-3/4 mx-auto object-cover"
        />
        <div className="flex justify-between p-3 border-b border-slate-500 mx-auto w-full max-w-2xl text-xs">
          <span>{post && new Date(post.createdAt).toLocaleDateString()}</span>
          <span className="italic">
            {post && (post.content.length / 1000).toFixed(0)} mins read
          </span>
        </div>
        <div
          className="p-3 max-w-2xl mx-auto w-full post-content"
          dangerouslySetInnerHTML={{ __html: post && post.content }}
        ></div>
        <CommentSection postId={post._id} />
        <div className="flex flex-col justify-center items-center mb-5">
          <h1 className="text-xl mt-5">Recent articles</h1>
          <div className="flex flex-wrap gap-5 mt-5 justify-center">
            {recentPosts &&
              recentPosts.map((post) => (
                <PostCard key={post._id} post={post} />
              ))}
          </div>
        </div>
      </main>
      <div className="hidden  lg:block" >
        <div className=" w-1/4 right-3 bottom-7 flex  border border-blue-700 sm:mx-1 sm:rounded-xl fixed ">
          <div className="pt-52 bg-local sm:rounded-xl  bg-[url('https://i.pinimg.com/564x/8f/78/26/8f782623d719230a7bbf68170dd096f5.jpg')] bg-cover bg-no-repeat ">
            <h1 className=" px-3  text-4xl font-extrabold leading-none tracking-tight md:text-5xl lg:text-6xl bg-gradient-to-r from-blue-500 via-emerald-600 to-emerald-600 bg-clip-text text-transparent">
              Found an <br/> error.
              <br/>
              Help us correct it.
            </h1>
            <a
              href="https://discord.gg/kKAsgsUuXe"
              target="_blank"
            > <div    
            className={`relative inline-flex items-center justify-center mx-3 my-3 p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-blue-500   
            rounded-full shadow-md group`}
          >
            <span className={`absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-blue-500 group-hover:translate-x-0 ease`}>
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path>
              </svg>
            </span>
            <span className={`absolute flex items-center justify-center w-full h-full 
            text-blue-500
             transition-all duration-300 transform group-hover:translate-x-full ease`}>
              Correct it
            </span>
            <span className="relative invisible">Button Text</span>
          </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
