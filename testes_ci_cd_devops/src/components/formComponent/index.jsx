import React from "react";
import { useForm } from "react-hook-form";

const Index = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: undefined,
      age: undefined,
      email: undefined,
      eyeColor: undefined,
      gender: "masculino",
      isActive: true,
      friends: undefined,
    },
  });

  const handleForm = (data) => {
    console.log(data);
  };

  return (
    <section>
      <form onSubmit={handleSubmit(handleForm)}>
        <div>
          <label htmlFor="name">Name:</label>
          <input {...register("name")} />
        </div>

        <div>
          <label htmlFor="age">Age:</label>
          <input {...register("age")} />
        </div>

        <div>
          <label htmlFor="email">E-mail:</label>
          <input {...register("email")} />
        </div>

        <div>
          <label htmlFor="eyeColor">Eye Color:</label>
          <input {...register("eyeColor")} />
        </div>

        <div>
          <fieldset>
            <legend>Genero</legend>
            <input
              type="radio"
              name="gender"
              id="gender1"
              value={"masculino"}
              {...register("gender")}
            />
            <label htmlFor="gender1">Masculino</label>

            <input
              type="radio"
              name="gender"
              id="gender2"
              value={"feminino"}
              {...register("gender")}
            />
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
              {...register("active")}
            />
            <label htmlFor="true">True</label>

            <input
              type="radio"
              id="false"
              name="active"
              value={false}
              {...register("active")}
            />
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
            required
            // resize: none css
            placeholder="Digite os amigos separados por ponto e virgula..."
            {...register("amigos")}
          ></textarea>
        </div>

        <div>
          <input type="submit" />
        </div>
      </form>
    </section>
  );
};

export default Index;
