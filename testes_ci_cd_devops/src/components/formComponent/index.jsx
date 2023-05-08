import React from "react";
import { useForm } from "react-hook-form";
import TextField from "@mui/material/TextField";
import { FormLabel, Radio, RadioGroup } from "@mui/material";

const Index = () => {
  const {
    register,
    handleSubmit,
    setValue,
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

  const handleChange = (e) => {
    console.log(e.target);
    setValue("gender", e.target.value);
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
            <FormLabel>Gender</FormLabel>
            <RadioGroup
              defaultValue="masculino"
              name="controlled-radio-buttons-group"
              onChange={handleChange}
              sx={{
                my: 0,
                width: "150px",
                color: "#000",
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
              }}
            >
              <div>
                <Radio value="masculino" label="Masculino" name="masculino" id="masculino"/>
                <label htmlFor="masculino">Masculino</label>
              </div>
              <div>
                <Radio value="feminino" label="Feminino" name="feminino" id="feminino"/>
                <label htmlFor="feminino">Feminino</label>
              </div>
              <div>
                <Radio value="outro" label="Outro" name="outro" id="outro"/>
                <label htmlFor="outro">Outro</label>
              </div>
            </RadioGroup>
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
