import React from "react";
import "./edit.css";

const Index = ({ apiDatas }) => {
  return (
    <>
      <section className="section_edit">
        {apiDatas !== undefined &&
          apiDatas.map((item) => {
            return (
              <div key={item._id} className="div_row_list">
                <div>
                  <p>{item.name}</p>
                  <p>{item.email}</p>
                </div>
                <div>
                  <button>Edit</button>
                  <button>Delete</button>
                </div>
              </div>
            );
          })}
      </section>
    </>
  );
};

export default Index;
