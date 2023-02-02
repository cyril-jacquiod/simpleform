import "./App.css";
import { useState } from "react";
// IMPORT DU FORMULAIRE
import formResult from "./components/formResult";

function App() {
  // STATES POUR CONTENU INPUTS
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");

  // STATE QUI GERE CONTENU ET AFFICHAGE DU MESSAGE
  const [errorMessage, setErrorMessage] = useState("");
  // const [Message, setMessage] = useState("");

  return (
    <div className="formulaire">
      <h1>Create account</h1>
      <form
        onSubmit={(event) => {
          // EMPECHE RAFFRAICHISSEMENT PAGE PAR DEFAUT
          event.preventDefault();
          // SI PASSWORD DIFFERENTS ENVOYER MESSAGE
          if (password !== password2) {
            setErrorMessage("");
            alert("Vos 2 mots de passe ne sont pas identiques");
            setErrorMessage("les mots de passe ne sont pas identiques");
          } else {
            return (
              <div classname="App">
                <formResult name="value" email="value" password="value" />
              </div>
            );
          }
          // // SINON FORMULAIRE RESULT
          // <div className="formulaireResult">
          //   <form Result>
          //     <h1>Results</h1>
          //     <div>
          //       value={name}
          //       value={email}
          //       value={password2}
          //     </div>
          //     <div>
          //       <button>Edit your informations</button>
          //     </div>
          //   </form>
          //   ;
          // </div>;
        }}
      >
        <div>
          <p>Name</p>
          <input
            type="text"
            placeholder="name"
            value={name}
            onChange={(event) => {
              setName(event.target.value);
            }}
          />
        </div>
        <div>
          <p>Email</p>
          <input
            type="email"
            placeholder="email"
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />
        </div>
        <div>
          <p>Password</p>
          <input
            type="text"
            placeholder="password"
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
        </div>
        <div>
          <p>Confirm your password</p>
          <input
            type="text"
            placeholder="password"
            value={password2}
            onChange={(event) => {
              setPassword2(event.target.value);
            }}
          />
          {errorMessage && (
            <p
              style={{
                color: "red",
                fontsize: "10px",
                marginLeft: "25px",
              }}
            >
              {errorMessage}
            </p>
          )}

          {/* {Message && (
            <p style={{ fontSize: "20px", fontWeight: 500 }}>{Message}</p>
          )} */}
        </div>
        <div>
          <button type="submit">Register</button>
        </div>
      </form>
      <footer> Made with React at Le Reacteur by Cyril</footer>
    </div>
  );
}

export default App;
