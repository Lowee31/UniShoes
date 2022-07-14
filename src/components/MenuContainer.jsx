import React, { useState } from 'react'
import { IoFootstepsSharp } from 'react-icons/io5';
import { categories } from '../utils/data';
import { motion } from 'framer-motion';
import RowContainer from './RowContainer';
import { useStateValue } from '../context/StateProvider';

const MenuContainer = () => {

    const [filter, setFilter] = useState("adidas");

    const [{ shoesItem }, dispatch] = useStateValue()


    return <section className="w-full my-6" href="shoes">
        <div className="w-full flex flex-col items-center justify-center">
            <p
                className="text-2xl font-semibold capitalize text-headingColor relative
                before:absolute before:rounded-lg before:content before:w-16 before:h-1 before:-bottom-2
                before:left-0 before:bg-gradient-to-tr from-orange-400 to-orange-600 transition-all
                ease-in-out duration-100 mr-auto">
                Our Top & Hot Picks by Category
            </p>

            <div className="w-full flex items-center justify-start lg:justify-center gap-8 py-6 
            overflow-x-scroll scrollbar-none">
                {categories && categories.map(category => (
                    <motion.div
                        whileTap={{ scale: 0.75 }}
                        key={category.id}
                        className={`group ${filter === category.urlParmName ? "bg-cartNumBg" : "bg-white"
                            } w-24 min-w-[94px] h-28 cursor-pointer rounded-lg drop-shadow-xl
                            flex flex-col gap-3 items-center justify-center hover:bg-cartNumBg
                            `}
                        onClick={() => setFilter(category.urlParamName)}
                    >
                        <div
                            className={`w-10 h-10 rounded-full shadow-lg ${filter === category.urlParmName ? "bg-white" : "bg-cartNumBg"
                                } group-hover:bg-white flex items-center justify-center`}
                        >
                            <IoFootstepsSharp className={`${filter === category.urlParmName ? "text-textColor" : "text-white"
                                } group-hover:text-textColor text-lg`}
                            />
                        </div>
                        <p
                            className={`text-sm ${filter === category.urlParmName ? "text-white" : "text-textColor"
                                } group-hover:text-white text-center`}
                        >
                            {category.name}
                        </p>
                    </motion.div>
                ))}
            </div>

            <div className="w-full">
                <RowContainer
                    flag={false}
                    data={shoesItem?.filter((n) => n.category == filter)}
                />
            </div>

        </div>
    </section>;
};

export default MenuContainer;