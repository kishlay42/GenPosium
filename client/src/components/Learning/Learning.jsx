import React from "react";
import {Search,Cards,Button} from "../index"

const Learning = () => {
  return (
    <>
      <div>
        {/* <Search /> */}
        <div className=" my-1 w-3/4 mx-auto ">
          <div className="flex  my-6 flex-wrap">
            <div
              className="  border w-auto flex-1 flex flex-col px-2 py-1  rounded-xl border-green-50 bg-green-200
          -200 mx-1"
            >
              <div className="py-1 px-2 text-green-600 font-bold  text-2xl">
                <p>Trending Now </p>
              </div>
              <div className="flex">
                <Cards
                  title="React Js"
                  buttonText="Check Out"
                  image="https://i.pinimg.com/564x/aa/2c/1c/aa2c1cd2dbd1fb76be537fbca0350c08.jpg"
                  titleColor="text-green-600"
                borderColor="border-green-700"
                btnColor="bg-green-700"
                btnHoverColor="hover:bg-green-800"
                />
                <Cards
                  title="British English"
                  buttonText="Check Out"
                  image="https://i.pinimg.com/564x/ed/91/0c/ed910c234b6b91b8a2b04f3429b59707.jpg"
                  titleColor="text-green-600"
                borderColor="border-green-700"
                btnColor="bg-green-700"
                btnHoverColor="hover:bg-green-800"
                />
              </div>
            </div>
            <div className=" w-1/3 flex  border border-green-700 mx-1 rounded-xl">
              <div className="pt-52 bg-local rounded-xl  bg-[url('https://i.pinimg.com/736x/49/79/af/4979afd53d498b106381ad57cdca46bb.jpg')] bg-cover bg-no-repeat ">
                <h1 class=" px-3  text-4xl font-extrabold leading-none tracking-tight md:text-5xl lg:text-6xl text-green-600">
                  Add <br/> Courses For Others.
                </h1>
                <Button
                      text="Add Course"
                      hoverColor="bg-green-800"
                      btnTextColor="text-green-400"
                      btnBorderColor="border-green-200"
                    />
              </div>
            </div>
            {/* Newly added */}
            <div className="flex  mt-6">
              <Cards
                title="Fine Arts"
                buttonText="Check Out"
                image="https://i.pinimg.com/564x/c0/db/71/c0db71b8e1de9ceaf0f612ef3dec4081.jpg"
                titleColor="text-green-600"
                borderColor="border-green-700"
                btnColor="bg-green-700"
                btnHoverColor="hover:bg-green-800"
              />
              <Cards
                title="JavaScript 101"
                buttonText="Check Out"
                image="https://i.pinimg.com/564x/fd/42/af/fd42af8a3cacf086abbcf7bf874eb24d.jpg"
                titleColor="text-green-600"
                borderColor="border-green-700"
                btnColor="bg-green-700"
                btnHoverColor="hover:bg-green-800"
              />
              <Cards
                title="Public Speaking"
                buttonText="Check Out"
                image="https://i.pinimg.com/564x/a7/e6/ce/a7e6ce315d0db7b7bbf22a0adf1198d1.jpg"
                titleColor="text-green-600"
                borderColor="border-green-700"
                btnColor="bg-green-700"
                btnHoverColor="hover:bg-green-800"
              />
            </div>
            <div className="flex  flex-wrap my-8">
              <div className=" w-1/3 flex  border border-green-700 mx-1 rounded-xl">
                <div className=" pt-20 bg-local rounded-xl  bg-[url('https://i.pinimg.com/564x/85/ad/44/85ad4499e4d4949defcb09b8678ed506.jpg')] bg-cover bg-no-repeat ">
                  <div className=" ">
                    <h1 class=" px-3 text-4xl font-extrabold leading-none tracking-tight md:text-5xl lg:text-6xl text-gray-200  ">
                      Explore Most Popular Courses for Free.
                    </h1>
                    <Button
                      text="Explore"
                      hoverColor="bg-yellow-800"
                      btnTextColor="text-gray-50"
                      btnBorderColor="border-gray-50"
                    />
                  </div>
                </div>
              </div>
              {/* Most Liked */}
              <div
                className="  border w-auto flex-1 flex flex-col px-2 py-1  rounded-xl border-green-50 bg-green-200
          -200 mx-1"
              >
                <div className="py-1 px-2 text-green-500 font-bold  text-2xl">
                  <p>Most Popular </p>
                </div>
                <div className="flex">
                  <Cards
                    title="AI & Machine Learning"
                    buttonText="Check Out"
                    image="https://i.pinimg.com/564x/dd/13/bc/dd13bcc6005a9af92b310ee13e81d0b8.jpg"
                    titleColor="text-green-600"
                borderColor="border-green-700"
                btnColor="bg-green-700"
                btnHoverColor="hover:bg-green-800"
                  />
                  <Cards
                    title="DSA 101"
                    buttonText="Check Out"
                    image="https://studywithgenius.in/wp-content/uploads/2021/06/DSA-1024x792.png"
                    titleColor="text-green-600"
                borderColor="border-green-700"
                btnColor="bg-green-700"
                btnHoverColor="hover:bg-green-800"
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

export default Learning;
