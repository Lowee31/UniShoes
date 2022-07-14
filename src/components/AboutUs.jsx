import React from 'react'
import Footer from './Footer';
import CartContainer from './CartContainer';
import { Link } from "react-router-dom";
import { useStateValue } from '../context/StateProvider';
import { actionType } from '../context/reducer';
import UniShoes from '../img/UniShoes.png';
import Low from '../img/1.png';
import Val from '../img/2.png';
import Prom from '../img/prom.png';
import HomeContainter from './HomeContainter';

const AboutUs = () => {
    {/* tinary ko */ }
    const [{ cartShow }, dispatch] = useStateValue();
    const showCart = () => {
        dispatch({
            type: actionType.SET_CART_SHOW,
            cartShow: !cartShow,
        });
    };

    return (

        <div className="w-full h-auto flex flex-col items-center justify-center">

            <p className="text-[2.5rem] lg:text-[3.5rem] font-bold items-center tracking-wide text-headingColor">
                Don't stop Go Accelerate
                <span className="text-orange-600 text-[2.5rem] items-center md:text-[3.5rem]"> Choose UNISHOES</span>
            </p>

            <p className="text-base text-textColor text-center md:text-left md:w-[auto] gap-2">
                People have been more interested in sports as a form of pleasure and amusement in recent decades.
                As a result, sports materials and equipment, particularly shoes used in numerous sports, are in great demand.
                There’s a lot of a big company that leads the shoe industry. So this clearly states that they are Giants in the
                athletic footwear industry and are highly competing with each other.
                Unishoes Company is a shoe reselling company introducing themselves in the market.
                The company is solely dedicated to serving the trend with their desirable taste within their pocket ranges.
                Unishoes are created and derived to serve ready to wear sports shoes for men and women.

            </p>
            <button type="button"
                className="bg-gradient-to-br from-orange-400 to-orange-500 w-full md:w-auto
                            px-8 py-2 rounded-lg hover:shadow-lg transition-all ease-in-out duration-100 gap-6"
            >
                <Link to={'/HomeContainer'}>Order now!</Link>
            </button>

            <section className="grid grid-cols-1 md:grid-cols-1 gap-2 w-full items-center " id="AboutUs">
                <div className=" py-2 flex flex-col items-center justify-center gap-8 cursor-pointer ">
                    <img
                        src={UniShoes}
                        classname="w-190 h-190"
                        alt="Infographics"
                    />
                    <img
                        src={Prom}
                        classname="w-250 h-250 cursor-pointer"
                        alt="Promotions"
                    />
                    <img
                        src={Low}
                        classname="w-50 h-80 cursor-pointer"
                        alt="Louie"
                    />
                    <img
                        src={Val}
                        classname="w-420 h-420 cursor-pointer"
                        alt="Val Jay"
                    />

                </div>
            </section >

            <Footer />
            {/* tinary ko */}
            {
                cartShow && (
                    <CartContainer />
                )
            }
        </div >

    );

}

export default AboutUs