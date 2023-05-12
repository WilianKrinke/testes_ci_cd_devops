import React, { useEffect, useState } from "react";
import getDatas from "../../utils/getDatasFromApi/getDatasFromApi";
import HeaderComponent from "../../components/headerComponent";
import FooterComponent from "../../components/footerComponent";
import Menu from "../../components/menuComponent";
import EditComponent from "../../components/editComponent";

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
        <>
          <h1>Loading...</h1>
        </>
      ) : (
        <>
          <Menu />
          <HeaderComponent title={"Edit Page"} />
          <main className="main_general_style">
            <EditComponent apiDatas={apiDatas} />
          </main>
          <FooterComponent />
        </>
      )}
    </>
  );
};

export default Index;
