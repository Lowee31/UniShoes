import React, { useEffect, useRef, useState } from 'react';
import HomeContainter from './HomeContainter';
import { motion } from 'framer-motion';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'
import RowContainer from './RowContainer';
import { useStateValue } from '../context/StateProvider';
import MenuContainer from './MenuContainer';
import CartContainer from './CartContainer';
import Footer from './Footer';


const MainContainer = () => {
  const [{ shoesItem, cartShow }, dispatch] = useStateValue();
  const [scrollValue, setScrollValue] = useState(0);

  useEffect(() => { }, [scrollValue, cartShow]);

  return (
    <div className="w-full h-auto flex flex-col items-center justify-center">
      <HomeContainter />

      <section className="w-full my-6" id="Shoes">
        <div className="w-full flex items-center justify-between"  >
          <p className="text-2xl font-semibold capitalize text-headingColor relative
          before:absolute before:rounded-lg before:content before:w-32 before:h-1 before:-bottom-2
          before:left-0 before:bg-gradient-to-tr from-orange-400 to-orange-600 transition-all
          ease-in-out duration-100">
            Recently Added
          </p>

          <div className="hidden md:flex gap-3 items-center">
            <motion.div
              whileTap={{ scale: 0.75 }}
              className="w-8 h-8 rounded-lg bg-orange-300 hover:bg-orange-500 cursor-pointer 
              hover:shadow-lg flex items-center justify-center"
              onClick={() => setScrollValue(-200)}
            >
              <MdChevronLeft className="text-lg text-white" />
            </motion.div>
            <motion.div
              whileTap={{ scale: 0.75 }}
              className="w-8 h-8 rounded-lg bg-orange-300 hover:bg-orange-500 cursor-pointer 
              hover:shadow-lg flex items-center justify-center"
              onClick={() => setScrollValue(200)}
            >
              <MdChevronRight className="text-lg text-white" />
            </motion.div>
          </div>
        </div>
        <RowContainer
          scrollValue={scrollValue}
          flag={true}
          //where it filters the our flash deals
          data={shoesItem} />
      </section>

      <section className="w-full">
        <div className="w-full flex items-center justify-between">
          <p className="text-2xl font-semibold capitalize text-headingColor relative
          before:absolute before:rounded-lg before:content before:w-32 before:h-1 before:-bottom-2
          before:left-0 before:bg-gradient-to-tr from-orange-400 to-orange-600 transition-all
          ease-in-out duration-100">
            Other Sports
          </p>

          <div className="hidden md:flex gap-3 items-center">
            <motion.div
              whileTap={{ scale: 0.75 }}
              className="w-8 h-8 rounded-lg bg-orange-300 hover:bg-orange-500 cursor-pointer 
              hover:shadow-lg flex items-center justify-center"
              onClick={() => setScrollValue(-200)}
            >
              <MdChevronLeft className="text-lg text-white" />
            </motion.div>
            <motion.div
              whileTap={{ scale: 0.75 }}
              className="w-8 h-8 rounded-lg bg-orange-300 hover:bg-orange-500 cursor-pointer 
              hover:shadow-lg flex items-center justify-center"
              onClick={() => setScrollValue(200)}
            >
              <MdChevronRight className="text-lg text-white" />
            </motion.div>
          </div>
        </div>
        <RowContainer
          scrollValue={scrollValue}
          flag={true}
          //where it filters the our flash deals
          data={shoesItem?.filter((n) => n.category === "other sports")} />
      </section>

      <MenuContainer />

      <Footer />

      {cartShow && (
        <CartContainer />
      )}
    </div>
  );
};

export default MainContainer;