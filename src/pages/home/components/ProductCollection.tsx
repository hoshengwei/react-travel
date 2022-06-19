type TourPriceProps = {
  title: string;
  price: string;
  imageSrc: any[];
};

const TourPrice: React.FC<TourPriceProps> = ({ title, price, imageSrc }) => {
  const imgSrc: string = imageSrc[0].url;
  return (
    <div>
      <img src={imgSrc} alt="" />
      <p className="text-base font-semibold text-gray-500">
        {title.slice(0, 25)}
        <span className="text-red-600">$ {price}起</span>
      </p>
    </div>
  );
};

type ProductCollectionProps = {
  title: string;
  titleColor: string;
  sideImage: string;
  products: any[];
};

const ProductCollection: React.FC<ProductCollectionProps> = ({
  title,
  titleColor,
  sideImage,
  products,
}) => {
  return (
    <div className="w-[81%] mx-auto px-5 bg-white my-10 pb-5">
      <div className="flex items-center py-5">
        <div className="border-t border-gray-200 w-1/12"></div>
        <h2 className={`text-2xl font-bold px-5 ${titleColor}`}>{title}</h2>
        <div className="border-t border-gray-200 flex-1"></div>
      </div>
      <div className="flex items-start h-full">
        <div className="w-2/12">
          <img src={sideImage} alt="" />
        </div>
        <div className="flex-1 grid grid-cols-4 gap-2 ml-1">
          <div className="row-span-2 col-span-2">
            <TourPrice
              title={products[0].title}
              price={products[0].price}
              imageSrc={products[0].touristRoutePictures}
            />
          </div>
          <div>
            <TourPrice
              title={products[1].title}
              price={products[1].price}
              imageSrc={products[1].touristRoutePictures}
            />
          </div>
          <div>
            <TourPrice
              title={products[2].title}
              price={products[2].price}
              imageSrc={products[2].touristRoutePictures}
            />
          </div>
          <div>
            <TourPrice
              title={products[3].title}
              price={products[3].price}
              imageSrc={products[3].touristRoutePictures}
            />
          </div>
          <div>
            <TourPrice
              title={products[4].title}
              price={products[4].price}
              imageSrc={products[4].touristRoutePictures}
            />
          </div>
          <div>
            <TourPrice
              title={products[5].title}
              price={products[5].price}
              imageSrc={products[5].touristRoutePictures}
            />
          </div>
          <div>
            <TourPrice
              title={products[6].title}
              price={products[6].price}
              imageSrc={products[6].touristRoutePictures}
            />
          </div>
          <div>
            <TourPrice
              title={products[7].title}
              price={products[7].price}
              imageSrc={products[7].touristRoutePictures}
            />
          </div>
          <div>
            <TourPrice
              title={products[8].title}
              price={products[8].price}
              imageSrc={products[8].touristRoutePictures}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCollection;
