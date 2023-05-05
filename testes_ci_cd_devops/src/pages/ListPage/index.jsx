import React, { useEffect, useState } from "react";
import '../styles.css'
import getDatas from "../../utils/getDatasFromApi/getDatasFromApi";
import HeaderComponent from "../../components/headerComponent";
import FooterComponent from "../../components/footerComponent";

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
          <HeaderComponent />
          <main className="main_general_style">
            <br />
            {apiDatas.map((item) => {
              return (
                <div key={item._id}>
                  <h3>{item.name}</h3>
                </div>
              );
            })}
          </main>
          <FooterComponent />
        </>
      )}
    </>
  );
};

export default Index;
