import LotusCanvas from "../canvas/Lotus";
import LotusMobileCanvas from "../canvas/LotusMobile";
import FlipCard from "../Usables/FlipCard";
export default function Home() {

  return (
    <div>
      <div className="flex flex-col  lg:gap-12 pb-28 px-3 max-w-6xl mx-auto  ">
        <div className="flex flex-row  items-center">
          <div>
            <h1 className="animate-x text-6xl font-bold lg:text-6xl">Welcome to</h1>
            <h1 className="animate-x  text-6xl font-bold lg:text-7xl bg-gradient-to-r from-violet-600 to-pink-600 bg-clip-text text-transparent">
              GenPosium
            </h1>
          </div>
          <div className="animate-y hidden md:block lg:block">
            <LotusCanvas />
          </div>
        </div>
        <div className="animate-y lg:hidden md:hidden block">
          <LotusMobileCanvas />
        </div>
      </div>
      <div className="animate-y mb-16"> <FlipCard /> </div>
      
      
    </div>
  );
}
