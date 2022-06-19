import SideBar from "./components/SideBar";
import CarouselMain from "./components/CarouselMain";
import ProductCollection from "./components/ProductCollection";

import { productList1, productList2, productList3 } from "../../mock/mockup";

import sideImage1 from "../../assets/images/sider_2019_12-09.png";
import sideImage2 from "../../assets/images/sider_2019_02-04.png";
import sideImage3 from "../../assets/images/sider_2019_02-04-2.png";

const Home: React.FC = () => {
  return (
    <div className="bg-gray-100 pb-5">
      {/* 首頁導航 */}
      <div id="nav-carousel" className="flex h-full w-10/12 mx-auto">
        <div className=" flex-auto h-full p-5 ">
          <SideBar />
        </div>
        <div className="w-[1000px] h-[240px] p-5">
          <CarouselMain />
        </div>
      </div>
      {/* 產品推薦 */}
      <ProductCollection
        title={"爆款推薦"}
        titleColor="text-orange-400"
        sideImage={sideImage1}
        products={productList1}
      />
      <ProductCollection
        title={"新品上市"}
        titleColor="text-purple-400"
        sideImage={sideImage2}
        products={productList2}
      />
      <ProductCollection
        title={"國內遊推薦"}
        titleColor="text-green-400"
        sideImage={sideImage3}
        products={productList3}
      />
    </div>
  );
};

export default Home;
