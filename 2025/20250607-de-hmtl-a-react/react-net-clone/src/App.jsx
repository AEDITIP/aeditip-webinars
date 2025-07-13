import * as React from "react";
/* 
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css"; */

import NetflixMainAppContainer from "./components/NetflixMainAppContainer";
import NetFLixMainAppNotLanding from "./components/NetFLixMainAppNotLanding";
import { fakeLogin, fakeLogout } from "./fakeDB/FakeBD";

function App() {
  const [isUserLogged, setIsUserLogged] = React.useState(false);

  const login = async () => {
    const respuesta = await fakeLogin();
    console.log("respuesta login", respuesta);
    setIsUserLogged(respuesta);
  };
  const logout = async () => {
    const respuesta = await fakeLogout();
    console.log("respuesta logout", respuesta);
    setIsUserLogged(respuesta);
  };
  if (isUserLogged) return <NetflixMainAppContainer logout={logout} />;
  else return <NetFLixMainAppNotLanding login={login} />;
}

export default App;
