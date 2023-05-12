import React, { useEffect, useState } from "react";
import "../styles.css";
import getDatas from "../../utils/getDatasFromApi/getDatasFromApi";
import HeaderComponent from "../../components/headerComponent";
import FooterComponent from "../../components/footerComponent";
import Menu from "../../components/menuComponent/index";
import ListComponent from "../../components/listComponent";

const Index = () => {
  const [apiDatas, setapiDatas] = useState([]);
  const [loadingState, setloadingState] = useState(true);

  useEffect(() => {
    (async () => {
      const { status, datas } = await getDatas();

      if (status === 200) {
        setapiDatas(datas);
        setloadingState(false);
      }
    })();
  }, []);

  return (
    <>
      {loadingState ? (
        <h1>Loading...</h1>
      ) : (
        <>
          <Menu />
          <HeaderComponent title={"Listagem"} />;
          <main className="main_general_style">
            <ListComponent apiDatas={apiDatas} />
          </main>
          <FooterComponent />
        </>
      )}
    </>
  );
};

export default Index;
