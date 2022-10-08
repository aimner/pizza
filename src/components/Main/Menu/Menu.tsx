import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import classes from "./Menu.module.scss";

enum PizzaType {
  all = 0,
  meat = 1,
  vegan = 2,
  gril = 3,
  spicy = 4,
  close = 5,
}

const menuText = ["Все", "Мясные", "Вегетарианские", "Гриль", "Острые", "Закрытые"] as const;

export const Menu: React.FunctionComponent<{}> = (props) => {
  let [active, setActive] = useState("all" as keyof typeof PizzaType);

  const navigate = useNavigate()

  const sortClick = (item: keyof typeof PizzaType): void => {
    setActive(item);
    navigate(`/items?category=${PizzaType[item]}`)
  }

  let changeClass = (property: keyof typeof PizzaType) => {
    if (active === property) {
      return `${classes.menuListItemActive}`;
    }
  };

  return (
    <ul className={classes.menuList}>
      {menuText.map((item, index) => (
        <li
          onClick={() => sortClick(PizzaType[index] as keyof typeof PizzaType)}
          className={changeClass(PizzaType[index] as keyof typeof PizzaType)}
          key={index}>
          {item}
        </li>
      ))}
    </ul>
  );
};
