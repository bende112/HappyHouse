// eslint-disable-next-line no-unused-vars
import React from "react";
import Slider from "react-slick";
import Img1 from "../../assets/Img1.png";
import Img2 from "../../assets/Img2.png";
import ndole1 from "../../assets/ndole1.png";
import ndole2 from "../../assets/ndole2.png";
import maafe from "../../assets/maafe.png";



const MenuData = [
  {
    id: 1,
    name: "Shared Plata",
    price: "7500 cfa",
    img: Img1,
  },
  {
    id: 2,
    name: "Shared Plata2",
    price: "2500 cfa",
    img: Img2,
  },
  {
    id: 3,
    name: "Ndole Prawns",
    price: "2500 cfa",
    img: ndole1,
  },
  {
    id: 4,
    name: "Ndole Beef",
    price: "7500 cfa",
    img: ndole2,
  },
  {
    id: 5,
    name: "Beef Maafe",
    price: "2500 cfa",
    img: maafe,
  },
]

export default function OurMenu () {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    cssEese: "Linear",
    autoplaySpeed: 3000,
    pauseOnHover: true,
    pauseOnFocus: true,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
  };

  return (
    <div className="py-16 bg-primary text-white">
    <div className="container">
      { /* Header section */}
      <div className="mb-10 space-y-5">
        <h1 className="text-center text-4xl font-bold"> Our Menu</h1>
        <div className="text-center sm:max-w-sm mx-auto text-xs opacity-75">
          {"  "}
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Delectus, et porro dolor excepturi eos dicta sequi
          consectetur voluptatem neque iusto sunt iure
          iste officiis commodi quae culpa recusandae esse doloremque.
        </div>
      </div>

      { /* Slider section */}
      <div>
        <Slider {...settings}>
    {
      MenuData.map((menu)=> (
        <div className="my-16">
          <div className="flex flex-col gap-4 py-8 px-6 mx-4 rounded-xl">
            { /* Image content */}
            <div className="mb-3 flex justify-center">
              <img src={menu.img} alt=""
              className="rounded-full w-auto sm:max-w-[250px] md:max-w-[250px] shadow-1"/>
              </div>
            { /* Text  content */}
            <div className="flex flex-col items-center gap-4">
              <div className="space-y-3 text-center">
                <h1 className="text-xl">{menu.name}</h1>
                <p className="text-3xl font-semibold">
                  <span className="text-2xl font-cursive">only</span>
                  {menu.price}</p>
                <a href="#" className="underline">Buy Now
                </a>
              </div>
            </div>
          </div>
        </div>
      ))
    }
        </Slider>
      </div>
    </div>
    </div>
  );
}
