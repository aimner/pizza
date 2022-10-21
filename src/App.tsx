import React, { useState } from "react";
import "./App.scss";
import { Main } from "./components/Main/Main";
import { Header } from "./components/Header/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import { Basket } from "./components/Basket/Basket";
import { NotFound } from "./components/NotFound/NotFound";


const Basket = React.lazy(() => import("./components/Basket/Basket"));

function App() {
  let [activeSortMenu, setActiveSortMenu] = useState(false);



  return (
    <BrowserRouter>
      <div
        className="app"
        onClick={() => {
          if (activeSortMenu) setActiveSortMenu(false);
        }}>
        <Header></Header>
        <React.Suspense fallback={<div>ЗАГРУЗКА</div>}>
          <Routes>
            <Route
              path="/pizza/*"
              element={
                <Main activeSortMenu={activeSortMenu} setActiveSortMenu={setActiveSortMenu} />
              }></Route>

            <Route path="/basket" element={<Basket />}></Route>

            <Route path="*" element={<NotFound />}></Route>
          </Routes>
        </React.Suspense>
      </div>
    </BrowserRouter>
  );
}

export default App;
