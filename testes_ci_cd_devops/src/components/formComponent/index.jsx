import React from "react";
import { useForm } from "react-hook-form";
import TextField from "@mui/material/TextField";
import { FormLabel, Radio, RadioGroup } from "@mui/material";
import Textarea from "@mui/joy/Textarea";

const Index = () => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      nome: undefined,
      idade: undefined,
      email: undefined,
      corOlho: undefined,
      genero: "masculino",
      ativo: true,
      amigos: undefined,
    },
  });

  const handleForm = (data) => {
    console.log(data);
  };

  const handleChangeGender = (e) => {
    setValue("genero", e.target.value);
  };

  const handleChangeActive = (e) => {
    setValue("ativo", e.target.value);
  };

  return (
    <section>
      <form onSubmit={handleSubmit(handleForm)}>
        <div>
          <TextField
            type="text"
            label="Insira seu Nome"
            id="filled-hidden-label-normal"
            variant="filled"
            size="small"
            {...register("name", { required: "Nome é Obrigatório" })}
          />
          {errors.name && <p>{errors.name.message}</p>}
        </div>

        <div>
          <TextField
            type="text"
            label="Insira sua idade"
            id="filled-hidden-label-normal"
            variant="filled"
            size="small"
            {...register("age", { required: "Idade é Obrigatório" })}
          />
          {errors.age && <p>{errors.age.message}</p>}
        </div>

        <div>
          <TextField
            type="email"
            label="Insira seu E-mail"
            id="filled-hidden-label-normal"
            variant="filled"
            size="small"
            {...register("email", {
              required: "E-mail é Obrigatório",
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
            label="Insira a cor dos seus olhos ^^"
            id="filled-hidden-label-normal"
            variant="filled"
            size="small"
            {...register("eyeColor", { required: "Cor dos olhos é Obrigatório" })}
          />
          {errors.eyeColor && <p>{errors.eyeColor.message}</p>}
        </div>

        <div>
          <fieldset>
            <FormLabel>Gênero: </FormLabel>
            <RadioGroup
              defaultValue="masculino"
              name="controlled-radio-buttons-group"
              onChange={handleChangeGender}
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
                <Radio
                  value="masculino"
                  label="Masculino"
                  name="masculino"
                  id="masculino"
                />
                <label htmlFor="masculino">Masculino</label>
              </div>
              <div>
                <Radio
                  value="feminino"
                  label="Feminino"
                  name="feminino"
                  id="feminino"
                />
                <label htmlFor="feminino">Feminino</label>
              </div>
              <div>
                <Radio value="outro" label="Outro" name="outro" id="outro" />
                <label htmlFor="outro">Outro</label>
              </div>
            </RadioGroup>
          </fieldset>
        </div>

        <div>
          <fieldset>
            <FormLabel>Está Ativo: </FormLabel>
            <RadioGroup
              defaultValue={true}
              name="controlled-radio-buttons-group"
              onChange={handleChangeActive}
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
                <Radio value={true} label="true" name="true" id="true" />
                <label htmlFor="true">Ativo</label>
              </div>
              <div>
                <Radio value={false} label="false" name="false" id="false" />
                <label htmlFor="false">Não Ativo</label>
              </div>
            </RadioGroup>
          </fieldset>
        </div>

        <div style={{display: 'flex', justifyContent:'flex-start', flexDirection:'row', alignItems:'center'}}>
          <FormLabel>Amigos: </FormLabel>
          <Textarea
            placeholder="Placeholder"
            minRows={2}
            {...register("amigos")}
            sx={{
              width: '400px'
            }}
          />
        </div>

        <div>
          <input type="submit" />
        </div>
      </form>
    </section>
  );
};

export default Index;
