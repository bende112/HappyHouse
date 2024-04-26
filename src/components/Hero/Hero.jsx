// eslint-disable-next-line no-unused-vars
import React from "react";
import beefSteak from "../../assets/beefSteak.png";
// import restaurantbar from "../../assets/restaurantbar.jpg";

export default function Hero () {
  return <>
  <div className="min-h-[550px] sm:min-h-[600px] bg-lightBlue flex justify-center items-center">
    <div className="container pb-8 sm:pb-0">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
      {/* text content section*/}
      <div className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center">
        <h1 className="text-8xl lg:text-[5rem]
        font-bold bg-clip-text text-transparent
        bg-gradient-to-b from-primary to-primary font-cursive">
          Welcome to Our fantastic page</h1>
        <span className="text-3xl font-sans text-dark">Bowl</span>
        <p className="text-sm text-dark font-sans">
          {" An Athentic fussion of Senegal, Cameroon and Best of the world cousin"}
        </p>
        <div>
          <button className="primary-btn">See Our Menu</button>
        </div>
      </div>
      {/* image section*/}
      <div className="min-h-[450px] flex justify-center items-center order-1 sm:order-2">
        <img src={beefSteak} className="max-w-[450px] w-full mx-auto sm:scale-125 shadow-1" />
        {/* <img src={restaurantbar} className="max-w-[450px] w-full mx-auto sm:scale-125 shadow-1" /> */}
        {/* <div className="bg-primary p-3 rounded-xl absolute top-10 left-10 hidden md:block text-white">
          <h1>Fresh Food</h1>
        </div> */}

      </div>
      </div>
    </div>
  </div>
  </>;
}


