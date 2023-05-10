import React from "react";
import { useDetectClickOutside } from "react-detect-click-outside";
import { Link } from "react-router-dom";
import {
  ContainerLinks,
  ContainerMenu,
  IconClose,
  IconHamburguer,
} from "./styled.js";
import { useState } from "react";

const Menu = () => {
  const [menuState, setmenuState] = useState(false);

  const clickOutMenu = () => {
    setmenuState(false);
  };

  const openMenu = (e) => {
    e.preventDefault();
    setmenuState(true);
  };

  const closeMenu = (e) => {
    e.preventDefault();
    setmenuState(false);
  };

  const ref = useDetectClickOutside({ onTriggered: clickOutMenu });

  return (
    <>
      <ContainerMenu $isopen={menuState} ref={ref}>
        <IconHamburguer $isopen={menuState} onClick={(e) => openMenu(e)} />
        <IconClose $isopen={!menuState} onClick={(e) => closeMenu(e)} />

        <ContainerLinks>
          <ul>
            <li>
              <Link to={"/"}>To Create Page</Link>
            </li>
            <li>
              <Link to={"/list-page"}>To List Page</Link>
            </li>
            <li>
              <Link to={"/edit-page"}>To Edit Page</Link>
            </li>
          </ul>
        </ContainerLinks>
      </ContainerMenu>
    </>
  );
};

export default Menu;
