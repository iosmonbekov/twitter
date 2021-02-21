import React from "react";
import Header from "./Components/Header";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import Add from "./Container/Add";
import About from "./Container/About";
import Contacts from "./Container/Contacts";
import Footer from "./Components/Footer";
import HomeContainer from "./Container/HomeContainer";
import PostInfoContainer from "./Container/PostInfoContainer";

export default function App() {
    return (
        <>
            <Header />
            <div className="container">
                <Switch>
                    <Route path="/" exact component={HomeContainer} />
                    <Route path="/add" exact component={Add} />
                    <Route path="/add/:id" exact component={Add} />
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
