import React from "react";
import { useForm } from "react-hook-form";
import TextField from "@mui/material/TextField";
import { FormLabel, Radio, RadioGroup } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import Textarea from "@mui/joy/Textarea";
import "./styled.css";

const Index = () => {
  const [loading, setLoading] = React.useState(false);
  const [loadingString, setLoadingString] = React.useState("Enviar Dados");

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
    setLoading(true);
    // tempo de inserção dos dados
    setLoadingString("Dados Inseridos");
    setLoading(false);

    setTimeout(() => {
      setLoadingString("Enviar Dados");
    }, 2000);
  };

  const handleChangeGender = (e) => {
    setValue("genero", e.target.value);
  };

  const handleChangeActive = (e) => {
    setValue("ativo", e.target.value);
  };

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
            {...register("nome", { required: "Nome é Obrigatório" })}
          />
          <div className="error_div">
            {errors.nome && (
              <p className="error_message">{errors.nome.message}</p>
            )}
          </div>

          <TextField
            type="text"
            label="Insira sua idade"
            id="filled-hidden-label-normal"
            variant="filled"
            size="small"
            {...register("idade", { required: "Idade é Obrigatório" })}
          />
          <div className="error_div">
            {errors.idade && (
              <p className="error_message">{errors.idade.message}</p>
            )}
          </div>

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
                message: "Insira um e-mail válido",
              },
            })}
          />
          <div className="error_div">
            {errors.email && (
              <p className="error_message">{errors.email.message}</p>
            )}
          </div>

          <TextField
            type="text"
            label="Insira a cor dos seus olhos ^^"
            id="filled-hidden-label-normal"
            variant="filled"
            size="small"
            {...register("corOlho", {
              required: "Cor dos olhos é Obrigatório",
            })}
          />
          <div className="error_div">
            {errors.corOlho && (
              <p className="error_message">{errors.corOlho.message}</p>
            )}
          </div>
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
                <label htmlFor="masculino" className="label_pointer">
                  Masculino
                </label>
              </div>
              <div>
                <Radio
                  value="feminino"
                  label="Feminino"
                  name="feminino"
                  id="feminino"
                />
                <label htmlFor="feminino" className="label_pointer">
                  Feminino
                </label>
              </div>
              <div>
                <Radio value="outro" label="Outro" name="outro" id="outro" />
                <label htmlFor="outro" className="label_pointer">
                  Outro
                </label>
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
                <label htmlFor="true" className="label_pointer">
                  Ativo
                </label>
              </div>
              <div>
                <Radio value={false} label="false" name="false" id="false" />
                <label htmlFor="false" className="label_pointer">
                  Não Ativo
                </label>
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
          <LoadingButton
            loading={loading}
            loadingIndicator="Loading…"
            variant="outlined"
            className="button_send_datas"
            type="submit"
          >
            <span>{loadingString}</span>
          </LoadingButton>
        </div>
      </form>
    </section>
  );
};

export default Index;
