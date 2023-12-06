import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Input from "../../components/Input";
import AuthContext from "../../contexts/AuthContext";
import StarlightTitle from "../../assets/img/StarlightTitle.png";
import eye from "../../assets/Icons/Eye_Icon.svg";
import "./Login.scss";

export default function Login() {
  const { setToken, setUser } = useContext(AuthContext);
  const [errorMsg, setErrorMsg] = useState(false);

  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [isHidden, setIsHidden] = useState(true);

  const navigate = useNavigate();

  // ----------------------------------------handlers to control the input fields----------------------------------------------------
  const handleEmailChange = (event) => {
    setForm({
      ...form,
      email: event.target.value,
    });
    setErrorMsg(false);
  };

  const handlePasswordChange = (event) => {
    setForm({
      ...form,
      password: event.target.value,
    });
    setErrorMsg(false);
  };

  // ------------------------------------------Function to hide or show password----------------------------------------------------
  const handlehidePassword = () => {
    setIsHidden(!isHidden);
  };

  // --------------------------------Handler to submit the form and authenticate the user-------------------------------------------
  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post(`${import.meta.env.VITE_BACKEND_URL}/users/login`, form)
      .then((res) => {
        const { token } = res.data;

        if (token) {
          setToken(token);

          const loggedInUser = res.data.user;

          if (loggedInUser.admin_credentials === 1) {
            navigate("/Home");
          }
          setUser(loggedInUser);
          console.info(loggedInUser);
        }
      })
      .catch((err) => {
        console.error(err.message);
        setErrorMsg(true);
      });
  };

  // ------------------------------------------------return the component----------------------------------------------------
  return (
    <div className="login">
      <img src={StarlightTitle} alt="title" className="Logoandtitle" />
      <div className="loginContentDiv">
        <h2>Connexion</h2>
        <form action="" className="loginForm" onSubmit={handleSubmit}>
          <label htmlFor="email" className="loginEmailLabel">
            <p>Email</p>
            <Input
              placeholder="Enter your email"
              type="email"
              name="email"
              id="email"
              value={form.email}
              autoComplete="email"
              onChange={handleEmailChange}
            />
          </label>
          <label htmlFor="password" className="loginPasswordLabel">
            <p>Mot de passe</p>
            <div className="passwordInput">
              <Input
                placeholder="Enter your password"
                type={isHidden ? "password" : "text"}
                name="password"
                id="password"
                value={form.password}
                autoComplete="current-password"
                onChange={handlePasswordChange}
              />
              <button
                type="button"
                onClick={handlehidePassword}
                className="hidePasswordButton"
              >
                <img src={eye} alt="eye icon to show password" />
              </button>
            </div>
          </label>
          <button disabled={errorMsg} className="loginButton" type="submit">
            Se connecter
          </button>
          {errorMsg && <p className="error">Email ou mot de passe incorrect</p>}
        </form>
      </div>
    </div>
  );
}
