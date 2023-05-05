import React, { useEffect, useState } from "react";
import getDatas from "../../utils/getDatasFromApi/getDatasFromApi";

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
          <h1>List Page</h1>
          <br />
          {apiDatas.map((item) => {
            return (
              <div key={item._id}>
                <h3>{item.name}</h3>
              </div>
            );
          })}
        </>
      )}
    </>
  );
};

export default Index;
