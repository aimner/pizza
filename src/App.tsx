import React, { useState } from "react";
import "./App.scss";
import { Main } from "./components/Main/Main";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Basket } from "./components/Basket/Basket";
import { NotFound } from "./components/NotFound/NotFound";

export const Context = React.createContext(123);

function App() {
  let [activeSortMenu, setActiveSortMenu] = useState(false);
  return (
    <Context.Provider value={123}>
      <BrowserRouter>
        <div
          className="app"
          onClick={() => {
            if (activeSortMenu) setActiveSortMenu(false);
          }}>
          <Header></Header>
          <Routes>
            <Route
              path="/items"
              element={
                <Main activeSortMenu={activeSortMenu} setActiveSortMenu={setActiveSortMenu} />
              }></Route>
            {/* <Route
              path=""
              element={
                <Main activeSortMenu={activeSortMenu} setActiveSortMenu={setActiveSortMenu} />
              }></Route> */}
            <Route path="/basket" element={<Basket />}></Route>
            <Route path="*" element={<NotFound />}></Route>
          </Routes>
          {/* <Footer></Footer> */}
        </div>
      </BrowserRouter>
    </Context.Provider>
  );
}

export default App;
