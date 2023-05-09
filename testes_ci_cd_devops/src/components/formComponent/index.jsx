import React from "react";
import { useForm } from "react-hook-form";
import TextField from "@mui/material/TextField";
import { FormLabel, Radio, RadioGroup } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
// import Button from "@mui/material/Button";
import Textarea from "@mui/joy/Textarea";
import "./styled.css";

const Index = () => {

  const [loading, setLoading] = React.useState(false);
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

  const handleSubmitDatas = () => {
    setLoading(true);
  }

  return (
    <section>
      <form onSubmit={handleSubmit(handleForm)} className="form_class">
        <div className="div_text_field">
          <TextField
            type="text"
            label="Insira seu Nome"
            id="filled-hidden-label-normal"
            variant="filled"
            size="small"
            {...register("name", { required: "Nome é Obrigatório" })}
          />
          {errors.name && <p>{errors.name.message}</p>}

          <TextField
            type="text"
            label="Insira sua idade"
            id="filled-hidden-label-normal"
            variant="filled"
            size="small"
            {...register("age", { required: "Idade é Obrigatório" })}
          />
          {errors.age && <p>{errors.age.message}</p>}

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

          <TextField
            type="text"
            label="Insira a cor dos seus olhos ^^"
            id="filled-hidden-label-normal"
            variant="filled"
            size="small"
            {...register("eyeColor", {
              required: "Cor dos olhos é Obrigatório",
            })}
          />
          {errors.eyeColor && <p>{errors.eyeColor.message}</p>}
        </div>

        <fieldset className="radio_group">
          <div className="div_radio_genero">
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
          </div>
          <div className="div_radio_ativo">
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
          </div>
        </fieldset>

        <div className="div_text_area">
          <FormLabel>Amigos: </FormLabel>
          <Textarea
            placeholder="Inserir amigos separados por virgula. Ex: fulano, ciclano"
            minRows={2}
            {...register("amigos")}
            sx={{
              width: "400px",
              height: "200px",
            }}
          />
        </div>

        <div>
          {/* <Button variant="contained" color="success" type='submit'>
            Enviar
          </Button> */}
          <LoadingButton
            onClick={handleSubmitDatas}
            loading={loading}
            loadingIndicator="Loading…"
            variant="outlined"
            className="button_send_satas"
          >
            <span>Send datas</span>
          </LoadingButton>
        </div>
      </form>
    </section>
  );
};

export default Index;
