import React from "react";
import {useDetectClickOutside} from 'react-detect-click-outside'
import {  useDispatch, useSelector } from "react-redux";
import { ContainerMenu } from "./styled.js";
import {changeTo} from '../../features/menuState/menuStateChange.js'


const Menu = () => {
  const state = useSelector((state) => state.menuState.value);
  const dispatch = useDispatch();

  const clickOutMenu = () => {
    dispatch(changeTo(false));
  };

  const ref = useDetectClickOutside({ onTriggered: clickOutMenu });


  return (
    <>
      <ContainerMenu $isopen={state} ref={ref}>
        
      </ContainerMenu>
    </>
  );
};

export default Menu;
