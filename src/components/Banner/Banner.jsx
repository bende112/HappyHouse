// eslint-disable-next-line no-unused-vars
import React from "react";
import beefStew from "../../assets/beefStew.png";

export default function Banner () {
  return (
    <>
    <div className="min-h-[650px] flex justify-center items-center py-12 sm:py-0">
    <div className="container">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        { /* Image section */}
        <div className="flex justify-center items-center">
          <img src={beefStew} alt="" className="max-w-[450px] w-full mx-auto shadow-1" />
        </div>

        { /* Text section */}
        <div className="flex flex-col justify-center gap-6 sm:pt-0">
          <p className="uppercase text-3xl font-semibold text-dark">About</p>
          <h1 className="text=5xl text-primary font-bold font-cursive2">Fresh Bowl</h1>
          <p className="text-sm text-gray-500 tracking-wide leading-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil labore
            voluptatum nesciunt laborum eius corporis dicta qui, asperiores.
            </p>
            <div>
              <button className="primary-btn">See Our Menu</button >
            </div>
        </div>

      </div>
    </div>
    </div>
    </>
  );
}

