import React from "react";
// import ndole2 from "../../assets/ndole2.png";
import restaurantbar from "../../assets/restaurantbar.jpg";


const backgroundStyle = {
  backgroundImage: `url(${restaurantbar})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "contain",
  backgroundPosition: "right",
  height: "100%",
  width: "100%",

}
export default function Newsletter () {
  return (
    <>
    <div className="bg-primary text-white" style={backgroundStyle}>
      <div className="container bg-black/60 sm:bg-transparent py-16">
        <div className="grid grid-cols-1 lg:grid-cols items-center gap-8">
          <div className="space-y-4 text-center sm:text-left">
            { /* text content */}
            <h1 className="text-2xl sm:text-3xl font-semibold text-white/90">
              {" "}
              Get Started</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              .</p>
          </div>
          { /* Input content */}
          <div className="text-center sm:text-left">
            <input type="" placeholder="Enter your Email"
            className="max-w-[400] px-4 py-2 rounded-l-md
            ring-0 focus:outline-none text-dark" />
            <button className="bg-white text-primary px-4 py-2 rounded-r-md">
              {" "}
              <span className="text-sm uppercase font-semibold">
                Get Started
              </span> {" "}
            </button>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
