import React from "react";
import { Router, IndexRoute, Route, browserHistory } from "react-router";
import Layout from "./layout.react";
import HomePage from "./pages/homePage.react";
import AboutPage from "./pages/AboutPage.react";
import ContactPage from "./pages/ContactPage.react";

const routes = (
    <Route path="/" component={Layout}>
        <IndexRoute component={HomePage} />
        <Route path="about" component={AboutPage} />
        <Route path="contact" component={ContactPage} />
    </Route>
);

export default routes;
