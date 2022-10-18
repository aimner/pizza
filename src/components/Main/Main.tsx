import React, { useEffect, useState } from "react";
import classes from "./Main.module.scss";
import { Menu } from "./Menu/Menu";
import { SortMenu } from "./SortMenu/SortMenu";
import { Pizzas } from "./Pizzas/Pizzas";
import { PizzaType, sortItemUrlArr, sortOrderArr } from "./../../types/types";
import { useNavigate } from "react-router-dom";
import { Paginate } from "./Paginate/Paginate";
import { useAppSelector } from "../../redux/hooks";
import qs from "qs";
import { useAppDispatch } from "./../../redux/hooks";
import { changeCategory, changeSort, changeDescendingSort } from "../../redux/slice/filterSlice";

type PropsType = {
  activeSortMenu: boolean;
  setActiveSortMenu: React.Dispatch<React.SetStateAction<boolean>>;
};

export const Main: React.FunctionComponent<PropsType> = (props) => {
  let [pizzasArr, setPizzasArr] = useState<PizzaType[]>([]);
  let [loader, setLoader] = useState(true);

  let [activeButton, setActiveButton] = useState(1);

  const activeCategory = useAppSelector((state) => state.filter.category);
  const activeSort = useAppSelector((state) => state.filter.sortType);
  const activeDescendingSort = useAppSelector((state) => state.filter.descendingSortType);
  const searchText = useAppSelector((state) => state.filter.searchValue);
  const firstMounted = useAppSelector((state) => state.filter.mounted);

  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (firstMounted) {

      setLoader(true);
      const categoryString = activeCategory ? "?category=" + activeCategory + "&" : "?";
      const sortByString = activeSort ? "sortBy=" + activeSort : "";
      const descendingSortByString = activeDescendingSort ? "&order=" + activeDescendingSort : "";
      const activePage = `&page=${activeButton}`;

      const parameters = categoryString + sortByString + descendingSortByString + activePage;

      navigate(`items${parameters}`);

      fetch(`https://633c4943f11701a65f734ada.mockapi.io/items${parameters}&limit=4`, {
        method: "GET",
      })
        .then((value) => value.json())
        .then((value) => {
          setPizzasArr([...value]);
          setLoader(false);
        });
    }
  }, [activeCategory, activeSort, activeDescendingSort, activeButton, firstMounted]);

  useEffect(() => {
    let queryParams = qs.parse(window.location.search.substring(1));

    if (!queryParams.category) queryParams.category = "0";
    if (!sortItemUrlArr.some((item) => item === queryParams.sortBy)) queryParams.sortBy = "rating";
    if (!sortOrderArr.some((item) => item === queryParams.order)) queryParams.order = "desc";

    dispatch(changeCategory(Number(queryParams.category)));
    dispatch(changeSort(queryParams.sortBy as typeof sortItemUrlArr[number]));
    dispatch(changeDescendingSort(queryParams.order as typeof sortOrderArr[number]));
  }, []);

  return (
    <main className={classes.main}>
      <div className={classes.container}>
        <div className={classes.menuContainer}>
          <Menu />
          <SortMenu {...props} />
        </div>
        <Pizzas
          pizzasArr={pizzasArr}
          setPizzasArr={setPizzasArr}
          loader={loader}
          setLoader={setLoader}
          searchText={searchText}
        />
        <Paginate
          activeButton={activeButton}
          setActiveButton={setActiveButton}
          pizzasArr={pizzasArr}
        />
      </div>
    </main>
  );
};
