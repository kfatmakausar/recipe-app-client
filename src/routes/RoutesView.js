import React from "react";
import { Switch, Route } from "react-router-dom";
import {
  HomePageContainer,

} from "../containers";

const RoutesView = () => {
    return (
        <Switch>
            {/**Setting up the landing (home) page route */}
            <Route exact path="/" component={HomePageContainer} />
         
        </Switch>
    );
};

export default RoutesView;
