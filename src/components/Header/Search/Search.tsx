import React, { useCallback, useState } from "react";
import classes from "./Search.module.scss";
import close from "../../../assets/img/Header/close.svg";
import debounce from "lodash.debounce";
import { changeSearchValue } from "../../../redux/slice/filterSlice";
import { useAppDispatch } from "./../../../redux/hooks";



export const Search: React.FunctionComponent<{}> = (props) => {
  const [searchValue, setSearchValue] = useState("");

  const onSearch = useCallback(
    debounce((item: string) => {
      dispatch(changeSearchValue(item));
      
    }, 500),
    []
  );

  const allEvents = (item: string) => {
    setSearchValue(item);
    onSearch(item);
  };

  const dispatch = useAppDispatch();

  return (
    <div className={classes.searchBlock} >
      {searchValue && <img src={close} onClick={() => allEvents('')} alt="close" className={classes.imgClose} />}
    
      <input
        value={searchValue}
        onChange={(e) => allEvents(e.target.value)}
        type="text"
        className={classes.search}
        placeholder="Поиск пицц..."
      />
    </div>
  );
};
