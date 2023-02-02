import "./App.css";
// import { useState } from "react";

function App() {
  return (
    <div className="formulaire">
      <h1>Create account</h1>
      <form>
        <div>
          <p>Name</p>
          <input type="text" placeholder="Name" value="Jean Dupont" />
        </div>
        <div>
          <p>Email</p>
          <input
            type="Email"
            placeholder="email"
            value="jeandupont@lereacteur.io"
          />
        </div>
        <div>
          <p>Password</p>
          <input
            type="password"
            name="password"
            placeholder="password"
            value="azerty"
          />
        </div>
        <div>
          <p>Confirm your password</p>

          <input
            type="password"
            name="password"
            placeholder="Confirm your password"
            value="azerty"
          />
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
