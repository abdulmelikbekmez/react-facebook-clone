import React from "react";
import "./App.css";
import Header from "./Header/Header";
import Sidebar from "./Body/Sidebar/Sidebar";
import Feed from "./Body/Feed/Feed";
import Widget from "./Body/Widget/Widget";
import Login from "./Login/Login";
import { useStateValue } from "./StateProvider";

function App() {
  const [{ user }] = useStateValue();
  return (
    <div className="app">
      {!user ? (
        <Login />
      ) : (
        <>
          <Header />
          <div className="app__body">
            <Sidebar />
            <Feed />
            <Widget />
          </div>
        </>
      )}
    </div>
  );
}

export default App;
