import React from "react";

const Index = () => {
  return (
    <section>
      <form action="" method="post">
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" name="name" id="name" />
        </div>

        <div>
          <label htmlFor="age">Age:</label>
          <input type="text" name="age" id="age" />
        </div>

        <div>
          <label htmlFor="email">E-mail:</label>
          <input type="text" name="email" id="email" />
        </div>

        <div>
          <label htmlFor="eyeColor">Eye Color:</label>
          <input type="text" name="eyeColor" id="eyeColor" />
        </div>

        <div>
          <fieldset>
            <legend>Genero</legend>
            <input type="radio" name="gender" id="gender1" value="masculino" />
            <label htmlFor="gender1">Masculino</label>

            <input type="radio" name="gender" id="gender2" value="feminino" />
            <label htmlFor="gender2">Feminino</label>
          </fieldset>
        </div>

        <div>
          <fieldset>
            <legend>Is Active</legend>
            <input
              type="radio"
              id="true"
              name="active"
              value={true}
              defaultChecked
            />
            <label htmlFor="true">True</label>

            <input type="radio" id="false" name="active" value={false} />
            <label htmlFor="false">False</label>
          </fieldset>
        </div>

        <div>
          <label htmlFor="amigos">Amigos: </label>
          <textarea
            name="amigos"
            id="amigos"
            cols="30"
            rows="10"
            maxLength="144"
            // resize: none css
            placeholder="Digite os amigos separados por ponto e virgula..."
          ></textarea>
        </div>

        <div>
            <button>Enviar: </button>
        </div>
      </form>
    </section>
  );
};

export default Index;
