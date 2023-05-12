import React from "react";
import './edit.css'

const Index = ({ apiDatas }) => {
  return (
    <>
      <section>
        <table className="table_class">
          <thead>
            <tr>
              <th>Nome Completo</th>
              <th>E-mail</th>
            </tr>
          </thead>
          <tbody>
            {apiDatas !== undefined &&
              apiDatas.map((item) => {
                return (
                  <tr key={item._id}>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </section>
    </>
  );
};

export default Index;
