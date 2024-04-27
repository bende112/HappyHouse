import React from "react";
import Slider from "react-slick";

const CommentData = [
  {
    id: 1,
    name: "Ndole Nku",
    text: " Lorem ipsum dolor sit ametLorem ipsum dolor sit amet ipsum dolor sit amet  consecteturconsectetur adipisicing eli",
    img: "https://picsum.photos/200/300",
  },
  {
    id: 2,
    name: "Bende",
    text: " Lorem ipsum dolor sit ametLorem ipsum dolor sit amet ipsum dolor sit amet  consecteturconsectetur adipisicing eli",
    img: "https://picsum.photos/101/101",
  },
  {
    id: 3,
    name: "Sami Diko",
    text: " Lorem ipsum dolor sit ametLorem ipsum dolor sit amet ipsum dolor sit amet  consecteturconsectetur adipisicing eli",
    img: "https://picsum.photos/102/102",
  },
  {
    id: 4,
    name: "Coco Aicha",
    text: " Lorem ipsum dolor sit ametLorem ipsum dolor sit amet ipsum dolor sit amet  consecteturconsectetur adipisicing eli",
    img: "https://picsum.photos/104/104",
  },{
    id: 5,
    name: "Big Nyash",
    text: " Lorem ipsum dolor sit ametLorem ipsum dolor sit amet ipsum dolor sit amet  consecteturconsectetur adipisicing eli",
    img: "https://picsum.photos/105/105",
  },
  {
    id: 6,
    name: "Ton ton belle",
    text: " Lorem ipsum dolor sit ametLorem ipsum dolor sit amet ipsum dolor sit amet  consecteturconsectetur adipisicing eli",
    img: "https://picsum.photos/200/300",
  },
]

export default function Comments () {
  const settings = {
      dots: true,
      arrows: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      cssEese: "Linear",
      autoplaySpeed: 2000,
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
    }
    return (
      <div className="py-10 mb-10">
        <div className="container">

          { /* Header section */}
          <div className="mb-10">
            <h1 className="text-center text-4xl font-bold font-cursive2">Comments

            </h1>
          </div>

          { /* Slider section */}
          <Slider {...settings}>
  {
    CommentData.map((item) => (
      <div className="my-16">
        <div className="flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl bg-primary/10 relative">
          <div className="mb-4">
            <img src={item.img} alt="" className="rounded-full w-20 h-20" />
          </div>
          { /* Content section */}
          <div className="flex flex-col items-center gap-4">
            <div className="space-y-3">
              <p className="text-xs text-gray-500">{item.text}</p>
              <h1 className="text-xl font-bold text-black/80 font-cursive2">{item.name}</h1>
            </div>
          </div>
          <p className="text-black/20 text-9xl font-serif absolute top-0 right-0">,,</p>
        </div>
      </div>

    ))
  }
          </Slider>

        </div>
      </div>
    );
  }


