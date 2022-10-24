import React, { useEffect, useState } from "react";
import classes from "./Main.module.scss";
import { Menu } from "./Menu/Menu";
import { SortMenu } from "./SortMenu/SortMenu";
import { Pizzas } from "./Pizzas/Pizzas";
import { sortItemUrlArr, sortOrderArr } from "./../../types/types";
import { useNavigate } from "react-router-dom";
import { Paginate } from "./Paginate/Paginate";
import { useAppSelector } from "../../redux/hooks";
import qs from "qs";
import { useAppDispatch } from "./../../redux/hooks";
import {
  changeCategory,
  changeSort,
  changeDescendingSort,
  setNumberOnPaginationButton,
} from "../../redux/slice/filterSlice";
import { fetchPizzas } from "../../redux/slice/pizzasSlice";
import { ErrorComponent } from "./../Error/ErrorComponent";

type PropsType = {
  activeSortMenu: boolean;
  setActiveSortMenu: React.Dispatch<React.SetStateAction<boolean>>;
};

export const Main: React.FC<PropsType> = (props) => {
  const activeCategory = useAppSelector((state) => state.filter.category);
  const activeSort = useAppSelector((state) => state.filter.sortType);
  const activeDescendingSort = useAppSelector((state) => state.filter.descendingSortType);
  const numberOnPaginationButton = useAppSelector((state) => state.filter.numberOnPaginationButton);

  const searchText = useAppSelector((state) => state.filter.searchValue);
  const firstMounted = useAppSelector((state) => state.filter.mounted);
  const status = useAppSelector((state) => state.pizzas.status);

  let pizzas = useAppSelector((state) =>
    state.pizzas.items.filter((item) => item.title.toLowerCase().includes(searchText))
  );

  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (firstMounted) {
      const categoryString = activeCategory ? "?category=" + activeCategory + "&" : "?";
      const sortByString = activeSort ? "sortBy=" + activeSort : "";
      const descendingSortByString = activeDescendingSort ? "&order=" + activeDescendingSort : "";
      const activePage = `&page=${numberOnPaginationButton}`;

      const parameters = categoryString + sortByString + descendingSortByString;
      const parameters2 = categoryString + sortByString + descendingSortByString + activePage;

      navigate(`${parameters2}`);

      dispatch(fetchPizzas(parameters));
    }
  }, [activeCategory, activeSort, activeDescendingSort, firstMounted, numberOnPaginationButton]);

  useEffect(() => {
    let queryParams = qs.parse(window.location.search.substring(1));

    if (!queryParams.category) queryParams.category = "0";
    if (!sortItemUrlArr.some((item) => item === queryParams.sortBy)) queryParams.sortBy = "rating";
    if (!sortOrderArr.some((item) => item === queryParams.order)) queryParams.order = "desc";
    if (!queryParams.page) queryParams.page = "1";

    dispatch(changeCategory(Number(queryParams.category)));
    dispatch(changeSort(queryParams.sortBy as typeof sortItemUrlArr[number]));
    dispatch(changeDescendingSort(queryParams.order as typeof sortOrderArr[number]));
    dispatch(setNumberOnPaginationButton(Number(queryParams.page)));
  }, []);

  return (
    <main className={classes.main}>
      <div className={classes.container}>
        {status ? (
          <>
            <div className={classes.menuContainer}>
              <Menu />
              <SortMenu {...props} />
            </div>
            <Pizzas pizzasArr={pizzas} />
            <Paginate pizzasArr={pizzas} />
          </>
        ) : (
          <ErrorComponent />
        )}
      </div>
    </main>
  );
};
