import { Image, Carousel as AntCarousel } from "antd";

import carousel_img_1 from "../../../assets/images/carousel_1.jpg";
import carousel_img_2 from "../../../assets/images/carousel_2.jpg";
import carousel_img_3 from "../../../assets/images/carousel_3.jpg";

const CarouselMain: React.FC = () => {
  return (
    <AntCarousel autoplay>
      <div className="h-[240px]">
        <img
          className=" object-cover h-full w-full"
          src={carousel_img_1}
          alt=""
        />
      </div>
      <div className="h-[240px]">
        <img
          className=" object-cover h-full w-full"
          src={carousel_img_2}
          alt=""
        />
      </div>
      <div className="h-[240px]">
        <img
          className=" object-cover h-full w-full"
          src={carousel_img_3}
          alt=""
        />
      </div>
    </AntCarousel>
  );
};

export default CarouselMain;
