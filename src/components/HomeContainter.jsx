import React from 'react'
import { actionType } from '../context/reducer';
import { useStateValue } from '../context/StateProvider';
import Delivery from '../img/delivery.png';
import HeroBg from '../img/heroBg.png';
import { heroData } from '../utils/data';

const HomeContainter = () => {

  const [{ cartShow }, dispatch] = useStateValue();

  const showCart = () => {
    dispatch({
      type: actionType.SET_CART_SHOW,
      cartShow: !cartShow,
    });
  };

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full">
      <div className=" py-2 flex-1 flex flex-col items-start justify-center gap-6">
        <div className="flex items-center gap-2 justify-center bg bg-orange-100 px-4 py-1 rounded-full">
          <p className="text-base text-orange-500 font-semibold">
            Delivery
          </p>
          <div className="w-7 h-8 bg-white rounded-full overflow-hidden drop-shadow-xl">
            <img
              src={Delivery}
              classname="w-full h-full object-contain"
              alt="delivery"
            />
          </div>
        </div>

        <p className="text-[2.5rem] lg:text-[4.5rem] font-bold tracking-wide text-headingColor">
          Genuine Sports Shoe
          <span className="text-orange-600 text-[3rem] md:text-[4.5rem]"> At low cost</span>
        </p>

        <p className="text-base text-textColor text-center md:text-left md:w-[80%]">
          A curated collection of shoes from some of the world's most popular sports companies is
          also available online as a service to the company's customers, Offering a wide variety of well-known sports
          brands in the latest and trendiest styles
        </p>

        <button type="button"
          className="bg-gradient-to-br from-orange-400 to-orange-500 w-full md:w-auto
        px-4 py-2 rounded-lg hover:shadow-lg transition-all ease-in-out duration-100"
          onClick={showCart}
        >
          Order now!
        </button>
      </div>
      <div className="py-2 flex-1 flex items-center relative">
        <img src={HeroBg}
          className="ml-auto h-420 w-full lg:w-auto lg:h-650"
          alt="hero-bg"
        />

        <div className="w-full h-420 absolute top-28 left-0 flex item-center justify-center lg:px-32 py-4 gap-4 flex-wrap">
          {heroData && heroData.map(n => (
            <div
              key={n.id}
              className="lg:w-190 p-4 bg-cardOverlay backdrop-blur-md rounded-3xl flex flex-col 
                  items-center justify-center drop-shadow-lg"
            >
              <img
                src={n.imageSrc}
                className="w-20 lg:w-40 -mt-12 lg:-mt-20"
                alt="adid1"
              />

              <p className="text-base lg:text-xl font-semibold text-textColor mt-0 lg:mt-4">
                {n.name}
              </p>

              <p className="text-[10px] lg:text-sm text-lighttextGray font-semibold my-1 lg:my-3">
                {n.decp}
              </p>

              <p className="text-md font-semibold text-headingColor">
                <span className="text-xs text-red-600">₱ </span>{n.price}.00
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeContainter;
