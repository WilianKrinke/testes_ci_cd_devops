import React from "react";
import { useForm } from "react-hook-form";
import TextField from "@mui/material/TextField";

const Index = () => {
  const {
    watch,
    register,
    handleSubmit,
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
          <TextField
            type="text"
            label="Insert your Name"
            id="filled-hidden-label-normal"
            variant="filled"
            size="small"
            {...register("name", { required: "Name required" })}
          />
          {errors.name && <p>{errors.name.message}</p>}
        </div>

        <div>
          <TextField
            type="text"
            label="Insert your Age"
            id="filled-hidden-label-normal"
            variant="filled"
            size="small"
            {...register("age", { required: "Age is required" })}
          />
          {errors.age && <p>{errors.age.message}</p>}
        </div>

        <div>
          <TextField
            type="email"
            label="Insert your E-mail"
            id="filled-hidden-label-normal"
            variant="filled"
            size="small"
            {...register("email", {
              required: "E-mail is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: "Enter a valid e-mail",
              },
            })}
          />
          {errors.email && <p>{errors.email.message}</p>}
        </div>

        <div>
          <TextField
            type="text"
            label="Insert your Eye Color"
            id="filled-hidden-label-normal"
            variant="filled"
            size="small"
            {...register("eyeColor", { required: "EyeColor is required" })}
          />
          {errors.eyeColor && <p>{errors.eyeColor.message}</p>}
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
              defaultChecked
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
