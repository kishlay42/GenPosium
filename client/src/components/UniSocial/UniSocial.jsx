import React from "react";
import {Search,Cards,Button} from "../index"

const UniSocial = () => {
  return (
    <>
      <div>
        <Search />
        <div className=" my-1 w-3/4 mx-auto ">
          <div className="flex  my-6 flex-wrap">
            <div
              className="  border w-auto flex-1 flex flex-col px-2 py-1  rounded-xl border-orange-50 bg-orange-200
            -200 mx-1 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]" 
            >
              <div className="py-1 px-2 text-red-500 font-bold  text-2xl">
                <p>Trending Now </p>
              </div>
              <div className="flex">
                <Cards
                  title="Lovely Professional University"
                  buttonText="Check Out"
                  image="https://images.static-collegedunia.com/public/college_data/images/campusimage/149543429627.jpg"
                  toLink="/uniInfo"
                />
                <Cards
                  title="IIT-Madras"
                  buttonText="Check Out"
                  image="https://www.financialexpress.com/wp-content/uploads/2022/04/IIT-Madras-Logo.jpg?resize=400"
                />
              </div>
            </div>
            <div className=" w-1/3 flex  border border-red-700 mx-1 rounded-xl">
              <div className="pt-52 bg-local rounded-xl  bg-[url('https://i.pinimg.com/564x/ee/fb/4c/eefb4c411e380b70cd31234aa16d9b82.jpg')] bg-cover bg-no-repeat ">
                <h1 class=" px-3 text-4xl font-extrabold leading-none tracking-tight md:text-5xl lg:text-6xl text-orange-700">
                  Help Us Connect Universities.
                </h1>
                <Button text="Contribute" />
              </div>
            </div>
            {/* Newly added */}
            <div className="flex  mt-6">
              <Cards
                title="Thapar University"
                buttonText="Check Out"
                image="https://static.janbharattimes.com/wp-content/uploads/2023/05/Thapar-University-.jpg"
              />
              <Cards
                title="Chandigarh University"
                buttonText="Check Out"
                image="https://images.news18.com/ibnlive/uploads/2022/06/chandigarh-univ-165581419816x9.jpg"
              />
              <Cards
                title="IIT-Delhi"
                buttonText="Check Out"
                image="https://home.iitd.ac.in/images/for-faculty/camp8.jpg"
              />
            </div>
            <div className="flex  flex-wrap my-8">
              <div className=" w-1/3 flex  border border-red-700 mx-1 rounded-xl">
                <div className=" pt-40 bg-local rounded-xl  bg-[url('https://i.pinimg.com/736x/f3/13/19/f3131994c82fcfe30d9d5b46557f5966.jpg')] bg-cover bg-no-repeat ">
                  <div className="">
                    <h1 class=" px-3 text-4xl font-extrabold leading-none tracking-tight md:text-5xl lg:text-6xl text-gray-100  ">
                      Explore your Favourite Universities.
                    </h1>
                    <Button text="Explore"
                    hoverColor="bg-red-300"
                    btnTextColor="text-gray-50"
                    btnBorderColor="border-gray-50"
                    />
                  </div>
                </div>
              </div>
              {/* Most Liked */}
              <div
                className="  border w-auto flex-1 flex flex-col px-2 py-1  rounded-xl border-orange-50 bg-red-200
            -200 mx-1"
              >
                <div className="py-1 px-2 text-red-500 font-bold  text-2xl">
                  <p>Most liked </p>
                </div>
                <div className="flex">
                  <Cards
                    title="IIT-Guwahati"
                    buttonText="Check Out"
                    image="https://i0.wp.com/nenow.in/wp-content/uploads/2022/09/IIT-Guwahati-Main-Gate.jpg?w=2500&ssl=1"
                  />
                  <Cards
                    title="IIT-Bombay"
                    buttonText="Check Out"
                    image="https://www.findmydrona.com/uploads/gallery/2866/iit-bombay-mumbai_1645857072.jpg"
                  />
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
