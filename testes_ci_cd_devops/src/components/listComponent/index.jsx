import React from "react";
import './list.css'

const Index = ({apiDatas}) => {
  return (
    <>
      <section className="main_section_1">
        {apiDatas.map((item) => {
          return (
            <div key={item._id} className="div_card">
              <h3>{item.name}</h3>
            </div>
          );
        })}
      </section>
    </>
  );
};

export default Index;
