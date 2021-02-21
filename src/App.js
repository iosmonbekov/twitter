import React from "react";
import Header from "./Components/Header";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import About from "./Container/About";
import Contacts from "./Container/Contacts";
import Footer from "./Components/Footer";
import HomeContainer from "./Container/HomeContainer";
import PostInfoContainer from "./Container/PostInfoContainer";
import AddContainer from "./Container/AddContainer";

export default function App() {
    return (
        <>
            <Header />
            <div className="container">
                <Switch>
                    <Route path="/" exact component={HomeContainer} />
                    <Route path="/add/:id?" component={AddContainer} />
                    <Route
                        path="/post/:id"
                        exact
                        component={PostInfoContainer}
                    />
                    <Route path="/about" exact component={About} />
                    <Route path="/contacts" exact component={Contacts} />
                </Switch>
            </div>
            <Footer />
        </>
    );
}
