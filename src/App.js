import React from "react";
import Header from "./Components/Header";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./Container/Home";
import Add from "./Container/Add";
import About from "./Container/About";
import Contacts from "./Container/Contacts";
import PostInfo from "./Container/PostInfo";

export default function App() {
  return (
    <>
      <Header />
      <div className="container">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/add" exact component={Add} />
          <Route path="/about" exact component={About} />
          <Route path="/contacts" exact component={Contacts} />
          <Route path="/post/:id" exact component={PostInfo} />
          <Route path="/add/:id" exact component={Add} />
        </Switch>
      </div>
    </>
  );
}
