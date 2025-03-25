import { Link } from "react-router-dom";

const FlipCard = () => {
  return (
    <>
      <div className="flex py-5 w-3/4 mx-auto rounded-xl  items-center justify-center bg-pink-600 ">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
            <div className=" h-96 w-72">
              <img
                className=" h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                src="./images/ppl1.webp"
                alt=""
                loading="lazy"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
            <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
              <h1 className="font-dmserif text-3xl font-bold text-white">
                Connect
              </h1>
              <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              Unite and engage with India’s students via <br /> dynamic social media outreach and make <br/>new life long <br /> connections              </p>
              <Link to="/uniSocial">
                <button className="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">
                  UniSocial
                </button>
              </Link>
            </div>
          </div>
          <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
            <div className="h-96 w-72">
              <img
                className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                src="./images/ppl2.webp"
                alt=""
                loading="lazy"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
            <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
              <h1 className="font-dmserif text-3xl font-bold text-white">
                Contest
              </h1>
              <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              Spark nationwide competition and camaraderie with India’s vibrant contest scene through interactive social media campaigns.
              </p>
              <Link to="/contests">
                <button className="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">
                  Contests
                </button>
              </Link>
            </div>
          </div>
          <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
            <div className="h-96 w-72">
              <img
                className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                src="./images/ppl3.webp"
                alt=""
                loading="lazy"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
            <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
              <h1 className="font-dmserif text-3xl font-bold text-white">
                Learn
              </h1>
              <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              Accelerate learning  by tapping into the rich tapestry of open-source resources through collaborative online platforms.
              </p>
              <Link to="/learning">
                <button className="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">
                  Learning
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FlipCard;
