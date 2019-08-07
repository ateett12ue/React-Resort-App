import React from "react";
import "./App.css";
import Home from "./pages/HomeComponent";
import Rooms from "./pages/RoomsComponent";
import Error from "./pages/errorComponent";
import SingleRoom from "./pages/singleRoomComponent";

function App() {
  return (
    <>
      <Home />
      <Rooms />
      <SingleRoom />
      <Error />
    </>
  );
}

export default App;
