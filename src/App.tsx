import React, { useState } from "react";
import "./App.scss";
import { Main } from "./components/Main/Main";
import { Header } from "./components/Header/Header";
import { Outlet, Route, Routes } from "react-router-dom";
import { Modal } from "./components/Popap/Popap";
import { useAppSelector } from "./redux/hooks";

const Basket = React.lazy(() => import("./components/Basket/Basket"));
const NotFound = React.lazy(() => import("./components/NotFound/NotFound"));

type PropsType = {
  activeSortMenu: boolean;
  setActiveSortMenu: React.Dispatch<React.SetStateAction<boolean>>;
};

const Parent: React.FC<PropsType> = (props) => {
  const activePopapMode = useAppSelector(state => state.admin.activePopapMode)
 


  return (
    <div
      className="app"
      onClick={() => {
        if (props.activeSortMenu) props.setActiveSortMenu(false);
      }}>
      <Header></Header>
      <React.Suspense
        fallback={
          <div className="spinner__container">
            <b>Идёт загрузка...</b>
          </div>
        }>
        <Outlet />
      </React.Suspense>
      {activePopapMode ? <Modal/> : null}
    </div>
  );
};

const App: React.FC<{}> = () => {
  let [activeSortMenu, setActiveSortMenu] = useState(false);

  return (
    <Routes>
      <Route
        path="/*"
        element={<Parent activeSortMenu={activeSortMenu} setActiveSortMenu={setActiveSortMenu} />}>
        <Route
          path="items"
          element={
            <Main activeSortMenu={activeSortMenu} setActiveSortMenu={setActiveSortMenu} />
          }></Route>
        <Route path="basket" element={<Basket />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Route>
    </Routes>
  );
};

export default App;
