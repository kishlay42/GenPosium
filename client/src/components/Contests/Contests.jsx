import React from "react";
import {Search,Cards,Button} from "../index"

const Contests = () => {
  return (
    <>
    <div>
      {/* <Search /> */}
      <div className=" my-1 w-3/4 mx-auto ">
        <div className="flex  my-6 flex-wrap">
          <div
            className="  border w-auto flex-1 flex flex-col px-2 py-1  rounded-xl border-orange-50 bg-blue-200
          -200 mx-1"
          >
            <div className="py-1 px-2 text-blue-600 font-bold  text-2xl">
              <p>Trending Now </p>
            </div>
            <div className="flex">
              <Cards
                title="Hack_17 Athon"
                buttonText="Check Out"
                image="https://i.pinimg.com/564x/b7/eb/01/b7eb017b13c20e241fcfb190cbec18a4.jpg"
                titleColor="text-blue-600"
                borderColor="border-blue-700"
                btnColor="bg-blue-700"
                btnHoverColor="hover:bg-blue-800"
              />
              <Cards
                title="Natyachandra 2024"
                buttonText="Check Out"
                image="https://i.pinimg.com/564x/56/2a/79/562a79c466467a5bbe061581405741ff.jpg"
                titleColor="text-blue-600"
                borderColor="border-blue-700"
                btnColor="bg-blue-700"
                btnHoverColor="hover:bg-blue-800"              />
            </div>
          </div>
          <div className=" w-1/3 flex  border border-blue-700 mx-1 rounded-xl">
            <div className="pt-52 bg-local rounded-xl  bg-[url('https://i.pinimg.com/564x/15/0a/cd/150acdfa1b127ff36c33448a4e0cb3b4.jpg')] bg-cover  bg-no-repeat ">
              <h1 class=" px-3 text-4xl font-extrabold leading-none tracking-tight md:text-5xl lg:text-6xl text-blue-500">
                Advertise Your Contest.
              </h1>
              <Button text="Add Contest"
                  hoverColor="bg-blue-500"
                  btnTextColor="text-blue-600"
                  btnBorderColor="border-blue-600"
                  />
            </div>
          </div>
          {/* Newly added */}
          <div className="flex  mt-6">
            <Cards
              title="Indian Art Season-12"
              buttonText="Check Out"
              image="https://artcontest.in/wp-content/uploads/2021/03/PicsArt_03-03-04.24.07.png"
              titleColor="text-blue-600"
              borderColor="border-blue-700"
              btnColor="bg-blue-700"
              btnHoverColor="hover:bg-blue-800"
            />
            <Cards
              title="Hackaton 2024"
              buttonText="Check Out"
              image="https://i.pinimg.com/564x/6f/b4/49/6fb449c1b545bd3f9384dc82dc75b1b3.jpg"
              titleColor="text-blue-600"
              borderColor="border-blue-700"
              btnColor="bg-blue-700"
              btnHoverColor="hover:bg-blue-800"
            />
            <Cards
              title="Speak India 2024"
              buttonText="Check Out"
              image="https://www.speakforindia.in/images/logo.png"
              titleColor="text-blue-600"
              borderColor="border-blue-700"
              btnColor="bg-blue-700"
              btnHoverColor="hover:bg-blue-800"
            />
          </div>
          <div className="flex  flex-wrap my-8">
            <div className=" w-1/3 flex  border border-blue-700 mx-1 rounded-xl">
              <div className=" pt-40 bg-local rounded-xl  bg-[url('https://i.pinimg.com/564x/c3/40/ae/c340ae7b05e65a4e29d916b09f5f6f42.jpg')] bg-cover bg-no-repeat ">
                <div className=" ">
                  <h1 class=" px-3 text-4xl font-extrabold leading-none tracking-tight md:text-5xl lg:text-6xl text-white  ">
                    Explore More Upcoming Contests.
                  </h1>
                  <Button text="Explore"
                  hoverColor="bg-black"
                  btnTextColor="text-white"
                  btnBorderColor="border-white"
                  />
                </div>
              </div>
            </div>
            {/* Most Liked */}
            <div
              className="  border w-auto flex-1 flex flex-col px-2 py-1  rounded-xl border-blue-50 bg-blue-200
          -200 mx-1"
            >
              <div className="py-1 px-2 text-blue-500 font-bold  text-2xl">
                <p>Upcoming Contests </p>
              </div>
              <div className="flex">
                <Cards
                  title="LPU One-India 2024"
                  buttonText="Check Out"
                  image="https://i.pinimg.com/564x/67/82/8a/67828acfc500260b147194c197b7ecea.jpg"
                  titleColor="text-blue-600"
                  borderColor="border-blue-700"
                  btnColor="bg-blue-700"
                  btnHoverColor="hover:bg-blue-800"
                />
                <Cards
                  title="SIH 2024"
                  buttonText="Check Out"
                  image="https://th.bing.com/th/id/OIP.TyoocYImMfbLurPQ3uyrXAAAAA?w=284&h=300&rs=1&pid=ImgDetMain"
                  titleColor="text-blue-600"
                  borderColor="border-blue-700"
                  btnColor="bg-blue-700"
                  btnHoverColor="hover:bg-blue-800"
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

export default Contests;
