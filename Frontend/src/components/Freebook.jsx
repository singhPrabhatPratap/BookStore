import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Card from "./Card";
import axios from "axios";

function Freebook() {
  let [data, setData] = useState([]);

  async function getData() {
    let result = await axios.get("http://localhost:4001/book");
    setData(result.data)
  }

  useEffect(() => {
    getData();
  }, []);
  let free = data.filter((book) => book.Category === "Free");
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto">
        <h1 className="font-bold">Free offered Courses</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, voluptas
          a. Minus tempore animi nam quod, voluptatum nostrum provident magni.
        </p>
        <div>
          <div className="slider-container">
            <Slider {...settings}>
              {free.map((book) => (
                <Card item={book} key={book.id} />
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
}
export default Freebook;
