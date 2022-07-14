import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { CreateContainer, Header, MainContainer } from "./components";
import { useStateValue } from "./context/StateProvider";
import { getAllShoesItem } from "./utils/firebaseFunctions";
import { actionType } from "./context/reducer";
import AboutUs from "./components/AboutUs";

const App = () => {
  const [{ shoesItem }, dispatch] = useStateValue();

  const fetchData = async () => {
    await getAllShoesItem().then(data => {
      dispatch({
        type: actionType.SET_SHOES_ITEM,
        shoesItem: data
      })
    });
    console.log(shoesItem)
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <AnimatePresence exitBeforeEnter>
      <div className="w-screen h-auto flex flex-col bg-primary">
        <Header />

        <main className="mt-14 md:mt-20 px-4 md:px-16 py-4 w-full">
          <Routes>
            <Route path="/*" element={<MainContainer />} />
            <Route path="/createItem" element={<CreateContainer />} />
            <Route path="/AboutUs" element={<AboutUs />} />
          </Routes>
        </main>
      </div>
    </AnimatePresence>
  );
};

export default App;


