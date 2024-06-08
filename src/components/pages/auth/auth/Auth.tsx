import React, { memo, useState } from "react";
import LinkButton from "../../../generalComponents/button/linkButton/LinkButton";
import LanguageSelector from "../languageSelector/LanguageSelector";
import TextInput from "../../../generalComponents/input/textInput/TextInput";
import Checkbox from "../../../generalComponents/input/checkbox/Checkbox";
import Form from "../../../generalComponents/form/Form";
import "./auth.scss";
import { useDispatch } from "react-redux";
import { login } from "../../../../features/user";

const authForma = [
  {
    Component: TextInput,
    props: {
      type: "email",
      placeholder: "E-mail",
    },
    label: "email",
  },
  {
    Component: TextInput,
    props: {
      type: "password",
      placeholder: "Пароль",
    },
    label: "password",
  },
  {
    Component: Checkbox,
    props: {
      htmlId: "authCheckbox",
      labelText: "Запомнить меня",
    },
    label: "authCheckbox",
  },
];

const Auth = () => {
  const dispatch = useDispatch();
  const [authValues, setAuthValues] = useState({
    email: "",
    password: "",
    authCheckbox: false,
  });

  const handleSubmit = () => {
    const loginData = {
      email: authValues.email,
      password: authValues.password,
    };

    dispatch(login(loginData));
  };

  return (
    <div className="auth-page">
      <div className="auth">
        <img className="auth__logo" alt="Sirius Future" src="images/logo/auth.svg" />
        <div className="auth__container">
          <h1 className="auth__heading">
            Вход в Sirius Future
          </h1>
          <Form
            formData={authForma}
            submitAction={handleSubmit}
            submitButtonText="Войти"
            className="auth__form"
            setValues={setAuthValues}
          />
          <div className="auth__additions">
          <LinkButton text = "Я забыл пароль" />
          <LinkButton text = "Войти как тренер" />
          </div>
        </div>
        <div className="signup">
          <p
            className="signup__text"
          >
            Нет аккаунта?
          </p>
          <LinkButton text = "Зарегистрироваться" />
        </div>
      </div>
      <LanguageSelector />
    </div>
  );
};

export default memo(Auth);
