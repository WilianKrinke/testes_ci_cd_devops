import React, { useEffect, useState } from "react";
import HeaderComponent from "../../components/headerComponent/index";
import FooterComponent from "../../components/footerComponent/index";
import FormComponent from "../../components/formComponent/index";
import Menu from '../../components/menuComponent/index'
import "../styles.css";

const Index = () => {
  const [loadingState, setloadingState] = useState(true);

  useEffect(() => {
    (() => {
      setloadingState(false);
    })();
  }, []);

  return (
    <>
      {loadingState ? (
        <h1>Loading...</h1>
      ) : (
        <>
          <Menu />
          <HeaderComponent title={"Create Page"} />
          <main className="main_general_style">
            <FormComponent />
          </main>
          <FooterComponent />
        </>
      )}
    </>
  );
};

export default Index;
