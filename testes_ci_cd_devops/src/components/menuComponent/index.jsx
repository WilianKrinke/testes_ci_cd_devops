import React from "react";
import { useDetectClickOutside } from "react-detect-click-outside";
import { Link } from 'react-router-dom'
import { ContainerMenu, IconClose, IconHamburguer } from "./styled.js";
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

        <Link to={'/'}>To Create Page</Link>
        <Link to={'/list-page'}>To List Page</Link>
      </ContainerMenu>
    </>
  );
};

export default Menu;
